import { Card } from "@/components/ui/card";
import { User, DollarSign, TrendingUp, CalendarDays } from "lucide-react";

export function DashboardHeader() {
  const stats = [
    {
      title: "Total Portfolio Value",
      value: "$375,000",
      change: "+12.5%",
      icon: DollarSign,
    },
    {
      title: "Monthly Returns",
      value: "$4,250",
      change: "+5.2%",
      icon: TrendingUp,
    },
    {
      title: "YTD Performance",
      value: "$28,500",
      change: "+15.8%",
      icon: CalendarDays,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back, John</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your investments today.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-secondary p-2 text-secondary-foreground hover:bg-secondary/90">
          <User className="h-6 w-6" />
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-secondary/10 p-3">
                <stat.icon className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <div className="flex items-baseline gap-2">
                  <h2 className="text-2xl font-bold">{stat.value}</h2>
                  <span className="text-sm font-medium text-secondary">
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}