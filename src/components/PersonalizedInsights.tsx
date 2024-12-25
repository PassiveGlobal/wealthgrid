import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AlertCircle, TrendingUp, Target, Shield } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

export const PersonalizedInsights = () => {
  const { session } = useAuth();

  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session?.user.id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!session,
  });

  if (isLoading) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!profile) return null;

  // Safely parse investment_goals as an array
  const investmentGoals = Array.isArray(profile.investment_goals) 
    ? profile.investment_goals 
    : [];

  const insights = [
    {
      icon: Target,
      title: "Goal Progress",
      description: investmentGoals.length > 0
        ? "You're making progress towards your investment goals"
        : "Set your first investment goal to track progress",
      action: "View Goals",
      variant: "default" as const,
    },
    {
      icon: TrendingUp,
      title: "Performance Analysis",
      description: profile.total_profit > 0
        ? `Your portfolio is up ${profile.total_profit}% this month`
        : "Start investing to track your performance",
      action: "View Details",
      variant: profile.total_profit > 0 ? "default" as const : "secondary" as const,
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: `Your current risk tolerance is set to ${profile.risk_tolerance}`,
      action: "Adjust Risk",
      variant: "default" as const,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">RoverGrid AI Insights</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight, index) => (
          <Alert key={index} variant={insight.variant}>
            <insight.icon className="h-4 w-4" />
            <AlertDescription className="mt-2">
              <h3 className="font-medium">{insight.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
              <Button variant="link" className="mt-2 p-0">
                {insight.action} →
              </Button>
            </AlertDescription>
          </Alert>
        ))}
      </div>
    </div>
  );
};