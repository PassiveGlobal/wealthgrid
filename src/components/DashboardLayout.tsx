import { Navbar } from "./Navbar";
import { DashboardMenu } from "./DashboardMenu";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <aside className="fixed left-0 top-20 z-30 hidden h-[calc(100vh-5rem)] w-64 border-r bg-background lg:block">
          <DashboardMenu />
        </aside>
        <main className="flex-1 lg:pl-64">
          <div className="container mx-auto px-4 py-24">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}