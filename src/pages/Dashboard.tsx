import { DashboardLayout } from "@/components/DashboardLayout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { PortfolioOverview } from "@/components/PortfolioOverview";
import { ProfitLossSummary } from "@/components/ProfitLossSummary";
import { RecentActivity } from "@/components/RecentActivity";
import { PersonalizedInsights } from "@/components/PersonalizedInsights";
import { GoalProgress } from "@/components/GoalProgress";
import { AchievementBadges } from "@/components/AchievementBadges";
import { DailyLearn } from "@/components/DailyLearn";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <DashboardHeader />
        
        {/* Main Portfolio Section */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <PortfolioOverview />
          </div>
          <div className="space-y-8">
            <ProfitLossSummary />
            <RecentActivity />
          </div>
        </div>

        {/* AI Insights and Goals Section */}
        <div className="grid gap-8 md:grid-cols-2">
          <PersonalizedInsights />
          <GoalProgress />
        </div>

        {/* Achievements and Learning Section */}
        <div className="grid gap-8 md:grid-cols-2">
          <AchievementBadges />
          <DailyLearn />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;