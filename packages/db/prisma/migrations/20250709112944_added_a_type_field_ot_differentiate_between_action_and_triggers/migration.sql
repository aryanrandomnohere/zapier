-- AlterTable
ALTER TABLE "AvailableActions" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'action';

-- AlterTable
ALTER TABLE "AvailableTriggers" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'trigger';
