"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import { LogIn } from "lucide-react";
import Logo from "@/components/logo";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-secondary-background border-b-2 border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4">
            <Button 
              variant="neutral" 
              size="sm"
              asChild
            >
              <Link href="/auth/signin">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-background/95 z-50">
          <div className="flex flex-col items-center justify-center h-full gap-4 p-4">
            <Button variant="neutral" size="lg" className="w-full" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <ModeToggle />
            <Button 
              variant="neutral" 
              size="lg" 
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Close Menu
            </Button>
          </div>
        </div>
      )}
    </>
  );
} 