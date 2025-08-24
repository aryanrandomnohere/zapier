import express from "express";
import {
  getTriggers,
  pasteToReplaceTrigger,
} from "../controllers/triggerController.js";
import authMiddleware from "../Middleware/authMiddleware.js";
import asyncHandler from "../utils/asyncFunction.js";
const triggerRouter = express.Router();

triggerRouter.get("/available", asyncHandler(getTriggers));
triggerRouter.post(
  "/paste-to-replace",
  authMiddleware,
  asyncHandler(pasteToReplaceTrigger),
);

export default triggerRouter;
