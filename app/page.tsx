"use client";

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { VenueCarousel } from "@/components/venue-carousel"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, MapPin, LogIn } from "lucide-react"
import { DrinkModal } from "@/components/drink-modal"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import Logo from "@/components/logo";
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="w-full bg-secondary-background border-b-2 border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
         <Logo/>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <Button 
              variant="neutral" 
              size="sm"
              onClick={() => router.push("/questionnaire")}
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-background/95 z-50">
          <div className="flex flex-col items-center justify-center h-full gap-4 p-4">
            <Button variant="neutral" size="lg" className="w-full">Sign In</Button>
            <ModeToggle />
            <Button 
              variant="neutral" 
              size="lg" 
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Close Menu
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="w-full py-20 px-4 text-center bg-gradient-to-b from-background to-secondary-background">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Meet <span className="text-main animate-gradient-x bg-gradient-to-r from-main via-main-foreground to-main bg-clip-text text-transparent">Strangers</span>{" "}
          <br className="hidden md:block" />
          at NYC&apos;s Best Venues
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
          Join spontaneous gatherings at curated venues. No planning needed - just show up and connect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:400ms]">
          <Button onClick={()=>{
            router.push("/questionnaire")
          }} size="lg" className="bg-main text-main-foreground hover:bg-main/90">
            Find a Gathering
          </Button>
         
        </div>
      </section>

      {/* Venue Carousel Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Venues</h2>
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
                <CardTitle className="text-foreground">Find a Gathering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/60">
                  Browse upcoming gatherings at NYC&apos;s best venues. Filter by location, time, or venue type.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-main/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-main" />
                </div>
                <CardTitle className="text-foreground">Join the Group</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/60">
                  RSVP to join the gathering. You&apos;ll get venue details and can chat with others who are coming.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-main/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-main" />
                </div>
                <CardTitle className="text-foreground">Meet & Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/60">
                  Show up at the venue and meet new people. Our hosts will help break the ice and get conversations flowing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-16 px-4 bg-primary-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Choose Your Plan</h2>
          <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
            Join spontaneous gatherings with our flexible pricing options
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-secondary-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Single Event</CardTitle>
                <p className="text-foreground/60">Perfect for trying out</p>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4 text-main">$9.99</div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-main">✓</span>
                    <span className="text-foreground">One-time event access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-main">✓</span>
                    <span className="text-foreground">Personalized matching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-main">✓</span>
                    <span className="text-foreground">NYC venue selection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-main">✓</span>
                    <span className="text-foreground">First drink on us!</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-main text-main-foreground hover:bg-main/90 transition-colors">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-secondary-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Weekly Pass</CardTitle>
                <p className="text-foreground/60">For regular socializers</p>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4 text-main">$19.99<span className="text-lg text-foreground/60">/month</span></div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-main">✓</span>
                    <span className="text-foreground">4 events per week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-main">✓</span>
                    <span className="text-foreground">Priority matching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-main">✓</span>
                    <span className="text-foreground">Premium NYC venues</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-main">✓</span>
                    <span className="text-foreground">Save 50% per event</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-main">✓</span>
                    <span className="text-foreground">First drink on us!</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-main text-main-foreground hover:bg-main/90 transition-colors">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Drink Modal */}
      <DrinkModal isOpen={showModal} onClose={() => setShowModal(false)} />

      {/* Footer */}
      <footer className="w-full bg-secondary-background border-t-2 border-border p-4 sm:p-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
           <Logo/>
            <span className="text-sm sm:text-base text-foreground/60">© 2025</span>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <Button variant="neutral" className="text-sm sm:text-base" asChild>
              <Link href="/privacy">Privacy</Link>
            </Button>
            <Button variant="neutral" className="text-sm sm:text-base" asChild>
              <Link href="/terms">Terms</Link>
            </Button>
            <Button variant="neutral" className="text-sm sm:text-base" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
