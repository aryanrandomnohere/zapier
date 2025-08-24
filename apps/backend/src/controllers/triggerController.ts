import { PasteToReplaceActionSchema } from "../types/index.js";
import { extendedRequest } from "../types/types.js";
import { validateOrRespond } from "../utils/validateOrRespond.js";
import { prisma } from "../config/client.js";
import { Response, Request } from "express";
// export const pasteToReplaceAction = asyncHandler(
//     async (req: extendedRequest, res) => {
//       const parsedBody = validateOrRespond(
//         req.body,
//         PasteToReplaceActionSchema,
//         res,
//       );
//       const userId = req.userId;
//       if (!parsedBody || !userId) return;
//       const actionToReplace = await prisma.action.findUnique({
//         where: {
//           id: parsedBody.actionToReplaceWithId,
//         },
//       });
//       console.log("replacing data", actionToReplace);
//       if (!actionToReplace) {
//         return errorResponse({
//           res,
//           msg: "Action to paste not found",
//           status: 404,
//         });
//       }
//       const deletedAction = await prisma.action.delete({
//         where: {
//           id: parsedBody.actionId,
//         },
//       });
//       const pastedAction = await prisma.action.create({
//         data: {
//           actionId: actionToReplace.actionId,
//           optionId: actionToReplace.optionId,
//           zapId: actionToReplace.zapId,
//           sortingOrder: deletedAction.sortingOrder,
//           configuration: actionToReplace.configuration || {},
//         },
//       });
//       res
//         .status(200)
//         .json({
//           success: true,
//           msg: "Action pasted to replace",
//           stepId: pastedAction.id,
//         });
//     },
//   );

export const pasteToReplaceTrigger = async (
  req: extendedRequest,
  res: Response,
) => {
  const parsedData = validateOrRespond(
    req.body,
    PasteToReplaceActionSchema,
    res,
  );
  const userId = req.userId;
  if (!parsedData || !userId) return;
  const {
    zapId,
    actionId: triggerId,
    index,
    actionToReplaceWithId: triggerToReplaceWithId,
  } = parsedData;
  try {
    const triggerToReplace = await prisma.trigger.findUnique({
      where: {
        id: triggerToReplaceWithId,
      },
    });
    if (!triggerToReplace) return;
    const deletedTrigger = await prisma.trigger.delete({
      where: {
        id: triggerId,
      },
    });
    const pastedTrigger = await prisma.trigger.create({
      data: {
        triggerId: triggerToReplace.triggerId,
        zapId: triggerToReplace.zapId,
        configuration: triggerToReplace.configuration || {},
        optionId: triggerToReplace.optionId,
      },
    });
    res.status(200).json({
      success: true,
      msg: "Trigger pasted to replace",
      triggerId: pastedTrigger.id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      msg: "Error pasting trigger",
    });
  }
};

export const getTriggers = async (req: Request, res: Response) => {
  try {
    const triggers = await prisma.availableTriggers.findMany({
      where: {
        id: {
          not: "email",
        },
      },
      orderBy: {
        id: "desc",
      },
    });
    res.status(200).json({ items: triggers });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Database fetching error" });
  }
};
