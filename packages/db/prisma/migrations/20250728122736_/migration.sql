-- AlterTable
ALTER TABLE "ZapRun" ADD COLUMN     "failedActionId" TEXT;

-- AddForeignKey
ALTER TABLE "ZapRun" ADD CONSTRAINT "ZapRun_failedActionId_fkey" FOREIGN KEY ("failedActionId") REFERENCES "Action"("id") ON DELETE SET NULL ON UPDATE CASCADE;
