import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Trophy } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function GoalProgress() {
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('balance, total_profit')
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  // Example goals - in a real app, these would come from the database
  const goals = [
    {
      name: "First $10,000",
      target: 10000,
      current: profile?.balance || 0,
      icon: Trophy,
    },
    {
      name: "Monthly Profit Target",
      target: 1000,
      current: profile?.total_profit || 0,
      icon: Target,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Financial Goals
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {goals.map((goal) => (
            <div key={goal.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <goal.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{goal.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                </span>
              </div>
              <Progress 
                value={(goal.current / goal.target) * 100} 
                className="h-2"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}