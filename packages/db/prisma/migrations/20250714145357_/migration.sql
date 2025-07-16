/*
  Warnings:

  - You are about to drop the column `handledBy` on the `AvailableTriggers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AvailableTriggers" DROP COLUMN "handledBy",
ADD COLUMN     "itemType" TEXT NOT NULL DEFAULT '';
