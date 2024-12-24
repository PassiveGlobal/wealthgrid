import { DashboardLayout } from "@/components/DashboardLayout";

const Agent = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">AI Investment Assistant</h2>
        <p className="text-muted-foreground">
          Get personalized investment recommendations and insights from our AI.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Agent;