import express, { Request, Response } from "express";
import { UserConnectionSchema } from "../types/index.js";
import { prisma } from "../config/client.js";

const userRouter = express.Router();

userRouter.post("/createConnection/:zapId", async (req, res) => {
  const parsedBody = UserConnectionSchema.safeParse(req.body);
  console.log("userConnection came");
  if (!parsedBody.success) {
    console.log("Invalid data", req.body, req.params.zapId);
    res.json(400).json({ error: parsedBody.error });
    return;
  }
  // Check if connection already exists
  const existingConnection = await prisma.userConnection.findFirst({
    where: {
      userId: Number(parsedBody.data.userId),
      appId: "google",
    },
  });

  if (existingConnection) {
    // Update existing connection
    await prisma.$transaction(async (tx) => {
      const connection = await tx.userConnection.update({
        where: { id: existingConnection.id },
        data: {
          accessToken: parsedBody.data.access_token!,
          refreshToken:
            parsedBody.data.refresh_token || existingConnection.refreshToken,
          expiredAt: new Date(parsedBody.data.expiry_date!),
        },
      });
      await tx.trigger.update({
        where: {
          zapId: Number(req.params.zapId),
        },
        data: {
          connectionId: connection.id,
        },
      });
    });
  } else {
    // Create new connection
    await prisma.$transaction(async (tx) => {
      console.log({
        userId: Number(parsedBody.data.userId),
        appId: "google",
        identifier: "google",
        accessToken: parsedBody.data.access_token!,
        refreshToken: parsedBody.data.refresh_token || "",
        expiredAt: new Date(parsedBody.data.expiry_date!),
      });

      const connection = await tx.userConnection.create({
        data: {
          userId: Number(parsedBody.data.userId),
          appId: "google",
          identifier: "google",
          accessToken: parsedBody.data.access_token!,
          refreshToken: parsedBody.data.refresh_token || "",
          expiredAt: new Date(parsedBody.data.expiry_date!),
        },
      });
      await tx.trigger.update({
        where: {
          zapId: Number(req.params.zapId),
        },
        data: {
          connectionId: connection.id,
        },
      });
    });
  }
  res.status(200).json({ success: true });
});

export { userRouter };
