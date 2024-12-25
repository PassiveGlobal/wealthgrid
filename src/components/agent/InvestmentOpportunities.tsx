import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export function InvestmentOpportunities() {
  const { toast } = useToast();
  
  const { data: opportunities } = useQuery({
    queryKey: ['investment-opportunities'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ai_recommendations')
        .select('*')
        .eq('type', 'investment_opportunity')
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      return data || defaultOpportunities;
    },
  });

  const defaultOpportunities = [
    {
      asset: "Gold ETF",
      trend: "+5.2%",
      recommendation: "Strong Buy",
      description: "Gold showing strong momentum amid market uncertainty",
    },
    {
      asset: "Tech Index",
      trend: "+3.8%",
      recommendation: "Buy",
      description: "Technology sector leading market recovery",
    },
  ];

  const handleLearnMore = (opportunity: any) => {
    toast({
      title: `${opportunity.asset} Analysis`,
      description: `Detailed market analysis and recommendations for ${opportunity.asset} will be available soon.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LineChart className="h-5 w-5" />
          Investment Opportunities
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {(opportunities || defaultOpportunities).map((opportunity, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-4 p-4 rounded-lg border bg-card"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{opportunity.asset}</h4>
                  <span className="text-sm text-green-500">
                    {opportunity.trend}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {opportunity.description}
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleLearnMore(opportunity)}
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}