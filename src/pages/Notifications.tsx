import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";
import { Bell, TrendingUp, TrendingDown, Wallet, ChartBar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Notifications = () => {
  const { toast } = useToast();
  const { data: notifications } = useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    },
  });

  // Set up real-time updates for notifications
  useEffect(() => {
    const channel = supabase
      .channel('notifications-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'notifications'
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            toast({
              title: payload.new.title,
              description: payload.new.message,
            });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [toast]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'market_trend':
        return TrendingUp;
      case 'ai_recommendation':
        return ChartBar;
      case 'transaction':
        return Wallet;
      case 'performance':
        return TrendingDown;
      default:
        return Bell;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'market_trend':
        return 'text-green-500';
      case 'ai_recommendation':
        return 'text-blue-500';
      case 'transaction':
        return 'text-yellow-500';
      case 'performance':
        return 'text-purple-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Notifications</h2>
        </div>
        <div className="space-y-4">
          {notifications?.map((notification) => {
            const Icon = getNotificationIcon(notification.type);
            const iconColor = getNotificationColor(notification.type);
            
            return (
              <Card key={notification.id} className="p-4">
                <div className="flex items-start gap-4">
                  <div className={`${iconColor} p-2 rounded-full bg-gray-100`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-medium">{notification.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(notification.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
          {(!notifications || notifications.length === 0) && (
            <Card className="p-6 text-center text-muted-foreground">
              <Bell className="mx-auto h-8 w-8 mb-2" />
              <p>No notifications yet</p>
            </Card>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;