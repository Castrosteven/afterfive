import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "@/components/theme-toggle"
import { 
  MapPin,
  Calendar,
  Clock,
  Users,
  Wine,
  CreditCard,
  Shield
} from "lucide-react"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="w-full bg-secondary-background border-b-2 border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-main to-main/80 bg-clip-text text-transparent">
                After5
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-foreground">.nyc</span>
              <span className="ml-1 text-xl sm:text-2xl">🌆</span>
            </div>
          </Link>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="neutral" size="sm">Sign In</Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Confirm Your Event</h1>
            <p className="text-lg text-foreground/80">Review your event details and complete your booking</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event Details */}
            <div className="space-y-8">
              <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Wine className="w-6 h-6" />
                  Event Details
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 bg-main/20 rounded-lg flex items-center justify-center">
                      <Wine className="w-12 h-12 text-main" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">The Loft Bar</h3>
                      <p className="text-foreground/80">Cocktail Bar • Rooftop</p>
                      <div className="flex items-center gap-2 mt-2">
                        <MapPin className="w-4 h-4" />
                        <span>Lower East Side</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>Thursday, May 16</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>7:00 PM</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Group Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Tech & Creative Professionals</h3>
                    <p className="text-foreground/80">4 people • Similar interests</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span>👥 26-30 years old</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Common Interests:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-main/10 rounded-full text-sm">Tech</span>
                      <span className="px-3 py-1 bg-main/10 rounded-full text-sm">Art</span>
                      <span className="px-3 py-1 bg-main/10 rounded-full text-sm">Travel</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Payment Section */}
            <div className="space-y-8">
              <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CreditCard className="w-6 h-6" />
                  Payment Details
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Event Fee</span>
                    <span className="font-bold">$9.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Service Fee</span>
                    <span className="font-bold">$1.00</span>
                  </div>
                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Total</span>
                      <span className="text-xl font-bold">$10.99</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border-2 border-border rounded-lg cursor-pointer hover:bg-main/10">
                    <CreditCard className="w-6 h-6" />
                    <span className="font-medium">Credit Card</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 border-2 border-border rounded-lg cursor-pointer hover:bg-main/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    <span className="font-medium">Apple Pay</span>
                  </div>
                </div>
              </section>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <Button size="lg" className="w-full">
                  Complete Booking
                </Button>
                <Button variant="neutral" size="lg" className="w-full" asChild>
                  <Link href="/questionnaire/results">
                    Back to Results
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

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