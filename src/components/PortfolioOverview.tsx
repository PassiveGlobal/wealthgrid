import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export function PortfolioOverview() {
  const data = [
    { month: "Jan", value: 300000 },
    { month: "Feb", value: 320000 },
    { month: "Mar", value: 315000 },
    { month: "Apr", value: 340000 },
    { month: "May", value: 360000 },
    { month: "Jun", value: 375000 },
  ];

  return (
    <Card className="col-span-2 md:col-span-1">
      <CardHeader>
        <CardTitle>Portfolio Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis 
                tickFormatter={(value) => `$${value/1000}k`}
                width={80}
              />
              <Tooltip 
                formatter={(value) => [`$${value.toLocaleString()}`, "Value"]}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#10B981"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}