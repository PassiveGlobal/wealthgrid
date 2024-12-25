import { Brain, LineChart, TrendingUp, Wallet } from "lucide-react";

export const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-[#1E2537]/90 backdrop-blur p-6 rounded-2xl border border-[#2A3040] hover:border-[#4FD1C5] transition-colors group animate-float">
        <LineChart className="h-8 w-8 text-[#4FD1C5] mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#4FD1C5] transition-colors">Trading Bots</h3>
        <p className="text-gray-400">Automated strategies for consistent returns</p>
      </div>
      <div className="bg-[#1E2537]/90 backdrop-blur p-6 rounded-2xl border border-[#2A3040] hover:border-[#4FD1C5] transition-colors group animate-float delay-100">
        <Wallet className="h-8 w-8 text-[#4FD1C5] mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#4FD1C5] transition-colors">Alternative Assets</h3>
        <p className="text-gray-400">Diversify with real estate, commodities & more</p>
      </div>
      <div className="bg-[#1E2537]/90 backdrop-blur p-6 rounded-2xl border border-[#2A3040] hover:border-[#4FD1C5] transition-colors group animate-float delay-200">
        <TrendingUp className="h-8 w-8 text-[#4FD1C5] mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#4FD1C5] transition-colors">Crypto Custody</h3>
        <p className="text-gray-400">Secure storage & management of digital assets</p>
      </div>
      <div className="bg-[#1E2537]/90 backdrop-blur p-6 rounded-2xl border border-[#2A3040] hover:border-[#4FD1C5] transition-colors group animate-float delay-300">
        <Brain className="h-8 w-8 text-[#4FD1C5] mb-4" />
        <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-[#4FD1C5] transition-colors">RoverGrid AI</h3>
        <p className="text-gray-400">Smart investment guidance powered by AI</p>
      </div>
    </div>
  );
};