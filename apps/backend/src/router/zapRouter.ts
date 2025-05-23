import express,{Request,Response} from "express"
import { prisma } from "../client.js"
import { AuthMiddleware } from "../Middleware/AuthMiddleware.js"
import { ZapCreateSchema } from "../types/index.js"
const zapRouter = express.Router()
interface extendedRequest extends Request {
    userId?:number
}
zapRouter.get("/",AuthMiddleware,async (req:extendedRequest,res:Response)=>{
    const id = req.userId;
    const zaps = await prisma.zap.findMany({
    where:{
        userId:id
    },
    include:{
        actions:{
           include:{
            actionDetails:true
           }
        },
        trigger:{
            include:{
                type:true
            }
        }
    }
    })
    res.status(200).json({
        zaps,
        msg:"Tonight the music seem so loud"
    })
})
zapRouter.post("/",AuthMiddleware,async (req:extendedRequest,res:Response)=>{
    const body  = req.body;
    const userId = req.userId;
    const parsedData = ZapCreateSchema.safeParse(body);
    if(!parsedData.success || !userId) {
        res.status(411).json({
            msg:"Incorrect inputs"
        })
    return
    }
 const zapId = await prisma.$transaction(async tx =>{
    const zap = await tx.zap.create({
        data:{
            userId,
            triggerId:"", 
            triggerMetadata:parsedData.data.triggerMetadata,
            actions:{
                create: parsedData.data.actions.map((x,index)=>({
                actionId:x.actionId,
                sortingOrder: index
                })) 
            }
        }
    })    
    const trigger = await tx.trigger.create({
        data:{
            triggerId:parsedData.data.triggerId,
            zapId: zap.id
        }
    });
    await tx.zap.update({
        where:{
            id:zap.id
        },
        data:{
            triggerId:trigger.id
        }
    })
    return zap.id;
})
res.status(200).json({
    zapId
})
})

zapRouter.get("/:zapId",AuthMiddleware, async (req:extendedRequest,res:Response)=>{
    const id = req.userId;
    const zapId = req.params.zapId
    const zaps = await prisma.zap.findMany({
    where:{
        id:zapId,
        userId:id
    },
    include:{
        actions:{
           include:{
            actionDetails:true
           }
        },
        trigger:{
            include:{
                type:true
            }
        }
    }
    })
   res.status(200).json({
    zaps,
    msg:"Tonight the music seem so loud"
})
})


export {zapRouter}