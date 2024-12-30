import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <h1 className="text-6xl font-bold text-white leading-tight">
        Invest Smarter with{" "}
        <span className="text-[#10B981]">WealthGrid</span>
      </h1>
      <p className="text-lg text-gray-400 max-w-2xl">
        Monitor and manage your investments across trading bots, real estate, and cryptocurrency with our advanced portfolio management platform.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg" 
          className="bg-[#10B981] hover:bg-[#10B981]/90 text-white px-8 py-6 text-lg rounded-lg"
          onClick={() => navigate('/signup')}
        >
          Start Investing Now
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="border-2 border-gray-700 text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-lg"
          onClick={() => window.open('https://wealthgrid.ai/book-demo', '_blank')}
        >
          Book a Demo
        </Button>
      </div>
    </div>
  );
};