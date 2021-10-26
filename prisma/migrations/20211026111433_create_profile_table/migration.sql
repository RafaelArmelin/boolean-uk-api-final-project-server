/*
  Warnings:

  - You are about to drop the `UserProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserProfile";

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "gitHubUserName" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
