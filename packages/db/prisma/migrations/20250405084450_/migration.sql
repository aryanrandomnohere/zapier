-- AlterTable
ALTER TABLE "AvailableActions" ADD COLUMN     "metadata" JSONB NOT NULL DEFAULT '{}';

-- AlterTable
ALTER TABLE "AvailableTriggers" ADD COLUMN     "metadata" JSONB NOT NULL DEFAULT '{}';
