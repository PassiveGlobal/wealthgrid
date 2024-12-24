import { DashboardLayout } from "@/components/DashboardLayout";
import { DepositForm } from "@/components/DepositForm";
import { TransactionHistory } from "@/components/TransactionHistory";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export default function DepositsPage() {
  const { data: bankAccounts, isLoading: isBankAccountsLoading } = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('bank_accounts')
        .select('*')
      if (error) throw error
      return data
    },
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Deposits</h1>
          <p className="text-muted-foreground mt-2">
            Manage your deposits and view transaction history
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-4">Make a Deposit</h2>
            {isBankAccountsLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            ) : (
              <DepositForm />
            )}
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Connected Bank Accounts</h2>
            {isBankAccountsLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            ) : bankAccounts?.length === 0 ? (
              <div className="text-center p-8 border rounded-lg bg-muted/10">
                <p className="text-muted-foreground">
                  No bank accounts connected yet. Add one to make deposits.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {bankAccounts?.map((account) => (
                  <div
                    key={account.id}
                    className="p-4 border rounded-lg bg-card"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{account.bank_name}</p>
                        <p className="text-sm text-muted-foreground">
                          Account ending in {account.account_mask}
                        </p>
                      </div>
                      <span className="text-sm bg-secondary/10 text-secondary px-2 py-1 rounded">
                        {account.account_type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <TransactionHistory />
      </div>
    </DashboardLayout>
  );
}