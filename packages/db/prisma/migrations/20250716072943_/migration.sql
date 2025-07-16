-- AlterTable
ALTER TABLE "AvailableActions" ADD COLUMN     "appId" TEXT,
ADD COLUMN     "serviceType" TEXT NOT NULL DEFAULT 'builtIn';
