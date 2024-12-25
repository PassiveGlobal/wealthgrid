import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Settings } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function NotificationPreferences() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          Preferences
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Notification Preferences</DialogTitle>
          <DialogDescription>
            Choose which notifications you want to receive
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="market-trends">Market Trends</Label>
            <Switch id="market-trends" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="ai-recommendations">AI Recommendations</Label>
            <Switch id="ai-recommendations" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="transactions">Transactions</Label>
            <Switch id="transactions" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="performance">Performance Updates</Label>
            <Switch id="performance" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications">Push Notifications</Label>
            <Switch id="push-notifications" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}