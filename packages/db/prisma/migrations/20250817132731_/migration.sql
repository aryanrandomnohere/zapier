-- CreateTable
CREATE TABLE "ActionStepTest" (
    "id" TEXT NOT NULL,
    "dataOut" JSONB NOT NULL,
    "actionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActionStepTest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActionStepTest_actionId_key" ON "ActionStepTest"("actionId");

-- AddForeignKey
ALTER TABLE "ActionStepTest" ADD CONSTRAINT "ActionStepTest_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
