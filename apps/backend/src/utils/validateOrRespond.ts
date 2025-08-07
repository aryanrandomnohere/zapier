import { ZodSchema } from "zod";
import { Response } from "express";
import errorResponse from "./errorResponse.js";

export function validateOrRespond<T>(
  data: unknown,
  schema: ZodSchema<T>,
  res: Response,
) {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    console.log("Invalid input data", data);
    errorResponse({
      res,
      msg: "Invalid input data",
      status: 400,
      errors: parsed.error.format(),
    });
    return null;
  }

  return parsed.data;
}
