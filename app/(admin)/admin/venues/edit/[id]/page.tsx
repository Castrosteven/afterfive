"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { use } from "react";
import RenderGooglePhoto from "@/components/RenderGooglePhoto";

interface VenueType {
  name: string;
}

interface VenuePhoto {
  id: string;
  name: string;
  widthPx: number;
  heightPx: number;
  authorAttributions: Array<{
    displayName: string;
    uri: string;
    photoUri: string;
  }>;
}

interface Venue {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  googlePlaceId: string;
  types: VenueType[];
  photos?: VenuePhoto[];
  lat: number;
  lng: number;
  primaryPhotoId?: string;
}

export default function EditVenuePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [venue, setVenue] = useState<Venue | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id } = use(params);

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await fetch(`/api/admin/venue/${id}`);
        if (!response.ok) throw new Error("Failed to fetch venue");
        const data = await response.json();
        setVenue(data);
      } catch (error) {
        console.error("Error fetching venue:", error);
        toast.error("Failed to load venue data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchVenue();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!venue) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/admin/venue/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: venue.name,
          address: venue.address,
          city: venue.city,
          state: venue.state,
          zip: venue.zip,
          types: venue.types.map((t) => t.name),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update venue");
      }

      toast.success("Venue updated successfully");
      router.push("/admin/venues");
    } catch (error) {
      console.error("Failed to update venue:", error);
      toast.error("Failed to update venue");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSetPrimaryPhoto = async (photoId: string) => {
    try {
      const response = await fetch(`/api/admin/venue/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...venue,
          primaryPhotoId: photoId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update primary photo");
      }

      const updatedVenue = await response.json();
      setVenue(updatedVenue);
      toast.success("Primary photo updated successfully");
    } catch (error) {
      console.error("Error updating primary photo:", error);
      toast.error("Failed to update primary photo");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-muted-foreground">Loading venue data...</div>
      </div>
    );
  }

  if (!venue) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-muted-foreground">Venue not found</div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Edit Venue</h1>
        <p className="text-muted-foreground">Update venue information</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Venue Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Venue Name</Label>
                <Input
                  id="name"
                  value={venue.name}
                  onChange={(e) => setVenue({ ...venue, name: e.target.value })}
                  placeholder="Enter venue name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={venue.address}
                  onChange={(e) =>
                    setVenue({ ...venue, address: e.target.value })
                  }
                  placeholder="Enter venue address"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={venue.city}
                  onChange={(e) => setVenue({ ...venue, city: e.target.value })}
                  placeholder="Enter city"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  value={venue.state}
                  onChange={(e) =>
                    setVenue({ ...venue, state: e.target.value })
                  }
                  placeholder="Enter state"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="zip">ZIP Code</Label>
                <Input
                  id="zip"
                  value={venue.zip}
                  onChange={(e) => setVenue({ ...venue, zip: e.target.value })}
                  placeholder="Enter ZIP code"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Venue Photos</h3>
              {venue.photos && venue.photos.length > 0 ? (
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {venue.photos.map((photo) => (
                      <div
                        key={photo.name}
                        className={`relative aspect-square group cursor-pointer ${
                          venue.primaryPhotoId === photo.id
                            ? "ring-2 ring-primary"
                            : ""
                        }`}
                        onClick={() => handleSetPrimaryPhoto(photo.id)}
                      >
                        <RenderGooglePhoto photo={photo.name} />
                        {photo.authorAttributions &&
                          photo.authorAttributions.length > 0 && (
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1">
                              Photo by {photo.authorAttributions[0].displayName}
                            </div>
                          )}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            {venue.primaryPhotoId === photo.id
                              ? "Primary Photo"
                              : "Set as Primary"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">No photos available</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Venue Types</Label>
              <div className="flex flex-wrap gap-2">
                {venue.types.map((type) => (
                  <Badge key={type.name} variant="neutral">
                    {type.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="neutral"
                onClick={() => router.push("/admin/venues")}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
