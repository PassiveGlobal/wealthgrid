import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react";

export function RecentActivity() {
  const activities = [
    {
      type: "Trade",
      description: "Closed XAU/USD trade",
      amount: "+$1,200",
      timestamp: "2 hours ago",
      isProfit: true,
    },
    {
      type: "Deposit",
      description: "Account funding",
      amount: "+$5,000",
      timestamp: "1 day ago",
      isProfit: true,
    },
    {
      type: "Dividend",
      description: "Real Estate Fund dividend",
      amount: "+$500",
      timestamp: "3 days ago",
      isProfit: true,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div className="flex items-center gap-4">
                <div className={`rounded-full p-2 ${
                  activity.isProfit ? "bg-secondary/10" : "bg-destructive/10"
                }`}>
                  {activity.isProfit ? (
                    <ArrowUpRight className="h-4 w-4 text-secondary" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-destructive" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{activity.type}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${
                  activity.isProfit ? "text-secondary" : "text-destructive"
                }`}>
                  {activity.amount}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}