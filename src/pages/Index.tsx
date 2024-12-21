import { Navbar } from "@/components/Navbar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { PortfolioOverview } from "@/components/PortfolioOverview";
import { RecentActivity } from "@/components/RecentActivity";
import { InvestmentAccounts } from "@/components/InvestmentAccounts";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <DashboardHeader />
        <div className="grid gap-6 md:grid-cols-2">
          <PortfolioOverview />
          <RecentActivity />
        </div>
        <InvestmentAccounts />
      </main>
    </div>
  );
}