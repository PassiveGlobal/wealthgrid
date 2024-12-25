import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickLearn() {
  const lessons = [
    {
      title: "Understanding Market Basics",
      duration: "5 min read",
      completed: true,
    },
    {
      title: "Risk Management 101",
      duration: "7 min read",
      completed: false,
    },
    {
      title: "Portfolio Diversification",
      duration: "6 min read",
      completed: false,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Quick Learn
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <Card 
              key={lesson.title}
              className={`p-4 ${lesson.completed ? 'bg-secondary/10' : 'bg-background'}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{lesson.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {lesson.duration}
                  </p>
                </div>
                <Button variant="ghost" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}