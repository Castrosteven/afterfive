import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "@/components/theme-toggle"
import { 
  Wine, 
  Building2, 
  MapPin, 
  Calendar, 
  MessageSquare, 
  Users,
  Beer,
  Coffee,
  Martini,
  Building,
  CalendarDays,
  Clock4,
  Map,
  BriefcaseBusiness,
  MessageSquareMore
} from "lucide-react"
import { redirect } from "next/navigation"

export default function QuestionnairePage() {
  async function handleSubmit(formData: FormData) {
    "use server"
    
    // Here you would typically:
    // 1. Validate the form data
    // These variables will be used for data processing and storage in the future
    const age = formData.get("age")
    const venueTypes = formData.getAll("venueTypes")
    const preferredDays = formData.getAll("preferredDays")
    const preferredTime = formData.get("preferredTime")
    const industry = formData.get("industry")
    const topics = formData.getAll("topics")
    const preferredAreas = formData.getAll("preferredAreas")
    
    // 2. Store the user preferences
    // 3. Process the matching algorithm
    // 4. Redirect to results page
    
    redirect("/questionnaire/results")
  }

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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Find Your Perfect Match</h1>
            <p className="text-lg text-foreground/80">Tell us your preferences to find the right crowd and venues</p>
          </div>

          <form action={handleSubmit} className="space-y-8">
            {/* Age Range Section */}
            <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Age Range
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["21-25", "26-30", "31-35", "36+"].map((range) => (
                    <label key={range} className="relative">
                      <input type="radio" name="age" value={range} className="peer sr-only" required />
                      <div className="flex items-center justify-center p-3 border-2 border-border rounded-lg bg-background cursor-pointer hover:bg-main/10 peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-colors">
                        <span className="text-lg font-medium">{range}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* Preferences Section */}
            <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Wine className="w-6 h-6" />
                Venue Types
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { name: "Cocktail Bar", icon: Martini },
                    { name: "Rooftop", icon: Building2 },
                    { name: "Speakeasy", icon: Building },
                    { name: "Sports Bar", icon: Beer },
                    { name: "Wine Bar", icon: Wine },
                    { name: "Brewery", icon: Beer },
                    { name: "Cafe", icon: Coffee }
                  ].map(({ name, icon: Icon }) => (
                    <label key={name} className="relative">
                      <input type="checkbox" name="venueTypes" value={name} className="peer sr-only" />
                      <div className="flex items-center justify-center gap-2 p-3 border-2 border-border rounded-lg bg-background cursor-pointer hover:bg-main/10 peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-colors">
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{name}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* Schedule Section */}
            <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CalendarDays className="w-6 h-6" />
                Schedule
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Preferred Days
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <label key={day} className="relative">
                        <input type="checkbox" name="preferredDays" value={day} className="peer sr-only" />
                        <div className="flex items-center justify-center p-3 border-2 border-border rounded-lg bg-background cursor-pointer hover:bg-main/10 peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-colors">
                          <span className="font-medium">{day}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Clock4 className="w-5 h-5" />
                    Preferred Time
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["5-7 PM", "7-9 PM", "9-11 PM", "11 PM+", "Flexible"].map((time) => (
                      <label key={time} className="relative">
                        <input type="radio" name="preferredTime" value={time} className="peer sr-only" required />
                        <div className="flex items-center justify-center p-3 border-2 border-border rounded-lg bg-background cursor-pointer hover:bg-main/10 peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-colors">
                          <span className="font-medium">{time}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Interests Section */}
            <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquareMore className="w-6 h-6" />
                Interests
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <BriefcaseBusiness className="w-5 h-5" />
                    Industry
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Tech", "Finance", "Healthcare", "Education", "Creative", "Other"].map((industry) => (
                      <label key={industry} className="relative">
                        <input type="radio" name="industry" value={industry} className="peer sr-only" required />
                        <div className="flex items-center justify-center p-3 border-2 border-border rounded-lg bg-background cursor-pointer hover:bg-main/10 peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-colors">
                          <span className="font-medium">{industry}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Topics
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Tech", "Sports", "Travel", "Food", "Art", "Music", "Politics", "Business", "Fashion"].map((topic) => (
                      <label key={topic} className="relative">
                        <input type="checkbox" name="topics" value={topic} className="peer sr-only" />
                        <div className="flex items-center justify-center p-3 border-2 border-border rounded-lg bg-background cursor-pointer hover:bg-main/10 peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-colors">
                          <span className="font-medium">{topic}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Location Section */}
            <section className="bg-secondary-background p-6 rounded-lg border-2 border-border">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Map className="w-6 h-6" />
                Location
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Preferred Areas
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Manhattan", "Brooklyn", "Queens", "Williamsburg", "Lower East Side", "Midtown"].map((area) => (
                      <label key={area} className="relative">
                        <input type="checkbox" name="preferredAreas" value={area} className="peer sr-only" />
                        <div className="flex items-center justify-center p-3 border-2 border-border rounded-lg bg-background cursor-pointer hover:bg-main/10 peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-colors">
                          <span className="font-medium">{area}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Find My Matches
              </Button>
            </div>
          </form>
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