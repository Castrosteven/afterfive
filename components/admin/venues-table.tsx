"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import RenderGooglePhoto from "@/components/RenderGooglePhoto";
import { VenueWithTypesAndPhoto } from "@/app/(admin)/admin/venues/page";

interface VenuesTableProps {
  venues: VenueWithTypesAndPhoto[];
}

export function VenuesTable({ venues }: VenuesTableProps) {
  const router = useRouter();

  const handleEdit = (venueId: string) => {
    router.push(`/admin/venues/edit/${venueId}`);
  };

  const handleDelete = async (venueId: string) => {
    if (!confirm("Are you sure you want to delete this venue?")) return;

    try {
      const response = await fetch(`/api/admin/venue/${venueId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete venue");
      }

      // Refresh the page to update the list
      window.location.reload();
    } catch (error) {
      console.error("Error deleting venue:", error);
      alert("Failed to delete venue");
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>City</TableHead>
            <TableHead>State</TableHead>
            <TableHead>Types</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {venues.map((venue) => (
            <TableRow key={venue.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  {venue.primaryPhoto && (
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                      <RenderGooglePhoto photo={venue.primaryPhoto.name} />
                    </div>
                  )}
                  <span>{venue.name}</span>
                </div>
              </TableCell>
              <TableCell>{venue.address}</TableCell>
              <TableCell>{venue.city}</TableCell>
              <TableCell>{venue.state}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {venue.types.map((type) => (
                    <Badge key={type.name} variant="neutral">
                      {type.name}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="neutral" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleEdit(venue.id)}>
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={() => handleDelete(venue.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
