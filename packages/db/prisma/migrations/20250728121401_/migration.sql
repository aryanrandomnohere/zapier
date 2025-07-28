/*
  Warnings:

  - You are about to drop the column `success` on the `ZapRun` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ZapRunStatus" AS ENUM ('PENDING', 'RUNNING', 'SUCCESS', 'FAILED');

-- AlterTable
ALTER TABLE "ZapRun" DROP COLUMN "success",
ADD COLUMN     "failureReason" TEXT,
ADD COLUMN     "status" "ZapRunStatus" NOT NULL DEFAULT 'PENDING';
