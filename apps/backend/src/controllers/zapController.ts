import { prisma } from "@repo/db";
import { Response } from "express";
import { extendedRequest } from "../types/types.js";
import asyncHandler from "../utils/asyncFunction.js";
import errorResponse from "../utils/errorResponse.js";
import { ActionCreationSchema, TriggerCreateSchema } from "../types/index.js";
import { validateOrRespond } from "../utils/validateOrRespond.js";
import { itemStepMetaData } from "@repo/types";
import successResponse from "../utils/successResponse.js";

export const getZaps = asyncHandler(
  async (req: extendedRequest, res: Response) => {
    const userId = req.userId;
    const zaps = await prisma.zap.findMany({
      where: {
        userId: Number(userId),
        deleted: false,
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
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json({
      zaps,
      msg: "Tonight the music seem so loud",
    });
  },
);

export const createDraft = asyncHandler(
  async (req: extendedRequest, res: Response) => {
    try {
      const userId = Number(req.userId);
      let folderId = Number(req.body?.folderId);
      if (!folderId) {
        const userFolder = await prisma.user.findFirst({
          where: {
            id: Number(userId),
          },
          select: {
            Folder: true,
          },
        });
        folderId = userFolder?.Folder[0]?.id || 0;
      }
      if (!folderId) {
        errorResponse({ res, msg: "Internal Server Error" });
        return;
      }
      const allZaps = await prisma.zap.findMany({
        where: {
          folderId,
          deleted: false,
          userId: Number(userId),
        },
      });

      const emptyZap = allZaps.find((zap) => zap.triggerId === null);
      let response;
      if (!emptyZap) {
        response = await prisma.zap.create({
          data: {
            userId,
            folderId,
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
  },
);

export const getZapHistory = asyncHandler(
  async (req: extendedRequest, res: Response) => {
    try {
      const zapId = parseInt(req.params.zapId);

      const history = await prisma.zapChangeHistory.findMany({
        where: { zapId },
        include: {
          createdBy: true,
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
  },
);

export const updateTrigger = asyncHandler(
  async (req: extendedRequest, res: Response) => {
    try {
      const zapId = Number(req.params.zapId);
      const parsedBody = validateOrRespond(req.body, TriggerCreateSchema, res);
      if (!parsedBody) return;
      const userId = req.userId;
      const existingTrigger = await prisma.trigger.findUnique({
        where: {
          zapId,
        },
        select: {
          id: true,
        },
      });
      if (existingTrigger) {
        //@ts-ignore
        console.log(
          (
            parsedBody?.triggerConfiguration as itemStepMetaData
          )?.fields[0]?.options.find(
            (option: any) =>
              option.id ===
              (parsedBody.triggerConfiguration as itemStepMetaData)?.fields[0]
                .fieldValue,
          )?.type || "",
        );
        const updatedTrigger = await prisma.trigger.update({
          where: {
            id: existingTrigger.id,
          },
          data: {
            triggerId: parsedBody.triggerId,
            configuration: parsedBody.triggerConfiguration,
            optionId:
              (parsedBody.triggerConfiguration as itemStepMetaData).fields[0]
                ?.fieldValue || "",
            // @ts-ignore
            optionType:
              (
                parsedBody?.triggerConfiguration as itemStepMetaData
              )?.fields[0]?.options.find(
                (option: any) =>
                  option.id ===
                  (parsedBody.triggerConfiguration as itemStepMetaData)
                    ?.fields[0].fieldValue,
              )?.type || "",
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
        (parsedBody.triggerConfiguration as itemStepMetaData).fields[0]
          ?.fieldValue != ""
      )
        response = await prisma.trigger.create({
          data: {
            zapId,
            optionId:
              (parsedBody.triggerConfiguration as itemStepMetaData).fields[0]
                ?.fieldValue || "",
            triggerId: parsedBody.triggerId,
            configuration: parsedBody.triggerConfiguration,
            // @ts-ignore
            optionType:
              (
                parsedBody?.triggerConfiguration as itemStepMetaData
              )?.fields[0]?.options.find(
                (option: any) =>
                  option.id ===
                  (parsedBody.triggerConfiguration as itemStepMetaData)
                    ?.fields[0].fieldValue,
              )?.type || "",
          },
          select: {
            id: true,
          },
        });
      else
        response = await prisma.trigger.create({
          data: {
            zapId,
            triggerId: parsedBody.triggerId,
            configuration: parsedBody.triggerConfiguration,
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
          createdById: Number(userId),
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

export const updateAction = asyncHandler(
  async (req: extendedRequest, res: Response) => {
    try {
      const zapId = Number(req.params.zapId);
      const parsedBody = validateOrRespond(req.body, ActionCreationSchema, res);
      if (!parsedBody) return;
      console.log(parsedBody);
      const existingAction = await prisma.action.findFirst({
        where: {
          zapId,
          sortingOrder: parsedBody.sortingOrder,
        },
        select: {
          id: true,
        },
      });

      if (existingAction) {
        console.log(
          (parsedBody?.actionConfiguration as itemStepMetaData).fields[0]
            .fieldValue || "",
        );
        if (
          !(parsedBody?.actionConfiguration as itemStepMetaData).fields[0]
            .fieldValue
        ) {
          errorResponse({ res, msg: "Option ID is required" });
          return;
        }
        const updatedAction = await prisma.action.update({
          where: {
            id: existingAction.id,
          },
          data: {
            actionId: parsedBody?.actionId,
            optionId:
              (parsedBody?.actionConfiguration as itemStepMetaData).fields[0]
                .fieldValue || "",
            configuration: parsedBody?.actionConfiguration,
          },
        });
        res.status(200).json({
          msg: "Action updated",
          success: true,
          stepId: updatedAction.id,
        });
        return;
      }
      console.log("Creating new action");
      const newAction = await prisma.action.create({
        data: {
          zapId,
          actionId: parsedBody.actionId,
          optionId:
            (parsedBody.actionConfiguration as itemStepMetaData).fields[0]
              .fieldValue || "",
          configuration: parsedBody.actionConfiguration,
          sortingOrder: parsedBody.sortingOrder,
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

export const dublicateZap = asyncHandler(
  async (req: extendedRequest, res: Response) => {
    try {
      const zapId = Number(req.body.zapId);
      if (!zapId) {
        errorResponse({ res, msg: "Zap ID is required" });
        return;
      }
      const zap = await prisma.zap.findUnique({
        where: {
          id: zapId,
        },
        include: {
          actions: {
            include: {
              actionDetails: true,
            },
          },
          trigger: true,
        },
      });
      if (!zap) {
        errorResponse({ res, msg: "Zap not found" });
        return;
      }
      const newZap = await prisma.$transaction(async (tx) => {
        const newZap = await tx.zap.create({
          data: {
            userId: zap.userId,
            folderId: zap.folderId,
            name: "(Copy) " + zap.name,
            published: false,
            actions: {
              create: zap.actions.map((action) => ({
                actionId: action.actionId,
                optionId: action.optionId,
                configuration: action.configuration || {},
                sortingOrder: action.sortingOrder,
              })),
            },
          },
        });
        const newTrigger = await tx.trigger.create({
          data: {
            zapId: newZap.id,
            triggerId: zap.trigger?.triggerId || "",
            configuration: zap.trigger?.configuration || {},
            optionId: zap.trigger?.optionId || "",
            optionType: zap.trigger?.optionType || "",
            lastPolledAt: new Date(),
            published: false,
          },
        });

        await tx.zap.update({
          where: {
            id: newZap.id,
          },
          data: {
            triggerId: newTrigger.id,
          },
        });

        await tx.zapChangeHistory.create({
          data: {
            zapId: newZap.id,
            type: "ZAP_CREATED",
            message: "Zap Created",
            createdById: zap.userId,
          },
        });
        return newZap;
      });
      successResponse({
        res,
        data: { zapId: newZap.id },
        msg: "Zap dublicated successfully",
      });
    } catch (e) {
      console.error(e);
      res.status(400).json({ msg: "something went wrong", success: false });
    }
  },
);
