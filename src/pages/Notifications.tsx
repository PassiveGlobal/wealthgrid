import { Card } from "@/components/ui/card";
import { Bell } from "lucide-react";

export default function Notifications() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2">
        <Bell className="h-6 w-6" />
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
      </div>
      <Card className="p-6">
        <p className="text-muted-foreground">
          Stay updated with real-time alerts about your portfolio performance,
          market opportunities, and AI-generated insights.
        </p>
      </Card>
    </div>
  );
}