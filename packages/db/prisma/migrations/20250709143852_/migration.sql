/*
  Warnings:

  - A unique constraint covering the columns `[zapmail]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "zapmail" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "User_zapmail_key" ON "User"("zapmail");
