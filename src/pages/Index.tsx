import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function Index() {
  const { session } = useAuth();

  // If user is logged in, redirect to dashboard
  if (session) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
    </div>
  );
}