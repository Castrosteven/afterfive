import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { VenuesTable } from "@/components/admin/venues-table"
import Link from "next/link"
import prisma from "@/utils/prisma"



async function getAllVenues() {
  try {
    const venues = await prisma.venue.findMany({
      include: {
        types: {
          select: {
            name: true
          }
        }
      }
    });

    return venues;
  } catch (error) {
    console.error('Error fetching venues:', error);
    throw error;
  }
}

export default async function AdminVenuesPage() {
  const venues = await getAllVenues()
  console.log(venues)
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Venues</h1>
          <p className="text-muted-foreground">Manage your venues</p>
        </div>
        <Button asChild>
          <Link href="/admin/venues/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Venue
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Venues</CardTitle>
        </CardHeader>
        <CardContent>
          <VenuesTable venues={venues} />
        </CardContent>
      </Card>
    </div>
  )
} 