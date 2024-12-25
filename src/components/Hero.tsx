import { Button } from "@/components/ui/button";
import { Brain, LineChart, TrendingUp, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[#1A1F2C]" />
      <div className="container relative z-10 py-32">
        {/* Hero Section with Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Invest Smarter with{" "}
              <span className="text-[#10B981]">WealthGrid</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl">
              Monitor and manage your investments across trading bots, real estate, and cryptocurrency with our advanced portfolio management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#10B981] hover:bg-[#10B981]/90 text-white transform transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/signup')}
              >
                Start Investing Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-white hover:bg-gray-800 transform transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://wealthgrid.ai/book-demo', '_blank')}
              >
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Grid with Floating Animation */}
          <div className="grid grid-cols-2 gap-6">
            <div className="group bg-[#222832]/50 backdrop-blur p-6 rounded-2xl border border-gray-800 hover:border-[#10B981]/50 transition-all duration-300 animate-float hover:translate-y-[-4px] hover:shadow-lg hover:shadow-[#10B981]/20">
              <LineChart className="h-8 w-8 text-[#10B981] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Trading Bots</h3>
              <p className="text-gray-400">Automated strategies for consistent returns</p>
            </div>
            <div className="group bg-[#222832]/50 backdrop-blur p-6 rounded-2xl border border-gray-800 hover:border-[#10B981]/50 transition-all duration-300 animate-float hover:translate-y-[-4px] hover:shadow-lg hover:shadow-[#10B981]/20" style={{ animationDelay: "0.2s" }}>
              <Wallet className="h-8 w-8 text-[#10B981] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Alternative Assets</h3>
              <p className="text-gray-400">Diversify with real estate, commodities & more</p>
            </div>
            <div className="group bg-[#222832]/50 backdrop-blur p-6 rounded-2xl border border-gray-800 hover:border-[#10B981]/50 transition-all duration-300 animate-float hover:translate-y-[-4px] hover:shadow-lg hover:shadow-[#10B981]/20" style={{ animationDelay: "0.4s" }}>
              <TrendingUp className="h-8 w-8 text-[#10B981] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Crypto Custody</h3>
              <p className="text-gray-400">Secure storage & management of digital assets</p>
            </div>
            <div className="group bg-[#222832]/50 backdrop-blur p-6 rounded-2xl border border-gray-800 hover:border-[#10B981]/50 transition-all duration-300 animate-float hover:translate-y-[-4px] hover:shadow-lg hover:shadow-[#10B981]/20" style={{ animationDelay: "0.6s" }}>
              <Brain className="h-8 w-8 text-[#10B981] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">RoverGrid AI</h3>
              <p className="text-gray-400">Smart investment guidance powered by AI</p>
            </div>
          </div>
        </div>

        {/* RoverGrid AI Assistant Section */}
        <div className="mt-32 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white">RoverGrid AI Assistant</h2>
            <p className="text-xl text-gray-300">Your Personalized Investment Guide</p>
            <p className="text-[#10B981] italic">"Guided by AI. Empowered by Intelligence."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#222832]/50 backdrop-blur p-6 rounded-2xl border border-gray-800 hover:border-[#10B981]/50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-[#10B981]/20">
              <Brain className="h-8 w-8 text-[#10B981] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Analyze</h3>
              <p className="text-gray-400">RoverGrid analyzes your account balance, risk tolerance, and financial goals in real-time.</p>
            </div>
            <div className="bg-[#222832]/50 backdrop-blur p-6 rounded-2xl border border-gray-800 hover:border-[#10B981]/50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-[#10B981]/20">
              <Wallet className="h-8 w-8 text-[#10B981] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Recommend</h3>
              <p className="text-gray-400">It provides tailored investment opportunities across trading bots, crypto, real estate, and alternative assets.</p>
            </div>
            <div className="bg-[#222832]/50 backdrop-blur p-6 rounded-2xl border border-gray-800 hover:border-[#10B981]/50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-[#10B981]/20">
              <LineChart className="h-8 w-8 text-[#10B981] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Optimize</h3>
              <p className="text-gray-400">It helps balance your portfolio for maximum growth while managing risks effectively.</p>
            </div>
          </div>

          {/* Why Choose RoverGrid Section */}
          <div className="bg-[#222832]/50 backdrop-blur p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose RoverGrid?</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-6 w-6 text-[#10B981] shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Real-Time Insights</h4>
                  <p className="text-gray-400">Stay ahead with up-to-date recommendations powered by cutting-edge AI.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Brain className="h-6 w-6 text-[#10B981] shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Personalized Strategy</h4>
                  <p className="text-gray-400">Tailored investment suggestions based on your unique financial profile.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <LineChart className="h-6 w-6 text-[#10B981] shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Smart Growth</h4>
                  <p className="text-gray-400">Unlock the potential of intelligent investing with AI.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button 
                size="lg" 
                className="bg-[#10B981] hover:bg-[#10B981]/90 text-white transform transition-all duration-300 hover:scale-105"
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