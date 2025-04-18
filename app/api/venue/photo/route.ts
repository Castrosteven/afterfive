import { NextResponse } from "next/server"

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const photoName = searchParams.get("name")
        const maxWidth = searchParams.get("maxWidth") || "800"
        const maxHeight = searchParams.get("maxHeight") || "600"

        if (!photoName) {
            return NextResponse.json(
                { error: "Photo name is required" },
                { status: 400 }
            )
        }

        // Fetch the photo data directly
        const photoResponse = await fetch(
            `https://places.googleapis.com/v1/${photoName}/media?key=${process.env.GOOGLE_PLACES_NEW_API_KEY}&maxWidthPx=${maxWidth}&maxHeightPx=${maxHeight}`,
            {
                headers: {
                    'Accept': 'image/*'
                }
            }
        )

        if (!photoResponse.ok) {
            throw new Error('Failed to fetch photo')
        }

        // Get the image data and content type
        const imageData = await photoResponse.arrayBuffer()
        const contentType = photoResponse.headers.get('content-type') || 'image/jpeg'

        // Return the image with proper headers
        return new NextResponse(imageData, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable'
            }
        })
    } catch (error) {
        console.error("Error fetching photo:", error)
        return NextResponse.json(
            { error: "Failed to fetch photo" },
            { status: 500 }
        )
    }
} 