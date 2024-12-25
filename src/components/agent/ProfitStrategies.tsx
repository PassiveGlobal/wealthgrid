import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function ProfitStrategies() {
  const { toast } = useToast();
  
  const { data: strategies } = useQuery({
    queryKey: ['profit-strategies'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('strategies')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || defaultStrategies;
    },
  });

  const defaultStrategies = [
    {
      name: "Conservative Growth",
      description: "Take 25% profits when assets reach 20% gain",
      status: "Active",
      auto_execute: true
    },
    {
      name: "Market Momentum",
      description: "Increase allocation during upward trends",
      status: "Suggested",
      auto_execute: false
    },
  ];

  const handleConfigure = async (strategy: any) => {
    toast({
      title: "Strategy Configuration",
      description: `Configuring ${strategy.name} strategy settings...`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Profit-Taking Strategies
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {(strategies || defaultStrategies).map((strategy, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-4 p-4 rounded-lg border bg-card"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{strategy.name}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    strategy.status === "Active"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-blue-500/10 text-blue-500"
                  }`}>
                    {strategy.status}
                  </span>
                  {strategy.auto_execute && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500">
                      Auto-Execute
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {strategy.description}
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleConfigure(strategy)}
              >
                Configure
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}