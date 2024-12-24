import { Button } from "@/components/ui/button";
import { usePlaidLink } from "react-plaid-link";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export function ConnectBankAccount() {
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const { toast } = useToast();

  const createLinkToken = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('create-plaid-link-token');
      if (error) throw error;
      setLinkToken(data.link_token);
    } catch (error) {
      console.error('Error creating link token:', error);
      toast({
        title: "Error",
        description: "Could not initialize bank connection. Please try again.",
        variant: "destructive",
      });
    }
  };

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: async (public_token, metadata) => {
      try {
        const { error } = await supabase.functions.invoke('exchange-plaid-token', {
          body: { public_token },
        });
        
        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Bank account connected successfully!",
        });
      } catch (error) {
        console.error('Error exchanging token:', error);
        toast({
          title: "Error",
          description: "Failed to connect bank account. Please try again.",
          variant: "destructive",
        });
      }
    },
  });

  const handleClick = () => {
    if (linkToken) {
      open();
    } else {
      createLinkToken();
    }
  };

  return (
    <Button 
      onClick={handleClick} 
      disabled={linkToken && !ready}
      className="bg-secondary hover:bg-secondary/90"
    >
      Connect Bank Account
    </Button>
  );
}