-- AlterTable
ALTER TABLE "Trigger" ADD COLUMN     "lastPolledAt" TIMESTAMP(3),
ADD COLUMN     "optionType" TEXT NOT NULL DEFAULT 'polling';
