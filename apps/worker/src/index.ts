import { prisma } from "@repo/db";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();
import { Kafka } from "kafkajs";
import { Field } from "@repo/types";
import { RunAction } from "@repo/apps/src/index.js";
const TOPIC_NAME = "zapier-events";
// const kafka = new Kafka({
//   clientId: "outbox-processor",
//   brokers: ["localhost:9092"],
// });
const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID,
  brokers: [process.env.KAFKA_BROKER_URL!],
  ssl: {
    rejectUnauthorized: true,
    ca: [fs.readFileSync(process.env.KAFKA_SSL_CA_PATH!, "utf-8")],
    key: fs.readFileSync(process.env.KAFKA_SSL_KEY_PATH!, "utf-8"),
    cert: fs.readFileSync(process.env.KAFKA_SSL_CERT_PATH!, "utf-8"),
  },
  sasl: undefined, // If later you add SASL, we will update here
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
                      serviceType: true,
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
          stage
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
      console.log(currentAction, zapRunDetails.metaData);
      const RunDetails = await RunAction(
        currentAction,
        zapRunDetails?.metaData
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
