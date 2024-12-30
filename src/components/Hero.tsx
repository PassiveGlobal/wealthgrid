import { HeroHeader } from "./hero/HeroHeader";
import { FeatureGrid } from "./hero/FeatureGrid";
import { RoverGridSection } from "./hero/RoverGridSection";

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[#1B2332]" />
      <div className="container relative z-10 py-32">
        {/* Hero Section with Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <HeroHeader />
          <FeatureGrid />
        </div>

        {/* RoverGrid AI Assistant Section */}
        <div className="mt-32">
          <RoverGridSection />
        </div>
      </div>
    </div>
  );
};