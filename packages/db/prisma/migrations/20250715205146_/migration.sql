/*
  Warnings:

  - Added the required column `appId` to the `UserConnection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserConnection" ADD COLUMN     "appId" TEXT NOT NULL;
