import { DashboardLayout } from "@/components/DashboardLayout";
import { NotificationsList } from "@/components/notifications/NotificationsList";
import { NotificationFilters } from "@/components/notifications/NotificationFilters";
import { NotificationPreferences } from "@/components/notifications/NotificationPreferences";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const Notifications = () => {
  const { session } = useAuth();
  const { toast } = useToast();

  const handleMarkAllAsRead = async () => {
    if (!session?.user?.id) return;

    const { error } = await supabase
      .from('notifications')
      .update({ read: true })
      .eq('user_id', session.user.id)
      .eq('read', false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to mark notifications as read",
      });
      return;
    }

    toast({
      title: "Success",
      description: "All notifications marked as read",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Notifications</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={handleMarkAllAsRead}
            >
              <Check className="h-4 w-4" />
              Mark all as read
            </Button>
            <NotificationPreferences />
          </div>
        </div>
        <NotificationFilters />
        <NotificationsList />
      </div>
    </DashboardLayout>
  );
};

export default Notifications;