/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `OperatorPhase` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "OperatorPhase_id_key" ON "OperatorPhase"("id");
