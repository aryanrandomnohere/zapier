import { prisma } from "../config/client.js";
import { Request, Response } from "express";
import successResponse from "../utils/successResponse.js";
import errorResponse from "../utils/errorResponse.js";
import {
  createFolderSchema,
  deleteFolderSchema,
  folderRenameSchema,
} from "../types/index.js";
import { extendedRequest } from "../types/types.js";
import { validateOrRespond } from "../utils/validateOrRespond.js";

export async function CreateFolder(req: extendedRequest, res: Response) {
  try {
    const parsed = validateOrRespond(req.body, createFolderSchema, res);
    if (!parsed) return;
    const { name, type, parentId } = parsed;

    const userId = Number(req.userId);
    console.log(userId);
    if (type === "subfolder" && parentId) {
      const folder = await prisma.folder.create({
        data: { name, parentId: parentId, userId },
      });
      if (folder)
        successResponse({
          res,
          msg: "Folder created successfully",
          data: folder,
        });
      else errorResponse({ res, msg: "Failed to create folder" });
    } else {
      console.log("root");
      const folder = await prisma.folder.create({
        data: { name, userId },
      });
      if (folder)
        successResponse({
          res,
          msg: "Folder created successfully",
          data: folder,
        });
      else errorResponse({ res, msg: "Failed to create folder" });
    }
  } catch (error) {
    errorResponse({ res, msg: "Failed to create folder", errors: error });
  }
}

export async function GetFolders(req: extendedRequest, res: Response) {
  try {
    const userId = Number(req.userId);
    const folders = await prisma.folder.findMany({
      where: {
        userId,
      },
      orderBy: {
        id: "desc",
      },
      include: {
        user: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            createdAt: true,
          },
        },
        zaps: {
          select: {
            id: true,
          },
        },
      },
    });
    console.log(folders);
    successResponse({
      res,
      msg: "Folders fetched successfully",
      data: folders,
    });
  } catch (error) {
    errorResponse({ res, msg: "Failed to fetch folders", errors: error });
  }
}

export async function RenameFolder(req: Request, res: Response) {
  try {
    const parsed = validateOrRespond(req.body, folderRenameSchema, res);
    if (!parsed) return;
    const { id, name } = parsed;
    const folder = await prisma.folder.findUnique({
      where: { id },
    });
    if (!folder) return errorResponse({ res, msg: "Folder not found" });
    const updatedFolder = await prisma.folder.update({
      where: { id },
      data: { name },
    });
    successResponse({
      res,
      msg: "Folder renamed successfully",
      data: updatedFolder,
    });
  } catch (error) {
    errorResponse({ res, msg: "Failed to rename folder", errors: error });
  }
}

export async function DeleteFolder(req: Request, res: Response) {
  try {
    const parsed = validateOrRespond(req.body, deleteFolderSchema, res);
    if (!parsed) return;
    const { id } = parsed;
    const folder = await prisma.folder.findUnique({
      where: { id },
      select: {
        zaps: true,
      },
    });
    if (folder?.zaps.length && folder.zaps.length > 0)
      return errorResponse({
        res,
        msg: "Folder has zaps, please delete them first",
      });
    if (!folder) return errorResponse({ res, msg: "Folder not found" });
    await prisma.folder.delete({ where: { id } });
    successResponse({ res, msg: "Folder deleted successfully" });
  } catch (error) {
    errorResponse({ res, msg: "Failed to delete folder", errors: error });
  }
}
