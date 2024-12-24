import { useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import { supabase } from "@/integrations/supabase/client"

export function NotificationToast() {
  const { toast } = useToast()

  useEffect(() => {
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'transactions'
        },
        (payload) => {
          const { new: newData } = payload
          if (newData.status === 'completed') {
            toast({
              title: "Deposit Successful",
              description: `Your deposit of $${newData.amount.toLocaleString()} has been completed.`,
            })
          } else if (newData.status === 'failed') {
            toast({
              title: "Deposit Failed",
              description: "Your deposit could not be processed. Please try again.",
              variant: "destructive",
            })
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [toast])

  return null
}