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
  userId: z.number(),
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
  userId: z.number(),
});

export const ActionCreationSchema = z.object({
  actionId: z.string(),
  actionConfiguration: z.any(),
  userId: z.number(),
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

export const testActoinSchema = z.object({
  userId: z.number(),
  actionId: z.string(),
});
