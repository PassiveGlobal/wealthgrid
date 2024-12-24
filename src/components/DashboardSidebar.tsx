import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  PiggyBank,
  BarChart3,
  Bell,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function DashboardSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: PiggyBank,
      label: "Deposits",
      href: "/dashboard/deposits",
    },
    {
      icon: BarChart3,
      label: "Strategies",
      href: "/dashboard/strategies",
    },
    {
      icon: Bell,
      label: "Notifications",
      href: "/dashboard/notifications",
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/dashboard/settings",
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <img
          src="/lovable-uploads/76018a70-b6aa-43af-b17a-be7fced00833.png"
          alt="WealthGrid Logo"
          className="h-8 w-8"
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                isActive={location.pathname === item.href}
                onClick={() => navigate(item.href)}
                className="w-full"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}