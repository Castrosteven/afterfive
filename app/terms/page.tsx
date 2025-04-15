import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="w-full bg-secondary-background border-b-2 border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-main to-main/80 bg-clip-text text-transparent">
                After5
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-foreground">.nyc</span>
              <span className="ml-1 text-xl sm:text-2xl">🌆</span>
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using After5.nyc, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
              <p className="mb-4">When creating an account, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Be at least 21 years of age</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Event Participation</h2>
              <p className="mb-4">By participating in events, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Follow venue rules and regulations</li>
                <li>Respect other participants</li>
                <li>Consume alcohol responsibly</li>
                <li>Not engage in any illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Payment and Refunds</h2>
              <p className="mb-4">Payment terms include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All payments are non-refundable unless otherwise specified</li>
                <li>Event cancellations must be made 24 hours in advance</li>
                <li>We reserve the right to modify pricing at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
              <p>After5.nyc is not responsible for any injuries, damages, or losses incurred during events. Participants attend events at their own risk.</p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-secondary-background border-t-2 border-border p-4 sm:p-6">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-main to-main/80 bg-clip-text text-transparent">
                After5
              </span>
              <span className="text-lg sm:text-xl font-bold text-foreground">.nyc</span>
              <span className="ml-1">🌆</span>
            </div>
            <span className="text-sm sm:text-base">© 2025 After5.nyc</span>
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
    </div>
  );
} 