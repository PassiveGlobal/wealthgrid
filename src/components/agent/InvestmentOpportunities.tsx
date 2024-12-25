import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, ArrowRight } from "lucide-react";

export function InvestmentOpportunities() {
  const opportunities = [
    {
      asset: "Gold ETF",
      trend: "+5.2%",
      recommendation: "Strong Buy",
      description: "Gold showing strong momentum amid market uncertainty",
    },
    {
      asset: "Tech Index",
      trend: "+3.8%",
      recommendation: "Buy",
      description: "Technology sector leading market recovery",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LineChart className="h-5 w-5" />
          Investment Opportunities
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-4 p-4 rounded-lg border bg-card"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{opportunity.asset}</h4>
                  <span className="text-sm text-green-500">
                    {opportunity.trend}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {opportunity.description}
                </p>
              </div>
              <Button variant="outline" size="sm">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}