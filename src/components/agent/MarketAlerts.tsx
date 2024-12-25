import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, TrendingUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function MarketAlerts() {
  const { data: alerts } = useQuery({
    queryKey: ['market-alerts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ai_recommendations')
        .select('*')
        .eq('type', 'market_alert')
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data || [];
    },
  });

  const defaultAlerts = [
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

  const displayAlerts = alerts?.length ? alerts : defaultAlerts;

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
          {displayAlerts.map((alert, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg border bg-card"
            >
              {alert.type === "warning" ? (
                <TrendingDown className="h-5 w-5 text-yellow-500" />
              ) : (
                <TrendingUp className="h-5 w-5 text-green-500" />
              )}
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