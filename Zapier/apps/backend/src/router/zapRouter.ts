import express,{Request,Response} from "express"
import { prisma } from "../client"
const zapRouter = express.Router()
zapRouter.get("getzaps",(req:Request,res:Response)=>{

})


export {zapRouter}