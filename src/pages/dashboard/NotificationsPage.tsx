import { useQuery } from "@tanstack/react-query";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Bell } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

export default function NotificationsPage() {
  const { data: notifications } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">
            Stay updated with important alerts and recommendations
          </p>
        </div>
        <div className="space-y-4">
          {notifications?.map((notification) => (
            <Card key={notification.id} className="p-4">
              <div className="flex gap-4">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bell className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{notification.title}</h3>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {format(new Date(notification.created_at), 'MMM d, yyyy h:mm a')}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}