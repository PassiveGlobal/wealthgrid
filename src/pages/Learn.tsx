import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { BookOpen, TrendingUp, GraduationCap, ChevronRight } from "lucide-react";

const LearnPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Learn to Invest <span className="text-secondary">Smarter</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Master the fundamentals of investing with our comprehensive educational resources. From basics to advanced strategies, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Investing Basics */}
          <div className="group bg-background/10 backdrop-blur p-8 rounded-2xl border border-primary-foreground/10 hover:border-secondary/50 transition-all duration-300">
            <BookOpen className="h-12 w-12 text-secondary mb-6" />
            <h3 className="text-2xl font-semibold text-primary-foreground mb-4">Investing Basics</h3>
            <p className="text-primary-foreground/70 mb-6">
              Learn the fundamental concepts of investing, risk management, and portfolio diversification.
            </p>
            <Button className="group-hover:bg-secondary transition-colors duration-300">
              Start Learning <ChevronRight className="ml-2" />
            </Button>
          </div>

          {/* Market Analysis */}
          <div className="group bg-background/10 backdrop-blur p-8 rounded-2xl border border-primary-foreground/10 hover:border-secondary/50 transition-all duration-300">
            <TrendingUp className="h-12 w-12 text-secondary mb-6" />
            <h3 className="text-2xl font-semibold text-primary-foreground mb-4">Market Analysis</h3>
            <p className="text-primary-foreground/70 mb-6">
              Understand market trends, technical analysis, and how to read financial charts.
            </p>
            <Button className="group-hover:bg-secondary transition-colors duration-300">
              Explore Markets <ChevronRight className="ml-2" />
            </Button>
          </div>

          {/* Advanced Strategies */}
          <div className="group bg-background/10 backdrop-blur p-8 rounded-2xl border border-primary-foreground/10 hover:border-secondary/50 transition-all duration-300">
            <GraduationCap className="h-12 w-12 text-secondary mb-6" />
            <h3 className="text-2xl font-semibold text-primary-foreground mb-4">Advanced Strategies</h3>
            <p className="text-primary-foreground/70 mb-6">
              Dive deep into advanced investment strategies, portfolio optimization, and risk management.
            </p>
            <Button className="group-hover:bg-secondary transition-colors duration-300">
              Get Advanced <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            View All Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;