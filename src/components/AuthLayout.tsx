import { ChartBar } from "lucide-react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link to="/" className="inline-block mb-4">
            <img 
              src="/lovable-uploads/5e8d3882-cf06-4ee9-823b-334647048889.png" 
              alt="WealthGrid Logo" 
              className="h-24 mx-auto"
            />
          </Link>
          <h2 className="text-2xl font-semibold text-primary-foreground">{title}</h2>
          <p className="text-muted-foreground mt-2">{subtitle}</p>
        </div>
        <div className="bg-background/5 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-border/50">
          {children}
        </div>
      </div>
    </div>
  );
};