/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Range` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Range_name_key" ON "Range"("name");
