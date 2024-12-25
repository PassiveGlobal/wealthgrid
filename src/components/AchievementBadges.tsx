import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Medal, TrendingUp, Wallet, Award } from "lucide-react";

export function AchievementBadges() {
  const achievements = [
    {
      title: "First Investment",
      description: "Made your first investment",
      icon: Wallet,
      earned: true,
      date: "2024-01-15",
    },
    {
      title: "Profit Milestone",
      description: "Reached $1,000 in profits",
      icon: TrendingUp,
      earned: true,
      date: "2024-02-01",
    },
    {
      title: "Smart Investor",
      description: "Maintained portfolio for 3 months",
      icon: Award,
      earned: false,
    },
    {
      title: "Market Master",
      description: "Achieved 10% monthly return",
      icon: Medal,
      earned: false,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Medal className="h-5 w-5 text-primary" />
          Achievements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.title}
              className={`p-4 ${achievement.earned ? 'bg-secondary/10' : 'bg-muted/50'}`}
            >
              <div className="flex flex-col items-center text-center gap-2">
                <achievement.icon 
                  className={`h-8 w-8 ${
                    achievement.earned ? 'text-secondary' : 'text-muted-foreground'
                  }`}
                />
                <h4 className="font-medium">{achievement.title}</h4>
                <p className="text-xs text-muted-foreground">
                  {achievement.description}
                </p>
                {achievement.earned && (
                  <span className="text-xs text-secondary">
                    Earned on {new Date(achievement.date).toLocaleDateString()}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}