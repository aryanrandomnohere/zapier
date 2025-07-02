/*
  Warnings:

  - The primary key for the `Zap` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Zap` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `zapId` on the `Action` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `configuration` to the `Trigger` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `zapId` on the `Trigger` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastEdited` to the `Zap` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `zapId` on the `ZapRun` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Action" DROP CONSTRAINT "Action_zapId_fkey";

-- DropForeignKey
ALTER TABLE "Trigger" DROP CONSTRAINT "Trigger_zapId_fkey";

-- DropForeignKey
ALTER TABLE "ZapRun" DROP CONSTRAINT "ZapRun_zapId_fkey";

-- AlterTable
ALTER TABLE "Action" ADD COLUMN     "configuration" JSONB NOT NULL DEFAULT '{}',
DROP COLUMN "zapId",
ADD COLUMN     "zapId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Trigger" ADD COLUMN     "configuration" JSONB NOT NULL,
DROP COLUMN "zapId",
ADD COLUMN     "zapId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "firstname" DROP NOT NULL,
ALTER COLUMN "lastname" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Zap" DROP CONSTRAINT "Zap_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastEdited" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'Untitled Zap',
ADD COLUMN     "triggerMetadataindex" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Zap_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ZapRun" DROP COLUMN "zapId",
ADD COLUMN     "zapId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_zapId_key" ON "Trigger"("zapId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZapRun" ADD CONSTRAINT "ZapRun_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
