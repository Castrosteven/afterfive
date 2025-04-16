"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-secondary-background border-t-2 border-border p-4 sm:p-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-sm sm:text-base text-foreground/60">© 2025</span>
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
  );
} 