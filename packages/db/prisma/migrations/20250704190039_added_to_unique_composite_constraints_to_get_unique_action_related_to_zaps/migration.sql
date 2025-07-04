/*
  Warnings:

  - A unique constraint covering the columns `[zapId,sortingOrder]` on the table `Action` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Action_zapId_sortingOrder_key" ON "Action"("zapId", "sortingOrder");
