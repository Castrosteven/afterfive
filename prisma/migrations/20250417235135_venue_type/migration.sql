/*
  Warnings:

  - You are about to drop the `EventType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EventTypeToVenue` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventTypeToVenue" DROP CONSTRAINT "_EventTypeToVenue_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventTypeToVenue" DROP CONSTRAINT "_EventTypeToVenue_B_fkey";

-- DropTable
DROP TABLE "EventType";

-- DropTable
DROP TABLE "_EventTypeToVenue";

-- CreateTable
CREATE TABLE "VenueType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VenueType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_VenueToVenueType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_VenueToVenueType_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "VenueType_name_key" ON "VenueType"("name");

-- CreateIndex
CREATE INDEX "_VenueToVenueType_B_index" ON "_VenueToVenueType"("B");

-- AddForeignKey
ALTER TABLE "_VenueToVenueType" ADD CONSTRAINT "_VenueToVenueType_A_fkey" FOREIGN KEY ("A") REFERENCES "Venue"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VenueToVenueType" ADD CONSTRAINT "_VenueToVenueType_B_fkey" FOREIGN KEY ("B") REFERENCES "VenueType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
