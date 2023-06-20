/*
  Warnings:

  - You are about to drop the `_RangeToSkill` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RangeToSkill" DROP CONSTRAINT "_RangeToSkill_A_fkey";

-- DropForeignKey
ALTER TABLE "_RangeToSkill" DROP CONSTRAINT "_RangeToSkill_B_fkey";

-- DropTable
DROP TABLE "_RangeToSkill";

-- CreateTable
CREATE TABLE "_RangeToSkillLevel" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RangeToSkillLevel_AB_unique" ON "_RangeToSkillLevel"("A", "B");

-- CreateIndex
CREATE INDEX "_RangeToSkillLevel_B_index" ON "_RangeToSkillLevel"("B");

-- AddForeignKey
ALTER TABLE "_RangeToSkillLevel" ADD CONSTRAINT "_RangeToSkillLevel_A_fkey" FOREIGN KEY ("A") REFERENCES "Range"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RangeToSkillLevel" ADD CONSTRAINT "_RangeToSkillLevel_B_fkey" FOREIGN KEY ("B") REFERENCES "SkillLevel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
