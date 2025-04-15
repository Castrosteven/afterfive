import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "@/components/theme-toggle"
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Wine,
  X,
  CalendarClock,
  ChevronRight
} from "lucide-react"

export default function DashboardPage() {
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
            <Button variant="neutral" size="sm">Sign Out</Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold">My Events</h1>
            <Button variant="neutral" size="lg" asChild>
              <Link href="/questionnaire">
                Find New Events
              </Link>
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
                      <p className="text-foreground/80">Cocktail Bar • Rooftop</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="neutral" size="sm" className="text-destructive">
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
                      <span className="text-sm text-foreground/60">Booking ID: #AF5-2024-1234</span>
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