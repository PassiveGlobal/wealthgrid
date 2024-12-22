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
            <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-semibold mt-8">1. Information We Collect</h2>
            <p>At PassiveGlobal, we collect information that you provide directly to us when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create an account</li>
              <li>Make investments or transactions</li>
              <li>Contact our support team</li>
              <li>Subscribe to our newsletters</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you important updates</li>
              <li>Improve our platform</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">3. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

            <h2 className="text-2xl font-semibold mt-8">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>Email: contact@passiveglobal.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}