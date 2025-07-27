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
        res.status(200).json({ msg: "UserId does not exist", success: false });
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
        console.log(
          (parsedBody.data.triggerConfiguration as JsonObject).fields[0]
            .fieldValue,
        );
        prisma.trigger.update({
          where: {
            id: existingTrigger.id,
          },
          data: {
            triggerId: parsedBody.data.triggerId,
            configuration: parsedBody.data.triggerConfiguration,
          },
        });
        res.status(200).json({ msg: "Trigger updated", success: true });
        return;
      }
      console.log(
        (parsedBody.data.triggerConfiguration as JsonObject).fields[0]
          .fieldValue,
      );
      const { id } = await prisma.trigger.create({
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

      await prisma.zap.update({
        where: {
          id: zapId,
        },
        data: {
          triggerId: id,
        },
      });
      res.status(200).json({ msg: "Trigger Created", success: true });
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
        await prisma.action.update({
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
        res.status(200).json({ msg: "Action updated", success: true });
        return;
      }
      await prisma.action.create({
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

      res.status(200).json({ msg: "Action Created", success: true });
    } catch (e) {
      console.error(e);
      res.status(400).json({ msg: "something went wrong", success: false });
    }
  },
);

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
      availableTrigger.metadata = trigger.configuration;
      finalZap.push(availableTrigger);
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
          availableAction.metadata = action.configuration;
          finalZap.push(availableAction);
          console.log(finalZap);
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

zapRouter.get(
  "/:userId/:zapId",
  async (req: extendedRequest, res: Response) => {
    const id = Number(req.params.userId);
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

export { zapRouter };
