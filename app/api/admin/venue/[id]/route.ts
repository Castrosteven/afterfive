import { NextResponse } from "next/server"
import prisma from "@/utils/prisma"

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }

) {
    const { id } = await params // 'a', 'b', or 'c'
    console.log(`slug`, id)
    try {
        const venue = await prisma.venue.findUnique({
            where: { id: id },
            include: {
                types: true,
                photos: true
            }
        })

        if (!venue) {
            return NextResponse.json(
                { error: "Venue not found" },
                { status: 404 }
            )
        }

        return NextResponse.json(venue)
    } catch (error) {
        console.error("Error fetching venue:", error)
        return NextResponse.json(
            { error: "Failed to fetch venue" },
            { status: 500 }
        )
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const body = await request.json();
        const { name, address, city, state, zip, types, primaryPhotoId } = body;

        // First, clear existing type associations
        await prisma.venue.update({
            where: { id: params.id },
            data: {
                types: {
                    set: []
                }
            }
        });

        // Then update the venue with new data
        const updatedVenue = await prisma.venue.update({
            where: { id: params.id },
            data: {
                name,
                address,
                city,
                state,
                zip,
                primaryPhotoId,
                types: {
                    connectOrCreate: types.map((type: { name: string }) => ({
                        where: { name: type.name },
                        create: { name: type.name }
                    }))
                }
            },
            include: {
                types: true,
                photos: true,
                primaryPhoto: true
            }
        });

        return NextResponse.json(updatedVenue);
    } catch (error) {
        console.error("Error updating venue:", error);
        return NextResponse.json(
            { error: "Failed to update venue" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params

        // First, clear the primary photo reference
        await prisma.venue.update({
            where: { id: id },
            data: {
                primaryPhotoId: null
            }
        })

        // Then delete the venue - Prisma will handle cascading deletes for photos
        await prisma.venue.delete({
            where: { id: id }
        })

        return NextResponse.json({ message: "Venue deleted successfully" })
    } catch (error) {
        console.error("Error deleting venue:", error)
        return NextResponse.json(
            { error: "Failed to delete venue" },
            { status: 500 }
        )
    }
} 