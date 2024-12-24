import { useState } from "react";
import { Menu, X, Bot, Wallet, LineChart, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Agent",
    icon: Bot,
    href: "/dashboard/agent",
    description: "AI-driven investment insights"
  },
  {
    title: "Deposit",
    icon: Wallet,
    href: "/dashboard/deposit",
    description: "Manage your deposits"
  },
  {
    title: "Strategies",
    icon: LineChart,
    href: "/dashboard/strategies",
    description: "Investment strategies"
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "/dashboard/notifications",
    description: "Updates and alerts"
  }
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const MenuItem = ({ item }: { item: typeof menuItems[0] }) => {
    const isActive = location.pathname === item.href;
    const Icon = item.icon;

    return (
      <Link
        to={item.href}
        onClick={() => setOpen(false)}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
          isActive && "bg-accent"
        )}
      >
        <Icon className="h-4 w-4" />
        <div className="flex flex-col gap-1">
          <span className="font-medium">{item.title}</span>
          <span className="text-xs text-muted-foreground">{item.description}</span>
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <div className="flex items-center justify-between mb-8">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <nav className="flex flex-col gap-2 mt-4">
                {menuItems.map((item) => (
                  <MenuItem key={item.href} item={item} />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex gap-8">
          <nav className="hidden lg:flex flex-col gap-2 w-72">
            {menuItems.map((item) => (
              <MenuItem key={item.href} item={item} />
            ))}
          </nav>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}