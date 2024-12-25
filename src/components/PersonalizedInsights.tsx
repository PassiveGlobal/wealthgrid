import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, AlertTriangle, Target } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface RecommendationData {
  trend?: 'up' | 'down';
  confidence?: number;
  timeframe?: string;
  action?: string;
  progress?: number;
}

interface Insight {
  id: string;
  title: string;
  description: string;
  recommendation_data: RecommendationData;
  created_at: string;
}

export function PersonalizedInsights() {
  const { toast } = useToast();

  const { data: insights, isLoading } = useQuery({
    queryKey: ['ai-insights'],
    queryFn: async () => {
      const { data: profile } = await supabase
        .from('profiles')
        .select('balance, investment_goals, total_profit, risk_tolerance')
        .single();

      const { data: recommendations, error } = await supabase
        .from('ai_recommendations')
        .select('*')
        .eq('type', 'personal_insight')
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;

      // Generate dynamic insights based on user data
      const dynamicInsights: Insight[] = [];

      if (profile) {
        // Goal progress insight
        if (profile.investment_goals?.length > 0) {
          const currentGoal = profile.investment_goals[0];
          const progress = (profile.balance / currentGoal.target) * 100;
          
          dynamicInsights.push({
            id: 'goal-progress',
            title: 'Goal Progress Update',
            description: `You're ${progress.toFixed(1)}% towards your ${currentGoal.name} goal. ${
              progress < 80 ? 'Consider increasing your monthly investment.' : 'You\'re almost there!'
            }`,
            recommendation_data: {
              trend: progress >= 50 ? 'up' : 'down',
              progress: progress,
              action: 'Adjust monthly investment'
            },
            created_at: new Date().toISOString()
          });
        }

        // Risk assessment insight
        if (profile.risk_tolerance) {
          dynamicInsights.push({
            id: 'risk-assessment',
            title: 'Risk Assessment',
            description: `Your ${profile.risk_tolerance} risk profile suggests ${
              profile.risk_tolerance === 'conservative' 
                ? 'focusing on stable, long-term investments' 
                : 'exploring growth opportunities'
            }`,
            recommendation_data: {
              confidence: 85,
              action: 'Review investment strategy'
            },
            created_at: new Date().toISOString()
          });
        }

        // Performance insight
        if (profile.total_profit !== null) {
          dynamicInsights.push({
            id: 'performance',
            title: 'Performance Analysis',
            description: `Your portfolio has ${profile.total_profit > 0 ? 'gained' : 'lost'} ${
              Math.abs(profile.total_profit).toFixed(2)
            }% this month. ${
              profile.total_profit > 0 
                ? 'Keep up the good work!' 
                : 'Consider reviewing your strategy.'
            }`,
            recommendation_data: {
              trend: profile.total_profit > 0 ? 'up' : 'down',
              timeframe: 'monthly',
              action: 'Review performance'
            },
            created_at: new Date().toISOString()
          });
        }
      }

      return dynamicInsights.length > 0 ? dynamicInsights : recommendations;
    },
  });

  const handleActionClick = (action: string) => {
    toast({
      title: "Action Initiated",
      description: `Starting: ${action}`,
    });
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Loading Insights...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-4 bg-muted/50 animate-pulse">
                <div className="h-12 bg-muted rounded" />
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

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
                  <TrendingUp className="h-5 w-5 text-green-500 shrink-0" />
                ) : insight.recommendation_data?.trend === 'down' ? (
                  <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0" />
                ) : (
                  <Target className="h-5 w-5 text-blue-500 shrink-0" />
                )}
                <div className="flex-1">
                  <h4 className="font-medium">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {insight.description}
                  </p>
                  {insight.recommendation_data?.action && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                      onClick={() => handleActionClick(insight.recommendation_data.action!)}
                    >
                      {insight.recommendation_data.action}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}