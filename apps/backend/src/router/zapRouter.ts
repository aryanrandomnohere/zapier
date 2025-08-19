import express, { Request, Response } from "express";
import { prisma } from "../config/client.js";
import {
  ActionCreationSchema,
  SetRecordSchema,
  TriggerCreateSchema,
  ZapCreateSchema,
} from "../types/index.js";
//@ts-ignore
import { JsonObject } from "@repo/db/generated/client/runtime/library";
import errorResponse from "../utils/errorResponse.js";
import successResponse from "../utils/successResponse.js";
import asyncHandler from "../utils/asyncFunction.js";
import { validateOrRespond } from "../utils/validateOrRespond.js";
import { extendedRequest } from "../types/types.js";
import {
  createDraft,
  getZapHistory,
  getZaps,
  updateTrigger,
  updateAction,
  dublicateZap,
} from "../controllers/zapController.js";

const zapRouter = express.Router();

zapRouter.get("/", getZaps);
zapRouter.post("/draft", createDraft);
zapRouter.get("/zap-history/:zapId", getZapHistory);
zapRouter.post("/updatetrigger/:zapId", updateTrigger);
zapRouter.post("/updateaction/:zapId", updateAction);
zapRouter.post("/dublicate", dublicateZap);
zapRouter.put(
  "/stop/:zapId",
  asyncHandler(async (req: extendedRequest, res: Response) => {
    const zapId = Number(req.params.zapId);
    const userId = req.userId;
    if (!userId) {
      res.status(400).json({ msg: "UserId does not exist", success: false });
      return;
    }
    try {
      await prisma.zap.update({
        where: {
          id: zapId,
        },
        data: {
          published: false,
        },
      });
      await prisma.zapChangeHistory.create({
        data: {
          zapId,
          type: "ZAP_TURNED_OFF",
          message: "Zap turned off",
          createdById: Number(req.userId),
        },
      });
      res.status(200).json({ success: true, msg: "Zap stoped successfully" });
    } catch (e) {
      console.log("Error", e);
      res.status(400).json({ msg: e, success: false });
    }
  }),
);

zapRouter.put(
  "/start/:zapId",
  asyncHandler(async (req: extendedRequest, res: Response) => {
    const userId = req.userId;
    const zapId = Number(req.params.zapId);
    const isPublisedAtleastOnce = await prisma.zapChangeHistory.findFirst({
      where: {
        zapId,
        type: "ZAP_TURNED_ON",
      },
    });
    if (isPublisedAtleastOnce) {
      await prisma.zap.update({
        where: {
          id: zapId,
        },
        data: {
          published: true,
        },
      });
      await prisma.zapChangeHistory.create({
        data: {
          zapId,
          type: "ZAP_TURNED_ON",
          message: "Zap turned on",
          createdById: Number(req.body.userId),
        },
      });
      res
        .status(200)
        .json({ success: true, msg: "Zap published successfully" });
      return;
    }
    res.status(200).json({ success: false, msg: "Zap is not complete " });
    return;
  }),
);

zapRouter.post(
  "/publish",
  asyncHandler(async (req: extendedRequest, res: Response) => {
    const body = req.body;
    const parsedData = validateOrRespond(body, ZapCreateSchema, res);
    if (!parsedData) return;
    const userId = req.userId;
    const alreadyPublishedZap = await prisma.zap.findUnique({
      where: {
        id: parsedData.zapId,
        published: true,
      },
    });
    if (!alreadyPublishedZap) {
      await prisma.zapChangeHistory.create({
        data: {
          zapId: parsedData.zapId,
          type: "ZAP_TURNED_ON",
          message: "Zap turned on",
          createdById: Number(userId),
        },
      });
    }

    const zapId = await prisma.$transaction(async (tx) => {
      const zap = await tx.zap.update({
        where: {
          id: parsedData.zapId,
        },
        data: {
          userId,
          triggerId: "",
          published: true,
        },
      });

      parsedData.actions.map(async (x, index) => {
        const existingAction = await tx.action.findUnique({
          where: {
            id: parsedData.actions[index].stepId,
          },
          select: {
            id: true,
          },
        });
        if (existingAction) {
          await tx.action.update({
            where: {
              id: existingAction.id,
            },
            data: {
              actionId: x.actionId,
              configuration: x.configuration,
            },
          });
        } else
          await tx.action.create({
            data: {
              zapId: parsedData.zapId,
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
          zapId: parsedData.zapId,
        },
        data: {
          triggerId: parsedData.triggerId,
          configuration: parsedData.triggerConfiguration,
          zapId: zap.id,
          published: true,
        },
      });
      await tx.zap.update({
        where: {
          id: parsedData.zapId,
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
  }),
);

zapRouter.get(
  "/records/:zapId/:optionId",
  asyncHandler(async (req: Request, res: Response) => {
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
  }),
);

zapRouter.get(
  "/loadzap/:zapId",
  asyncHandler(async (req: extendedRequest, res: Response) => {
    try {
      const zapId = Number(req.params.zapId);
      const userId = Number(req.userId);
      if (!userId || !zapId) {
        res.status(400).json({ msg: "Invalid Inputs", success: false });
        return;
      }
      const requiredZap = await prisma.zap.findUnique({
        where: {
          id: zapId,
        },
        select: {
          userId: true,
          triggerId: true,
        },
      });
      if (requiredZap?.userId !== userId) {
        res
          .status(200)
          .json({
            msg: "You are not authorized to access this zap",
            success: false,
            unauthorized: true,
          });
        return;
      }
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
        include: {
          stepTests: true,
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
              dataOut: action.stepTests?.dataOut || null,
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
  }),
);

zapRouter.get(
  "/:zapId/notes",
  asyncHandler(async (req, res) => {
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
  }),
);

zapRouter.get(
  "/:userId/:zapId",
  asyncHandler(async (req: extendedRequest, res: Response) => {
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
  }),
);

zapRouter.post(
  "/selectRecord",
  asyncHandler(async (req, res) => {
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
  }),
);

zapRouter.post(
  "/:zapId/notes",
  asyncHandler(async (req, res) => {
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
  }),
);

zapRouter.put(
  "/rename/:zapId",
  asyncHandler(async (req, res) => {
    const zapId = Number(req.params.zapId);
    if (!req.body?.newName || !zapId) {
      return errorResponse({ res, msg: "Empty Inputs" });
    }
    await prisma.zap.update({
      where: {
        id: zapId,
      },
      data: {
        name: req.body.newName,
      },
    });
    successResponse({ msg: "Renamed Zap Successfully", res });
  }),
);

zapRouter.put(
  "/move",
  asyncHandler(async (req, res) => {
    const folderId = Number(req.body.folderId);
    const zapId = Number(req.body.zapId);
    if (!folderId || !zapId)
      return errorResponse({ res, msg: "Folder ID and Zap ID are required" });
    const zap = await prisma.zap.findUnique({
      where: { id: zapId },
      select: {
        folderId: true,
        deleted: true,
      },
    });
    if (!zap) return errorResponse({ res, msg: "Zap not found" });
    if (zap.folderId === folderId) {
      if (zap.deleted === true) {
        await prisma.zap.update({
          where: { id: zapId },
          data: { deleted: false },
        });
        return successResponse({
          msg: "Zap Shifted From Trash Successfully",
          res,
        });
      }
      return errorResponse({ res, msg: "Zap already in this folder" });
    }
    await prisma.zap.update({
      where: { id: zapId },
      data: { folderId, deleted: false },
    });
    successResponse({ msg: "Moved Zap Successfully", res });
  }),
);

zapRouter.delete(
  "/:zapId",
  asyncHandler(async (req: extendedRequest, res) => {
    const zapId = Number(req.params.zapId);
    if (!zapId) return errorResponse({ res, msg: "Zap ID is required" });
    await prisma.zap.update({
      where: { id: zapId },
      data: {
        published: false,
        deleted: true,
        deletedAt: new Date(),
        deletedBy: Number(req.userId),
      },
    });
    successResponse({ msg: "Zap deleted successfully", res });
  }),
);

zapRouter.delete(
  "/:zapId",
  asyncHandler(async (req: extendedRequest, res) => {
    const zapId = Number(req.params.zapId);
    if (!zapId) return errorResponse({ res, msg: "Zap ID is required" });

    await prisma.zap.update({
      where: { id: zapId },
      data: {
        deleted: true,
        deletedAt: new Date(),
        deletedBy: Number(req.userId),
      },
    });

    successResponse({ msg: "Zap deleted successfully", res });
  }),
);

zapRouter.get(
  "/trash",
  asyncHandler(async (req: extendedRequest, res) => {
    const userId = Number(req.userId);

    const zaps = await prisma.zap.findMany({
      where: {
        deleted: true,
        deletedBy: userId,
        deletedAt: { not: null },
      },
      include: {
        actions: {
          include: {
            actionDetails: true,
          },
        },
        user: {
          select: {
            firstname: true,
            lastname: true,
          },
        },
        folder: {
          select: {
            name: true,
            id: true,
            type: true,
            parentId: true,
            userId: true,
            createdAt: true,
            updatedAt: true,
            user: {
              select: {
                firstname: true,
                lastname: true,
              },
            },
          },
        },
        trigger: {
          include: {
            type: true,
          },
        },
      },
    });

    successResponse({ msg: "Zaps fetched successfully", res, data: zaps });
  }),
);

export { zapRouter };
