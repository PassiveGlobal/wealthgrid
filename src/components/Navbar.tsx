import { Button } from "@/components/ui/button";
import { ChartBar, Lock, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

export const Navbar = () => {
  const navigate = useNavigate();
  const { session, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Successfully signed out");
    } catch (error) {
      toast.error("Error signing out");
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-secondary">
            <ChartBar className="h-6 w-6" />
            PassiveGlobal
          </Link>
          {!session && (
            <div className="hidden md:flex gap-6">
              <a href="#features" className="text-sm font-medium text-primary-foreground hover:text-secondary transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-sm font-medium text-primary-foreground hover:text-secondary transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-sm font-medium text-primary-foreground hover:text-secondary transition-colors">
                Contact
              </a>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <Button 
                variant="ghost" 
                className="text-primary-foreground"
                onClick={handleSignOut}
              >
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </Button>
              <Button 
                className="bg-secondary hover:bg-secondary/90"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </Button>
            </>
          ) : (
            <>
              <Button 
                variant="ghost" 
                className="text-primary-foreground"
                onClick={() => navigate('/login')}
              >
                <Lock className="mr-2 h-4 w-4" /> Login
              </Button>
              <Button 
                className="bg-secondary hover:bg-secondary/90"
                onClick={() => navigate('/signup')}
              >
                Get Started
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};