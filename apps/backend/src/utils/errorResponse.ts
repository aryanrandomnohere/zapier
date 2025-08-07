import { Response } from "express";

type ErrorResponseOptions = {
  res: Response;
  msg?: string;
  status?: number;
  errors?: unknown;
};

export default function errorResponse({
  res,
  msg = "Internal Server Error",
  status = 500,
  errors,
}: ErrorResponseOptions): Response {
  return res.status(status).json({
    success: false,
    message: msg,
    ...(errors ? { errors } : {}),
  });
}
