import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, TrendingUp } from "lucide-react";

export function MarketAlerts() {
  const alerts = [
    {
      title: "Crypto Market Reversal",
      description: "Bitcoin showing strong reversal patterns. Consider taking profits.",
      icon: TrendingDown,
      type: "warning",
    },
    {
      title: "Gold Opportunity",
      description: "Gold prices are trending upward. Consider allocation.",
      icon: TrendingUp,
      type: "success",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Market Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg border bg-card"
            >
              <alert.icon className={`h-5 w-5 ${
                alert.type === "warning" ? "text-yellow-500" : "text-green-500"
              }`} />
              <div>
                <h4 className="font-semibold">{alert.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {alert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}