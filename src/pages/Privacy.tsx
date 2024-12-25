import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="container py-32 flex-grow">
        <div className="prose prose-invert mx-auto">
          <h1>Privacy Policy</h1>
          <p>Effective Date: December 24, 2024</p>
          <p>URL: https://wealthgrid.ai/privacy-policy</p>

          <h2>1. Introduction</h2>
          <p>
            At WealthGrid, we prioritize the security and privacy of your data. This Privacy Policy outlines how we collect, use, and protect your information when you use our platform.
          </p>

          <h2>2. Information We Collect</h2>
          <ul>
            <li>Personal Information: Name, email, address, phone number, financial data for transactions.</li>
            <li>Usage Data: Data related to how you interact with our platform.</li>
            <li>Financial Data: Information related to deposits, transactions, and investment tracking.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul>
            <li>Provide financial services such as deposits and investment management.</li>
            <li>Enhance platform functionality and personalize user recommendations through AI.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>

          <h2>4. Data Sharing</h2>
          <ul>
            <li>We do not share your data with third parties unless required by law or for essential services such as payment processing (e.g., through Stripe).</li>
            <li>No data is sold or shared for marketing purposes.</li>
          </ul>

          <h2>5. Data Storage and Security</h2>
          <ul>
            <li>Your data is stored securely in the US or UK, compliant with all local data protection laws.</li>
            <li>We implement encryption and multi-layered security protocols to prevent unauthorized access.</li>
          </ul>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your data.</li>
            <li>Request data deletion.</li>
            <li>Opt out of certain data collection practices.</li>
          </ul>

          <h2>7. Contact Us</h2>
          <p>
            For questions about your data or this policy, contact us at{" "}
            <a href="mailto:info@passive-global.com" className="text-primary hover:text-primary/80">
              info@passive-global.com
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}