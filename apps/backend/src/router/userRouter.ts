import express, { Request, Response } from "express";
import {
  logInSchema,
  signUpSchema,
  UserConnectionSchema,
} from "../types/index.js";
import { prisma } from "../config/client.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/JWT_SECRET.js";

const userRouter = express.Router();
// userRouter.post("/signin", async (req: Request, res: Response) => {
//   console.log(req.body);
//   const parsedData = signUpSchema.safeParse(req.body);
//   if (!parsedData.success) {
//     res.status(400).json({
//       msg: parsedData.error,
//     });
//     return;
//   }
//   try {
//     const user = await prisma.user.findFirst({
//       where: {
//         email: parsedData.data.email,
//       },
//       select: {
//         id: true,
//       },
//     });
//     if (user) {
//       res
//         .status(400)
//         .json({ msg: "User with the given email address already exists" });
//       return;
//     }
//     const newUser = await prisma.user.create({
//       data: {
//         email: parsedData.data.email,
//         firstname: parsedData.data.firstname,
//         lastname: parsedData.data.lastname,
//         password: parsedData.data.password,
//       },
//       select: {
//         id: true,
//         email: true,
//       },
//     });
//     const token = jwt.sign(
//       { userId: newUser.id, email: newUser.email },
//       JWT_SECRET,
//     );
//     res.status(200).json({
//       token,
//       msg: "SignIn Successful",
//     });
//     return;
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({
//       error,
//       msg: "Error Db cannot be reached",
//     });
//   }
// });
// userRouter.post("/login", async (req: Request, res: Response) => {
//   const parsedData = logInSchema.safeParse(req.body);
//   if (!parsedData.success) {
//     res.status(400).json({ msg: parsedData.error });
//   }
//   try {
//     const user = await prisma.user.findFirst({
//       where: {
//         email: parsedData.data?.email,
//       },
//       select: {
//         id: true,
//         email: true,
//       },
//     });
//     if (!user) {
//       res.status(400).json({ msg: "Email does not exists" });
//       return;
//     }
//     const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET);
//     res.status(200).json({ token, msg: "Login Successful" });
//     return;
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({
//       error,
//       msg: "Error Db cannot be reached",
//     });
//   }
// });

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
