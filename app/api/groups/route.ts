import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import prisma from "@/utils/prisma";

export async function GET() {
    try {
        // Get the current user from Supabase
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Get the user from our database
        const dbUser = await prisma.user.findUnique({
            where: { supabaseId: user.id }
        });

        if (!dbUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Get the user's group membership
        const groupMembership = await prisma.groupMember.findFirst({
            where: {
                userId: dbUser.id
            },
            include: {
                group: {
                    include: {
                        members: {
                            include: {
                                user: true
                            }
                        }
                    }
                }
            }
        });

        if (!groupMembership) {
            return NextResponse.json({ error: "No group found" }, { status: 404 });
        }

        // Format the response
        const group = {
            id: groupMembership.group.id,
            name: groupMembership.group.name,
            venue: groupMembership.group.venue,
            dateTime: groupMembership.group.dateTime,
            members: groupMembership.group.members.map(member => ({
                id: member.user.id,
                name: member.user.name,
                email: member.user.email
            }))
        };

        return NextResponse.json({ group });
    } catch (error) {
        console.error("Error fetching group:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
} 