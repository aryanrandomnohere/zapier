-- CreateEnum
CREATE TYPE "ZapNoteType" AS ENUM ('ZAP_NOTE', 'STEP_NOTE');

-- CreateEnum
CREATE TYPE "ZapHistoryType" AS ENUM ('ZAP_CREATED', 'ZAP_TURNED_OFF', 'ZAP_DELETED', 'OWNER_CHANGED', 'ZAP_RESTORED', 'ZAP_TURNED_ON', 'VERSION_PUBLISHED', 'APPROVAL_REQUEST_SENT', 'APPROVAL_REQUEST_APPROVED', 'APPROVAL_REQUEST_DENIED', 'APPROVAL_REQUEST_CANCELLED');

-- CreateTable
CREATE TABLE "ZapChangeHistory" (
    "id" TEXT NOT NULL,
    "zapId" INTEGER NOT NULL,
    "type" "ZapHistoryType" NOT NULL,
    "message" TEXT NOT NULL,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ZapChangeHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ZapNote" (
    "id" TEXT NOT NULL,
    "zapId" INTEGER NOT NULL,
    "stepId" TEXT,
    "type" "ZapNoteType" NOT NULL,
    "content" TEXT NOT NULL,
    "createdById" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ZapNote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ZapNote_stepId_key" ON "ZapNote"("stepId");

-- AddForeignKey
ALTER TABLE "ZapChangeHistory" ADD CONSTRAINT "ZapChangeHistory_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZapChangeHistory" ADD CONSTRAINT "ZapChangeHistory_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZapNote" ADD CONSTRAINT "ZapNote_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZapNote" ADD CONSTRAINT "ZapNote_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Action"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZapNote" ADD CONSTRAINT "ZapNote_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
