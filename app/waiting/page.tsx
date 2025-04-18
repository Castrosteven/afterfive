import { Button } from "@/components/ui/button";
import { Clock, Users } from "lucide-react";
import Link from "next/link";
import { PaymentCards } from "@/components/payment-cards";

export default function WaitingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
              <Clock className="w-8 h-8" />
              Finding Your Perfect Match
            </h1>
            <p className="text-lg text-foreground/80">
              We&apos;re searching for people who share your interests and
              preferences. We&apos;ll notify you as soon as we find a match!
            </p>
          </div>

          <div className="bg-secondary-background p-6 rounded-lg border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-lg">
                <Users className="w-6 h-6" />
                <span>Looking for matches...</span>
              </div>
              <p className="text-foreground/60 text-center">
                This might take a few minutes. In the meantime, you can check
                your dashboard for updates.
              </p>
              <Link href="/dashboard">
                <Button className="bg-main text-main-foreground hover:bg-main/90 border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          </div>

          {/* Payment Options */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Select a plan that works best for you
            </p>
            <PaymentCards />
          </div>
        </div>
      </main>
    </div>
  );
}
