import { prisma } from "../config/client.js";
import {
  DublicateActionSchema,
  InsertActionSchema,
  PasteActionSchema,
  PasteToReplaceActionSchema,
  testActionSchema,
} from "../types/index.js";
import asyncHandler from "../utils/asyncFunction.js";
import { validateOrRespond } from "../utils/validateOrRespond.js";
import { extendedRequest } from "../types/types.js";
import successResponse from "../utils/successResponse.js";
import errorResponse from "../utils/errorResponse.js";
import { RunAction } from "@repo/apps";

export const insertAction = asyncHandler(async (req: extendedRequest, res) => {
  const parsedBody = validateOrRespond(req.body, InsertActionSchema, res);
  const userId = req.userId;
  if (!parsedBody || !userId) return;
  const existingAction = await prisma.action.findFirst({
    where: {
      zapId: parsedBody.zapId,
      sortingOrder: parsedBody.order,
    },
  });
  if (existingAction) {
    await prisma.action.updateMany({
      where: {
        zapId: parsedBody.zapId,
        sortingOrder: { gte: parsedBody.order },
      },
      data: {
        sortingOrder: { increment: 1 },
      },
    });
  }

  const newInsertedAction = await prisma.action.create({
    data: {
      actionId: parsedBody.actionId,
      optionId: parsedBody.actionConfiguration.fields[0].fieldValue,
      zapId: parsedBody.zapId,
      sortingOrder: parsedBody.order,
      configuration: parsedBody.actionConfiguration,
    },
  });
  res.status(200).json({
    success: true,
    msg: "Action inserted",
    stepId: newInsertedAction.id,
  });
});

export const dublicateAction = asyncHandler(
  async (req: extendedRequest, res) => {
    const parsedBody = validateOrRespond(req.body, DublicateActionSchema, res);
    const userId = req.userId;
    if (!parsedBody || !userId) return;
    const action = await prisma.action.findUnique({
      where: {
        id: parsedBody.dublicateId,
      },
    });
    if (!action) {
      return errorResponse({
        res,
        msg: "Action to dublicate not found",
        status: 404,
      });
    }
    await prisma.action.updateMany({
      where: {
        zapId: parsedBody.zapId,
        sortingOrder: {
          gt: action.sortingOrder,
        },
      },
      data: {
        sortingOrder: {
          increment: 1,
        },
      },
    });
    const dublicatedAction = await prisma.action.create({
      data: {
        actionId: action.actionId,
        optionId: action.optionId,
        zapId: parsedBody.zapId,
        sortingOrder: action.sortingOrder + 1,
        configuration: action.configuration || {},
      },
    });
    console.log(dublicateAction, action);
    successResponse({
      res,
      msg: "Action dublicated",
      data: { stepId: dublicatedAction.id },
    });
  },
);

export const pasteAction = asyncHandler(async (req: extendedRequest, res) => {
  const parsedBody = validateOrRespond(req.body, PasteActionSchema, res);
  const userId = req.userId;
  if (!parsedBody || !userId) return;
  const action = await prisma.action.findUnique({
    where: {
      id: parsedBody.actionId,
    },
  });
  if (!action) {
    return errorResponse({
      res,
      msg: "Action to paste not found",
      status: 404,
    });
  }
  await prisma.action.updateMany({
    where: {
      zapId: parsedBody.zapId,
      sortingOrder: {
        gt: parsedBody.index,
      },
    },
    data: {
      sortingOrder: {
        increment: 1,
      },
    },
  });
  const pastedAction = await prisma.action.create({
    data: {
      actionId: action.actionId,
      optionId: action.optionId,
      zapId: parsedBody.zapId,
      sortingOrder: parsedBody.index,
      configuration: action.configuration || {},
    },
  });
  res
    .status(200)
    .json({ success: true, msg: "Action pasted", stepId: pastedAction.id });
});

export const pasteToReplaceAction = asyncHandler(
  async (req: extendedRequest, res) => {
    const parsedBody = validateOrRespond(
      req.body,
      PasteToReplaceActionSchema,
      res,
    );
    const userId = req.userId;
    if (!parsedBody || !userId) return;

    const actionToReplace = await prisma.action.findUnique({
      where: {
        id: parsedBody.actionToReplaceWithId,
      },
    });
    console.log("replacing data", actionToReplace);
    if (!actionToReplace) {
      return errorResponse({
        res,
        msg: "Action to paste not found",
        status: 404,
      });
    }
    const deletedAction = await prisma.action.delete({
      where: {
        id: parsedBody.actionId,
      },
    });
    const pastedAction = await prisma.action.create({
      data: {
        actionId: actionToReplace.actionId,
        optionId: actionToReplace.optionId,
        zapId: actionToReplace.zapId,
        sortingOrder: deletedAction.sortingOrder,
        configuration: actionToReplace.configuration || {},
      },
    });
    res.status(200).json({
      success: true,
      msg: "Action pasted to replace",
      stepId: pastedAction.id,
    });
  },
);

export const deleteAction = asyncHandler(async (req: extendedRequest, res) => {
  const { actionId } = req.params;
  const userId = req.userId;
  if (!actionId || !userId) return;
  const action = await prisma.action.findUnique({
    where: {
      id: actionId,
    },
  });
  console.log("Aciton Found", action);
  const deletedAction = await prisma.$transaction(async (tx) => {
    await tx.actionStepTest.deleteMany({
      where: { actionId },
    });
    await tx.zapNote.deleteMany({
      where: { stepId: actionId },
    });
    await tx.zapRun.updateMany({
      where: { failedActionId: actionId },
      data: { failedActionId: null },
    });

    const deleted = await tx.action.delete({
      where: { id: actionId },
    });

    await tx.action.updateMany({
      where: {
        zapId: deleted.zapId,
        sortingOrder: { gt: deleted.sortingOrder },
      },
      data: {
        sortingOrder: { decrement: 1 },
      },
    });

    return deleted;
  });
  res.status(200).json({ success: true, msg: "Action deleted" });
});

export const testAction = asyncHandler(async (req: extendedRequest, res) => {
  const parsedBody = validateOrRespond(req.body, testActionSchema, res);
  if (!parsedBody) return;
  const currentAction = await prisma.action.findFirst({
    where: {
      id: parsedBody.actionId,
    },
    include: {
      actionDetails: true,
    },
  });
  if (!currentAction) {
    return errorResponse({ res, msg: "Action not found", status: 404 });
  }
  const currentZap = await prisma.zap.findUnique({
    where: {
      id: currentAction?.zapId,
    },
  });
  if (!currentZap) {
    return errorResponse({ res, msg: "Zap not found", status: 404 });
  }

  let currentRecord = null;
  if (currentZap.RecordId) {
    currentRecord = await prisma.record.findUnique({
      where: {
        id: currentZap.RecordId,
      },
    });
    if (!currentRecord || !currentRecord?.JsonData) {
      return errorResponse({ res, msg: "Record not found", status: 404 });
    }
  }
  const { success, error, dataOut } = await RunAction(
    currentAction,
    currentRecord?.JsonData,
  );
  if (success) {
    await prisma.actionStepTest.upsert({
      where: {
        actionId: currentAction.id,
      },
      update: {
        dataOut: dataOut || {},
      },
      create: {
        actionId: currentAction.id,
        dataOut: dataOut || {},
      },
    });
  } else {
    errorResponse({ res, msg: error || "Action Test Failed", status: 400 });
  }
  if (success) {
    res.status(200).json({
      success: true,
      msg: "Action Tested Successfully",
      dataOut: dataOut || {},
      sortingOrder: currentAction.sortingOrder,
    });
  }
});
