import express from "express";
import {
  deleteTrigger,
  getTriggers,
} from "../controllers/triggerController.js";
import authMiddleware from "../Middleware/authMiddleware.js";
import asyncHandler from "../utils/asyncFunction.js";
const triggerRouter = express.Router();

triggerRouter.get("/available", asyncHandler(getTriggers));
triggerRouter.delete("/delete",authMiddleware, asyncHandler(deleteTrigger))
// triggerRouter.post(
//   "/paste-to-replace",
//   authMiddleware,
//   asyncHandler(pasteToReplaceTrigger),
// );

export default triggerRouter;
