import { Button } from "@/components/ui/button";
import { Lock, LogOut, CreditCard, BookOpen } from "lucide-react";
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
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 sm:gap-8">
          <Link to="/" className="inline-flex items-center gap-1">
            <div className="flex items-center justify-center translate-y-[4px]">
              <img 
                src="/lovable-uploads/76018a70-b6aa-43af-b17a-be7fced00833.png" 
                alt="WealthGrid Logo" 
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
              />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-secondary translate-y-[1px]">WealthGrid</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to="/credit-card" className="text-sm font-medium text-primary-foreground hover:text-secondary transition-colors">
              <span className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Credit Card
              </span>
            </Link>
            <Link to="/learn" className="text-sm font-medium text-primary-foreground hover:text-secondary transition-colors">
              <span className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Learn
              </span>
            </Link>
            <Link to="/testimonials" className="text-sm font-medium text-primary-foreground hover:text-secondary transition-colors">
              Testimonials
            </Link>
            <Link to="/contact" className="text-sm font-medium text-primary-foreground hover:text-secondary transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
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
                className="text-primary-foreground hidden sm:inline-flex"
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