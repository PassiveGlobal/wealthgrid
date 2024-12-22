import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { CreditCard as CreditCardIcon, Sparkles, Wallet, Shield } from "lucide-react";

export default function CreditCard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              The PassiveGlobal<br />
              <span className="text-secondary">Credit Card</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-lg">
              Earn rewards on every purchase. Get up to 2% cashback on investments and 1% on everything else.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Wallet className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground">Investment Rewards</h3>
                  <p className="text-primary-foreground/70">Earn 2% back when you invest through PassiveGlobal</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground">Zero Annual Fee</h3>
                  <p className="text-primary-foreground/70">No hidden fees or charges, ever</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Reserve Your Spot
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-3xl" />
            <div className="relative p-8">
              <div className="w-full aspect-[1.586/1] bg-gradient-to-br from-secondary to-accent rounded-2xl shadow-2xl transform rotate-6 animate-float">
                <div className="absolute inset-4 bg-background/10 backdrop-blur rounded-xl border border-white/10">
                  <div className="p-6">
                    <CreditCardIcon className="h-12 w-12 text-white/90" />
                    <div className="mt-auto pt-20">
                      <p className="text-white/90 font-mono text-lg">**** **** **** ****</p>
                      <p className="text-white/70 font-mono mt-2">PASSIVE GLOBAL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}