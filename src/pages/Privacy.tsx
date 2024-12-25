import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="container py-32 flex-grow">
        <div className="prose prose-invert mx-auto">
          <h1>Privacy Policy</h1>
          <p>Effective Date: January 1, 2024</p>
          <p>WealthGrid Inc.</p>

          <p>
            WealthGrid Inc. is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services. By using our platform, you agree to the terms outlined below.
          </p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li>Personal Data: Name, email address, phone number, mailing address, date of birth, and identification documents for account verification.</li>
            <li>Financial Data: Banking information, cryptocurrency wallet addresses, transaction details, and investment activity.</li>
            <li>Usage Data: IP address, browser type, device information, and usage patterns.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To provide and improve our services.</li>
            <li>To process transactions, manage accounts, and offer investment insights.</li>
            <li>To comply with legal obligations under Florida and federal regulations.</li>
            <li>To communicate updates, offers, and promotions (with your consent).</li>
          </ul>

          <h2>3. Data Sharing</h2>
          <p>We do not sell your information.</p>
          <p>We may share data with:</p>
          <ul>
            <li>Service Providers: For payment processing and data analysis.</li>
            <li>Regulatory Authorities: To comply with legal obligations.</li>
            <li>Business Partners: For integration with financial and crypto platforms.</li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>Personal data is retained as long as you maintain an account or as required by law.</p>

          <h2>5. Security</h2>
          <ul>
            <li>Data is encrypted and secured using multi-layered protocols.</li>
            <li>We implement two-factor authentication and 24/7 monitoring for account security.</li>
          </ul>

          <h2>6. Your Rights</h2>
          <ul>
            <li>Request access, correction, or deletion of your data.</li>
            <li>Opt-out of promotional communications.</li>
            <li>File a complaint with the Florida Department of Agriculture and Consumer Services or equivalent bodies.</li>
          </ul>

          <h2>7. International Users</h2>
          <p>WealthGrid complies with international data protection laws, including GDPR and CCPA, where applicable.</p>

          <h2>8. Contact Us</h2>
          <p>For questions about this Privacy Policy, contact us at:</p>
          <ul>
            <li>Email: support@wealthgrid.com</li>
            <li>Address: 2402 Twin Branches Ln, Conyers, GA 30013, USA</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}