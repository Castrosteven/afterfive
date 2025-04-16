"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { createClient } from "@/utils/supabase/client"
import { useState, useEffect } from "react"
import { toast } from "@/components/ui/sonner"

export default function PhoneVerificationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [phone, setPhone] = useState<string | null>(null);
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const phoneFromUrl = searchParams.get("phone");
    if (phoneFromUrl) {
      console.log("Setting phone from URL:", phoneFromUrl);
      setPhone(phoneFromUrl);
    } else {
      console.log("No phone number found in URL, redirecting to sign-in");
      router.push("/auth/signin");
    }
  }, [searchParams, router]);

  const handleVerify = async () => {
    if (!phone) {
      console.error("No phone number available for verification");
      toast.error("Phone number not found. Please try signing in again.");
      router.push("/auth/signin");
      return;
    }

    try {
      setIsLoading(true);
      console.log("Starting verification process...");
      console.log("OTP entered:", otp);
      console.log("Phone number:", phone);

      const { data, error } = await supabase.auth.verifyOtp({
        phone: phone,
        token: otp,
        type: "sms"
      });

      console.log("Supabase verification response:", { data, error });

      if (error) {
        if (error.message.includes("expired") || error.message.includes("invalid")) {
          console.error("Token expired or invalid, requesting new code");
          toast.error("Code expired. Please request a new code.");
          setOtp(""); // Clear the OTP input
          return;
        }
        throw error;
      }

      console.log("Phone number verified successfully");
      toast.success("Phone number verified!");
      router.push("/dashboard");
    } catch (error) {
      console.error("Error verifying phone:", error);
      toast.error("Invalid verification code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (!phone) {
      console.error("No phone number available for resend");
      toast.error("Phone number not found. Please try signing in again.");
      router.push("/auth/signin");
      return;
    }

    try {
      setIsLoading(true);
      console.log("Resending verification code...");
      console.log("Phone number:", phone);

      const { data, error } = await supabase.auth.signInWithOtp({
        phone: phone,
        options: {
          channel: "sms"
        }
      });

      console.log("Supabase resend response:", { data, error });

      if (error) {
        throw error;
      }

      console.log("New verification code sent successfully");
      toast.success("New verification code sent!");
      setOtp(""); // Clear the OTP input
    } catch (error) {
      console.error("Error resending code:", error);
      toast.error("Failed to resend verification code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!phone) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-secondary-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader>
            <Button
              variant="neutral"
              className="absolute left-4 top-4 p-2 hover:bg-background"
              asChild
            >
              <Link href="/auth/signin">
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </Button>
            <CardTitle className="text-2xl font-bold text-center">Phone Verification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Phone Input */}
            <div className="space-y-2">
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/60" />
                <InputOTP
                  maxLength={6}
                  className="w-full justify-center"
                  containerClassName="group flex items-center has-[:disabled]:opacity-50"
                  value={otp}
                  onChange={setOtp}
                >
                  <InputOTPGroup className="flex gap-2">
                    <InputOTPSlot
                      index={0}
                      className="w-12 h-12 text-2xl border-2 border-border bg-background"
                    />
                    <InputOTPSlot
                      index={1}
                      className="w-12 h-12 text-2xl border-2 border-border bg-background"
                    />
                    <InputOTPSlot
                      index={2}
                      className="w-12 h-12 text-2xl border-2 border-border bg-background"
                    />
                    <InputOTPSlot
                      index={3}
                      className="w-12 h-12 text-2xl border-2 border-border bg-background"
                    />
                    <InputOTPSlot
                      index={4}
                      className="w-12 h-12 text-2xl border-2 border-border bg-background"
                    />
                    <InputOTPSlot
                      index={5}
                      className="w-12 h-12 text-2xl border-2 border-border bg-background"
                    />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>

            {/* Resend Code */}
            <div className="text-center text-sm text-foreground/60">
              Didn&apos;t receive a code?{" "}
              <Button 
                variant="neutral" 
                className="p-0 h-auto text-main hover:underline"
                onClick={handleResend}
                disabled={isLoading}
              >
                Resend
              </Button>
            </div>

            {/* Verify Button */}
            <Button 
              className="w-full bg-main text-main-foreground hover:bg-main/90"
              onClick={handleVerify}
              disabled={isLoading || otp.length !== 6}
            >
              {isLoading ? "Verifying..." : "Verify Phone"}
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
} 