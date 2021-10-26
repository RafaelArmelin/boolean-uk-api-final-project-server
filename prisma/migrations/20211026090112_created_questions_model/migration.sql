-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "body" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "links" TEXT NOT NULL,
    "tags" VARCHAR(30) NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);
