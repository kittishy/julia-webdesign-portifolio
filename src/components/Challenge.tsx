
import { useState } from 'react';
import { cn } from '@/lib/utils';
import InteractiveElement from './InteractiveElement';

interface ChallengeProps {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  challenge: React.ReactNode;
  reward: string;
  className?: string;
}

const Challenge = ({
  id,
  title,
  description,
  difficulty,
  challenge,
  reward,
  className,
}: ChallengeProps) => {
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  
  // Handle challenge completion
  const handleComplete = () => {
    setIsCompleted(true);
    
    // Update achievements
    const visitedSections = JSON.parse(localStorage.getItem('visitedSections') || '{}');
    visitedSections.completedChallenge = true;
    localStorage.setItem('visitedSections', JSON.stringify(visitedSections));
  };
  
  return (
    <div className={cn(
      "bg-card border border-border/50 rounded-lg overflow-hidden",
      className
    )}>
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-lg font-bold">{title}</h3>
          <span className={cn(
            "px-2 py-0.5 rounded-md text-xs font-medium",
            difficulty === 'easy' ? "bg-green-500/20 text-green-400" :
            difficulty === 'medium' ? "bg-yellow-500/20 text-yellow-400" :
            "bg-red-500/20 text-red-400"
          )}>
            {difficulty}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      
      {/* Challenge content */}
      <div className="p-4">
        {isStarted ? (
          <div className="space-y-4">
            <div className="bg-muted/30 rounded-lg p-4">
              {challenge}
            </div>
            
            {/* Complete button */}
            {!isCompleted ? (
              <InteractiveElement
                className="w-full"
                onClick={handleComplete}
              >
                <button
                  className="w-full py-2 px-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  Complete Challenge
                </button>
              </InteractiveElement>
            ) : (
              <div className="space-y-3">
                <div className="bg-green-500/20 text-green-400 p-3 rounded-lg text-center">
                  <p className="font-medium">Challenge Completed!</p>
                </div>
                <div className="bg-muted/30 p-3 rounded-lg">
                  <p className="font-medium mb-1">Reward:</p>
                  <p className="text-sm">{reward}</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <InteractiveElement
            className="w-full"
            onClick={() => setIsStarted(true)}
          >
            <button
              className="w-full py-2 px-4 bg-muted/50 text-foreground font-medium rounded-md hover:bg-muted/70 transition-colors"
            >
              Start Challenge
            </button>
          </InteractiveElement>
        )}
      </div>
    </div>
  );
};

export default Challenge;
