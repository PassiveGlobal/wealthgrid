import { Button } from "@/components/ui/button";
import { LineChart, TrendingUp, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-background z-0" />
      <div className="container relative z-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                onClick={() => window.open('https://wealthgrid.com/book-demo', '_blank')}
              >
                Book a Demo
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="bg-background/10 backdrop-blur p-6 rounded-2xl border border-primary-foreground/10 animate-float">
                <LineChart className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Trading Bots</h3>
                <p className="text-primary-foreground/70">Automated strategies for consistent returns</p>
              </div>
              <div className="bg-background/10 backdrop-blur p-6 rounded-2xl border border-primary-foreground/10 animate-float" style={{ animationDelay: "1s" }}>
                <Wallet className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Alternative Assets</h3>
                <p className="text-primary-foreground/70">Diversify with real estate, commodities & more</p>
              </div>
              <div className="bg-background/10 backdrop-blur p-6 rounded-2xl border border-primary-foreground/10 animate-float" style={{ animationDelay: "1.5s" }}>
                <TrendingUp className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">Crypto Custody</h3>
                <p className="text-primary-foreground/70">Secure storage & management of digital assets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};