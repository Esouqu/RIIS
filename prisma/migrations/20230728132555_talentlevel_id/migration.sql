/*
  Warnings:

  - The primary key for the `TalentLevel` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "TalentLevel" DROP CONSTRAINT "TalentLevel_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "TalentLevel_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TalentLevel_id_seq";
