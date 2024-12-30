import { HeroHeader } from "./hero/HeroHeader";
import { FeatureGrid } from "./hero/FeatureGrid";

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#1B2332]">
      <div className="container mx-auto px-4 py-32">
        {/* Hero Section with Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <HeroHeader />
          <FeatureGrid />
        </div>
      </div>
    </div>
  );
};