/*
  Warnings:

  - You are about to drop the column `rangeId` on the `Talent` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Talent" DROP CONSTRAINT "Talent_rangeId_fkey";

-- AlterTable
ALTER TABLE "Talent" DROP COLUMN "rangeId";

-- AlterTable
ALTER TABLE "TalentLevel" ADD COLUMN     "rangeId" TEXT;

-- AddForeignKey
ALTER TABLE "TalentLevel" ADD CONSTRAINT "TalentLevel_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "Range"("id") ON DELETE SET NULL ON UPDATE CASCADE;
