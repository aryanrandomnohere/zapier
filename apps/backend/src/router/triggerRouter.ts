import express from "express";
import { prisma } from "../config/client.js";
import { pasteToReplaceTrigger } from "../controllers/triggerController.js";
import authMiddleware from "../Middleware/authMiddleware.js";
const triggerRouter = express.Router();

triggerRouter.get("/available", async (req, res) => {
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
});

triggerRouter.post("/paste-to-replace", authMiddleware, pasteToReplaceTrigger);

export default triggerRouter;
