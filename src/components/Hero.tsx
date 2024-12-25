import { Button } from "@/components/ui/button";
import { Brain, LineChart, TrendingUp, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] to-[#141821]" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Hero Section */}
        <div className="space-y-16">
          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Invest Smarter with{" "}
              <span className="text-[#4FD1C5]">WealthGrid</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl">
              Monitor and manage your investments across trading bots, real estate, and cryptocurrency with our advanced portfolio management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#4FD1C5] hover:bg-[#45B8AE] text-white font-medium text-lg px-8 py-3 rounded-full transition-colors"
                onClick={() => navigate('/signup')}
              >
                Start Investing Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#2A2E3B] text-white hover:bg-[#1E2330]/50 font-medium text-lg px-8 py-3 rounded-full transition-colors"
                onClick={() => window.open('https://wealthgrid.ai/book-demo', '_blank')}
              >
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1E2330]/90 backdrop-blur p-8 rounded-2xl border border-[#2A2E3B] hover:border-[#4FD1C5] transition-colors group animate-float">
              <LineChart className="h-8 w-8 text-[#4FD1C5] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#4FD1C5] transition-colors">Trading Bots</h3>
              <p className="text-gray-400">Automated strategies for consistent returns</p>
            </div>
            
            <div className="bg-[#1E2330]/90 backdrop-blur p-8 rounded-2xl border border-[#2A2E3B] hover:border-[#4FD1C5] transition-colors group animate-float delay-100">
              <Wallet className="h-8 w-8 text-[#4FD1C5] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#4FD1C5] transition-colors">Alternative Assets</h3>
              <p className="text-gray-400">Diversify with real estate, commodities & more</p>
            </div>
            
            <div className="bg-[#1E2330]/90 backdrop-blur p-8 rounded-2xl border border-[#2A2E3B] hover:border-[#4FD1C5] transition-colors group animate-float delay-200">
              <TrendingUp className="h-8 w-8 text-[#4FD1C5] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#4FD1C5] transition-colors">Crypto Custody</h3>
              <p className="text-gray-400">Secure storage & management of digital assets</p>
            </div>
            
            <div className="bg-[#1E2330]/90 backdrop-blur p-8 rounded-2xl border border-[#2A2E3B] hover:border-[#4FD1C5] transition-colors group animate-float delay-300">
              <Brain className="h-8 w-8 text-[#4FD1C5] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#4FD1C5] transition-colors">RoverGrid AI</h3>
              <p className="text-gray-400">Smart investment guidance powered by AI</p>
            </div>
          </div>
        </div>

        {/* RoverGrid AI Assistant Section */}
        <div className="mt-32 space-y-16 bg-[#141821] py-24 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white">RoverGrid AI Assistant</h2>
            <p className="text-xl text-gray-400">Your Personalized Investment Guide</p>
            <p className="text-[#4FD1C5] italic">"Guided by AI. Empowered by Intelligence."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1E2330]/90 backdrop-blur p-6 rounded-2xl border border-[#2A2E3B] hover:border-[#4FD1C5] transition-colors group">
              <Brain className="h-8 w-8 text-[#4FD1C5] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#4FD1C5] transition-colors">Analyze</h3>
              <p className="text-gray-400">RoverGrid analyzes your account balance, risk tolerance, and financial goals in real-time.</p>
            </div>
            <div className="bg-[#1E2330]/90 backdrop-blur p-6 rounded-2xl border border-[#2A2E3B] hover:border-[#4FD1C5] transition-colors group">
              <Wallet className="h-8 w-8 text-[#4FD1C5] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#4FD1C5] transition-colors">Recommend</h3>
              <p className="text-gray-400">It provides tailored investment opportunities across trading bots, crypto, real estate, and alternative assets.</p>
            </div>
            <div className="bg-[#1E2330]/90 backdrop-blur p-6 rounded-2xl border border-[#2A2E3B] hover:border-[#4FD1C5] transition-colors group">
              <LineChart className="h-8 w-8 text-[#4FD1C5] mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#4FD1C5] transition-colors">Optimize</h3>
              <p className="text-gray-400">It helps balance your portfolio for maximum growth while managing risks effectively.</p>
            </div>
          </div>

          {/* Why Choose RoverGrid Section */}
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
        </div>
      </div>
    </div>
  );
};