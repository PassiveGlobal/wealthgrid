import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export function PortfolioOverview() {
  const { data: portfolioHistory } = useQuery({
    queryKey: ['portfolio-history'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('portfolio_history')
        .select('*')
        .eq('user_id', (await supabase.auth.getUser()).data.user?.id)
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      return data || [];
    },
  });

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Portfolio Growth Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={portfolioHistory}
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
                dot={false}
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