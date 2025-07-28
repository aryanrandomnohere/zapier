import { prisma } from "@repo/db";
import dotenv from "dotenv";
dotenv.config();
import { JsonObject } from "@repo/db/generated/client/runtime/library";
import { Kafka } from "kafkajs";
import { Field } from "@repo/types";
import { RunAction } from "@repo/apps/src/index.js";
const TOPIC_NAME = "zapier-events";
const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: ["localhost:9092"],
});

async function main() {
  const consumer = kafka.consumer({ groupId: "main-worker" });
  await consumer.connect();
  const producer = kafka.producer();
  producer.connect();
  await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });
  consumer.run({
    autoCommit: false,
    eachMessage: async ({ topic, partition, message }) => {
      if (!message.value?.toString()) {
        return;
      }
      const parsedValue = await JSON.parse(message.value.toString());
      const zapRunId = parsedValue.zapRunId;
      const stage = parsedValue.stage;

      const zapRunDetails = await prisma.zapRun.update({
        where: {
          id: zapRunId,
        },
        data: {
          status: "RUNNING",
        },
        select: {
          id: true,
          zap: {
            include: {
              actions: {
                include: {
                  actionDetails: {
                    select: {
                      id: true,
                    },
                  },
                },
              },
            },
          },
          metaData: true,
        },
      });
      const currentAction = zapRunDetails?.zap.actions.find((x) => {
        console.log(
          Number(x.sortingOrder) === Number(stage),
          x.sortingOrder,
          stage,
        );
        return Number(x.sortingOrder) === Number(stage);
      });
      if (!currentAction) {
        await prisma.zapRun.update({
          where: {
            id: zapRunDetails?.id,
          },
          data: {
            status: "FAILED",
            failureReason: `Action does not exixts`,
            completedAt: new Date(),
          },
        });

        return;
      }
      const RunDetails = await RunAction(
        currentAction,
        zapRunDetails?.metaData,
      );
      if (RunDetails?.success) {
        if (zapRunDetails?.zap.actions.length !== stage) {
          await producer.send({
            topic: TOPIC_NAME,
            messages: [
              { value: JSON.stringify({ zapRunId, stage: stage + 1 }) },
            ],
          });
        } else {
          await prisma.zapRun.update({
            where: {
              id: zapRunDetails?.id,
            },
            data: {
              status: "SUCCESS",
              completedAt: new Date(), // mark finish time
            },
          });
          console.log("All Actions Ran zap run complete");
        }
      } else {
        console.log("Zap Run failed");
        await prisma.zapRun.update({
          where: {
            id: zapRunDetails?.id,
          },
          data: {
            status: "FAILED",
            failureReason: RunDetails?.error || "Failed",
            failedActionId: currentAction.id,
            completedAt: new Date(),
          },
        });
      }

      console.log("Processing Done");

      console.log(String(Number(message.offset) + 1));
      await consumer.commitOffsets([
        {
          topic: TOPIC_NAME,
          partition,
          offset: String(Number(message.offset) + 1),
        },
      ]);
    },
  });
}
main();
