import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "@/components/theme-toggle"
import { 
  MapPin,
  Calendar,
  Clock,
  Users,
  Wine
} from "lucide-react"

export default function QuestionnaireResultsPage() {
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Perfect Matches Found!</h1>
            <p className="text-lg text-foreground/80">Here are the best venues and groups that match your preferences</p>
          </div>

          {/* Matches Section */}
          <div className="space-y-8">
            {/* Venue Match */}
            <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Wine className="w-6 h-6" />
                Recommended Venue
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
                    <span>Thursday</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>7:00 PM</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Group Match */}
            <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Matched Group
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-main/20 rounded-lg flex items-center justify-center">
                    <Users className="w-12 h-12 text-main" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Tech & Creative Professionals</h3>
                    <p className="text-foreground/80">4 people • Similar interests</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span>👥 26-30 years old</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-bold mb-2">Common Interests:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-main/10 rounded-full text-sm">Tech</span>
                    <span className="px-3 py-1 bg-main/10 rounded-full text-sm">Art</span>
                    <span className="px-3 py-1 bg-main/10 rounded-full text-sm">Travel</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/questionnaire/results/checkout">
                  Join This Event
                </Link>
              </Button>
              <Button variant="neutral" size="lg" className="w-full sm:w-auto">
                See More Options
              </Button>
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