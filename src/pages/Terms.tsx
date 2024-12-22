import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="container py-32 flex-grow">
        <div className="prose prose-invert mx-auto">
          <h1>Terms of Service</h1>
          <p>Effective Date: January 1, 2024</p>
          <p>WealthGrid Inc.</p>

          <p>
            These Terms of Service ("Terms") govern your access and use of WealthGrid's platform. By using our services, you agree to these Terms.
          </p>

          <h2>1. Eligibility</h2>
          <ul>
            <li>You must be at least 18 years old.</li>
            <li>By creating an account, you certify that all information provided is accurate and complete.</li>
          </ul>

          <h2>2. Services Provided</h2>
          <ul>
            <li>Investment portfolio management, trading bot integration, and financial tracking tools.</li>
            <li>Cryptocurrency and fiat account funding and withdrawals.</li>
          </ul>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Maintain the confidentiality of your account credentials.</li>
            <li>Use the platform for lawful purposes only.</li>
          </ul>

          <h2>4. Prohibited Activities</h2>
          <ul>
            <li>Unauthorized access to accounts or data.</li>
            <li>Engaging in fraudulent or unlawful activities.</li>
            <li>Tampering with platform security features.</li>
          </ul>

          <h2>5. Fees and Payments</h2>
          <ul>
            <li>WealthGrid reserves the right to charge fees for services, which will be disclosed before use.</li>
            <li>Users are responsible for any applicable taxes under Florida or federal law.</li>
          </ul>

          <h2>6. Limitation of Liability</h2>
          <p>WealthGrid is not liable for:</p>
          <ul>
            <li>Investment losses or market volatility.</li>
            <li>Unauthorized account access resulting from user negligence.</li>
          </ul>

          <h2>7. Account Suspension or Termination</h2>
          <p>We reserve the right to suspend or terminate accounts for violations of these Terms or suspicious activity.</p>

          <h2>8. Dispute Resolution</h2>
          <ul>
            <li>Any disputes will be resolved under Florida law.</li>
            <li>Users agree to submit to the jurisdiction of courts in the state of Florida.</li>
          </ul>

          <h2>9. Changes to Terms</h2>
          <p>WealthGrid reserves the right to modify these Terms. Continued use of the platform constitutes acceptance of updated Terms.</p>

          <h2>10. Contact Us</h2>
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