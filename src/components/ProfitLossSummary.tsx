import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function ProfitLossSummary() {
  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('total_profit, total_loss')
        .eq('id', (await supabase.auth.getUser()).data.user?.id)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  const netPL = (profile?.total_profit || 0) - (profile?.total_loss || 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profit & Loss Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Total Profit</span>
          <span className="text-green-600 font-semibold">
            ${profile?.total_profit?.toLocaleString() || '0'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Total Loss</span>
          <span className="text-red-600 font-semibold">
            ${profile?.total_loss?.toLocaleString() || '0'}
          </span>
        </div>
        <div className="flex justify-between pt-2 border-t">
          <span className="font-semibold">Net P&L</span>
          <span className={`font-semibold ${netPL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${Math.abs(netPL).toLocaleString()}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}