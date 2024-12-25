import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function DailyLearn() {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Book className="h-5 w-5 text-primary" />
          Daily Learn
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Card className="p-4 bg-background">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Understanding Market Basics</h4>
                <p className="text-sm text-muted-foreground">5 min read</p>
              </div>
            </div>
          </Card>
          <Button 
            className="w-full"
            onClick={() => navigate('/dashboard/learn')}
          >
            Explore More in Learn <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}