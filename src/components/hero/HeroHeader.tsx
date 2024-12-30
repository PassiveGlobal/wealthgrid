import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
        Invest Smarter with{" "}
        <span className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary bg-clip-text text-transparent">
          WealthGrid
        </span>
      </h1>
      <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
        Experience the future of wealth management. Our advanced portfolio platform seamlessly integrates trading bots, real estate, and cryptocurrency investments.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/90 text-white text-lg px-10 py-7 rounded-xl shadow-lg shadow-secondary/20 transition-all hover:shadow-xl hover:shadow-secondary/30"
          onClick={() => navigate('/signup')}
        >
          Start Investing Now
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="border-2 border-[#2A3040] text-white hover:bg-[#1E2537]/50 text-lg px-10 py-7 rounded-xl backdrop-blur-sm transition-all hover:border-secondary/50"
          onClick={() => window.open('https://wealthgrid.ai/book-demo', '_blank')}
        >
          Book a Demo
        </Button>
      </div>
    </div>
  );
};