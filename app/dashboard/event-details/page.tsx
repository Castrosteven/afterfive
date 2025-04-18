"use client";

import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Wine,
  X,
  CalendarClock,
  MessageSquare,
  Share2,
  Map,
  Phone,
  Globe,
  Mail,
  Receipt,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function EventDetailsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Button
              variant="neutral"
              className="border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              onClick={() => router.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>

          {/* Event Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">The Loft Bar</h1>
              <p className="text-lg text-foreground/80">
                Cocktail Bar • Rooftop
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="neutral" size="sm" className="text-destructive">
                <X className="w-4 h-4 mr-2" />
                Cancel Event
              </Button>
              <Button variant="neutral" size="sm">
                <CalendarClock className="w-4 h-4 mr-2" />
                Reschedule
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Event Image */}
              <div className="w-full h-64 bg-main/20 rounded-lg flex items-center justify-center">
                <Wine className="w-24 h-24 text-main" />
              </div>

              {/* Event Details */}
              <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
                <h2 className="text-2xl font-bold mb-6">Event Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6" />
                    <div>
                      <p className="text-foreground/60">Date</p>
                      <p className="font-medium">Thursday, May 16, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6" />
                    <div>
                      <p className="text-foreground/60">Time</p>
                      <p className="font-medium">7:00 PM - 10:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    <div>
                      <p className="text-foreground/60">Location</p>
                      <p className="font-medium">Lower East Side, NYC</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6" />
                    <div>
                      <p className="text-foreground/60">Group Size</p>
                      <p className="font-medium">4 people</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Group Details */}
              <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
                <h2 className="text-2xl font-bold mb-6">Group Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Tech & Creative Professionals
                    </h3>
                    <p className="text-foreground/80">
                      A group of like-minded professionals interested in tech,
                      art, and networking
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Common Interests:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-main/10 rounded-full text-sm">
                        Tech
                      </span>
                      <span className="px-3 py-1 bg-main/10 rounded-full text-sm">
                        Art
                      </span>
                      <span className="px-3 py-1 bg-main/10 rounded-full text-sm">
                        Travel
                      </span>
                      <span className="px-3 py-1 bg-main/10 rounded-full text-sm">
                        Networking
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Age Range:</h4>
                    <p>26-30 years old</p>
                  </div>
                </div>
              </section>

              {/* Venue Details */}
              <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
                <h2 className="text-2xl font-bold mb-6">Venue Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Map className="w-6 h-6" />
                    <p>123 Rooftop Ave, New York, NY 10002</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6" />
                    <p>(212) 555-0123</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6" />
                    <a href="#" className="text-main hover:underline">
                      www.theloftbar.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6" />
                    <a href="#" className="text-main hover:underline">
                      info@theloftbar.com
                    </a>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Details */}
              <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
                <h2 className="text-2xl font-bold mb-6">Booking Details</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Booking ID</span>
                    <span className="font-medium">#AF5-2024-1234</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status</span>
                    <span className="font-medium text-main">Confirmed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Method</span>
                    <span className="font-medium">Credit Card</span>
                  </div>
                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex justify-between">
                      <span>Total Paid</span>
                      <span className="font-bold">$10.99</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Quick Actions */}
              <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
                <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
                <div className="space-y-3">
                  <Button
                    variant="neutral"
                    className="w-full justify-start"
                    size="lg"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Message Group
                  </Button>
                  <Button
                    variant="neutral"
                    className="w-full justify-start"
                    size="lg"
                  >
                    <Share2 className="w-5 h-5 mr-2" />
                    Share Event
                  </Button>
                  <Button
                    variant="neutral"
                    className="w-full justify-start"
                    size="lg"
                  >
                    <Receipt className="w-5 h-5 mr-2" />
                    View Receipt
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
