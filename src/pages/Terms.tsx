import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-16 flex-1">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="font-semibold">WealthGrid Inc.</p>

            <p className="mt-6">
              These Terms of Service ("Terms") govern your access and use of WealthGrid's platform. By using our services, you agree to these Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8">1. Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 18 years old.</li>
              <li>By creating an account, you certify that all information provided is accurate and complete.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">2. Services Provided</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Investment portfolio management, trading bot integration, and financial tracking tools.</li>
              <li>Cryptocurrency and fiat account funding and withdrawals.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintain the confidentiality of your account credentials.</li>
              <li>Use the platform for lawful purposes only.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">4. Prohibited Activities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unauthorized access to accounts or data.</li>
              <li>Engaging in fraudulent or unlawful activities.</li>
              <li>Tampering with platform security features.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">5. Fees and Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>WealthGrid reserves the right to charge fees for services, which will be disclosed before use.</li>
              <li>Users are responsible for any applicable taxes under Florida or federal law.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">6. Limitation of Liability</h2>
            <p>WealthGrid is not liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Investment losses or market volatility.</li>
              <li>Unauthorized account access resulting from user negligence.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">7. Account Suspension or Termination</h2>
            <p>We reserve the right to suspend or terminate accounts for violations of these Terms or suspicious activity.</p>

            <h2 className="text-2xl font-semibold mt-8">8. Dispute Resolution</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any disputes will be resolved under Florida law.</li>
              <li>Users agree to submit to the jurisdiction of courts in the state of Florida.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">9. Changes to Terms</h2>
            <p>WealthGrid reserves the right to modify these Terms. Continued use of the platform constitutes acceptance of updated Terms.</p>

            <h2 className="text-2xl font-semibold mt-8">10. Contact Us</h2>
            <ul className="list-none space-y-2">
              <li>Email: <a href="mailto:support@wealthgrid.com" className="text-primary hover:underline">support@wealthgrid.com</a></li>
              <li>Address: 2402 Twin Branches Ln, Conyers, GA 30013, USA</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}