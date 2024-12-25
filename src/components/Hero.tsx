import { Button } from "@/components/ui/button";
import { Brain, LineChart, TrendingUp, Wallet, Zap, Briefcase, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-background z-0" />
      <div className="container relative z-10 py-32">
        <div className="space-y-24">
          {/* Hero Header */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Invest Smarter with{" "}
              <span className="text-secondary">WealthGrid</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-lg">
              Monitor and manage your investments across trading bots, real estate, and cryptocurrency with our advanced portfolio management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90"
                onClick={() => navigate('/signup')}
              >
                Start Investing Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-primary-foreground border-primary-foreground/20"
                onClick={() => window.open('https://wealthgrid.ai/book-demo', '_blank')}
              >
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background/5 backdrop-blur p-6 rounded-2xl border border-primary-foreground/10">
              <BarChart className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Trading Bots</h3>
              <p className="text-primary-foreground/70">Automated strategies for consistent returns</p>
            </div>
            <div className="bg-background/5 backdrop-blur p-6 rounded-2xl border border-primary-foreground/10">
              <Wallet className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Alternative Assets</h3>
              <p className="text-primary-foreground/70">Diversify with real estate, commodities & more</p>
            </div>
            <div className="bg-background/5 backdrop-blur p-6 rounded-2xl border border-primary-foreground/10">
              <TrendingUp className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">Crypto Custody</h3>
              <p className="text-primary-foreground/70">Secure storage & management of digital assets</p>
            </div>
            <div className="bg-background/5 backdrop-blur p-6 rounded-2xl border border-primary-foreground/10">
              <Brain className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary-foreground mb-2">RoverGrid AI</h3>
              <p className="text-primary-foreground/70">Smart investment guidance powered by AI</p>
            </div>
          </div>

          {/* RoverGrid AI Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">RoverGrid AI Assistant</h2>
              <p className="text-xl text-primary-foreground/80">Your Personalized Investment Guide</p>
              <p className="text-secondary italic">"Guided by AI. Empowered by Intelligence."</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background/5 backdrop-blur p-6 rounded-2xl border border-primary-foreground/10">
                <Brain className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Analyze</h3>
                <p className="text-primary-foreground/70">RoverGrid analyzes your account balance, risk tolerance, and financial goals in real-time.</p>
              </div>
              <div className="bg-background/5 backdrop-blur p-6 rounded-2xl border border-primary-foreground/10">
                <Briefcase className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Recommend</h3>
                <p className="text-primary-foreground/70">It provides tailored investment opportunities across trading bots, crypto, real estate, and alternative assets.</p>
              </div>
              <div className="bg-background/5 backdrop-blur p-6 rounded-2xl border border-primary-foreground/10">
                <LineChart className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Optimize</h3>
                <p className="text-primary-foreground/70">It helps balance your portfolio for maximum growth while managing risks effectively.</p>
              </div>
            </div>

            <div className="bg-background/5 backdrop-blur p-8 rounded-2xl border border-primary-foreground/10">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">Why Choose RoverGrid?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Zap className="h-6 w-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-primary-foreground">Real-Time Insights</h4>
                    <p className="text-primary-foreground/70">Stay ahead with up-to-date recommendations powered by cutting-edge AI.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Briefcase className="h-6 w-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-primary-foreground">Personalized Strategy</h4>
                    <p className="text-primary-foreground/70">Tailored investment suggestions based on your unique financial profile.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <LineChart className="h-6 w-6 text-secondary shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-primary-foreground">Smart Growth</h4>
                    <p className="text-primary-foreground/70">Unlock the potential of intelligent investing with AI.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90"
                  onClick={() => navigate('/signup')}
                >
                  Get Started with RoverGrid
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};