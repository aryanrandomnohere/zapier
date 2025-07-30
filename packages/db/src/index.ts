// lib/prisma.ts
import { PrismaClient } from "../generated/client/index.js";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Export only types and enums, not the client itself
export type {
  User,
  Zap,
  Record,
  Trigger,
  UserConnection,
  AvailableTriggers,
  Action,
  AvailableActions,
  ZapRun,
  ZapRunOutbox,
  ZapChangeHistory,
  ZapNote,
  PrismaPromise,
} from "../generated/client/index.js";

// Export enums
export {
  $Enums,
  ZapHistoryType,
  ZapRunStatus,
} from "../generated/client/index.js";
