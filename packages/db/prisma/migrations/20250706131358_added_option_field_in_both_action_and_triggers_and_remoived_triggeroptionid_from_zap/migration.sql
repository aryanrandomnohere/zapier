/*
  Warnings:

  - You are about to drop the column `triggerOptionId` on the `Zap` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Action" ADD COLUMN     "optionId" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Trigger" ADD COLUMN     "optionId" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Zap" DROP COLUMN "triggerOptionId";
