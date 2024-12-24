import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthLayout } from "@/components/AuthLayout";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signIn(email, password);
      toast.success("Successfully logged in!");
    } catch (error: any) {
      toast.error(error.message || "Failed to log in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AuthLayout
        title="Welcome back"
        subtitle="Sign in to access your investment dashboard"
      >
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
            </div>
            <div className="space-y-2 relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-background"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-primary hover:text-primary/80"
            >
              Forgot password?
            </Link>
          </div>

          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:text-primary/80 font-medium">
              Sign up
            </Link>
          </p>
        </form>
      </AuthLayout>
    </div>
  );
};

export default Login;