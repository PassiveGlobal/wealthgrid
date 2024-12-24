import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { RoverGrid } from "@/components/RoverGrid";
import { ProtectionGuarantee } from "@/components/ProtectionGuarantee";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function Index() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (session) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      <RoverGrid />
      <ProtectionGuarantee />
      <Footer />
    </div>
  );
}