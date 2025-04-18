"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"

interface VenueSearchResult {
  places: Array<{
    id: string
    displayName: {
      text: string
    }
    formattedAddress: string
    types: string[]
  }>
}

export default function NewVenuePage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<VenueSearchResult | null>(null)
  const [selectedVenue, setSelectedVenue] = useState<VenueSearchResult['places'][0] | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async () => {
    if (!searchQuery.trim()) return
    setIsSearching(true)
    try {
      const response = await fetch(`/api/admin/venue?keyword=${encodeURIComponent(searchQuery)}`)
      const data = await response.json()
      setSearchResults(data)
    } catch (error) {
      console.error("Failed to search venues:", error)
    } finally {
      setIsSearching(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedVenue) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/admin/venue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          googlePlaceId: selectedVenue.id
        })
      })

      if (!response.ok) {
        throw new Error('Failed to create venue')
      }

      router.push("/admin/venues")
    } catch (error) {
      console.error("Failed to create venue:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">New Venue</h1>
        <p className="text-muted-foreground">Add a new venue to your list</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Venue Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="search">Search for a venue</Label>
              <div className="flex gap-2">
                <Input
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter venue name"
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button onClick={handleSearch} disabled={isSearching}>
                  {isSearching ? "Searching..." : "Search"}
                </Button>
              </div>
            </div>

            {searchResults && (
              <div className="space-y-4">
                <h3 className="font-medium">Search Results</h3>
                <div className="space-y-2">
                  {searchResults.places.map((place) => (
                    <div
                      key={place.id}
                      className={`p-4 border rounded-lg cursor-pointer hover:bg-accent ${
                        selectedVenue?.id === place.id ? 'bg-accent' : ''
                      }`}
                      onClick={() => setSelectedVenue(place)}
                    >
                      <h4 className="font-medium">{place.displayName.text}</h4>
                      <p className="text-sm text-muted-foreground">{place.formattedAddress}</p>
                      <div className="flex gap-2 mt-2">
                        {place.types.map((type) => (
                          <Badge key={type} variant="default">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedVenue && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label>Selected Venue</Label>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">{selectedVenue.displayName.text}</h4>
                    <p className="text-sm text-muted-foreground">{selectedVenue.formattedAddress}</p>
                    <div className="flex gap-2 mt-2">
                      {selectedVenue.types.map((type) => (
                        <Badge key={type} variant="default">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create Venue"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 