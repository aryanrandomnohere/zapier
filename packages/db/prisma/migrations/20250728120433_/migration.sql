-- AlterTable
ALTER TABLE "Action" ADD COLUMN     "success" BOOLEAN;

-- AlterTable
ALTER TABLE "ZapRun" ADD COLUMN     "completedAt" TIMESTAMP(3),
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "success" BOOLEAN;
