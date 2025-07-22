import express from "express";
import { AuthMiddleware } from "../Middleware/AuthMiddleware.js";
import { prisma } from "../config/client.js";
const actionRouter = express.Router();

actionRouter.get("/available", async (req, res) => {
  const actions = await prisma.availableActions.findMany();
  res.status(200).json({ items: actions });
});

export default actionRouter;
