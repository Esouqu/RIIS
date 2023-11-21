/*
  Warnings:

  - Made the column `trait` on table `Operator` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Operator" ALTER COLUMN "trait" SET NOT NULL;
