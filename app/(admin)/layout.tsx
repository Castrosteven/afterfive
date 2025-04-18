import { Button } from "@/components/ui/button";
import { MapPin, Home } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 border-r border-border bg-secondary-background p-4">
          <div className="mb-8">
            <Link href="/admin" className="flex items-center gap-2">
              <span className="text-lg font-bold">Admin Panel</span>
            </Link>
          </div>

          <nav className="space-y-2">
            <Button variant="neutral" className="w-full justify-start" asChild>
              <Link href="/admin">
                <Home className="w-4 h-4 mr-2" />
                Dashboard
              </Link>
            </Button>
            <Button variant="neutral" className="w-full justify-start" asChild>
              <Link href="/admin/venues">
                <MapPin className="w-4 h-4 mr-2" />
                Venues
              </Link>
            </Button>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-5">{children}</div>
      </div>
    </div>
  );
}
