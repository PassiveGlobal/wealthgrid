import { Bell, Brain, CreditCard, ChartLine } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Agent",
    icon: Brain,
    path: "/dashboard/agent",
    description: "AI-guided investment recommendations"
  },
  {
    title: "Deposit",
    icon: CreditCard,
    path: "/dashboard/deposit",
    description: "Manage deposits and transactions"
  },
  {
    title: "Strategies",
    icon: ChartLine,
    path: "/dashboard/strategies",
    description: "Portfolio strategies and allocations"
  },
  {
    title: "Notifications",
    icon: Bell,
    path: "/dashboard/notifications",
    description: "Updates and alerts"
  }
];

export function DashboardMenu() {
  const location = useLocation();

  return (
    <nav className="flex flex-col space-y-1 p-4">
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"
            )}
          >
            <Icon className="h-4 w-4" />
            <div className="flex-1">
              <p className="font-medium leading-none">{item.title}</p>
              <p className="text-xs text-muted-foreground mt-1 hidden md:block">
                {item.description}
              </p>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}