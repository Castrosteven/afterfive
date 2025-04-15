"use client";

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-toggle"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Logo from "@/components/logo"

export default function PhoneVerificationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="w-full bg-secondary-background border-b-2 border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <ModeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-secondary-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <CardHeader>
            <Button
              
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
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/60" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="pl-10 bg-background border-2 border-border"
                />
              </div>
            </div>

            {/* Verification Code Input */}
            <div className="space-y-2">
              <Label htmlFor="code">Verification Code</Label>
              <div className="grid grid-cols-6 gap-2">
                {[...Array(6)].map((_, i) => (
                  <Input
                    key={i}
                    id={`code-${i}`}
                    type="text"
                    maxLength={1}
                    className="text-center bg-background border-2 border-border"
                  />
                ))}
              </div>
            </div>

            {/* Resend Code */}
            <div className="text-center text-sm text-foreground/60">
              Didn&apos;t receive a code?{" "}
              <Button className="p-0 h-auto text-main hover:underline">
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