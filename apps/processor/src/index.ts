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
    const pendingRows = await prisma.zapRunOutbox.findMany({
      take: 10,
    });
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
main();
