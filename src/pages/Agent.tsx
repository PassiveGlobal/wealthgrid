import { Card } from "@/components/ui/card";
import { Brain } from "lucide-react";

export default function Agent() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2">
        <Brain className="h-6 w-6" />
        <h1 className="text-3xl font-bold tracking-tight">AI Investment Agent</h1>
      </div>
      <Card className="p-6">
        <p className="text-muted-foreground">
          Your personal AI investment assistant is being configured. Soon you'll receive
          tailored investment recommendations based on your goals and risk tolerance.
        </p>
      </Card>
    </div>
  );
}