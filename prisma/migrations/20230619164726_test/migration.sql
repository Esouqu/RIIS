/*
  Warnings:

  - You are about to drop the column `blockCnt` on the `OperatorAttributes` table. All the data in the column will be lost.
  - Added the required column `blockCount` to the `OperatorAttributes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OperatorAttributes" DROP COLUMN "blockCnt",
ADD COLUMN     "blockCount" INTEGER NOT NULL;
