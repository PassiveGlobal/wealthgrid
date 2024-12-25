import { Bot, Brain, LineChart, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const RoverGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="relative py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            RoverGrid AI Assistant
          </h2>
          <p className="text-lg text-muted-foreground">
            Your Personalized Investment Guide
          </p>
          <p className="text-secondary italic mt-2">
            "Guided by AI. Empowered by Intelligence."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border shadow-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Analyze</h3>
            <p className="text-muted-foreground">
              RoverGrid analyzes your account balance, risk tolerance, and financial goals in real-time.
            </p>
          </div>

          <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border shadow-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Bot className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Recommend</h3>
            <p className="text-muted-foreground">
              It provides tailored investment opportunities across trading bots, crypto, real estate, and alternative assets.
            </p>
          </div>

          <div className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border shadow-lg">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <LineChart className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Optimize</h3>
            <p className="text-muted-foreground">
              It helps balance your portfolio for maximum growth while managing risks effectively.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-background/50 backdrop-blur-sm p-8 rounded-xl border border-border shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Why Choose RoverGrid?</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="h-4 w-4 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Real-Time Insights</h4>
                <p className="text-muted-foreground">
                  Stay ahead with up-to-date recommendations powered by cutting-edge AI.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Personalized Strategy</h4>
                <p className="text-muted-foreground">
                  Tailored investment suggestions based on your unique financial profile.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <LineChart className="h-4 w-4 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Smart Growth</h4>
                <p className="text-muted-foreground">
                  Unlock the potential of intelligent investing with AI.
                </p>
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
  );
};