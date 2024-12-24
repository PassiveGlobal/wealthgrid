import { DashboardSidebar } from "./DashboardSidebar";
import { NotificationToast } from "./NotificationToast";
import { Navbar } from "./Navbar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <NotificationToast />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-8 pt-24">{children}</main>
      </div>
    </div>
  );
}