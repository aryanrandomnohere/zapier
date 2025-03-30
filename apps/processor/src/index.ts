import {prisma} from "@repo/db"
import {Kafka} from "kafkajs"
const kafka = new Kafka({
    clientId:'outbox-processor',
    brokers:['localhost:9092'] 
})


   async function main(){
   const producer = kafka.producer()
   producer.connect()
    while(1) {
    const pendingRows = await prisma.zapRunOutbox.findMany({
        take: 10
    })
    producer.send({
        topic:"zapier-events",
        messages: pendingRows.map((r:any)=> {return {value:r.zapRunId}})
    })
    await prisma.zapRunOutbox.deleteMany({
        where:{
            id:{
                in:pendingRows.map((r)=>r.id)
            }
        }
    })
} 
 
}
main()