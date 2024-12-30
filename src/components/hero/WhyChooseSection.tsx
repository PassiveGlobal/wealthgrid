import { Shield, Zap, LineChart } from "lucide-react";

export const WhyChooseSection = () => {
  return (
    <div className="space-y-20">
      <div className="text-center space-y-6">
        <h2 className="text-5xl font-bold text-white">Why Choose WealthGrid</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Experience the future of wealth management with our cutting-edge platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#1E2330]/90 backdrop-blur-sm p-10 rounded-2xl border border-[#2A2E3B] hover:border-secondary transition-all group hover:transform hover:scale-[1.02] duration-300">
          <Shield className="h-10 w-10 text-secondary mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">
            Enterprise Security
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Bank-grade encryption and security protocols to protect your investments
            24/7.
          </p>
        </div>

        <div className="bg-[#1E2330]/90 backdrop-blur-sm p-10 rounded-2xl border border-[#2A2E3B] hover:border-secondary transition-all group hover:transform hover:scale-[1.02] duration-300">
          <Zap className="h-10 w-10 text-secondary mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">
            Lightning Fast
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Execute trades and manage your portfolio with unprecedented speed and
            precision.
          </p>
        </div>

        <div className="bg-[#1E2330]/90 backdrop-blur-sm p-10 rounded-2xl border border-[#2A2E3B] hover:border-secondary transition-all group hover:transform hover:scale-[1.02] duration-300">
          <LineChart className="h-10 w-10 text-secondary mb-6" />
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-secondary transition-colors">
            Advanced Analytics
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Make informed decisions with our sophisticated market analysis tools.
          </p>
        </div>
      </div>
    </div>
  );
};