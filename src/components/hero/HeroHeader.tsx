import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
        Invest Smarter with{" "}
        <span className="text-secondary">WealthGrid</span>
      </h1>
      <p className="text-lg text-gray-400 max-w-xl">
        Monitor and manage your investments across trading bots, real estate, and cryptocurrency with our advanced portfolio management platform.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6"
          onClick={() => navigate('/signup')}
        >
          Start Investing Now
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="border-[#2A3040] text-white hover:bg-[#1E2537]/50 text-lg px-8 py-6"
          onClick={() => window.open('https://wealthgrid.ai/book-demo', '_blank')}
        >
          Book a Demo
        </Button>
      </div>
    </div>
  );
};