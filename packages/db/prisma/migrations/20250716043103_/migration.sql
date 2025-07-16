/*
  Warnings:

  - You are about to drop the column `itemType` on the `AvailableTriggers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AvailableTriggers" DROP COLUMN "itemType",
ADD COLUMN     "appId" TEXT,
ADD COLUMN     "serviceType" TEXT NOT NULL DEFAULT '';
