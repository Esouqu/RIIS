-- CreateTable
CREATE TABLE "EventPost" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "content" TEXT,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SkillLevel" (
    "id" TEXT NOT NULL,
    "levelId" INTEGER NOT NULL DEFAULT 0,
    "rangeId" TEXT,
    "description" TEXT,
    "spCost" INTEGER NOT NULL,
    "initSp" INTEGER NOT NULL,
    "duration" TEXT NOT NULL,
    "skillId" TEXT,

    CONSTRAINT "SkillLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "chargeType" TEXT NOT NULL,
    "activationType" TEXT NOT NULL,
    "iconUrl" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TalentLevel" (
    "id" SERIAL NOT NULL,
    "levelId" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "phase" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "potential" INTEGER NOT NULL,
    "rangeId" TEXT,
    "talentId" TEXT,

    CONSTRAINT "TalentLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Talent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "operatorId" TEXT,

    CONSTRAINT "Talent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Summon" (
    "id" TEXT NOT NULL,
    "operatorId" TEXT,

    CONSTRAINT "Summon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operator" (
    "id" TEXT NOT NULL,
    "displayNumber" TEXT,
    "position" TEXT NOT NULL,
    "rarity" INTEGER NOT NULL,
    "tagList" TEXT[],
    "trait" TEXT,
    "class" TEXT NOT NULL,
    "group" TEXT,
    "isObtainable" BOOLEAN NOT NULL,
    "nation" TEXT,
    "subClass" TEXT NOT NULL,
    "team" TEXT,
    "name" TEXT NOT NULL,
    "obtainApproach" TEXT,
    "gender" TEXT,
    "artList" TEXT[],
    "artist" TEXT,
    "va" TEXT NOT NULL,
    "portraitUrl" TEXT NOT NULL,

    CONSTRAINT "Operator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OperatorToSkill" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "SkillLevel_id_key" ON "SkillLevel"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TalentLevel_id_key" ON "TalentLevel"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Talent_id_key" ON "Talent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Summon_id_key" ON "Summon"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Operator_displayNumber_key" ON "Operator"("displayNumber");

-- CreateIndex
CREATE UNIQUE INDEX "_OperatorToSkill_AB_unique" ON "_OperatorToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_OperatorToSkill_B_index" ON "_OperatorToSkill"("B");

-- AddForeignKey
ALTER TABLE "SkillLevel" ADD CONSTRAINT "SkillLevel_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TalentLevel" ADD CONSTRAINT "TalentLevel_talentId_fkey" FOREIGN KEY ("talentId") REFERENCES "Talent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Talent" ADD CONSTRAINT "Talent_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "Operator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Summon" ADD CONSTRAINT "Summon_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "Operator"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OperatorToSkill" ADD CONSTRAINT "_OperatorToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "Operator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OperatorToSkill" ADD CONSTRAINT "_OperatorToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
