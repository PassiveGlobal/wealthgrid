import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export function DashboardHeader() {
  const { session } = useAuth();

  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      if (!session?.user?.id) {
        console.log('No session user ID available');
        return null;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      
      if (error) {
        console.error('Profile fetch error:', error);
        throw error;
      }
      
      console.log('Profile data:', data);
      return data;
    },
    enabled: !!session?.user?.id,
  });

  const stats = [
    {
      title: "Total Portfolio Value",
      value: profile ? `$${profile.balance.toLocaleString()}` : "$0",
      change: "+5.2% this month",
      changeColor: "text-green-600",
    },
    {
      title: "Active Investments",
      value: profile?.active_investments?.toString() || "0",
      change: "+2 this month",
      changeColor: "text-green-600",
    },
    {
      title: "New Deposits",
      value: "$50,000",
      change: "+12% vs last month",
      changeColor: "text-green-600",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className={`text-sm ${stat.changeColor}`}>{stat.change}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}