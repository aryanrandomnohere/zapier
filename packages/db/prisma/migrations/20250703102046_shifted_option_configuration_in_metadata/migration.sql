/*
  Warnings:

  - You are about to drop the column `optionConfiguration` on the `AvailableActions` table. All the data in the column will be lost.
  - You are about to drop the column `optionConfiguration` on the `AvailableTriggers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AvailableActions" DROP COLUMN "optionConfiguration";

-- AlterTable
ALTER TABLE "AvailableTriggers" DROP COLUMN "optionConfiguration";
