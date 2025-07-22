import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/JWT_SECRET.js";

interface ExtendedRequest extends Request {
  userId?: string;
}

export function AuthMiddleware(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  try {
    const token =
      req.cookies["next-auth.session-token"] ||
      req.cookies["__Secure-next-auth.session-token"];

    if (!token) {
      return res.status(401).json({ msg: "You are not logged in" });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;

    if (!decoded || !decoded.id) {
      return res.status(403).json({ msg: "Invalid token" });
    }

    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    return res.status(400).json({ msg: "Invalid request" });
  }
}
