import { Card } from "@/components/ui/card";
import { ChartLine } from "lucide-react";

export default function Strategies() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2">
        <ChartLine className="h-6 w-6" />
        <h1 className="text-3xl font-bold tracking-tight">Investment Strategies</h1>
      </div>
      <Card className="p-6">
        <p className="text-muted-foreground">
          Explore and customize AI-driven investment strategies. Monitor performance
          and adjust your portfolio allocations.
        </p>
      </Card>
    </div>
  );
}