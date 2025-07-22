import { ZodSchema } from "zod";

export function checkInputValidation<T>(data: any, schema: ZodSchema<T>) {
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return { success: false, error: parsed.error.format() };
  }
  return { success: true, data: parsed.data };
}
