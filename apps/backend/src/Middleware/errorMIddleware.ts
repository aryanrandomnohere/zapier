import { Request, Response, NextFunction } from "express";
import errorResponse from "../utils/errorResponse.js";

export default function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // Default values
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  const errors = err.errors || undefined;
  console.log(err);
  return errorResponse({
    res,
    msg: message,
    status,
    errors,
  });
}
