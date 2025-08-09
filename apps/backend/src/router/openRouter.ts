import { prisma } from "@repo/db";
import { Router } from "express";
import successResponse from "../utils/successResponse.js";

const openRouter = Router();

openRouter.get("/getservices", async (req, res) => {
  const actions = await prisma.availableActions.findMany({
    orderBy: {
      id: "asc",
    },
    select: {
      id: true,
      name: true,
      imagePath: true,
      type: true,
    },
  });
  const triggers = await prisma.availableTriggers.findMany({
    orderBy: {
      id: "asc",
    },
    select: {
      id: true,
      name: true,
      imagePath: true,
      type: true,
    },
  });
  const updatedActions = actions.map((action) => ({
    id: action.id,
    name: action.name + " Action",
    imagePath: action.imagePath,
    type: action.type,
  }));
  const updatedTriggers = triggers.map((trigger) => ({
    id: trigger.id,
    name: trigger.name + " Trigger",
    imagePath: trigger.imagePath,
    type: trigger.type,
  }));

  const finalServices = [...updatedActions, ...updatedTriggers];
  successResponse({
    res,
    data: {
      services: finalServices,
    },
  });
});

export default openRouter;
