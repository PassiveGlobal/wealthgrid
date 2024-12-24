import { DashboardHeader } from "@/components/DashboardHeader"
import { PortfolioOverview } from "@/components/PortfolioOverview"
import { ProfitLossSummary } from "@/components/ProfitLossSummary"
import { RecentActivity } from "@/components/RecentActivity"
import { TransactionHistory } from "@/components/TransactionHistory"
import { NotificationToast } from "@/components/NotificationToast"
import { Navbar } from "@/components/Navbar"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <NotificationToast />
      <div className="container mx-auto px-4 py-24 space-y-8">
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
    </div>
  )
}

export default Dashboard