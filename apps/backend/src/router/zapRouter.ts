import express, { Request, Response } from "express";
import { prisma } from "../config/client.js";
import {
  ActionCreationSchema,
  SetRecordSchema,
  TriggerCreateSchema,
  ZapCreateSchema,
} from "../types/index.js";
import { JsonObject } from "@repo/db/generated/client/runtime/library";
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
    console.log(userId);

    if (!userId) {
      console.log("UserId does not exists error");
      res.status(400).json({ msg: "UserId does not exists", success: false });
      return;
    }
    const allZaps = await prisma.zap.findMany();

    const emptyZap = allZaps.find((zap) => zap.triggerId === null);
    let response;
    if (!emptyZap) {
      response = await prisma.zap.create({
        data: {
          userId,
        },
        select: {
          id: true,
        },
      });
    } else {
      response = { id: emptyZap.id };
    }
    res.status(200).json({ zapId: response.id });
    return;
  } catch (e) {
    console.error(e);
    res.json(400).json({ msg: "Error while creating a draft" });
    return;
  }
});

zapRouter.get("/zap-history/:zapId", async (req: Request, res: Response) => {
  try {
    const zapId = parseInt(req.params.zapId);

    const history = await prisma.zapChangeHistory.findMany({
      where: { zapId },
      include: {
        createdBy: true, // fetch related user
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json(history);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch zap history" });
  }
});
zapRouter.post(
  "/updatetrigger/:zapId",
  async (req: extendedRequest, res: Response) => {
    try {
      const zapId = Number(req.params.zapId);
      const parsedBody = TriggerCreateSchema.safeParse(req.body);
      console.log(req.body, zapId);
      if (!parsedBody.success) {
        res.status(400).json({
          msg: "Invalid Input",
          success: false,
        });
        return;
      }
      if (!parsedBody.data.userId) {
        res.status(400).json({ msg: "UserId does not exist", success: false });
        return;
      }
      const existingTrigger = await prisma.trigger.findUnique({
        where: {
          zapId,
        },
        select: {
          id: true,
        },
      });
      if (existingTrigger) {
        const updatedTrigger = await prisma.trigger.update({
          where: {
            id: existingTrigger.id,
          },
          data: {
            triggerId: parsedBody.data.triggerId,
            configuration: parsedBody.data.triggerConfiguration,
            optionId: (parsedBody.data.triggerConfiguration as JsonObject)
            .fields[0].fieldValue
          },
        });
        res.status(200).json({
          msg: "Trigger updated",
          success: true,
          stepId: updatedTrigger.id,
        });
        return;
      }
      let response;
      if (
        (parsedBody.data.triggerConfiguration as JsonObject).fields[0]
          .fieldValue != ""
      )
        response = await prisma.trigger.create({
          data: {
            zapId,
            optionId: (parsedBody.data.triggerConfiguration as JsonObject)
              .fields[0].fieldValue,
            triggerId: parsedBody.data.triggerId,
            configuration: parsedBody.data.triggerConfiguration,
          },
          select: {
            id: true,
          },
        });
      else
        response = await prisma.trigger.create({
          data: {
            zapId,
            triggerId: parsedBody.data.triggerId,
            configuration: parsedBody.data.triggerConfiguration,
          },
        });

      await prisma.zap.update({
        where: {
          id: zapId,
        },
        data: {
          triggerId: response.id,
        },
      });
      await prisma.zapChangeHistory.create({
        data: {
          zapId: Number(zapId), // integer
          type: "ZAP_CREATED", 
          message: "Zap Created",
          createdById: parsedBody.data.userId, 
        },
      });
      res
        .status(200)
        .json({ msg: "Trigger Created", success: true, stepId: response.id });
    } catch (e) {
      console.error(e);
      res.status(200).json({ msg: "something went wrong", success: false });
    }
  },
);

zapRouter.post(
  "/updateaction/:zapId",
  async (req: extendedRequest, res: Response) => {
    try {
      const zapId = Number(req.params.zapId);
      const parsedBody = ActionCreationSchema.safeParse(req.body);
      // console.log(req.body, zapId);
      if (!parsedBody.success) {
        res.status(400).json({
          msg: "Invalid Input",
          success: false,
        });
        return;
      }
      if (!parsedBody.data.userId) {
        res.status(400).json({ msg: "UserId does not exist", success: false });
        return;
      }
      const existingAction = await prisma.action.findUnique({
        where: {
          zapId_sortingOrder: {
            zapId,
            sortingOrder: parsedBody.data.sortingOrder,
          },
        },
        select: {
          id: true,
        },
      });

      if (existingAction) {
        console.log(
          (parsedBody.data.actionConfiguration as JsonObject).fields[0]
            .fieldValue,
        );
        const updatedAction = await prisma.action.update({
          where: {
            id: existingAction.id,
          },
          data: {
            actionId: parsedBody.data.actionId,
            optionId: (parsedBody.data.actionConfiguration as JsonObject)
              .fields[0].fieldValue,
            configuration: parsedBody.data.actionConfiguration,
          },
        });
        res.status(200).json({
          msg: "Action updated",
          success: true,
          stepId: updatedAction.id,
        });
        return;
      }
      const newAction = await prisma.action.create({
        data: {
          zapId,
          actionId: parsedBody.data.actionId,
          optionId: (parsedBody.data.actionConfiguration as JsonObject)
            .fields[0].fieldValue,
          configuration: parsedBody.data.actionConfiguration,
          sortingOrder: parsedBody.data.sortingOrder,
        },
        select: {
          id: true,
        },
      });

      res
        .status(200)
        .json({ msg: "Action Created", success: true, stepId: newAction.id });
    } catch (e) {
      console.error(e);
      res.status(400).json({ msg: "something went wrong", success: false });
    }
  },
);

zapRouter.put("/stop/:zapId",async(req, res)=>{
  const zapId = Number(req.params.zapId)
  try{
  await prisma.zap.update({
    where:{
      id:zapId
    },
    data:{
      published:false
    }
  })
  await prisma.zapChangeHistory.create({
    data: {
      zapId,
      type:"ZAP_TURNED_OFF",
      message: "Zap turned off",
      createdById:Number(req.body.userId),
    },
  });
  res.status(200).json({success:true, msg:"Zap stoped successfully"})
  }catch(e){
    console.log("Error",e)
    res.status(400).json({msg:e, success:false})
  }
})

zapRouter.put("/start/:zapId",async(req, res)=>{
  const zapId = Number(req.params.zapId);
    const isPublisedAtleastOnce = await prisma.zapChangeHistory.findFirst({
      where:{
        zapId,
        type:"ZAP_TURNED_ON"
      }
    })
    if(isPublisedAtleastOnce){
      await prisma.zap.update({
        where:{
          id:zapId
        },
        data:{
          published:true
        }
      })
      await prisma.zapChangeHistory.create({
        data: {
          zapId,
          type:"ZAP_TURNED_ON",
          message: "Zap turned on",
          createdById: Number(req.body.userId),
        },
      });
      res.status(200).json({success:true, msg:"Zap published successfully"})
      return;
    }
    res.status(200).json({success:false, msg:"Zap is not complete "})
    return;

})

zapRouter.post("/publish", async (req: extendedRequest, res: Response) => {
  const body = req.body;
  const parsedData = ZapCreateSchema.safeParse(body);
  const userId = parsedData.data?.userId;
  if (!parsedData.success || !userId) {
    console.log(userId, req.body);
    res.status(411).json({
      msg: "Incorrect inputs",
    });
    return;
  }
  console.log(parsedData.data);

  const zapId = await prisma.$transaction(async (tx) => {
    const zap = await tx.zap.update({
      where: {
        id: parsedData.data.zapId,
      },
      data: {
        userId,
        triggerId: "",
        published: true,
      },
    });

    parsedData.data.actions.map(async (x, index) => {
      const existingAction = await prisma.action.findUnique({
        where: {
          zapId_sortingOrder: {
            zapId: parsedData.data.zapId,
            sortingOrder: index + 1,
          },
        },
        select: {
          id: true,
        },
      });
      if (existingAction) {
        prisma.action.update({
          where: {
            id: existingAction.id,
          },
          data: {
            actionId: x.actionId,
            configuration: x.configuration,
          },
        });
      } else
        await prisma.action.create({
          data: {
            zapId: parsedData.data.zapId,
            actionId: x.actionId,
            configuration: x.configuration,
            sortingOrder: index + 1,
          },
          select: {
            id: true,
          },
        });
    });

    const { id } = await tx.trigger.update({
      where: {
        zapId: parsedData.data.zapId,
      },
      data: {
        triggerId: parsedData.data.triggerId,
        configuration: parsedData.data.triggerConfiguration,
        zapId: zap.id,
        published: true,
      },
    });
    await tx.zap.update({
      where: {
        id: parsedData.data.zapId,
      },
      data: {
        triggerId: id,
      },
    });
    return zap.id;
  });
  await prisma.zapChangeHistory.create({
    data: {
      zapId,
      type:"ZAP_TURNED_ON",
      message: "Zap turned on",
      createdById: userId,
    },
  });

  res.status(200).json({
    zapId,
  });
});

zapRouter.get(
  "/records/:zapId/:optionId",
  async (req: Request, res: Response) => {
    try {
      const optionId = req.params.optionId;
      const zapId = Number(req.params.zapId);
      const records = await prisma.record.findMany({
        where: {
          zapId,
          triggerOptionId: optionId,
        },
      });
      res.status(200).json({ msg: "Found Records", records, success: true });
    } catch (e) {
      console.error(e);
      res.status(400).json({ msg: "Unable to find Record", success: false });
    }
  },
);

zapRouter.get("/loadzap/:zapId", async (req: Request, res: Response) => {
  try {
    const zapId = Number(req.params.zapId);
    let finalZap = [];
    const trigger = await prisma.trigger.findUnique({
      where: {
        zapId: zapId,
      },
      select: {
        id: true,
        configuration: true,
        triggerId: true,
      },
    });
    if (trigger) {
      const availableTrigger = await prisma.availableTriggers.findUnique({
        where: {
          id: trigger?.triggerId,
        },
        select: {
          id: true,
          name: true,
          imagePath: true,
          appId: true,
          type: true,
          metadata: true,
        },
      });
      if (!availableTrigger) {
        res.status(400).json({ msg: "Internal Server Error" });
        return;
      }
      const Trigger = {
        ...availableTrigger,
        stepId: trigger.id,
        metadata: trigger.configuration,
      };
      finalZap.push(Trigger);
    } else {
      finalZap.push({ id: "", name: "", imagePath: "", metadata: null });
    }

    const actions = await prisma.action.findMany({
      where: {
        zapId,
      },
      orderBy: {
        sortingOrder: "asc",
      },
    });
    await Promise.all(
      actions.map(async (action) => {
        const availableAction = await prisma.availableActions.findUnique({
          where: {
            id: action.actionId,
          },
        });
        if (availableAction) {
          const Action = {
            ...availableAction, // clone properties
            stepId: action.id, // add new stepId
            metadata: action.configuration, // override metadata
          };

          finalZap.push(Action);
        }
      }),
    );
    const zap = await prisma.zap.findUnique({
      where: {
        id: zapId,
      },
      select: {
        RecordId: true,
        trigger: {
          select: {
            optionId: true,
          },
        },
      },
    });
    const records = await prisma.record.findMany({
      where: {
        zapId: zapId,
        triggerOptionId: zap?.trigger?.optionId,
      },
    });
    res.status(200).json({
      msg: "Your Zap",
      records,
      finalZap,
      RecordId: zap?.RecordId,
      success: true,
    });
    return;
  } catch (e) {
    console.error(e);
    res.status(400).json({ msg: "Failed to fetch", success: false });
  }
});

zapRouter.get("/togglezap/:zapId", async (req: Request, res: Response) => {
  const zapId = Number(req.params.zapId);
});

zapRouter.get("/:zapId/notes", async (req, res) => {
  try {
    const { zapId } = req.params;

    // Fetch zap notes
    const zap = await prisma.zap.findUnique({
      where: { id: Number(zapId) },
      select: {
        notes: true,
        trigger: { select: { id: true, note: true } },
        actions: { select: { id: true, note: true } },
      },
    });

    if (!zap) return res.status(404).json({ error: "Zap not found" });
    const stepNotes = [
      { stepId: zap.trigger?.id, note: zap.trigger?.note },
      ...zap.actions.map((a) => ({ stepId: a.id, note: a.note })),
    ];
    console.log(
      stepNotes.map((step) => {
        return { stepId: step.stepId, note: step.note };
      }),
    );
    res.json({
      zapNotes: zap.notes,
      stepNotes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

zapRouter.get(
  "/:userId/:zapId",
  async (req: extendedRequest, res: Response) => {
    const zapId = Number(req.params.zapId);
    const zaps = await prisma.zap.findUnique({
      where: {
        id: zapId,
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

zapRouter.post("/selectRecord", async (req, res) => {
  const parsedBody = SetRecordSchema.safeParse(req.body);
  if (!parsedBody.success) {
    const msg = "Invalid Inputs";
    console.log(msg);
    res.status(400).json({ msg, success: false });
    return;
  }
  await prisma.zap.update({
    where: {
      id: parsedBody.data.zapId,
    },
    data: {
      RecordId: parsedBody.data.recordId,
    },
  });
  res.status(200).json({ success: true });
});

zapRouter.post("/:zapId/notes", async (req, res) => {
  try {
    const { zapId } = req.params;
    const { zapNotes, stepNotes, userId } = req.body;

    // 1. Handle Zap-level note (ZAP_NOTE)
    if (zapNotes !== undefined) {
      // Check if zap-level note already exists
      const existingZapNote = await prisma.zapNote.findFirst({
        where: {
          zapId: Number(zapId),
          type: "ZAP_NOTE",
        },
      });

      if (existingZapNote) {
        await prisma.zapNote.update({
          where: { id: existingZapNote.id },
          data: { content: zapNotes, updatedAt: new Date() },
        });
      } else {
        await prisma.zapNote.create({
          data: {
            zapId: Number(zapId),
            type: "ZAP_NOTE",
            content: zapNotes,
            createdById: Number(userId),
          },
        });
      }
    }

    // 2. Handle Step-level notes (STEP_NOTE)
    if (Array.isArray(stepNotes)) {
      await Promise.all(
        stepNotes.map(async (step, index) => {
          let existingStepNote;

          if (index === 0) {
            existingStepNote = await prisma.zapNote.findFirst({
              where: {
                zapId: Number(zapId),
                triggerId: step.stepId,
                type: "STEP_NOTE",
              },
            });
          } else {
            existingStepNote = await prisma.zapNote.findFirst({
              where: {
                zapId: Number(zapId),
                stepId: step.stepId,
                type: "STEP_NOTE",
              },
            });
          }

          if (existingStepNote) {
            await prisma.zapNote.update({
              where: { id: existingStepNote.id },
              data: { content: step.note, updatedAt: new Date() },
            });
          } else {
            const isTrigger = await prisma.trigger.findUnique({
              where: {
                id: step.stepId,
              },
            });
            if (isTrigger)
              await prisma.zapNote.create({
                data: {
                  zapId: Number(zapId),
                  triggerId: step.stepId,
                  type: "STEP_NOTE",
                  content: step.note || "",
                  createdById: userId,
                },
              });
            else
              await prisma.zapNote.create({
                data: {
                  zapId: Number(zapId),
                  stepId: step.stepId,
                  type: "STEP_NOTE",
                  content: step.note || "",
                  createdById: userId,
                },
              });
          }
        }),
      );
    }

    res.json({ success: true, message: "Notes saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save notes" });
  }
});

export { zapRouter };
