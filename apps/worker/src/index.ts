import { Kafka } from "kafkajs";
const TOPIC_NAME = "zapier-events";
const kafka = new Kafka({
  clientId: "outbox-processor",
  brokers: ["localhost:9092"],
});

async function main() {
  const consumer = kafka.consumer({ groupId: "main-worker" });
  await consumer.connect();
  await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true });
  consumer.run({
    autoCommit: false,
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        value: message.value?.toString(),
        offset: message.offset,
      });
      await new Promise((r) => setTimeout(r, 5000));
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
