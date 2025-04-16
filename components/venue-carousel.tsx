import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef, useState } from "react";

const venues = [
  {
    name: "The Loft Bar",
    location: "Midtown",
    rating: 4.8,
    image: "/venues/loft-bar.jpg",
    type: "Rooftop Bar • Skyline Views"
  },
  {
    name: "Sky Lounge",
    location: "Financial District",
    rating: 4.9,
    image: "/venues/sky-lounge.jpg",
    type: "Luxury Lounge • Panoramic Views"
  },
  {
    name: "Brew & Bites",
    location: "Williamsburg",
    rating: 4.6,
    image: "/venues/brew-bites.jpg",
    type: "Craft Brewery • Gastropub"
  },
  {
    name: "The Garden",
    location: "Chelsea",
    rating: 4.7,
    image: "/venues/garden.jpg",
    type: "Botanical Bar • Outdoor Seating"
  },
  {
    name: "Neon Nights",
    location: "Lower East Side",
    rating: 4.5,
    image: "/venues/neon-nights.jpg",
    type: "Nightclub • Live Music"
  },
  {
    name: "The Vault",
    location: "Meatpacking District",
    rating: 4.9,
    image: "/venues/vault.jpg",
    type: "Speakeasy • Craft Cocktails"
  },
  {
    name: "Sunset Terrace",
    location: "DUMBO",
    rating: 4.8,
    image: "/venues/sunset-terrace.jpg",
    type: "Rooftop Restaurant • Sunset Views"
  },
  {
    name: "The Jazz Cellar",
    location: "Greenwich Village",
    rating: 4.7,
    image: "/venues/jazz-cellar.jpg",
    type: "Jazz Club • Intimate Setting"
  }
];

export function VenueCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left
        if (trackRef.current) {
          trackRef.current.scrollLeft += 300;
        }
      } else {
        // Swiped right
        if (trackRef.current) {
          trackRef.current.scrollLeft -= 300;
        }
      }
    }
    setIsPaused(false);
  };

  return (
    <div className="venue-carousel overflow-hidden py-8">
      <div 
        ref={trackRef}
        className={`venue-track ${isPaused ? 'paused' : ''} flex gap-4 overflow-x-auto snap-x snap-mandatory`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...venues, ...venues].map((venue, index) => (
          <Card 
            key={`${venue.name}-${index}`} 
            className="venue-card w-[280px] sm:w-[300px] flex-shrink-0 snap-center bg-secondary-background border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl font-bold mb-2 text-foreground">{venue.name}</CardTitle>
              <p className="text-sm text-foreground/60 mb-2">{venue.type}</p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-foreground/60" />
                <span className="text-foreground/60">{venue.location}</span>
                <div className="flex items-center ml-auto">
                  <Star className="w-4 h-4 fill-main text-main" />
                  <span className="ml-1 text-foreground">{venue.rating}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 