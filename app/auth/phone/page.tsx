"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PhoneVerificationPage() {
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
              <Button variant="neutral" className="p-0 h-auto text-main hover:underline">
                Resend
              </Button>
            </div>

            {/* Verify Button */}
            <Button className="w-full bg-main text-main-foreground hover:bg-main/90">
              Verify Phone
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
} 