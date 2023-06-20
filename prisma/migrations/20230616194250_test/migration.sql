-- CreateTable
CREATE TABLE "RangeCell" (
    "id" TEXT NOT NULL,
    "col" INTEGER NOT NULL,
    "row" INTEGER NOT NULL,
    "skillId" TEXT,

    CONSTRAINT "RangeCell_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RangeCell_id_key" ON "RangeCell"("id");

-- AddForeignKey
ALTER TABLE "RangeCell" ADD CONSTRAINT "RangeCell_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE SET NULL ON UPDATE CASCADE;
