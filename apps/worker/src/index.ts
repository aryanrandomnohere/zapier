import { prisma } from "@repo/db";
import dotenv from "dotenv";
dotenv.config();
import { JsonObject } from "@repo/db/generated/client/runtime/library";
import { Kafka } from "kafkajs";
import Parser from "@repo/apps/src/parser.js";
import { Field } from "@repo/types";
import {sendEmail} from "@repo/apps/src/index.js";
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
      //console.log({
      //   partition,
      //   value: message.value?.toString(),
      //   offset: message.offset,
      // });
      if (!message.value?.toString()) {
        return;
      }
      const parsedValue = await JSON.parse(message.value.toString());
      const zapRunId = parsedValue.zapRunId;
      const stage = parsedValue.stage;

      const zapRunDetails = await prisma.zapRun.findUnique({
        where: {
          id: zapRunId,
        },
        select: {
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
        console.log("Action Does not exists", currentAction);
        return;
      }
      if (currentAction?.actionDetails?.id === "email") {
        // console.log(currentAction)
        //@ts-ignore
        console.log(currentAction.configuration.optionConfiguration, "option id", currentAction.optionId)
         console.log((currentAction.configuration as JsonObject)
        ?.optionConfiguration[currentAction.optionId])
        const fields = (currentAction.configuration as JsonObject)
          ?.optionConfiguration[currentAction.optionId].configurationStep
          .fields;

        const toField = fields.find(
          (x: Field) => String(x.fieldLabel).toLowerCase() === "to",
        );
        const subjectField = fields.find(
          (x: Field) => String(x.fieldLabel).toLowerCase() === "subject",
        );
        const bodyField = fields.find(
          (x: Field) =>
            String(x.fieldLabel).toLowerCase() === "body (html or plain)",
        );

        const to = toField?.fieldValue ?? null;
        const subject = subjectField?.fieldValue ?? null;
        const body = bodyField?.fieldValue ?? null;

        if (!to || !subject || !body) {
        } else {
          const parsedTo = Parser(to, "{{", "}}", zapRunDetails?.metaData);
          const parsedSubject = Parser(
            subject,
            "{{",
            "}}",
            zapRunDetails?.metaData,
          );
          const parsedBody = Parser(body, "{{", "}}", zapRunDetails?.metaData);
          console.log(parsedTo, parsedSubject, parsedBody);
          await sendEmail({ parsedTo, parsedBody, parsedSubject });
        }
      }

      if (zapRunDetails?.zap.actions.length !== stage) {
        await producer.send({
          topic: TOPIC_NAME,
          messages: [{ value: JSON.stringify({ zapRunId, stage: stage + 1 }) }],
        });
      } else {
        console.log("All Actions Ran zap run complete");
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
