-- CreateTable
CREATE TABLE "QuestionsOnTags" (
    "questionId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "QuestionsOnTags_pkey" PRIMARY KEY ("questionId","tagId")
);

-- AddForeignKey
ALTER TABLE "QuestionsOnTags" ADD CONSTRAINT "QuestionsOnTags_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionsOnTags" ADD CONSTRAINT "QuestionsOnTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
