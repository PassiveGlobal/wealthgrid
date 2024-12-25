import { HeroHeader } from "./hero/HeroHeader";
import { FeatureGrid } from "./hero/FeatureGrid";
import { RoverGridSection } from "./hero/RoverGridSection";
import { WhyChooseSection } from "./hero/WhyChooseSection";

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-primary" />
      <div className="container relative z-10 py-32">
        {/* Hero Section with Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <HeroHeader />
          <FeatureGrid />
        </div>

        {/* RoverGrid AI Assistant Section */}
        <div className="space-y-16 mt-32">
          <RoverGridSection />
          <WhyChooseSection />
        </div>
      </div>
    </div>
  );
};