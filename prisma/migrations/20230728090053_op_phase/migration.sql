/*
  Warnings:

  - You are about to alter the column `magicResistance` on the `OperatorAttributes` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "OperatorAttributes" ALTER COLUMN "magicResistance" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "OperatorPhase" ADD COLUMN     "rangeId" TEXT;

-- AlterTable
ALTER TABLE "Talent" ADD COLUMN     "rangeId" TEXT;

-- AddForeignKey
ALTER TABLE "Talent" ADD CONSTRAINT "Talent_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "Range"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperatorPhase" ADD CONSTRAINT "OperatorPhase_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "Range"("id") ON DELETE SET NULL ON UPDATE CASCADE;
