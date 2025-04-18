"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import { PaymentCards } from "@/components/payment-cards";

export default function QuestionnaireResultsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="w-16 h-16 text-main" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Perfect Match Found!
            </h1>
            <p className="text-lg text-foreground/80">
              We&apos;ve found a group that matches your preferences perfectly.
            </p>
          </div>

          {/* Group Details */}
          <div className="bg-secondary-background p-6 rounded-lg border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Group Details</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-main" />
                    <span>The Rooftop Bar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-main" />
                    <span>Friday, 7:00 PM</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Group Members</h2>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-background px-3 py-2 rounded-full border border-border"
                    >
                      <Users className="w-4 h-4 text-main" />
                      <span>Member {index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Select a plan to join this gathering
            </p>
            <PaymentCards location="results" />
          </div>

          {/* Dashboard Link */}
          <div className="text-center">
            <Link href="/dashboard">
              <Button className="bg-main text-main-foreground hover:bg-main/90 border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
