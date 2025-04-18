"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Wine,
  X,
  CalendarClock,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { User as SupabaseUser } from "@supabase/supabase-js";

export default function DashboardPage() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        if (error) throw error;
        setUser(user);
      } catch (error) {
        console.error("Error checking auth:", error);
        router.push("/auth/signin");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [supabase.auth, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-main mx-auto mb-4"></div>
          <p className="text-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold">My Events</h1>
            <Button variant="neutral" size="lg" asChild>
              <Link href="/questionnaire">Find New Events</Link>
            </Button>
          </div>

          {/* Upcoming Events */}
          <div className="space-y-6">
            <div className="bg-secondary-background p-6 rounded-lg border-2 border-border">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Event Image */}
                <div className="w-full sm:w-48 h-48 bg-main/20 rounded-lg flex items-center justify-center">
                  <Wine className="w-16 h-16 text-main" />
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold">The Loft Bar</h2>
                      <p className="text-foreground/80">
                        Cocktail Bar • Rooftop
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="neutral"
                        size="sm"
                        className="text-destructive"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                      <Button variant="neutral" size="sm">
                        <CalendarClock className="w-4 h-4 mr-2" />
                        Reschedule
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>Thursday, May 16</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>7:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      <span>Lower East Side</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span>4 people • Tech & Creative Professionals</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-foreground/60">
                        Booking ID: #AF5-2024-1234
                      </span>
                    </div>
                    <Button variant="neutral" size="sm" asChild>
                      <Link href="/dashboard/event-details">
                        View Details
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Events Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Past Events</h2>
              <div className="bg-secondary-background p-6 rounded-lg border-2 border-border opacity-60">
                <div className="flex items-center justify-center h-32">
                  <p className="text-foreground/60">No past events yet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
