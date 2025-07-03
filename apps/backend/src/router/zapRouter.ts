import express, { Request, Response } from "express";
import { prisma } from "../client.js";
import { AuthMiddleware } from "../Middleware/AuthMiddleware.js";
import { TriggerCreateSchema, ZapCreateSchema } from "../types/index.js";
const zapRouter = express.Router();
interface extendedRequest extends Request {
  userId?: number;
}
zapRouter.get("/", async (req: extendedRequest, res: Response) => {
  const userId = req.body.userId;
  const zaps = await prisma.zap.findMany({
    where: {
      userId: userId,
    },
    include: {
      actions: {
        include: {
          actionDetails: true,
        },
      },
      trigger: {
        include: {
          type: true,
        },
      },
    },
  });
  res.status(200).json({
    zaps,
    msg: "Tonight the music seem so loud",
  });
});

zapRouter.post("/draft", async (req: extendedRequest, res: Response) => {
  try {
    const userId = req.body.userId;
    if (!userId) return;
    const response = await prisma.zap.create({
      data: {
        userId,
      },
      select: {
        id: true,
      },
    });
    res.status(200).json({ zapId: response.id });
  } catch (e) {
    console.error(e);
    res.json(400).json({ msg: "Error while creating a draft" });
  }
});
zapRouter.post("/updatetrigger/:zapId",async (req:extendedRequest, res:Response)=>{
  try{
    const zapId = Number(req.params.zapId)
    const parsedBody = TriggerCreateSchema.safeParse(req.body)
    console.log(req.body, zapId)
    if(!parsedBody.success){
      res.status(200).json({
        msg:"Invalid Input",
        success:false
      }) 
      return;
    }
    if(!parsedBody.data.userId){
      res.status(200).json({msg:"UserId does not exist", success:false})
      return;
    }
    const existingTrigger  = await prisma.trigger.findUnique({
      where:{
        zapId,
      },
      select:{
        id:true
      }
    })
    if(existingTrigger){
      prisma.trigger.update({
        where:{
          id:existingTrigger.id,
        },
        data:{
          triggerId:parsedBody.data.triggerId,
          configuration:parsedBody.data.triggerConfiguration,
        }
      })
      res.status(200).json({msg:"Trigger updated",
      success:true
      })
      return;
    }
    const {id} = await prisma.trigger.create(
      {
        data:{
          zapId,
          triggerId:parsedBody.data.triggerId,
          configuration:parsedBody.data.triggerConfiguration,
        },
        select:{
          id:true
        }
      }
    )

    await prisma.zap.update({
      where: {
        id:zapId
      },
      data:{
      triggerId:id,
      }
    })
    res.status(400).json({msg:"Something went wrong", success:true})
  }catch(e){
    console.error(e);
    res.status(200).json({msg:"something went wrong", success:false})
  }
})

zapRouter.post(
  "/publish",
  AuthMiddleware,
  async (req: extendedRequest, res: Response) => {
    const body = req.body;
    const userId = req.userId;
    const parsedData = ZapCreateSchema.safeParse(body);
    console.log(parsedData);
    if (!parsedData.success || !userId) {
      console.log(req.body);
      res.status(411).json({
        msg: "Incorrect inputs",
      });
      return;
    }

    const zapId = await prisma.$transaction(async (tx) => {
      const zap = await tx.zap.create({
        data: {
          userId,
          triggerId: "",
          actions: {
            create: parsedData.data.actions.map((x, index) => ({
              actionId: x.actionId,
              configuration: x.configuration || {},
              sortingOrder: index,
            })),
          },
        },
      });

      const trigger = await tx.trigger.create({
        data: {
          triggerId: parsedData.data.triggerId,
          configuration: parsedData.data.triggerConfiguration,
          zapId: zap.id,
        },
      });
      await tx.zap.update({
        where: {
          id: zap.id,
        },
        data: {
          triggerId: trigger.id,
        },
      });
      return zap.id;
    });
    res.status(200).json({
      zapId,
    });
  },
);

zapRouter.get(
  "/:zapId",
  AuthMiddleware,
  async (req: extendedRequest, res: Response) => {
    const id = req.userId;
    const zapId = Number(req.params.zapId);
    const zaps = await prisma.zap.findUnique({
      where: {
        id: zapId,
        userId: id,
      },
      include: {
        actions: {
          include: {
            actionDetails: true,
          },
        },
        trigger: {
          include: {
            type: true,
          },
        },
      },
    });
    res.status(200).json({
      zaps,
      msg: "Tonight the music seem so loud",
    });
  },
);

zapRouter.get("/records/:zapId/:optionId",async (req:Request,res:Response)=>{
try{
  const optionId = req.params.optionId;
const zapId = Number(req.params.zapId);
const records = await  prisma.record.findMany({
  where:{
    zapId,
    triggerOptionId:optionId
  }
})
res.status(200).json({msg:"Found Records",records, success:true})
}catch(e){
  console.error(e)
  res.status(400).json({msg:"Unable to find Record", success:false})
}
})

export { zapRouter };
