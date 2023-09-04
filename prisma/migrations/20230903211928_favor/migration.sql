/*
  Warnings:

  - You are about to drop the `OperatorFavor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OperatorFavor" DROP CONSTRAINT "OperatorFavor_operatorAttributesId_fkey";

-- DropForeignKey
ALTER TABLE "OperatorFavor" DROP CONSTRAINT "OperatorFavor_operatorId_fkey";

-- AlterTable
ALTER TABLE "Operator" ADD COLUMN     "operatorAttributesId" TEXT;

-- DropTable
DROP TABLE "OperatorFavor";

-- AddForeignKey
ALTER TABLE "Operator" ADD CONSTRAINT "Operator_operatorAttributesId_fkey" FOREIGN KEY ("operatorAttributesId") REFERENCES "OperatorAttributes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
