import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");

    if (code) {
        const supabase = await createClient();

        try {
            const { error } = await supabase.auth.exchangeCodeForSession(code);

            if (error) {
                console.error("Error exchanging code for session:", error);
                return NextResponse.redirect(`${requestUrl.origin}/auth/signin?error=Authentication failed`);
            }

            return NextResponse.redirect(`${requestUrl.origin}/dashboard`);
        } catch (error) {
            console.error("Error in callback route:", error);
            return NextResponse.redirect(`${requestUrl.origin}/auth/signin?error=Authentication failed`);
        }
    }

    // Return the user to the sign-in page if there's no code
    return NextResponse.redirect(`${requestUrl.origin}/auth/signin`);
} 