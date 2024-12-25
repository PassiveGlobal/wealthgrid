import { DashboardLayout } from "@/components/DashboardLayout";

const Strategies = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Investment Strategies</h2>
        <p className="text-muted-foreground">
          View and manage your investment strategies.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Strategies;