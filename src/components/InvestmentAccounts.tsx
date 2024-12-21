import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBar, LineChart, Lock } from "lucide-react";

export function InvestmentAccounts() {
  const accounts = [
    {
      name: "Gold Bot Trading",
      invested: "$120,000",
      returns: "+5%",
      monthlyReturn: "$6,000",
      status: "Active",
      icon: ChartBar,
    },
    {
      name: "Crypto Portfolio",
      invested: "$50,000",
      returns: "+3%",
      monthlyReturn: "$1,500",
      status: "Active",
      icon: LineChart,
    },
    {
      name: "Real Estate Fund",
      invested: "$200,000",
      returns: "+2.5%",
      monthlyReturn: "$5,000",
      status: "Active",
      icon: Lock,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Investment Accounts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {accounts.map((account) => (
            <Card key={account.name} className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <account.icon className="h-5 w-5 text-secondary" />
                    <h3 className="font-semibold">{account.name}</h3>
                  </div>
                  <span className="rounded-full bg-secondary/10 px-2 py-1 text-xs font-medium text-secondary">
                    {account.status}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Invested</span>
                    <span className="font-medium">{account.invested}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Returns</span>
                    <span className="font-medium text-secondary">
                      {account.returns}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Monthly</span>
                    <span className="font-medium">{account.monthlyReturn}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}