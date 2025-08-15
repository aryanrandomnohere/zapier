import { prisma } from "../config/client.js";
import { Request, Response } from "express";
import successResponse from "../utils/successResponse.js";
import errorResponse from "../utils/errorResponse.js";
import { createFolderSchema } from "../types/index.js";
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

export async function GetFolders(req: Request, res: Response) {
  try {
    const folders = await prisma.folder.findMany({
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
