import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProtectionGuarantee } from "@/components/ProtectionGuarantee";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function Index() {
  const { session } = useAuth();

  if (session) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProtectionGuarantee />
    </div>
  );
}