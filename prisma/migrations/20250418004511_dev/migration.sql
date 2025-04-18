/*
  Warnings:

  - You are about to drop the `AnswerOption` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Questionnaire` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserResponse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AnswerOption" DROP CONSTRAINT "AnswerOption_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_questionnaireId_fkey";

-- DropForeignKey
ALTER TABLE "UserResponse" DROP CONSTRAINT "UserResponse_answerOptionId_fkey";

-- DropForeignKey
ALTER TABLE "UserResponse" DROP CONSTRAINT "UserResponse_questionId_fkey";

-- DropTable
DROP TABLE "AnswerOption";

-- DropTable
DROP TABLE "Question";

-- DropTable
DROP TABLE "Questionnaire";

-- DropTable
DROP TABLE "UserResponse";

-- DropEnum
DROP TYPE "QuestionType";
