import { PrismaClient } from "@prisma/client";
import express, {Request, Response} from "express"

const prisma = new PrismaClient()
const app = express()

app.post("/hooks/catch/:userId/:zapId",(req:Request, res:Response)=>{
const userId = req.params.userId;
const zapId = req.params.zapId;
prisma.z
})