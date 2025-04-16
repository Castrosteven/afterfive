"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  MapPin,
  Users,
  Building2,
  Beer,
  Martini,
  CalendarDays,
  MessageSquareMore,
  Loader2,
  Eye,
  CalendarCheck,
  Search
} from "lucide-react"

// Mock data for matches
const mockMatches = [
  {
    id: 1,
    name: "The Perfect Spot",
    description: "A cozy venue that matches all your preferences",
    location: "Lower East Side",
    time: "Friday, 7-9 PM",
    groupSize: "25-30 people",
    topics: "Tech & Business",
    image: <Building2 className="w-12 h-12 text-main" />
  },
  {
    id: 2,
    name: "The Social Hub",
    description: "A vibrant space perfect for networking",
    location: "Williamsburg",
    time: "Thursday, 6-8 PM",
    groupSize: "20-25 people",
    topics: "Creative & Tech",
    image: <Beer className="w-12 h-12 text-main" />
  },
  {
    id: 3,
    name: "The Urban Lounge",
    description: "Modern space with great atmosphere",
    location: "Midtown",
    time: "Wednesday, 5-7 PM",
    groupSize: "30-35 people",
    topics: "Finance & Business",
    image: <Martini className="w-12 h-12 text-main" />
  }
];

export default function QuestionnaireResultsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [matches, setMatches] = useState([mockMatches[0]]);
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);

  const handleSeeMore = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Get next match or cycle back to first
    const nextIndex = (currentMatchIndex + 1) % mockMatches.length;
    setCurrentMatchIndex(nextIndex);
    setMatches([mockMatches[nextIndex]]);
    
    setIsLoading(false);
  };

  const currentMatch = matches[0];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Your Perfect Match</h1>
            <p className="text-lg text-foreground/80">Based on your preferences, we found these great options</p>
          </div>

          {/* Results Grid */}
          <div className="grid gap-6">
            {/* Match Card */}
            <div className="bg-secondary-background p-6 rounded-lg border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Venue Image */}
                <div className="w-full sm:w-48 h-48 bg-main/20 rounded-lg flex items-center justify-center">
                  {currentMatch.image}
                </div>

                {/* Venue Details */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{currentMatch.name}</h2>
                  <p className="text-foreground/80 mb-4">{currentMatch.description}</p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-main" />
                      <span>{currentMatch.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-5 h-5 text-main" />
                      <span>{currentMatch.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-main" />
                      <span>{currentMatch.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquareMore className="w-5 h-5 text-main" />
                      <span>{currentMatch.topics}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto bg-main text-main-foreground hover:bg-main/90 border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                      asChild
                    >
                      <Link href={`/dashboard/event-details?id=${currentMatch.id}`}>
                        <Eye className="w-5 h-5 mr-2" />
                        View Details
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto bg-main text-main-foreground hover:bg-main/90 border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                      asChild
                    >
                      <Link href={`/questionnaire/results/checkout?id=${currentMatch.id}`}>
                        <CalendarCheck className="w-5 h-5 mr-2" />
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* See More Button */}
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-main text-main-foreground hover:bg-main/90 border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
                onClick={handleSeeMore}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating New Match...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    See More Options
                  </>
                )}
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