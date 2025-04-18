import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const supabase = await createClient();

    // Get the user from the auth server
    const { data: { user }, error } = await supabase.auth.getUser();

    // If there's an error or no user, redirect to sign in
    if (error || !user) {
        return NextResponse.redirect(new URL("/auth/signin", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/questionnaire/:path*",
        "/auth/phone",
        "/admin/:path*",
    ],
};