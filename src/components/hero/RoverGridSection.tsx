import { Brain, LineChart, Wallet } from "lucide-react";

export const RoverGridSection = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-white">RoverGrid AI Assistant</h2>
        <p className="text-xl text-gray-400">Your Personalized Investment Guide</p>
        <p className="text-secondary italic">"Guided by AI. Empowered by Intelligence."</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1E2537]/90 backdrop-blur p-6 rounded-2xl border border-[#2A3040] hover:border-secondary transition-colors group">
          <Brain className="h-8 w-8 text-secondary mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-secondary transition-colors">Analyze</h3>
          <p className="text-gray-400">RoverGrid analyzes your account balance, risk tolerance, and financial goals in real-time.</p>
        </div>
        <div className="bg-[#1E2537]/90 backdrop-blur p-6 rounded-2xl border border-[#2A3040] hover:border-secondary transition-colors group">
          <Wallet className="h-8 w-8 text-secondary mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-secondary transition-colors">Recommend</h3>
          <p className="text-gray-400">It provides tailored investment opportunities across trading bots, crypto, real estate, and alternative assets.</p>
        </div>
        <div className="bg-[#1E2537]/90 backdrop-blur p-6 rounded-2xl border border-[#2A3040] hover:border-secondary transition-colors group">
          <LineChart className="h-8 w-8 text-secondary mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-secondary transition-colors">Optimize</h3>
          <p className="text-gray-400">It helps balance your portfolio for maximum growth while managing risks effectively.</p>
        </div>
      </div>
    </div>
  );
};