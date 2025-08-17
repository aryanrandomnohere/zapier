import { Router } from "express";
import {
  CreateFolder,
  DeleteFolder,
  GetFolders,
  RenameFolder,
} from "../controllers/folderController.js";
import asyncHandler from "../utils/asyncFunction.js";
import authMiddleware from "../Middleware/authMiddleware.js";

const folderRouter = Router();
folderRouter.post("/create", authMiddleware, asyncHandler(CreateFolder));
folderRouter.get("/", authMiddleware, asyncHandler(GetFolders));
folderRouter.put("/rename", authMiddleware, asyncHandler(RenameFolder));
folderRouter.delete("/", authMiddleware, asyncHandler(DeleteFolder));
export { folderRouter };
