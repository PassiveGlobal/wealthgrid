import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { PortfolioOverview } from "@/components/PortfolioOverview";
import { ProfitLossSummary } from "@/components/ProfitLossSummary";
import { RecentActivity } from "@/components/RecentActivity";
import { TransactionHistory } from "@/components/TransactionHistory";

const Dashboard = () => {
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
        <TransactionHistory />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;