import { Button } from "@/components/ui/button";
import { Lock, LogOut, CreditCard, BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { ThemeToggle } from "./ThemeToggle";

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
    <nav className="fixed w-full z-50 bg-[#1a1f2c]/95 backdrop-blur-sm border-b border-[#2A3040]">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 sm:gap-8">
          <Link to="/" className="inline-flex items-center">
            <div className="flex items-center justify-center translate-y-[5px]">
              <img 
                src="/lovable-uploads/76018a70-b6aa-43af-b17a-be7fced00833.png" 
                alt="WealthGrid Logo" 
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
              />
            </div>
            <span className="text-2xl sm:text-3xl font-bold text-secondary translate-y-[1.5px] -ml-1">WealthGrid</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to="/credit-card" className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors">
              <span className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-secondary" />
                Credit Card
              </span>
            </Link>
            <Link to="/learn" className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors">
              <span className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-secondary" />
                Learn
              </span>
            </Link>
            <Link to="/testimonials" className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors">
              Testimonials
            </Link>
            <Link to="/contact" className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          {session ? (
            <>
              <Button 
                variant="ghost" 
                className="text-gray-300 hover:text-white"
                onClick={handleSignOut}
              >
                <LogOut className="mr-2 h-4 w-4 text-secondary" /> Sign Out
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
                className="text-gray-300 hover:text-white hidden sm:inline-flex"
                onClick={() => navigate('/login')}
              >
                <Lock className="mr-2 h-4 w-4 text-secondary" /> Login
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