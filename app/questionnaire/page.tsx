"use client";

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
  MessageSquareMore,
  LogIn,
  AlertCircle
} from "lucide-react"
import Logo from "@/components/logo"
import { useState } from "react"
import { submitQuestionnaire } from "@/app/actions/questionnaire"

export default function QuestionnairePage() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [selections, setSelections] = useState({
    venueTypes: 0,
    preferredDays: 0,
    topics: 0,
    preferredAreas: 0
  })

  async function handleSubmit(formData: FormData) {
    const result = await submitQuestionnaire(formData);
    if (result?.errors) {
      setErrors(result.errors);
    }
  }

  function handleSelectionChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;
    setSelections(prev => ({
      ...prev,
      [name]: checked ? prev[name as keyof typeof prev] + 1 : prev[name as keyof typeof prev] - 1
    }));
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="w-full bg-secondary-background border-b-2 border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Logo/>
          <div className="hidden sm:flex items-center gap-4">
            <Button 
              variant="neutral" 
              size="sm"
              className="border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
              asChild
            >
              <Link href="/questionnaire">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Link>
            </Button>
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
            <section className="bg-secondary-background p-6 rounded-lg border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Age Range <span className="text-sm font-normal text-foreground/60">(required)</span>
              </h2>
              {errors.age && (
                <div className="flex items-center gap-2 text-red-500 mb-4">
                  <AlertCircle className="w-5 h-5" />
                  <span>{errors.age}</span>
                </div>
              )}
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["21-25", "26-30", "31-35", "36+"].map((range) => (
                    <label key={range} className="relative">
                      <input type="radio" name="age" value={range} className="peer sr-only" required />
                      <div className={`flex items-center justify-center p-3 border-2 rounded-lg bg-background cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-all ${errors.age ? 'border-red-500' : 'border-border'}`}>
                        <span className="text-lg font-medium">{range}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* Venue Types Section */}
            <section className="bg-secondary-background p-6 rounded-lg border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Building2 className="w-6 h-6" />
                Venue Types <span className="text-sm font-normal text-foreground/60">(minimum 1)</span>
                <span className="ml-auto text-sm font-medium">{selections.venueTypes} selected</span>
              </h2>
              {errors.venueTypes && (
                <div className="flex items-center gap-2 text-red-500 mb-4">
                  <AlertCircle className="w-5 h-5" />
                  <span>{errors.venueTypes}</span>
                </div>
              )}
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { icon: <Wine className="w-5 h-5" />, label: "Wine Bar" },
                    { icon: <Beer className="w-5 h-5" />, label: "Brewery" },
                    { icon: <Coffee className="w-5 h-5" />, label: "Coffee Shop" },
                    { icon: <Martini className="w-5 h-5" />, label: "Cocktail Bar" },
                    { icon: <Building className="w-5 h-5" />, label: "Rooftop" },
                    { icon: <MapPin className="w-5 h-5" />, label: "Speakeasy" }
                  ].map(({ icon, label }) => (
                    <label key={label} className="relative">
                      <input 
                        type="checkbox" 
                        name="venueTypes" 
                        value={label} 
                        className="peer sr-only" 
                        onChange={handleSelectionChange}
                      />
                      <div className={`flex items-center justify-center gap-2 p-3 border-2 rounded-lg bg-background cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-all ${errors.venueTypes ? 'border-red-500' : 'border-border'}`}>
                        {icon}
                        <span className="font-medium">{label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* Schedule Section */}
            <section className="bg-secondary-background p-6 rounded-lg border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CalendarDays className="w-6 h-6" />
                Schedule
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Preferred Days <span className="text-sm font-normal text-foreground/60">(minimum 1)</span>
                    <span className="ml-auto text-sm font-medium">{selections.preferredDays} selected</span>
                  </h3>
                  {errors.preferredDays && (
                    <div className="flex items-center gap-2 text-red-500 mb-4">
                      <AlertCircle className="w-5 h-5" />
                      <span>{errors.preferredDays}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <label key={day} className="relative">
                        <input 
                          type="checkbox" 
                          name="preferredDays" 
                          value={day} 
                          className="peer sr-only" 
                          onChange={handleSelectionChange}
                        />
                        <div className={`flex items-center justify-center p-3 border-2 rounded-lg bg-background cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-all ${errors.preferredDays ? 'border-red-500' : 'border-border'}`}>
                          <span className="font-medium">{day}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Clock4 className="w-5 h-5" />
                    Preferred Time <span className="text-sm font-normal text-foreground/60">(required)</span>
                  </h3>
                  {errors.preferredTime && (
                    <div className="flex items-center gap-2 text-red-500 mb-4">
                      <AlertCircle className="w-5 h-5" />
                      <span>{errors.preferredTime}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["5-7 PM", "7-9 PM", "9-11 PM", "11 PM+", "Flexible"].map((time) => (
                      <label key={time} className="relative">
                        <input type="radio" name="preferredTime" value={time} className="peer sr-only" required />
                        <div className={`flex items-center justify-center p-3 border-2 rounded-lg bg-background cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-all ${errors.preferredTime ? 'border-red-500' : 'border-border'}`}>
                          <span className="font-medium">{time}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Interests Section */}
            <section className="bg-secondary-background p-6 rounded-lg border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquareMore className="w-6 h-6" />
                Interests
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <BriefcaseBusiness className="w-5 h-5" />
                    Industry <span className="text-sm font-normal text-foreground/60">(required)</span>
                  </h3>
                  {errors.industry && (
                    <div className="flex items-center gap-2 text-red-500 mb-4">
                      <AlertCircle className="w-5 h-5" />
                      <span>{errors.industry}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Tech", "Finance", "Healthcare", "Education", "Creative", "Other"].map((industry) => (
                      <label key={industry} className="relative">
                        <input type="radio" name="industry" value={industry} className="peer sr-only" required />
                        <div className={`flex items-center justify-center p-3 border-2 rounded-lg bg-background cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-all ${errors.industry ? 'border-red-500' : 'border-border'}`}>
                          <span className="font-medium">{industry}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Topics <span className="text-sm font-normal text-foreground/60">(minimum 1)</span>
                    <span className="ml-auto text-sm font-medium">{selections.topics} selected</span>
                  </h3>
                  {errors.topics && (
                    <div className="flex items-center gap-2 text-red-500 mb-4">
                      <AlertCircle className="w-5 h-5" />
                      <span>{errors.topics}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Tech", "Sports", "Travel", "Food", "Art", "Music", "Politics", "Business", "Fashion"].map((topic) => (
                      <label key={topic} className="relative">
                        <input 
                          type="checkbox" 
                          name="topics" 
                          value={topic} 
                          className="peer sr-only" 
                          onChange={handleSelectionChange}
                        />
                        <div className={`flex items-center justify-center p-3 border-2 rounded-lg bg-background cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-all ${errors.topics ? 'border-red-500' : 'border-border'}`}>
                          <span className="font-medium">{topic}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Location Section */}
            <section className="bg-secondary-background p-6 rounded-lg border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Map className="w-6 h-6" />
                Location
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Preferred Areas <span className="text-sm font-normal text-foreground/60">(minimum 1)</span>
                    <span className="ml-auto text-sm font-medium">{selections.preferredAreas} selected</span>
                  </h3>
                  {errors.preferredAreas && (
                    <div className="flex items-center gap-2 text-red-500 mb-4">
                      <AlertCircle className="w-5 h-5" />
                      <span>{errors.preferredAreas}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Manhattan", "Brooklyn", "Queens", "Williamsburg", "Lower East Side", "Midtown"].map((area) => (
                      <label key={area} className="relative">
                        <input 
                          type="checkbox" 
                          name="preferredAreas" 
                          value={area} 
                          className="peer sr-only" 
                          onChange={handleSelectionChange}
                        />
                        <div className={`flex items-center justify-center p-3 border-2 rounded-lg bg-background cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-all ${errors.preferredAreas ? 'border-red-500' : 'border-border'}`}>
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
              <Button 
                type="submit"
                className="bg-main text-main-foreground hover:bg-main/90 border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Find My Match
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