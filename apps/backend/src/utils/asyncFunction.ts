import { Request, Response, NextFunction } from "express";
import { extendedRequest } from "../types/types.js";

type AsyncFunction = (
  req: Request | extendedRequest,
  res: Response,
  next: NextFunction,
) => Promise<any>;

export default function asyncHandler(fn: AsyncFunction) {
  return (
    req: Request | extendedRequest,
    res: Response,
    next: NextFunction,
  ) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
