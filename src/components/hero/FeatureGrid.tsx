import { Brain, LineChart, TrendingUp, Wallet } from "lucide-react";

export const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-[#1E2537]/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-[#10B981]/30 transition-all group">
        <LineChart className="h-8 w-8 text-[#10B981] mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Trading Bots</h3>
        <p className="text-gray-400">Automated strategies for consistent returns</p>
      </div>
      
      <div className="bg-[#1E2537]/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-[#10B981]/30 transition-all group">
        <Wallet className="h-8 w-8 text-[#10B981] mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Alternative Assets</h3>
        <p className="text-gray-400">Diversify with real estate, commodities & more</p>
      </div>
      
      <div className="bg-[#1E2537]/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-[#10B981]/30 transition-all group">
        <TrendingUp className="h-8 w-8 text-[#10B981] mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Crypto Custody</h3>
        <p className="text-gray-400">Secure storage & management of digital assets</p>
      </div>
      
      <div className="bg-[#1E2537]/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-[#10B981]/30 transition-all group">
        <Brain className="h-8 w-8 text-[#10B981] mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">RoverGrid AI</h3>
        <p className="text-gray-400">Smart investment guidance powered by AI</p>
      </div>
    </div>
  );
};