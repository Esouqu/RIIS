-- CreateTable
CREATE TABLE "OperatorAttributes" (
    "id" TEXT NOT NULL,
    "maxHp" INTEGER NOT NULL,
    "atk" INTEGER NOT NULL,
    "def" INTEGER NOT NULL,
    "magicResistance" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "blockCnt" INTEGER NOT NULL,
    "baseAttackTime" INTEGER NOT NULL,
    "respawnTime" INTEGER NOT NULL,
    "operatorPhaseId" TEXT,

    CONSTRAINT "OperatorAttributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperatorPhase" (
    "id" TEXT NOT NULL,
    "maxLevel" INTEGER NOT NULL,
    "operatorId" TEXT,

    CONSTRAINT "OperatorPhase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OperatorPhaseToRange" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OperatorPhaseToRange_AB_unique" ON "_OperatorPhaseToRange"("A", "B");

-- CreateIndex
CREATE INDEX "_OperatorPhaseToRange_B_index" ON "_OperatorPhaseToRange"("B");

-- AddForeignKey
ALTER TABLE "OperatorAttributes" ADD CONSTRAINT "OperatorAttributes_operatorPhaseId_fkey" FOREIGN KEY ("operatorPhaseId") REFERENCES "OperatorPhase"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperatorPhase" ADD CONSTRAINT "OperatorPhase_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "Operator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OperatorPhaseToRange" ADD CONSTRAINT "_OperatorPhaseToRange_A_fkey" FOREIGN KEY ("A") REFERENCES "OperatorPhase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OperatorPhaseToRange" ADD CONSTRAINT "_OperatorPhaseToRange_B_fkey" FOREIGN KEY ("B") REFERENCES "Range"("id") ON DELETE CASCADE ON UPDATE CASCADE;
