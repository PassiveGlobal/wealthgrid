import { DashboardHeader } from "@/components/DashboardHeader";
import { RecentActivity } from "@/components/RecentActivity";
import { Navbar } from "@/components/Navbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24 space-y-8">
        <DashboardHeader />
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;