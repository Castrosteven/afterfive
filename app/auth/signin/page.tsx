"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { useState } from "react"
import { toast } from "@/components/ui/sonner"

export default function SignInPage() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const supabase = createClient();

  const handlePhoneSignIn = async () => {
    try {
      setIsLoading(true);
      console.log("Starting phone sign-in process...");
      console.log("Input phone number:", phoneNumber);
      
      // Format phone number to E.164 format
      const formattedPhone = phoneNumber.startsWith("+") 
        ? phoneNumber 
        : `+1${phoneNumber.replace(/\D/g, "")}`;
      
      console.log("Formatted phone number:", formattedPhone);
      console.log("Supabase client initialized:", !!supabase);

      const { data, error } = await supabase.auth.signInWithOtp({
        phone: formattedPhone,
        options: {
          channel: "sms"
        }
      });

      console.log("Supabase response:", { data, error });

      if (error) {
        console.error("Supabase error details:", {
          message: error.message,
          status: error.status,
          name: error.name
        });
        throw error;
      }

      console.log("OTP sent successfully");
      toast.success("Verification code sent!");
      router.push(`/auth/phone?phone=${encodeURIComponent(formattedPhone)}`);
    } catch (error) {
      console.error("Error in phone sign-in:", error);
      toast.error("Failed to send verification code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsGoogleLoading(true);
      console.log("Starting Google sign-in process...");

      // Get the base URL based on the environment
      const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : window.location.origin;

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${baseUrl}/auth/callback`
        }
      });

      console.log("Supabase Google auth response:", { data, error });

      if (error) {
        console.error("Google auth error details:", {
          message: error.message,
          status: error.status,
          name: error.name
        });
        throw error;
      }

      // The redirect will be handled by the callback route
    } catch (error) {
      console.error("Error in Google sign-in:", error);
      toast.error("Failed to sign in with Google. Please try again.");
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-secondary-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Phone Input */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/60" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="pl-10 bg-background border-2 border-border"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            {/* Sign In Button */}
            <Button 
              className="w-full bg-main text-main-foreground hover:bg-main/90"
              onClick={handlePhoneSignIn}
              disabled={isLoading || !phoneNumber}
            >
              <Phone className="w-4 h-4 mr-2" />
              {isLoading ? "Sending Code..." : "Sign In with Phone"}
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-secondary-background px-2 text-foreground/60">Or continue with</span>
              </div>
            </div>

            {/* Google Sign In */}
            <Button 
              variant="neutral" 
              className="w-full border-2 border-border"
              onClick={handleGoogleSignIn}
              disabled={isGoogleLoading}
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              {isGoogleLoading ? "Signing in..." : "Sign in with Google"}
            </Button>

            {/* Sign Up Link */}
            <div className="text-center text-sm text-foreground/60">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="text-main hover:underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
} 