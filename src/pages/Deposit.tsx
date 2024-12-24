import { DashboardLayout } from "@/components/DashboardLayout";

const Deposit = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Deposit Funds</h2>
        <p className="text-muted-foreground">
          Securely deposit funds and manage your transactions.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Deposit;