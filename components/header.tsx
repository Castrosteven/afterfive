import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import { LogIn, LogOut } from "lucide-react";
import Logo from "@/components/logo";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export async function  Header() {
const client = await createClient()
const { data: { user } } = await client.auth.getUser()

  return (
    <>
      <header className="w-full bg-secondary-background border-b-2 border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4">
            {user ? (
              <form action="/auth/signout" method="post">
                <Button 
                  variant="neutral" 
                  size="sm"
                  type="submit"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </form>
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
            )}
            <ModeToggle />
          </div>
        </div>
      </header>

      
    </>
  );
} 