import { RunTrigger } from "@repo/apps";
import { prisma } from "@repo/db";
import { Kafka } from "kafkajs";
const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: ["localhost:9092"],
});

async function main() {
  const producer = kafka.producer();
  producer.connect();
  while (1) {
    const pollingTriggers = await prisma.trigger.findMany({
      where: {
        published: true,
        optionType: "polling",
        OR: [
          { lastPolledAt: null },
          {
            lastPolledAt: {
              lt: new Date(Date.now() - 1 * 60 * 1000),
            },
          },
        ],
      },
      take: 10,
      include: {
        userConnection: true,
        type: true,
      },
    });
    if (pollingTriggers.length != 0)
      for (const trigger of pollingTriggers) {
        try {
          const record = await RunTrigger(trigger, "polling");
          console.log(record);
          if (!record) {
            console.log("No new record polled");
            await prisma.trigger.update({
              where: { id: trigger.id },
              data: { lastPolledAt: new Date() },
            });
            continue;
          }
          // console.log(record)
          const zapRun = await prisma.zapRun.create({
            data: {
              zapId: trigger.zapId,
              metaData: record,
              status: "PENDING",
            },
          });
          await producer.send({
            topic: "zapier-events",
            messages: [
              {
                value: JSON.stringify({
                  zapRunId: zapRun.id,
                  stage: 1,
                  payload: record,
                }),
              },
            ],
          });
          await prisma.trigger.update({
            where: { id: trigger.id },
            data: { lastPolledAt: new Date() },
          });
        } catch (err) {
          console.error("Error polling trigger", trigger.id, err);
        }
      }
    const pendingRows = await prisma.zapRunOutbox.findMany({
      take: 10,
    });
    if (pendingRows.length > 0) {
      const produced = await producer.send({
        topic: "zapier-events",
        messages: pendingRows.map((r: any) => {
          return {
            value: JSON.stringify({ zapRunId: r.zapRunId, stage: 1 }),
          };
        }),
      });
      if (produced.length > 0) console.log("Added to kafka", produced);
      const deletedZapRun = await prisma.zapRunOutbox.deleteMany({
        where: {
          id: {
            in: pendingRows.map((r) => r.id),
          },
        },
      });
      if (deletedZapRun.count > 0) console.log("Deleted", deletedZapRun);
    }
  }
}
main();
