/*
  Warnings:

  - You are about to drop the column `rangeId` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `rangeId` on the `Talent` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_rangeId_fkey";

-- DropForeignKey
ALTER TABLE "Talent" DROP CONSTRAINT "Talent_rangeId_fkey";

-- AlterTable
ALTER TABLE "Range" ADD COLUMN     "skillId" TEXT,
ADD COLUMN     "talentId" TEXT;

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "rangeId";

-- AlterTable
ALTER TABLE "Talent" DROP COLUMN "rangeId";

-- AddForeignKey
ALTER TABLE "Range" ADD CONSTRAINT "Range_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Range" ADD CONSTRAINT "Range_talentId_fkey" FOREIGN KEY ("talentId") REFERENCES "Talent"("id") ON DELETE SET NULL ON UPDATE CASCADE;
