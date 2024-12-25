import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Bell, TrendingUp, TrendingDown, Wallet, ChartBar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { format } from "date-fns";

export function NotificationsList() {
  const { session } = useAuth();
  const { toast } = useToast();

  const { data: notifications, refetch } = useQuery({
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
            refetch();
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [toast, refetch]);

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

  const handleMarkAsRead = async (id: string) => {
    const { error } = await supabase
      .from('notifications')
      .update({ read: true })
      .eq('id', id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to mark notification as read",
      });
    }
  };

  return (
    <div className="space-y-4">
      {notifications?.map((notification) => {
        const Icon = getNotificationIcon(notification.type);
        const iconColor = getNotificationColor(notification.type);
        
        return (
          <Card 
            key={notification.id} 
            className={`p-4 transition-opacity ${notification.read ? 'opacity-60' : ''}`}
            onClick={() => !notification.read && handleMarkAsRead(notification.id)}
          >
            <div className="flex items-start gap-4">
              <div className={`${iconColor} p-2 rounded-full bg-gray-100`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{notification.title}</h3>
                  <span className="text-xs text-muted-foreground">
                    {format(new Date(notification.created_at), 'MMM d, h:mm a')}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {notification.message}
                </p>
                {!notification.read && (
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                    New
                  </span>
                )}
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
  );
}