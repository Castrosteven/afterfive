"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import { LogIn, LogOut, User } from "lucide-react";
import Logo from "@/components/logo";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/sonner";
import { User as SupabaseUser } from "@supabase/supabase-js";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast.success("Signed out successfully");
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Failed to sign out. Please try again.");
    }
  };

  return (
    <>
      <header className="w-full bg-secondary-background border-b-2 border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4">
            {!isLoading && (
              user ? (
                <div className="flex items-center gap-4">
                  <Button
                    variant="neutral"
                    size="sm"
                    asChild
                  >
                    <Link href="/dashboard">
                      <User className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                  </Button>
                  <Button
                    variant="neutral"
                    size="sm"
                    onClick={handleSignOut}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
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
              )
            )}
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-background/95 z-50">
          <div className="flex flex-col items-center justify-center h-full gap-4 p-4">
            {!isLoading && (
              user ? (
                <>
                  <Button variant="neutral" size="lg" className="w-full" asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                  <Button variant="neutral" size="lg" className="w-full" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button variant="neutral" size="lg" className="w-full" asChild>
                  <Link href="/auth/signin">Sign In</Link>
                </Button>
              )
            )}
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