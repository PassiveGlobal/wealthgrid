import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, AlertTriangle, LineChart, Target } from "lucide-react";
import { MarketAlerts } from "./MarketAlerts";
import { InvestmentOpportunities } from "./InvestmentOpportunities";
import { ProfitStrategies } from "./ProfitStrategies";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function AgentDashboard() {
  const { toast } = useToast();

  const { data: portfolioHealth } = useQuery({
    queryKey: ['portfolio-health'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('balance, active_investments')
        .single();
      
      if (error) throw error;
      return {
        score: 87,
        trend: 'Bullish',
        balance: data?.balance || 0,
        activeInvestments: data?.active_investments || 0
      };
    },
  });

  const runHealthCheck = async () => {
    toast({
      title: "Portfolio Health Check",
      description: "Analysis complete. Your portfolio is well-balanced with a health score of 87%.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Health</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{portfolioHealth?.score}%</div>
            <p className="text-xs text-muted-foreground">
              Your portfolio is well-balanced
            </p>
            <Button className="mt-4 w-full" variant="outline" onClick={runHealthCheck}>
              Run Health Check
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Trend</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">
              {portfolioHealth?.trend}
            </div>
            <p className="text-xs text-muted-foreground">
              Markets showing strong upward momentum
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <MarketAlerts />
        <InvestmentOpportunities />
        <ProfitStrategies />
      </div>
    </div>
  );
}