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
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center justify-center translate-y-[3px]">
              <img 
                src="/lovable-uploads/76018a70-b6aa-43af-b17a-be7fced00833.png" 
                alt="WealthGrid Logo" 
                className="h-14 w-14 object-contain"
              />
            </div>
            <span className="text-3xl sm:text-4xl font-bold text-secondary translate-y-[1px]">WealthGrid</span>
          </div>
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