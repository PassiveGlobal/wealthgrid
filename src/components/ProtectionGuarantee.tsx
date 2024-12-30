import { Shield, Lock, Clock } from "lucide-react";

export const ProtectionGuarantee = () => {
  return (
    <section className="py-32 bg-primary/5">
      <div className="container max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Your Investment, Our Priority</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We implement industry-leading security measures to ensure your investments are protected around the clock.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-2xl bg-background border transition-all hover:shadow-xl hover:transform hover:scale-[1.02] duration-300">
            <div className="mb-6 p-4 rounded-full bg-secondary/10 w-fit group-hover:bg-secondary/20 transition-colors">
              <Shield className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Asset Protection</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your investments are secured with military-grade encryption and multi-layer protection protocols.
            </p>
          </div>
          
          <div className="group p-8 rounded-2xl bg-background border transition-all hover:shadow-xl hover:transform hover:scale-[1.02] duration-300">
            <div className="mb-6 p-4 rounded-full bg-secondary/10 w-fit group-hover:bg-secondary/20 transition-colors">
              <Lock className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Secure Authentication</h3>
            <p className="text-muted-foreground leading-relaxed">
              Advanced two-factor authentication and biometric security features protect your account access.
            </p>
          </div>
          
          <div className="group p-8 rounded-2xl bg-background border transition-all hover:shadow-xl hover:transform hover:scale-[1.02] duration-300">
            <div className="mb-6 p-4 rounded-full bg-secondary/10 w-fit group-hover:bg-secondary/20 transition-colors">
              <Clock className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">24/7 Monitoring</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our advanced systems continuously monitor and prevent potential security threats in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};