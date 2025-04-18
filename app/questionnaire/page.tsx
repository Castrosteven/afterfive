"use client";

import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import { useState } from "react";
import { Footer } from "@/components/footer";

export default function QuestionnairePage() {
  const [selections, setSelections] = useState({
    venueTypes: 0,
    preferredDays: 0,
    topics: 0,
    preferredAreas: 0,
  });

  async function handleSubmit(formData: FormData) {
    //log field and value
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
  }

  function handleSelectionChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;
    setSelections((prev) => ({
      ...prev,
      [name]: checked
        ? prev[name as keyof typeof prev] + 1
        : prev[name as keyof typeof prev] - 1,
    }));
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Find Your Perfect Match
            </h1>
            <p className="text-lg text-foreground/80">
              Tell us your preferences to find the right crowd and venues
            </p>
          </div>

          <form action={handleSubmit} className="space-y-8">
            {/* Age Range Section */}
            <section className="bg-secondary-background p-6 rounded-lg border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Age Range{" "}
                <span className="text-sm font-normal text-foreground/60">
                  (required)
                </span>
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["21-25", "26-30", "31-35", "36+"].map((range) => (
                    <label key={range} className="relative">
                      <input
                        type="radio"
                        name="age"
                        value={range}
                        className="peer sr-only"
                        required
                      />
                      <div
                        className={`flex items-center justify-center p-3 border-2 rounded-lg bg-background cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-all`}
                      >
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
                Venue Types{" "}
                <span className="text-sm font-normal text-foreground/60">
                  (minimum 1)
                </span>
                <span className="ml-auto text-sm font-medium">
                  {selections.venueTypes} selected
                </span>
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { icon: <Wine className="w-5 h-5" />, label: "Wine Bar" },
                    { icon: <Beer className="w-5 h-5" />, label: "Brewery" },
                    {
                      icon: <Coffee className="w-5 h-5" />,
                      label: "Coffee Shop",
                    },
                    {
                      icon: <Martini className="w-5 h-5" />,
                      label: "Cocktail Bar",
                    },
                    {
                      icon: <Building className="w-5 h-5" />,
                      label: "Rooftop",
                    },
                    {
                      icon: <MapPin className="w-5 h-5" />,
                      label: "Speakeasy",
                    },
                  ].map(({ icon, label }) => (
                    <label key={label} className="relative">
                      <input
                        type="checkbox"
                        name="venueTypes"
                        value={label}
                        className="peer sr-only"
                        onChange={handleSelectionChange}
                      />
                      <div
                        className={`flex items-center justify-center gap-2 p-3 border-2 rounded-lg bg-background cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-all`}
                      >
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
                    Preferred Days{" "}
                    <span className="text-sm font-normal text-foreground/60">
                      (minimum 1)
                    </span>
                    <span className="ml-auto text-sm font-medium">
                      {selections.preferredDays} selected
                    </span>
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (day) => (
                        <label key={day} className="relative">
                          <input
                            type="checkbox"
                            name="preferredDays"
                            value={day}
                            className="peer sr-only"
                            onChange={handleSelectionChange}
                          />
                          <div
                            className={`flex items-center justify-center p-3 border-2 rounded-lg bg-background cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-all`}
                          >
                            <span className="font-medium">{day}</span>
                          </div>
                        </label>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Clock4 className="w-5 h-5" />
                    Preferred Time{" "}
                    <span className="text-sm font-normal text-foreground/60">
                      (required)
                    </span>
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["5-7 PM", "7-9 PM", "9-11 PM", "11 PM+", "Flexible"].map(
                      (time) => (
                        <label key={time} className="relative">
                          <input
                            type="radio"
                            name="preferredTime"
                            value={time}
                            className="peer sr-only"
                            required
                          />
                          <div
                            className={`flex items-center justify-center p-3 border-2 rounded-lg bg-background cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-all`}
                          >
                            <span className="font-medium">{time}</span>
                          </div>
                        </label>
                      )
                    )}
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
                    Industry{" "}
                    <span className="text-sm font-normal text-foreground/60">
                      (required)
                    </span>
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      "Tech",
                      "Finance",
                      "Healthcare",
                      "Education",
                      "Creative",
                      "Other",
                    ].map((industry) => (
                      <label key={industry} className="relative">
                        <input
                          type="radio"
                          name="industry"
                          value={industry}
                          className="peer sr-only"
                          required
                        />
                        <div
                          className={`flex items-center justify-center p-3 border-2 rounded-lg bg-background cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-all `}
                        >
                          <span className="font-medium">{industry}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Topics{" "}
                    <span className="text-sm font-normal text-foreground/60">
                      (minimum 1)
                    </span>
                    <span className="ml-auto text-sm font-medium">
                      {selections.topics} selected
                    </span>
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      "Tech",
                      "Sports",
                      "Travel",
                      "Food",
                      "Art",
                      "Music",
                      "Politics",
                      "Business",
                      "Fashion",
                    ].map((topic) => (
                      <label key={topic} className="relative">
                        <input
                          type="checkbox"
                          name="topics"
                          value={topic}
                          className="peer sr-only"
                          onChange={handleSelectionChange}
                        />
                        <div
                          className={`flex items-center justify-center p-3 border-2 rounded-lg bg-background cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-all `}
                        >
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
                    Preferred Areas{" "}
                    <span className="text-sm font-normal text-foreground/60">
                      (minimum 1)
                    </span>
                    <span className="ml-auto text-sm font-medium">
                      {selections.preferredAreas} selected
                    </span>
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      "Manhattan",
                      "Brooklyn",
                      "Queens",
                      "Williamsburg",
                      "Lower East Side",
                      "Midtown",
                    ].map((area) => (
                      <label key={area} className="relative">
                        <input
                          type="checkbox"
                          name="preferredAreas"
                          value={area}
                          className="peer sr-only"
                          onChange={handleSelectionChange}
                        />
                        <div
                          className={`flex items-center justify-center p-3 border-2 rounded-lg bg-background cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] peer-checked:bg-main peer-checked:text-main-foreground peer-checked:border-main transition-all `}
                        >
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
      <Footer />
    </div>
  );
}
