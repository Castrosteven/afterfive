import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import prisma from "@/utils/prisma";

export async function POST(request: Request) {
    try {
        // Get the current user from Supabase
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Get the form data from the request
        const formData = await request.json();
        console.log("Form data received:", formData);

        // Get the user from our database
        const dbUser = await prisma.user.findUnique({
            where: { supabaseId: user.id }
        });

        if (!dbUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Upsert the questionnaire response
        const questionnaireResponse = await prisma.questionnaireResponse.upsert({
            where: {
                userId: dbUser.id
            },
            update: {
                ageRange: formData.age,
                industry: formData.industry,
                preferredTime: formData.preferredTime,
                venueTypes: formData.venueTypes,
                preferredDays: formData.preferredDays,
                topics: formData.topics,
                preferredAreas: formData.preferredAreas,
            },
            create: {
                userId: dbUser.id,
                ageRange: formData.age,
                industry: formData.industry,
                preferredTime: formData.preferredTime,
                venueTypes: formData.venueTypes,
                preferredDays: formData.preferredDays,
                topics: formData.topics,
                preferredAreas: formData.preferredAreas,
            }
        });

        console.log("Questionnaire response upserted:", questionnaireResponse);

        // Find potential matches
        const potentialMatches = await prisma.questionnaireResponse.findMany({
            where: {
                userId: { not: dbUser.id }, // Exclude current user
                ageRange: formData.age,
                industry: formData.industry,
                preferredTime: formData.preferredTime,
                preferredDays: { hasSome: formData.preferredDays },
                topics: { hasSome: formData.topics },
                preferredAreas: { hasSome: formData.preferredAreas },
                venueTypes: { hasSome: formData.venueTypes },
            },
            include: {
                user: true
            }
        });

        console.log("Potential matches found:", potentialMatches.length);

        // If we have enough matches (5 or more), create a group
        if (potentialMatches.length >= 2) {
            const group = await prisma.group.create({
                data: {
                    name: `Group ${new Date().toISOString()}`,
                    venue: "The Rooftop Bar", // This would be determined by your venue selection logic
                    dateTime: new Date(), // This would be determined by your scheduling logic
                    members: {
                        create: [
                            { userId: dbUser.id },
                            ...potentialMatches.slice(0, 5).map(match => ({
                                userId: match.userId
                            }))
                        ]
                    }
                },
                include: {
                    members: {
                        include: {
                            user: true
                        }
                    }
                }
            });

            console.log("Group created:", group);
            return NextResponse.json({ success: true, group });
        }

        return NextResponse.json({ success: true, message: "No matches found yet" });
    } catch (error) {
        console.error("Error processing questionnaire:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 