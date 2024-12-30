import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProtectionGuarantee } from "@/components/ProtectionGuarantee";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function Index() {
  const { session } = useAuth();

  if (session) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen bg-[#1B2332] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProtectionGuarantee />
      </main>
      <Footer />
    </div>
  );
}