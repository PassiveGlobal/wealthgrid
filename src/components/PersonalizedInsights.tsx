import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, AlertTriangle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface RecommendationData {
  trend?: 'up' | 'down';
  confidence?: number;
  timeframe?: string;
}

interface Insight {
  id: string;
  title: string;
  description: string;
  recommendation_data: RecommendationData;
  created_at: string;
}

export function PersonalizedInsights() {
  const { data: insights } = useQuery({
    queryKey: ['ai-insights'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ai_recommendations')
        .select('*')
        .eq('type', 'personal_insight')
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data as Insight[];
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          AI-Driven Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights?.map((insight) => (
            <Card key={insight.id} className="p-4 bg-muted/50">
              <div className="flex items-start gap-3">
                {insight.recommendation_data?.trend === 'up' ? (
                  <TrendingUp className="h-5 w-5 text-green-500" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                )}
                <div>
                  <h4 className="font-medium">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {insight.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}