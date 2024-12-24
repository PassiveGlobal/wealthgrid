import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { PortfolioOverview } from "@/components/PortfolioOverview";
import { ProfitLossSummary } from "@/components/ProfitLossSummary";
import { RecentActivity } from "@/components/RecentActivity";
import { TransactionHistory } from "@/components/TransactionHistory";
import { InvestmentAccounts } from "@/components/InvestmentAccounts";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const { data: profile, isLoading: isProfileLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  if (isProfileLoading) {
    return (
      <DashboardLayout>
        <div className="space-y-8">
          <div className="h-[200px] animate-pulse bg-muted rounded-lg" />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="h-[400px] animate-pulse bg-muted rounded-lg" />
            </div>
            <div className="space-y-8">
              <div className="h-[200px] animate-pulse bg-muted rounded-lg" />
              <div className="h-[200px] animate-pulse bg-muted rounded-lg" />
            </div>
          </div>
          <div className="h-[400px] animate-pulse bg-muted rounded-lg" />
        </div>
      </DashboardLayout>
    );
  }

  if (!profile) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <p className="text-muted-foreground">No profile data found. Please try refreshing the page.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <DashboardHeader />
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <PortfolioOverview />
          </div>
          <div className="space-y-8">
            <ProfitLossSummary />
            <RecentActivity />
          </div>
        </div>
        <InvestmentAccounts />
        <TransactionHistory />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;