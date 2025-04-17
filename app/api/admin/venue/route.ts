import prisma from '@/utils/prisma';
import { PlacesClient } from '@googlemaps/places';
import { z } from 'zod';
import type { google } from '@googlemaps/places/build/protos/protos';

const placesClient = new PlacesClient({
    apiKey: process.env.GOOGLE_PLACES_NEW_API_KEY,
});

async function getPlaceDetails(googlePlaceId: string): Promise<google.maps.places.v1.IPlace> {
    const placeDetails = await placesClient.getPlace({
        name: `places/${googlePlaceId}`,
    }, {
        otherArgs: {
            headers: {
                'X-Goog-FieldMask': '*',
            },
        },
    });
    return placeDetails[0]
}

async function createVenue(placeDetails: google.maps.places.v1.IPlace) {
    if (placeDetails.types) {
        for (const typeName of placeDetails.types) {
            await prisma.venueType.upsert({
                where: { name: typeName },
                update: {}, // No updates needed if it exists
                create: { name: typeName }
            });
        }
    }
    const venue = await prisma.venue.create({
        data: {
            address: placeDetails.formattedAddress ?? '',
            name: placeDetails.displayName?.text ?? '',
            googlePlaceId: placeDetails.id ?? '',
            city: placeDetails.postalAddress?.locality ?? '',
            state: placeDetails.postalAddress?.administrativeArea ?? '',
            zip: placeDetails.postalAddress?.postalCode ?? '',
            types: {
                connect: placeDetails.types?.map((type) => ({ name: type })) ?? []
            }
        },
        include: {
            types: true // Include the types in the response
        }
    });
    return venue;
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const keyword = searchParams.get('keyword');
        const placesRequest = {
            textQuery: keyword,
        };
        const response = await placesClient.searchText(placesRequest, {
            otherArgs: {
                headers: {
                    // 'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.id,places.types,places.addressComponents,places.photos',
                    'X-Goog-FieldMask': '*',

                },
            },
        });
        console.log(response);
        return Response.json(response);
    } catch (er) {
        const err = er as Error
        return Response.json({ message: err.message });
    }
}

const createVenueSchema = z.object({
    googlePlaceId: z.string(),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { googlePlaceId } = createVenueSchema.parse(body);
        const placeDetails = await getPlaceDetails(googlePlaceId);
        const venue = await createVenue(placeDetails);
        return Response.json({ message: venue });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return Response.json({ message: error.formErrors }, { status: 400 });
        }
        const err = error as Error;
        return Response.json({ message: err.message }, { status: 500 });
    }
}