import { DashboardHeader } from "@/components/DashboardHeader";
import { RecentActivity } from "@/components/RecentActivity";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { signOut } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex justify-end">
          <Button variant="ghost" onClick={signOut}>
            Sign Out
          </Button>
        </div>
        <DashboardHeader />
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;