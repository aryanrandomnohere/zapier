import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/JWT_SECRET.js";
import { extendedRequest } from "../types/types.js";

export default function authMiddleware(
  req: extendedRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    // ✅ Read your custom auth_token cookie
    const token = req.cookies["auth_token"];

    if (!token) {
      console.log("❌ No token found in cookies");
      return res.status(401).json({ msg: "You are not logged in" });
    }

    // ✅ Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: number;
      email: string;
      zapmail: string;
    };

    if (!decoded || !decoded.userId) {
      console.log("❌ Invalid token payload:", decoded);
      return res.status(403).json({ msg: "Invalid token" });
    }

    // ✅ Attach info to request
    req.userId = decoded.userId;

    console.log("✅ Verified user from token:", decoded);

    next();
  } catch (error) {
    console.error("❌ JWT verification error:", error);
    return res.status(400).json({ msg: "Invalid request" });
  }
}
