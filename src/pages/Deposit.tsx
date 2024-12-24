import { Card } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

export default function Deposit() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2">
        <CreditCard className="h-6 w-6" />
        <h1 className="text-3xl font-bold tracking-tight">Deposits</h1>
      </div>
      <Card className="p-6">
        <p className="text-muted-foreground">
          Securely manage your deposits and link your bank accounts. View your transaction
          history and manage your payment methods.
        </p>
      </Card>
    </div>
  );
}