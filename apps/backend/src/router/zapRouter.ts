import express from "express";
import asyncHandler from "../utils/asyncFunction.js";
import {
  createDraft,
  getZapHistory,
  getZaps,
  updateTrigger,
  updateAction,
  dublicateZap,
  stopZap,
  startZap,
  publishZap,
  getRecordsById,
  loadCreateState,
  zapNotes,
  getUniqueZap,
  selectRecord,
  saveNotes,
  renameZap,
  moveZapToFolder,
  deleteZap,
  getTrash,
} from "../controllers/zapController.js";

const zapRouter = express.Router();

zapRouter.get("/", asyncHandler(getZaps));
zapRouter.post("/draft", asyncHandler(createDraft));
zapRouter.get("/zap-history/:zapId", asyncHandler(getZapHistory));
zapRouter.post("/updatetrigger/:zapId", asyncHandler(updateTrigger));
zapRouter.post("/updateaction/:zapId", asyncHandler(updateAction));
zapRouter.post("/dublicate", asyncHandler(dublicateZap));
zapRouter.put("/stop/:zapId", asyncHandler(stopZap));
zapRouter.put("/start/:zapId", asyncHandler(startZap));
zapRouter.post("/publish", asyncHandler(publishZap));
zapRouter.get("/records/:zapId/:optionId", asyncHandler(getRecordsById));
zapRouter.get("/loadzap/:zapId", asyncHandler(loadCreateState));
zapRouter.get("/:zapId/notes", asyncHandler(zapNotes));
zapRouter.get("/:userId/:zapId", asyncHandler(getUniqueZap));
zapRouter.post("/selectRecord", asyncHandler(selectRecord));
zapRouter.post("/:zapId/notes", asyncHandler(saveNotes));
zapRouter.put("/rename/:zapId", asyncHandler(renameZap));
zapRouter.put("/move", asyncHandler(moveZapToFolder));
zapRouter.delete("/:zapId", asyncHandler(deleteZap));
zapRouter.get("/trash", asyncHandler(getTrash));

export { zapRouter };
