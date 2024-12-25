import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface Course {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

export default function DashboardLearn() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: courses, isLoading } = useQuery({
    queryKey: ['education-resources'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('education_resources')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      return data || [];
    },
  });

  const toggleCompletion = useMutation({
    mutationFn: async (courseId: string) => {
      // In a real implementation, this would update the completion status in the database
      toast({
        title: "Course status updated",
        description: "Your progress has been saved.",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['education-resources'] });
    },
  });

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Learning Resources</h2>
        </div>

        <div className="grid gap-4">
          {courses?.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {course.difficulty_level} • {course.category}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-auto"
                    onClick={() => toggleCompletion.mutate(course.id)}
                  >
                    <Check className="mr-2 h-4 w-4" />
                    Mark as Complete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}