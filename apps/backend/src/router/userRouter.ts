import express, { Request, Response } from "express";
import { logInSchema, signUpSchema } from "../types/index.js";
import { prisma } from "../client.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../JWT_SECRET.js";

const userRouter = express.Router();
userRouter.post("/signin", async (req: Request, res: Response) => {
  console.log(req.body);
  const parsedData = signUpSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).json({
      msg: parsedData.error,
    });
    return;
  }
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: parsedData.data.email,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      res
        .status(400)
        .json({ msg: "User with the given email address already exists" });
      return;
    }
    const newUser = await prisma.user.create({
      data: {
        email: parsedData.data.email,
        firstname: parsedData.data.firstname,
        lastname: parsedData.data.lastname,
        password: parsedData.data.password,
      },
      select: {
        id: true,
        email: true,
      },
    });
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      JWT_SECRET,
    );
    res.status(200).json({
      token,
      msg: "SignIn Successful",
    });
    return;
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error,
      msg: "Error Db cannot be reached",
    });
  }
});
userRouter.post("/login", async (req: Request, res: Response) => {
  const parsedData = logInSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.status(400).json({ msg: parsedData.error });
  }
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: parsedData.data?.email,
      },
      select: {
        id: true,
        email: true,
      },
    });
    if (!user) {
      res.status(400).json({ msg: "Email does not exists" });
      return;
    }
    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET);
    res.status(200).json({ token, msg: "Login Successful" });
    return;
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error,
      msg: "Error Db cannot be reached",
    });
  }
});

export { userRouter };
