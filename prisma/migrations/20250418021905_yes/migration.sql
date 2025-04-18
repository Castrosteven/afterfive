-- DropForeignKey
ALTER TABLE "VenuePhoto" DROP CONSTRAINT "VenuePhoto_venueId_fkey";

-- AddForeignKey
ALTER TABLE "VenuePhoto" ADD CONSTRAINT "VenuePhoto_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Venue"("id") ON DELETE CASCADE ON UPDATE CASCADE;
