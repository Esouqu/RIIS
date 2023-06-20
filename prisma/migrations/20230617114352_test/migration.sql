/*
  Warnings:

  - You are about to drop the column `artList` on the `Operator` table. All the data in the column will be lost.
  - You are about to drop the column `skillId` on the `RangeCell` table. All the data in the column will be lost.
  - You are about to drop the column `rangeId` on the `TalentLevel` table. All the data in the column will be lost.
  - Made the column `description` on table `SkillLevel` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "RangeCell" DROP CONSTRAINT "RangeCell_skillId_fkey";

-- AlterTable
ALTER TABLE "Operator" DROP COLUMN "artList";

-- AlterTable
ALTER TABLE "RangeCell" DROP COLUMN "skillId",
ADD COLUMN     "rangeId" TEXT;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "rangeId" TEXT,
ADD COLUMN     "skillId" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "SkillLevel" ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Talent" ADD COLUMN     "rangeId" TEXT;

-- AlterTable
ALTER TABLE "TalentLevel" DROP COLUMN "rangeId";

-- CreateTable
CREATE TABLE "Art" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "portrait" TEXT[],
    "full" TEXT[],
    "operatorId" TEXT,

    CONSTRAINT "Art_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Range" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Range_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Art_id_key" ON "Art"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Range_id_key" ON "Range"("id");

-- AddForeignKey
ALTER TABLE "Art" ADD CONSTRAINT "Art_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "Operator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RangeCell" ADD CONSTRAINT "RangeCell_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "Range"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "Range"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Talent" ADD CONSTRAINT "Talent_rangeId_fkey" FOREIGN KEY ("rangeId") REFERENCES "Range"("id") ON DELETE SET NULL ON UPDATE CASCADE;
