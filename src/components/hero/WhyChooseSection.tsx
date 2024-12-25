import { Button } from "@/components/ui/button";
import { TrendingUp, Wallet, LineChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const WhyChooseSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-[#1E2330]/90 backdrop-blur p-8 rounded-2xl border border-[#2A2E3B]">
      <h3 className="text-3xl font-bold text-white mb-8">Why Choose RoverGrid?</h3>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <TrendingUp className="h-6 w-6 text-[#4FD1C5] shrink-0" />
          <div>
            <h4 className="text-xl font-semibold text-white">Real-Time Insights</h4>
            <p className="text-gray-400">Stay ahead with up-to-date recommendations powered by cutting-edge AI.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Wallet className="h-6 w-6 text-[#4FD1C5] shrink-0" />
          <div>
            <h4 className="text-xl font-semibold text-white">Personalized Strategy</h4>
            <p className="text-gray-400">Tailored investment suggestions based on your unique financial profile.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <LineChart className="h-6 w-6 text-[#4FD1C5] shrink-0" />
          <div>
            <h4 className="text-xl font-semibold text-white">Smart Growth</h4>
            <p className="text-gray-400">Unlock the potential of intelligent investing with AI.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Button 
          size="lg" 
          className="bg-[#4FD1C5] hover:bg-[#45B8AE] text-white text-lg px-8 py-6"
          onClick={() => navigate('/signup')}
        >
          Get Started with RoverGrid
        </Button>
      </div>
    </div>
  );
};