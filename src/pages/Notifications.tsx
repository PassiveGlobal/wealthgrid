import { DashboardLayout } from "@/components/DashboardLayout";

const Notifications = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Notifications</h2>
        <p className="text-muted-foreground">
          Stay updated with important alerts and announcements.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;