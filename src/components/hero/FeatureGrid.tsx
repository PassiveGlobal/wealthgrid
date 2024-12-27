import { Brain, LineChart, TrendingUp, Wallet } from "lucide-react";

export const FeatureGrid = () => {
  return (
    <div className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/10 to-[#1E293B]/20 rounded-3xl blur-xl" />
      
      {/* Grid Container */}
      <div className="relative grid grid-cols-2 gap-8 mt-16">
        <div className="bg-[#1E2537]/40 backdrop-blur-sm p-8 rounded-3xl border border-[#2A3040]/50 hover:border-secondary transition-colors group animate-float">
          <LineChart className="h-10 w-10 text-secondary mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">Trading Bots</h3>
          <p className="text-gray-400 text-lg">Automated strategies for consistent returns</p>
        </div>
        <div className="bg-[#1E2537]/40 backdrop-blur-sm p-8 rounded-3xl border border-[#2A3040]/50 hover:border-secondary transition-colors group animate-float delay-100">
          <Wallet className="h-10 w-10 text-secondary mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">Alternative Assets</h3>
          <p className="text-gray-400 text-lg">Diversify with real estate, commodities & more</p>
        </div>
        <div className="bg-[#1E2537]/40 backdrop-blur-sm p-8 rounded-3xl border border-[#2A3040]/50 hover:border-secondary transition-colors group animate-float delay-200">
          <TrendingUp className="h-10 w-10 text-secondary mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">Crypto Custody</h3>
          <p className="text-gray-400 text-lg">Secure storage & management of digital assets</p>
        </div>
        <div className="bg-[#1E2537]/40 backdrop-blur-sm p-8 rounded-3xl border border-[#2A3040]/50 hover:border-secondary transition-colors group animate-float delay-300">
          <Brain className="h-10 w-10 text-secondary mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">RoverGrid AI</h3>
          <p className="text-gray-400 text-lg">Smart investment guidance powered by AI</p>
        </div>
      </div>
    </div>
  );
};