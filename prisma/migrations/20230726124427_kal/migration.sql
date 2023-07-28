/*
  Warnings:

  - You are about to drop the column `rangeId` on the `RangeCell` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "RangeCell" DROP CONSTRAINT "RangeCell_rangeId_fkey";

-- AlterTable
ALTER TABLE "RangeCell" DROP COLUMN "rangeId",
ADD COLUMN     "rangeName" TEXT;

-- AddForeignKey
ALTER TABLE "RangeCell" ADD CONSTRAINT "RangeCell_rangeName_fkey" FOREIGN KEY ("rangeName") REFERENCES "Range"("name") ON DELETE SET NULL ON UPDATE CASCADE;
