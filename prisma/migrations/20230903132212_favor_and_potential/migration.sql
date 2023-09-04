-- AlterTable
ALTER TABLE "OperatorAttributes" ADD COLUMN     "operatorFavorId" TEXT;

-- CreateTable
CREATE TABLE "PotentialRank" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "operatorId" TEXT,

    CONSTRAINT "PotentialRank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperatorFavor" (
    "id" TEXT NOT NULL,
    "maxLevel" INTEGER NOT NULL,
    "operatorId" TEXT,

    CONSTRAINT "OperatorFavor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PotentialRank_id_key" ON "PotentialRank"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OperatorFavor_id_key" ON "OperatorFavor"("id");

-- AddForeignKey
ALTER TABLE "OperatorAttributes" ADD CONSTRAINT "OperatorAttributes_operatorFavorId_fkey" FOREIGN KEY ("operatorFavorId") REFERENCES "OperatorFavor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PotentialRank" ADD CONSTRAINT "PotentialRank_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "Operator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperatorFavor" ADD CONSTRAINT "OperatorFavor_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "Operator"("id") ON DELETE SET NULL ON UPDATE CASCADE;
