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
            
            <h2 className="text-2xl font-semibold mt-8">1. Acceptance of Terms</h2>
            <p>By accessing and using PassiveGlobal's services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

            <h2 className="text-2xl font-semibold mt-8">2. Investment Risks</h2>
            <p>All investments carry risk. Past performance is not indicative of future results. Users should carefully consider their investment objectives and risks before investing.</p>

            <h2 className="text-2xl font-semibold mt-8">3. Account Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You must immediately notify us of any unauthorized use of your account</li>
              <li>You agree to provide accurate and complete information when creating an account</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8">4. Service Modifications</h2>
            <p>We reserve the right to modify or discontinue our services at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.</p>

            <h2 className="text-2xl font-semibold mt-8">5. Limitation of Liability</h2>
            <p>PassiveGlobal shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.</p>

            <h2 className="text-2xl font-semibold mt-8">6. Contact</h2>
            <p>For any questions regarding these Terms of Service, please contact us at contact@passiveglobal.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}