/*
  Warnings:

  - A unique constraint covering the columns `[triggerId]` on the table `ZapNote` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ZapNote" ADD COLUMN     "triggerId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ZapNote_triggerId_key" ON "ZapNote"("triggerId");

-- AddForeignKey
ALTER TABLE "ZapNote" ADD CONSTRAINT "ZapNote_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "Trigger"("id") ON DELETE SET NULL ON UPDATE CASCADE;
