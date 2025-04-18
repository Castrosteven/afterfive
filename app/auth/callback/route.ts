import { NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions
import { createClient } from '@/utils/supabase/server'
import prisma from '@/utils/prisma'
export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')

    console.log("code", code);
    // if "next" is in param, use it as the redirect URL
    const next = searchParams.get('next') ?? '/'
    if (code) {
        const supabase = await createClient()
        const { data: { session }, error } = await supabase.auth.exchangeCodeForSession(code)

        // Log the session and user information


        if (session?.user) {
            await prisma.user.upsert({
                where: {
                    supabaseId: session?.user.id
                },
                update: {
                    name: session?.user.user_metadata.name
                },
                create: {
                    supabaseId: session?.user.id,
                    name: session?.user.user_metadata.name,
                    email: session?.user.email ?? ''
                }
            })
            console.log("User created or updated:", session?.user.id)
        }

        if (!error) {
            const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
            const isLocalEnv = process.env.NODE_ENV === 'development'
            if (isLocalEnv) {
                // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
                return NextResponse.redirect(`${origin}${next}`)
            } else if (forwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}${next}`)
            } else {
                return NextResponse.redirect(`${origin}${next}`)
            }
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}