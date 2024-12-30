import { Brain, LineChart, Wallet } from "lucide-react";

export const RoverGridSection = () => {
  return (
    <div className="space-y-20">
      <div className="text-center space-y-6">
        <h2 className="text-5xl font-bold text-white">RoverGrid AI Assistant</h2>
        <p className="text-xl text-gray-400">Your Personalized Investment Guide</p>
        <p className="text-secondary italic text-lg">"Guided by AI. Empowered by Intelligence."</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#1E2330]/90 backdrop-blur-sm p-10 rounded-2xl border border-[#2A2E3B] hover:border-secondary transition-all group hover:transform hover:scale-[1.02] duration-300">
          <Brain className="h-10 w-10 text-secondary mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">Analyze</h3>
          <p className="text-gray-400 leading-relaxed">Advanced real-time analysis of your portfolio metrics, risk tolerance, and financial objectives.</p>
        </div>
        <div className="bg-[#1E2330]/90 backdrop-blur-sm p-10 rounded-2xl border border-[#2A2E3B] hover:border-secondary transition-all group hover:transform hover:scale-[1.02] duration-300">
          <Wallet className="h-10 w-10 text-secondary mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">Recommend</h3>
          <p className="text-gray-400 leading-relaxed">Data-driven investment opportunities across multiple asset classes, tailored to your profile.</p>
        </div>
        <div className="bg-[#1E2330]/90 backdrop-blur-sm p-10 rounded-2xl border border-[#2A2E3B] hover:border-secondary transition-all group hover:transform hover:scale-[1.02] duration-300">
          <LineChart className="h-10 w-10 text-secondary mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">Optimize</h3>
          <p className="text-gray-400 leading-relaxed">Continuous portfolio optimization with intelligent risk management and growth strategies.</p>
        </div>
      </div>
    </div>
  );
};