/*
  Warnings:

  - You are about to drop the column `triggerMetadata` on the `Zap` table. All the data in the column will be lost.
  - You are about to drop the column `triggerMetadataindex` on the `Zap` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[RecordId]` on the table `Zap` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Zap" DROP COLUMN "triggerMetadata",
DROP COLUMN "triggerMetadataindex",
ADD COLUMN     "RecordId" TEXT;

-- CreateTable
CREATE TABLE "Record" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "zapId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pulledAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "JsonData" JSONB NOT NULL,
    "selectedIndex" INTEGER NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Zap_RecordId_key" ON "Zap"("RecordId");

-- AddForeignKey
ALTER TABLE "Zap" ADD CONSTRAINT "Zap_RecordId_fkey" FOREIGN KEY ("RecordId") REFERENCES "Record"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
