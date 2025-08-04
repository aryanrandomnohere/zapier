import { z } from "zod";
export const signUpSchema = z.object({
  email: z.string().email(),
  firstname: z.string().min(3),
  lastname: z.string().min(3),
  password: z.string().min(8),
});
export const logInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const ZapCreateSchema = z.object({
  triggerId: z.string(),
  zapId: z.number(),
  triggerConfiguration: z.any(),
  actions: z.array(
    z.object({
      actionId: z.string(),
      configuration: z.any(),
    }),
  ),
});

export const TriggerCreateSchema = z.object({
  triggerId: z.string(),
  triggerConfiguration: z.any(),
});

export const ActionCreationSchema = z.object({
  actionId: z.string(),
  actionConfiguration: z.any(),
  sortingOrder: z.number(),
});

export const UserConnectionSchema = z.object({
  userId: z.number(),
  appId: z.string(),
  identifier: z.string(),
  access_token: z.string(),
  refresh_token: z.string(),
  expiry_date: z.number(),
});

export const SetRecordSchema = z.object({
  zapId: z.number(),
  recordId: z.string(),
});

export const testActionSchema = z.object({
  actionId: z.string(),
});

export const googleAuthSchema = z.object({
  email: z.string().email(),
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  picture: z.string().url().optional(),
  email_verified: z.boolean(),
});

export const createFolderSchema = z.object({
  name: z.string().min(1),
  parentId: z.number().optional(),
  type: z.enum(["subfolder", "root"]),
});
