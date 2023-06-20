/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `OperatorAttributes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "OperatorAttributes_id_key" ON "OperatorAttributes"("id");
