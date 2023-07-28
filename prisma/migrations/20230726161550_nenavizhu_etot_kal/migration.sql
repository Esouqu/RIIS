/*
  Warnings:

  - You are about to drop the `_OperatorPhaseToRange` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RangeToSkillLevel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RangeToTalent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_OperatorPhaseToRange" DROP CONSTRAINT "_OperatorPhaseToRange_A_fkey";

-- DropForeignKey
ALTER TABLE "_OperatorPhaseToRange" DROP CONSTRAINT "_OperatorPhaseToRange_B_fkey";

-- DropForeignKey
ALTER TABLE "_RangeToSkillLevel" DROP CONSTRAINT "_RangeToSkillLevel_A_fkey";

-- DropForeignKey
ALTER TABLE "_RangeToSkillLevel" DROP CONSTRAINT "_RangeToSkillLevel_B_fkey";

-- DropForeignKey
ALTER TABLE "_RangeToTalent" DROP CONSTRAINT "_RangeToTalent_A_fkey";

-- DropForeignKey
ALTER TABLE "_RangeToTalent" DROP CONSTRAINT "_RangeToTalent_B_fkey";

-- AlterTable
ALTER TABLE "SkillLevel" ADD COLUMN     "rangeId" TEXT;

-- DropTable
DROP TABLE "_OperatorPhaseToRange";

-- DropTable
DROP TABLE "_RangeToSkillLevel";

-- DropTable
DROP TABLE "_RangeToTalent";

-- AddForeignKey
ALTER TABLE "SkillLevel" ADD CONSTRAINT "SkillLevel_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "Range"("id") ON DELETE SET NULL ON UPDATE CASCADE;
