import { Bot, LineChart, Building2, Bitcoin, Wallet, TrendingUp } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Investment Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access a comprehensive suite of tools designed to maximize your passive income potential
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group p-6 rounded-2xl bg-primary/5 border border-primary/10 transition-all hover:bg-primary/10">
            <div className="mb-4 p-3 rounded-full bg-secondary/10 w-fit group-hover:bg-secondary/20 transition-colors">
              <Bot className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trading Bots</h3>
            <p className="text-muted-foreground">
              Automated trading strategies that work 24/7 to generate consistent returns across multiple markets.
            </p>
          </div>
          
          <div className="group p-6 rounded-2xl bg-primary/5 border border-primary/10 transition-all hover:bg-primary/10">
            <div className="mb-4 p-3 rounded-full bg-secondary/10 w-fit group-hover:bg-secondary/20 transition-colors">
              <LineChart className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Portfolio Analytics</h3>
            <p className="text-muted-foreground">
              Advanced analytics and reporting tools to track performance and optimize your investment strategy.
            </p>
          </div>
          
          <div className="group p-6 rounded-2xl bg-primary/5 border border-primary/10 transition-all hover:bg-primary/10">
            <div className="mb-4 p-3 rounded-full bg-secondary/10 w-fit group-hover:bg-secondary/20 transition-colors">
              <Building2 className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real Estate</h3>
            <p className="text-muted-foreground">
              Access curated real estate investment opportunities with competitive yields and low entry barriers.
            </p>
          </div>
          
          <div className="group p-6 rounded-2xl bg-primary/5 border border-primary/10 transition-all hover:bg-primary/10">
            <div className="mb-4 p-3 rounded-full bg-secondary/10 w-fit group-hover:bg-secondary/20 transition-colors">
              <Bitcoin className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Crypto Assets</h3>
            <p className="text-muted-foreground">
              Diversify your portfolio with carefully selected cryptocurrency investments and staking opportunities.
            </p>
          </div>
          
          <div className="group p-6 rounded-2xl bg-primary/5 border border-primary/10 transition-all hover:bg-primary/10">
            <div className="mb-4 p-3 rounded-full bg-secondary/10 w-fit group-hover:bg-secondary/20 transition-colors">
              <Wallet className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Wallet</h3>
            <p className="text-muted-foreground">
              Secure multi-currency wallet with instant transfers and automated yield optimization.
            </p>
          </div>
          
          <div className="group p-6 rounded-2xl bg-primary/5 border border-primary/10 transition-all hover:bg-primary/10">
            <div className="mb-4 p-3 rounded-full bg-secondary/10 w-fit group-hover:bg-secondary/20 transition-colors">
              <TrendingUp className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
            <p className="text-muted-foreground">
              Real-time market analysis and expert insights to help you make informed investment decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};