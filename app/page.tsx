import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ModeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="w-full bg-secondary-background border-b-2 border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-main to-main/80 bg-clip-text text-transparent">
                After5
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-foreground">.nyc</span>
              <span className="ml-1 text-xl sm:text-2xl">🌆</span>
            </div>
          </div>

          {/* Right side buttons - hidden on mobile */}
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="neutral" size="sm">Sign In</Button>
            <ModeToggle />
          </div>

          {/* Mobile menu button - shown only on mobile */}
          <div className="sm:hidden">
            <Button variant="neutral" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 bg-secondary-background p-4 sm:p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12">
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Find Your Perfect After Work Crowd</h2>
            <p className="text-lg sm:text-xl max-w-2xl mb-6 sm:mb-8">
              Connect with like-minded professionals in NYC who know how to unwind after a long day at work.
            </p>
            <Button size="lg" className="animate-bounce w-full sm:w-auto">
              Get Started
            </Button>
          </div>
          <div className="flex-1 w-full order-1 md:order-2">
            <div className="relative aspect-[4/3] w-full max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-main/20 to-main/10 rounded-lg"></div>
              <Image
                src="/bar-scene.jpg"
                alt="People enjoying drinks at a bar in NYC"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-secondary-background py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            <div className="p-4 sm:p-6 border-2 border-border rounded-lg text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Quick Questionnaire</h3>
              <p className="text-base sm:text-lg">Answer a few questions about your interests and preferences to help us match you with the perfect NYC crowd.</p>
            </div>
            
            <div className="p-4 sm:p-6 border-2 border-border rounded-lg text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Find Your Spot</h3>
              <p className="text-base sm:text-lg">Choose from our curated list of NYC&apos;s best venues that match your vibe and location preferences.</p>
            </div>
            
            <div className="p-4 sm:p-6 border-2 border-border rounded-lg text-center">
              <div className="text-4xl mb-4">🥂</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Meet & Mingle</h3>
              <p className="text-base sm:text-lg">Show up, relax, and connect with your matched group at the selected NYC venue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <div className="w-full bg-gradient-to-r from-main to-main/80 text-main-foreground py-6 sm:py-8 border-y-2 border-border">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl">🍹</span>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold">First Drink on Us!</span>
              <span className="text-sm sm:text-base">Limited time offer</span>
            </div>
          </div>
          <Button variant="reverse" size="lg" className="animate-pulse mt-4 sm:mt-0 sm:ml-6">
            Claim Now
          </Button>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="bg-secondary-background py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 border-2 border-border rounded-lg text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Single Event</h3>
              <p className="text-3xl sm:text-4xl font-bold mb-4">$9.99</p>
              <ul className="text-base sm:text-lg mb-6 space-y-2">
                <li>✓ One-time event access</li>
                <li>✓ Personalized matching</li>
                <li>✓ NYC venue selection</li>
              </ul>
              <Button variant="default" size="lg" className="w-full sm:w-auto">Get Started</Button>
            </div>
            
            <div className="p-6 sm:p-8 border-2 border-border rounded-lg text-center bg-main text-main-foreground">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Weekly Pass</h3>
              <p className="text-3xl sm:text-4xl font-bold mb-4">$19.99</p>
              <ul className="text-base sm:text-lg mb-6 space-y-2">
                <li>✓ 4 events per week</li>
                <li>✓ Priority matching</li>
                <li>✓ Premium NYC venues</li>
                <li>✓ Save 50% per event</li>
              </ul>
              <Button variant="reverse" size="lg" className="w-full sm:w-auto">Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-main text-main-foreground p-8 sm:p-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Join?</h3>
          <p className="text-lg sm:text-xl mb-8">Sign up now and start your NYC evening adventure!</p>
          <Button variant="reverse" size="lg" className="w-full sm:w-auto">
            Sign Up Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-secondary-background border-t-2 border-border p-4 sm:p-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-main to-main/80 bg-clip-text text-transparent">
                After5
              </span>
              <span className="text-lg sm:text-xl font-bold text-foreground">.nyc</span>
              <span className="ml-1">🌆</span>
            </div>
            <span className="text-sm sm:text-base">© 2025 After5.nyc</span>
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
