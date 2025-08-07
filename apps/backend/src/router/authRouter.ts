import express, { Request, Response } from "express";
import { googleAuthSchema, logInSchema, signUpSchema } from "../types/index.js";
import { validateOrRespond } from "../utils/validateOrRespond.js";
import { prisma } from "../config/client.js";
import { JWT_SECRET } from "../config/JWT_SECRET.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import errorResponse from "../utils/errorResponse.js";
import asyncHandler from "../utils/asyncFunction.js";

const authRouter = express.Router();

function signToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "30d" });
}

// ---------- SIGNUP ----------
authRouter.post(
  "/signup",
  asyncHandler(async (req: Request, res: Response) => {
    console.log("Signin renpoint hit");
    const parsedData = validateOrRespond(req.body, signUpSchema, res);
    if (!parsedData) return;
    const { email, firstname, lastname, password } = parsedData;

    try {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ msg: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
          data: {
            email,
            firstname,
            lastname,
            zapmail: Date.now().toString(36),
            password: hashedPassword,
            type: "credentials",
            verified: false,
          },
        });

        await tx.folder.create({
          data: {
            name: firstname + " " + lastname,
            userId: user.id,
            type: "personal",
          },
        });
        return user;
      });

      const token = signToken({
        userId: user.id,
        email: user.email,
        zapmail: user.zapmail,
      });

      res.status(200).json({ token, user: user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "Signup failed", error: err });
    }
  }),
);

// ---------- LOGIN ----------
authRouter.post("/login", async (req, res) => {
  console.log("Login renpoint hit");
  const parsedData = validateOrRespond(req.body, logInSchema, res);
  if (!parsedData) return;
  const { email, password } = parsedData;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
      return res.status(400).json({ msg: "Invalid email or password" });

    const validPassword = await bcrypt.compare(password, user.password!);
    if (!validPassword)
      return res.status(400).json({ msg: "Invalid email or password" });

    const token = signToken({
      userId: user.id,
      email: user.email,
      zapmail: user.zapmail,
    });

    res.status(200).json({ token, user: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Login failed", error: err });
  }
});

// ---------- GOOGLE ----------
authRouter.post(
  "/google",
  asyncHandler(async (req, res) => {
    console.log("Google login renpoint hit");
    const parsed = validateOrRespond(req.body, googleAuthSchema, res);
    if (!parsed) return;

    const { email, firstname, lastname, picture, email_verified } = parsed;

    try {
      let user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        user = await prisma.$transaction(async (tx) => {
          user = await prisma.user.create({
            data: {
              email,
              firstname,
              lastname,
              imageUrl: picture,
              zapmail: Date.now().toString(36),
              password: null,
              type: "google",
              verified: email_verified,
            },
          });

          await tx.folder.create({
            data: {
              name: firstname + " " + lastname,
              userId: user.id,
            },
          });
          return user;
        });
      }

      const token = signToken({
        userId: user.id,
        email: user.email,
        zapmail: user.zapmail,
      });

      res.status(200).json({
        user: user,
        zapmail: user.zapmail,
        email: user.email,
        token: token,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Google login failed" });
    }
  }),
);

authRouter.post("/set-cookie", async (req, res) => {
  try {
    const { token } = req.body;
    console.log("Setting cookie", token);
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
    res.status(200).json({ msg: "Cookie set" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Cookie set failed" });
  }
});

export { authRouter };
