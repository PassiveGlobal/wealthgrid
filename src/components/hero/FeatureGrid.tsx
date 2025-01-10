import { Brain, LineChart, TrendingUp, Wallet } from "lucide-react";

export const FeatureGrid = () => {
  return (
    <div className="relative mt-8">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/40 rounded-3xl blur-xl" />
      
      {/* Grid Container */}
      <div className="relative grid grid-cols-2 gap-8">
        <div className="bg-[#1E2537]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#2A3040] hover:border-secondary transition-all group hover:transform hover:scale-[1.02] duration-300 animate-float">
          <LineChart className="h-10 w-10 text-secondary mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">Trading Bots</h3>
          <p className="text-gray-400 leading-relaxed">Advanced algorithms delivering consistent returns through automated trading strategies.</p>
        </div>
        <div className="bg-[#1E2537]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#2A3040] hover:border-secondary transition-all group hover:transform hover:scale-[1.02] duration-300 animate-float delay-100">
          <Wallet className="h-10 w-10 text-secondary mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">Alternative Assets</h3>
          <p className="text-gray-400 leading-relaxed">Diversify your portfolio with carefully curated real estate and commodity investments.</p>
        </div>
        <div className="bg-[#1E2537]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#2A3040] hover:border-secondary transition-all group hover:transform hover:scale-[1.02] duration-300 animate-float delay-200">
          <TrendingUp className="h-10 w-10 text-secondary mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">Crypto Custody</h3>
          <p className="text-gray-400 leading-relaxed">Enterprise-grade security for your digital assets with institutional custody solutions.</p>
        </div>
        <div className="bg-[#1E2537]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#2A3040] hover:border-secondary transition-all group hover:transform hover:scale-[1.02] duration-300 animate-float delay-300">
          <Brain className="h-10 w-10 text-secondary mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">RoverGrid AI</h3>
          <p className="text-gray-400 leading-relaxed">Next-generation investment guidance powered by advanced artificial intelligence.</p>
        </div>
      </div>
    </div>
  );
};