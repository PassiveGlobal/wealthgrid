import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export const DepositStatus = () => {
  const { session } = useAuth();
  const { toast } = useToast();

  const { data: latestTransaction } = useQuery({
    queryKey: ["latest-transaction", session?.user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .eq("user_id", session?.user?.id)
        .eq("type", "deposit")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!session?.user?.id,
  });

  useEffect(() => {
    if (latestTransaction?.status === "completed") {
      toast({
        title: "Deposit Successful",
        description: `Your deposit of $${latestTransaction.amount.toLocaleString()} has been processed successfully.`,
      });
    } else if (latestTransaction?.status === "failed") {
      toast({
        variant: "destructive",
        title: "Deposit Failed",
        description: "There was an issue processing your deposit. Please try again.",
      });
    }
  }, [latestTransaction?.status, latestTransaction?.amount, toast]);

  // Set up real-time updates for transaction status
  useEffect(() => {
    const channel = supabase
      .channel("transaction-updates")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "transactions",
          filter: `user_id=eq.${session?.user?.id}`,
        },
        (payload) => {
          console.log("Transaction updated:", payload);
          // QueryClient will automatically refetch the data
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [session?.user?.id]);

  return null;
};