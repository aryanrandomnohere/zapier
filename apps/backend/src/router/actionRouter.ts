import express from "express";
import { prisma } from "../config/client.js";
import {
  dublicateAction,
  deleteAction,
  insertAction,
  pasteAction,
  pasteToReplaceAction,
  testAction,
} from "../controllers/actionController.js";
import authMiddleware from "../Middleware/authMiddleware.js";
const actionRouter = express.Router();

actionRouter.get("/available", async (req, res) => {
  const actions = await prisma.availableActions.findMany({
    orderBy: {
      id: "asc",
    },
  });

  res.status(200).json({ items: actions });
});
actionRouter.put("/insert", authMiddleware, insertAction);
actionRouter.post("/dublicate", authMiddleware, dublicateAction);
actionRouter.post("/paste", authMiddleware, pasteAction);
actionRouter.post("/paste-to-replace", authMiddleware, pasteToReplaceAction);
actionRouter.delete("/delete/:actionId", authMiddleware, deleteAction);
actionRouter.post("/test", authMiddleware, testAction);

export default actionRouter;
