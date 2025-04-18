export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Professional information and preferences</li>
                <li>Location data for venue matching</li>
                <li>Payment information for event bookings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. How We Use Your Information
              </h2>
              <p className="mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Match you with compatible groups and venues</li>
                <li>Process your event bookings and payments</li>
                <li>Send you updates about events and promotions</li>
                <li>Improve our services and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your
                personal information. However, no method of transmission over
                the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
