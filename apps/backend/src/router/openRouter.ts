import { prisma } from "@repo/db";
import { Router } from "express";
import asyncHandler from "../utils/asyncFunction.js";
import { getServices } from "../controllers/openController.js";

const openRouter = Router();

openRouter.get("/getservices",asyncHandler(getServices));

export default openRouter;
