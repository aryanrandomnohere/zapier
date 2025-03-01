import {prisma} from "@repo/prismaclient"
import express, {Request, Response} from "express"

const app = express()
app.use(express.json())
app.post("/hooks/catch/:userId/:zapId",(req:Request, res:Response)=>{
const userId = req.params.userId;
const zapId = req.params.zapId;
const body = req.body;
console.log(body,zapId);
prisma.$transaction(async tx => {
const zapRun = await tx.zapRun.create({
    data:{
        zapId:zapId,
        metaData: body
    }
})
await tx.zapRunOutbox.create({
    data:{
        zapRunId:zapRun.id
    }
})

})
res.json({msg:"Webhook triggered"})
})

app.listen(3000)