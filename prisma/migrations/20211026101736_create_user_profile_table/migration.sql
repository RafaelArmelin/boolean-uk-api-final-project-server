-- CreateTable
CREATE TABLE "UserProfile" (
    "id" SERIAL NOT NULL,
    "gitHubUserName" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);
