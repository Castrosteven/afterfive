/*
  Warnings:

  - You are about to drop the `_EventToEventType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventToEventType" DROP CONSTRAINT "_EventToEventType_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToEventType" DROP CONSTRAINT "_EventToEventType_B_fkey";

-- DropTable
DROP TABLE "_EventToEventType";

-- CreateTable
CREATE TABLE "_EventTypeToVenue" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EventTypeToVenue_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_EventTypeToVenue_B_index" ON "_EventTypeToVenue"("B");

-- AddForeignKey
ALTER TABLE "_EventTypeToVenue" ADD CONSTRAINT "_EventTypeToVenue_A_fkey" FOREIGN KEY ("A") REFERENCES "EventType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventTypeToVenue" ADD CONSTRAINT "_EventTypeToVenue_B_fkey" FOREIGN KEY ("B") REFERENCES "Venue"("id") ON DELETE CASCADE ON UPDATE CASCADE;
