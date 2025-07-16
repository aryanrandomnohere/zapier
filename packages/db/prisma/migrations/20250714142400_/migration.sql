/*
  Warnings:

  - A unique constraint covering the columns `[connectionId]` on the table `Action` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[connectionId]` on the table `Trigger` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Action" ADD COLUMN     "connectionId" TEXT;

-- AlterTable
ALTER TABLE "AvailableTriggers" ADD COLUMN     "handledBy" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Trigger" ADD COLUMN     "connectionId" TEXT;

-- CreateTable
CREATE TABLE "UserConnection" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiredAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserConnection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Action_connectionId_key" ON "Action"("connectionId");

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_connectionId_key" ON "Trigger"("connectionId");

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_connectionId_fkey" FOREIGN KEY ("connectionId") REFERENCES "UserConnection"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_connectionId_fkey" FOREIGN KEY ("connectionId") REFERENCES "UserConnection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
