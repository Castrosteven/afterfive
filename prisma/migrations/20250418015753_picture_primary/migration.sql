/*
  Warnings:

  - A unique constraint covering the columns `[primaryPhotoId]` on the table `Venue` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Venue" ADD COLUMN     "primaryPhotoId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Venue_primaryPhotoId_key" ON "Venue"("primaryPhotoId");

-- AddForeignKey
ALTER TABLE "Venue" ADD CONSTRAINT "Venue_primaryPhotoId_fkey" FOREIGN KEY ("primaryPhotoId") REFERENCES "VenuePhoto"("id") ON DELETE SET NULL ON UPDATE CASCADE;
