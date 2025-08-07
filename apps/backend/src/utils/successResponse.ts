import { Response } from "express";

type SuccessResponseOptions = {
  res: Response;
  msg?: string;
  status?: number;
  data?: unknown;
};

export default function successResponse({
  res,
  msg = "Success",
  status = 200,
  data,
}: SuccessResponseOptions): Response {
  return res.status(status).json({
    success: true,
    message: msg,
    ...(data !== undefined ? { data } : {}), // include data only if provided
  });
}
