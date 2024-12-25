import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const simulatedData = [
  { month: "July", value: 5000 },
  { month: "August", value: 6200 },
  { month: "September", value: 7100 },
  { month: "October", value: 7800 },
  { month: "November", value: 8900 },
  { month: "December", value: 10000 },
];

export function PortfolioOverview() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Simulated Portfolio Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            This is simulated data for demonstration purposes. Actual portfolio data will be displayed once investments are active.
          </AlertDescription>
        </Alert>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={simulatedData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                dy={10}
                tick={{ fill: '#6B7280' }}
              />
              <YAxis 
                tickFormatter={(value) => `$${(value/1000).toFixed(1)}K`}
                axisLine={false}
                tickLine={false}
                dx={-10}
                tick={{ fill: '#6B7280' }}
                domain={[4000, 11000]}
              />
              <Tooltip 
                formatter={(value) => [`$${Number(value).toLocaleString()}`, "Portfolio Value"]}
                labelFormatter={(label) => `Month: ${label}`}
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px'
                }}
                labelStyle={{ color: '#E5E7EB' }}
                itemStyle={{ color: '#10B981' }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#10B981"
                strokeWidth={3}
                dot={{
                  r: 4,
                  fill: '#10B981',
                  stroke: '#059669',
                  strokeWidth: 2
                }}
                activeDot={{
                  r: 6,
                  fill: '#10B981',
                  stroke: '#059669',
                  strokeWidth: 2
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}