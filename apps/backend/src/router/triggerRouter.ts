import express from "express"
import { prisma} from "../client.js"
const triggerRouter = express.Router()

triggerRouter.get("/available",async (req,res)=>{
   try{
    const triggers = await prisma.availableTriggers.findMany()
    res.status(200).json({items:triggers})
}catch(error){
   console.log(error)
   res.status(400).json({error:"Database fetching error"})
}
})

export default triggerRouter;