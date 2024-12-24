import { DashboardLayout } from "@/components/DashboardLayout";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DepositForm } from "@/components/deposit/DepositForm";
import { TransactionHistory } from "@/components/deposit/TransactionHistory";

const Deposit = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold">Deposit Funds</h2>
          <p className="text-muted-foreground">
            Securely deposit funds into your WealthGrid account
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Make a Deposit</CardTitle>
              <CardDescription>
                Choose your preferred payment method and enter the amount
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DepositForm />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
              <CardDescription>
                Personalized deposit suggestions from Rover AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Smart Deposit Tip</AlertTitle>
                <AlertDescription>
                  Based on your portfolio performance, we recommend regular deposits
                  of $500 to optimize your investment growth.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>
              View and download your past deposit records
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TransactionHistory />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Deposit;