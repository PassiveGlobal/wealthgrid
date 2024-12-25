import { DashboardLayout } from "@/components/DashboardLayout";
import { AgentDashboard } from "@/components/agent/AgentDashboard";
import { AIChat } from "@/components/agent/AIChat";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const Agent = () => {
  const { toast } = useToast();

  // Subscribe to real-time notifications
  useEffect(() => {
    const channel = supabase
      .channel('ai-recommendations')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'ai_recommendations',
        },
        (payload) => {
          toast({
            title: payload.new.title,
            description: payload.new.description,
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [toast]);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">AI Investment Assistant</h2>
            <p className="text-muted-foreground">
              Get personalized investment recommendations and insights from our AI.
            </p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AgentDashboard />
          </div>
          <div>
            <AIChat />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Agent;