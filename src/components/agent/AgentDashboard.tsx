import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, AlertTriangle, LineChart, Target } from "lucide-react";
import { MarketAlerts } from "./MarketAlerts";
import { InvestmentOpportunities } from "./InvestmentOpportunities";
import { ProfitStrategies } from "./ProfitStrategies";

export function AgentDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Health</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">
              Your portfolio is well-balanced
            </p>
            <Button className="mt-4 w-full" variant="outline">
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
            <div className="text-2xl font-bold text-green-500">Bullish</div>
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