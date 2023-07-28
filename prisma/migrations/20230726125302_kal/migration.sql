/*
  Warnings:

  - You are about to drop the column `name` on the `Range` table. All the data in the column will be lost.
  - You are about to drop the column `rangeName` on the `RangeCell` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "RangeCell" DROP CONSTRAINT "RangeCell_rangeName_fkey";

-- DropIndex
DROP INDEX "Range_name_key";

-- AlterTable
ALTER TABLE "Range" DROP COLUMN "name";

-- AlterTable
ALTER TABLE "RangeCell" DROP COLUMN "rangeName",
ADD COLUMN     "rangeId" TEXT;

-- AddForeignKey
ALTER TABLE "RangeCell" ADD CONSTRAINT "RangeCell_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "Range"("id") ON DELETE SET NULL ON UPDATE CASCADE;
