import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-16 flex-1">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground">Effective Date: {new Date().toLocaleDateString()}</p>
            <p className="font-semibold">WealthGrid Inc.</p>
            
            <p className="mt-6">
              WealthGrid Inc. is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services. By using our platform, you agree to the terms outlined below.
            </p>

            <h2 className="text-2xl font-semibold mt-8">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Personal Data:</span> Name, email address, phone number, mailing address, date of birth, and identification documents for account verification.</li>
              <li><span className="font-medium">Financial Data:</span> Banking information, cryptocurrency wallet addresses, transaction details, and investment activity.</li>
              <li><span className="font-medium">Usage Data:</span> IP address, browser type, device information, and usage patterns.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our services.</li>
              <li>To process transactions, manage accounts, and offer investment insights.</li>
              <li>To comply with legal obligations under Florida and federal regulations.</li>
              <li>To communicate updates, offers, and promotions (with your consent).</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">3. Data Sharing</h2>
            <p>We do not sell your information.</p>
            <p>We may share data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Service Providers:</span> For payment processing and data analysis.</li>
              <li><span className="font-medium">Regulatory Authorities:</span> To comply with legal obligations.</li>
              <li><span className="font-medium">Business Partners:</span> For integration with financial and crypto platforms.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">4. Data Retention</h2>
            <p>Personal data is retained as long as you maintain an account or as required by law.</p>

            <h2 className="text-2xl font-semibold mt-8">5. Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Data is encrypted and secured using multi-layered protocols.</li>
              <li>We implement two-factor authentication and 24/7 monitoring for account security.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">6. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access, correction, or deletion of your data.</li>
              <li>Opt-out of promotional communications.</li>
              <li>File a complaint with the Florida Department of Agriculture and Consumer Services or equivalent bodies.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">7. International Users</h2>
            <p>WealthGrid complies with international data protection laws, including GDPR and CCPA, where applicable.</p>

            <h2 className="text-2xl font-semibold mt-8">8. Contact Us</h2>
            <p>For questions about this Privacy Policy, contact us at:</p>
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