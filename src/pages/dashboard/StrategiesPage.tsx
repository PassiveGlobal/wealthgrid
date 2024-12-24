import { useQuery } from "@tanstack/react-query";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export default function StrategiesPage() {
  const { data: strategies } = useQuery({
    queryKey: ['strategies'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('strategies')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Investment Strategies</h1>
            <p className="text-muted-foreground">
              Manage your investment strategies and view AI recommendations
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Strategy
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {strategies?.map((strategy) => (
            <Card key={strategy.id}>
              <CardHeader>
                <CardTitle>{strategy.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Allocation</span>
                    <span className="font-medium">{strategy.allocation_percentage}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Risk Level</span>
                    <span className="font-medium capitalize">{strategy.risk_level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <span className="font-medium capitalize">{strategy.status}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}