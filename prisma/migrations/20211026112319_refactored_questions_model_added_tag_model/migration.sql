/*
  Warnings:

  - You are about to drop the column `links` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "links",
DROP COLUMN "tags",
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);
