/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `QuestionnaireResponse` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "QuestionnaireResponse_userId_key" ON "QuestionnaireResponse"("userId");
