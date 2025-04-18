export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">
            Terms of Service
          </h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using After5.nyc, you agree to be bound by
                these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
              <p className="mb-4">When creating an account, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>
                  Accept responsibility for all activities under your account
                </li>
                <li>Be at least 21 years of age</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. Event Participation
              </h2>
              <p className="mb-4">By participating in events, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Follow venue rules and regulations</li>
                <li>Respect other participants</li>
                <li>Consume alcohol responsibly</li>
                <li>Not engage in any illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                4. Payment and Refunds
              </h2>
              <p className="mb-4">Payment terms include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All payments are non-refundable unless otherwise specified
                </li>
                <li>Event cancellations must be made 24 hours in advance</li>
                <li>We reserve the right to modify pricing at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Limitation of Liability
              </h2>
              <p>
                After5.nyc is not responsible for any injuries, damages, or
                losses incurred during events. Participants attend events at
                their own risk.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
