/*
  Warnings:

  - You are about to drop the column `skillId` on the `Range` table. All the data in the column will be lost.
  - You are about to drop the column `talentId` on the `Range` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Range" DROP CONSTRAINT "Range_skillId_fkey";

-- DropForeignKey
ALTER TABLE "Range" DROP CONSTRAINT "Range_talentId_fkey";

-- AlterTable
ALTER TABLE "Range" DROP COLUMN "skillId",
DROP COLUMN "talentId";

-- CreateTable
CREATE TABLE "_RangeToSkill" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_RangeToTalent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RangeToSkill_AB_unique" ON "_RangeToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_RangeToSkill_B_index" ON "_RangeToSkill"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RangeToTalent_AB_unique" ON "_RangeToTalent"("A", "B");

-- CreateIndex
CREATE INDEX "_RangeToTalent_B_index" ON "_RangeToTalent"("B");

-- AddForeignKey
ALTER TABLE "_RangeToSkill" ADD CONSTRAINT "_RangeToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "Range"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RangeToSkill" ADD CONSTRAINT "_RangeToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RangeToTalent" ADD CONSTRAINT "_RangeToTalent_A_fkey" FOREIGN KEY ("A") REFERENCES "Range"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RangeToTalent" ADD CONSTRAINT "_RangeToTalent_B_fkey" FOREIGN KEY ("B") REFERENCES "Talent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
