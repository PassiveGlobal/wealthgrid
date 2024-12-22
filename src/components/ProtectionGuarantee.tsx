import { Shield, Lock, Clock } from "lucide-react";

export const ProtectionGuarantee = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Your Investment, Our Priority</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We implement industry-leading security measures to ensure your investments are protected around the clock.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-6 rounded-2xl bg-background border transition-all hover:shadow-lg">
            <div className="mb-4 p-3 rounded-full bg-secondary/10 w-fit group-hover:bg-secondary/20 transition-colors">
              <Shield className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Asset Protection</h3>
            <p className="text-muted-foreground">
              Your investments are secured with military-grade encryption and multi-layer protection protocols.
            </p>
          </div>
          
          <div className="group p-6 rounded-2xl bg-background border transition-all hover:shadow-lg">
            <div className="mb-4 p-3 rounded-full bg-secondary/10 w-fit group-hover:bg-secondary/20 transition-colors">
              <Lock className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
            <p className="text-muted-foreground">
              Two-factor authentication and biometric security features keep your account safe from unauthorized access.
            </p>
          </div>
          
          <div className="group p-6 rounded-2xl bg-background border transition-all hover:shadow-lg">
            <div className="mb-4 p-3 rounded-full bg-secondary/10 w-fit group-hover:bg-secondary/20 transition-colors">
              <Clock className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Monitoring</h3>
            <p className="text-muted-foreground">
              Our advanced systems continuously monitor for suspicious activities and prevent potential threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};