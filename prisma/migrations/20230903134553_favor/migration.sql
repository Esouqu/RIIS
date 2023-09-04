/*
  Warnings:

  - You are about to drop the column `operatorFavorId` on the `OperatorAttributes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OperatorAttributes" DROP CONSTRAINT "OperatorAttributes_operatorFavorId_fkey";

-- AlterTable
ALTER TABLE "OperatorAttributes" DROP COLUMN "operatorFavorId";

-- AlterTable
ALTER TABLE "OperatorFavor" ADD COLUMN     "operatorAttributesId" TEXT;

-- AddForeignKey
ALTER TABLE "OperatorFavor" ADD CONSTRAINT "OperatorFavor_operatorAttributesId_fkey" FOREIGN KEY ("operatorAttributesId") REFERENCES "OperatorAttributes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
