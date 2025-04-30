
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type Achievement = {
  id: string;
  title: string;
  description: string;
  points: number;
  completed: boolean;
  icon: string;
};

interface Props {
  className?: string;
}

const ProgressTracker = ({ className }: Props) => {
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 'explorer',
      title: 'Explorer',
      description: 'Visit all main sections of the site',
      points: 10,
      completed: false,
      icon: '🧭'
    },
    {
      id: 'reader',
      title: 'Avid Reader',
      description: 'Read through the journey section',
      points: 15,
      completed: false,
      icon: '📚'
    },
    {
      id: 'portfolio',
      title: 'Portfolio Reviewer',
      description: 'View at least 3 concept projects',
      points: 20,
      completed: false,
      icon: '🔍'
    },
    {
      id: 'challenge',
      title: 'Challenger',
      description: 'Complete a challenge',
      points: 25,
      completed: false,
      icon: '🏆'
    },
    {
      id: 'connect',
      title: 'Connected',
      description: 'Visit the contact page',
      points: 5,
      completed: false,
      icon: '🔗'
    }
  ]);
  
  const [totalPoints, setTotalPoints] = useState(0);
  const maxPoints = achievements.reduce((sum, a) => sum + a.points, 0);
  
  // Track visited sections for achievements
  useEffect(() => {
    const visitedSections = JSON.parse(localStorage.getItem('visitedSections') || '{}');
    const checkedAchievements = [...achievements];
    let updated = false;
    let points = 0;
    
    // Explorer achievement
    if (
      visitedSections.home &&
      visitedSections.journey &&
      visitedSections.portfolio &&
      visitedSections.challenges &&
      visitedSections.contact
    ) {
      const index = checkedAchievements.findIndex(a => a.id === 'explorer');
      if (index !== -1 && !checkedAchievements[index].completed) {
        checkedAchievements[index].completed = true;
        updated = true;
      }
    }
    
    // Reader achievement
    if (visitedSections.journeyRead) {
      const index = checkedAchievements.findIndex(a => a.id === 'reader');
      if (index !== -1 && !checkedAchievements[index].completed) {
        checkedAchievements[index].completed = true;
        updated = true;
      }
    }
    
    // Portfolio achievement
    if (visitedSections.viewedProjects && visitedSections.viewedProjects >= 3) {
      const index = checkedAchievements.findIndex(a => a.id === 'portfolio');
      if (index !== -1 && !checkedAchievements[index].completed) {
        checkedAchievements[index].completed = true;
        updated = true;
      }
    }
    
    // Challenge achievement
    if (visitedSections.completedChallenge) {
      const index = checkedAchievements.findIndex(a => a.id === 'challenge');
      if (index !== -1 && !checkedAchievements[index].completed) {
        checkedAchievements[index].completed = true;
        updated = true;
      }
    }
    
    // Connect achievement
    if (visitedSections.contact) {
      const index = checkedAchievements.findIndex(a => a.id === 'connect');
      if (index !== -1 && !checkedAchievements[index].completed) {
        checkedAchievements[index].completed = true;
        updated = true;
      }
    }
    
    // Calculate total points
    points = checkedAchievements.reduce((sum, a) => sum + (a.completed ? a.points : 0), 0);
    
    if (updated) {
      setAchievements(checkedAchievements);
    }
    
    setTotalPoints(points);
  }, [achievements]);
  
  return (
    <div className={cn("max-w-md mx-auto", className)}>
      <div className="flex flex-col gap-4">
        <div className="mb-4">
          <h3 className="font-display text-xl font-bold mb-2">Your Exploration</h3>
          <div className="w-full bg-muted rounded-full h-3">
            <div 
              className="progress-bar h-3 transition-all duration-1000" 
              style={{ width: `${(totalPoints / maxPoints) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>0</span>
            <span>{totalPoints}/{maxPoints} points</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className={cn(
                "p-3 rounded-lg border transition-all duration-300",
                achievement.completed ? 
                  "bg-muted/30 border-primary/50" : 
                  "bg-muted/10 border-border/50 opacity-70"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{achievement.title}</h4>
                    <span className="text-sm text-muted-foreground">{achievement.points} pts</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
                <div className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center",
                  achievement.completed ? "bg-primary text-primary-foreground" : "bg-muted"
                )}>
                  {achievement.completed && "✓"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
