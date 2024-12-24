import { DashboardLayout } from "@/components/DashboardLayout";
import { DepositForm } from "@/components/DepositForm";
import { TransactionHistory } from "@/components/TransactionHistory";

export default function DepositsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Deposits</h1>
          <p className="text-muted-foreground">
            Manage your deposits and view transaction history
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-4">Make a Deposit</h2>
            <DepositForm />
          </div>
        </div>
        <TransactionHistory />
      </div>
    </DashboardLayout>
  );
}