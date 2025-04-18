"use client";

import { Button } from "@/components/ui/button";
import { VenueCarousel } from "@/components/venue-carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, MapPin } from "lucide-react";
import { DrinkModal } from "@/components/drink-modal";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PaymentCards } from "@/components/payment-cards";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (hasShownModal) return;

      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show modal when user is near the bottom of the page
      if (scrollPosition >= documentHeight - 100) {
        setShowModal(true);
        setHasShownModal(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShownModal]);

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 px-4 text-center bg-gradient-to-b from-background to-secondary-background">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Meet{" "}
          <span className="animate-gradient-x bg-gradient-to-r from-main via-main-foreground to-main bg-clip-text text-transparent">
            Strangers
          </span>{" "}
          <br className="hidden md:block" />
          at NYC&apos;s Best Venues
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
          Join spontaneous gatherings at curated venues. No planning needed -
          just show up and connect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:400ms]">
          <Button
            onClick={() => {
              router.push("/questionnaire");
            }}
            size="lg"
            className="bg-main text-main-foreground hover:bg-main/90 border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            Find a Gathering
          </Button>
        </div>
      </section>

      {/* Venue Carousel Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Featured Venues
          </h2>
          <p className="text-foreground/60 text-center mb-8 max-w-2xl mx-auto">
            Discover NYC&apos;s most exciting spots for spontaneous gatherings
          </p>
          <VenueCarousel />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 px-4 bg-secondary-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
            Join spontaneous gatherings in three simple steps
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-secondary-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-main/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-main" />
                </div>
                <CardTitle className="text-foreground">
                  Find a Gathering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/60">
                  Browse upcoming gatherings at NYC&apos;s best venues. Filter
                  by location, time, or venue type.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-main/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-main" />
                </div>
                <CardTitle className="text-foreground">
                  Join the Group
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/60">
                  RSVP to join the gathering. You&apos;ll get venue details and
                  can chat with others who are coming.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-main/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-main" />
                </div>
                <CardTitle className="text-foreground">
                  Meet & Connect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/60">
                  Show up at the venue and meet new people. Our hosts will help
                  break the ice and get conversations flowing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-16 px-4 bg-primary-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Choose Your Plan
          </h2>
          <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
            Join spontaneous gatherings with our flexible pricing options
          </p>
          <PaymentCards location="landing" />
        </div>
      </section>

      {/* Drink Modal */}
      <DrinkModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
