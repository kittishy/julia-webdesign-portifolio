
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import InteractiveElement from './InteractiveElement';

interface Props {
  date: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  side?: 'left' | 'right';
  className?: string;
}

const TimelineEvent = ({
  date,
  title,
  description,
  icon = '🔹',
  image,
  side = 'left',
  className,
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const eventRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );
    
    if (eventRef.current) {
      observer.observe(eventRef.current);
    }
    
    return () => {
      if (eventRef.current) {
        observer.unobserve(eventRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={eventRef}
      className={cn(
        "flex flex-col md:flex-row items-center md:items-start gap-6 relative my-12",
        side === 'right' ? "md:flex-row-reverse" : "",
        className
      )}
    >
      {/* Line and dot */}
      <div className="absolute top-5 left-1/2 md:left-auto md:top-1/2 transform -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 h-full md:h-0.5 md:w-full bg-muted/50 -z-10" />
      
      <div className="w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center text-lg z-10">
        {icon}
      </div>
      
      {/* Content */}
      <InteractiveElement
        className={cn(
          "w-full md:w-5/12 opacity-0 transition-all duration-700",
          isVisible && "opacity-100",
          side === 'left' ? "translate-x-12" : "-translate-x-12",
          isVisible && "!translate-x-0"
        )}
        disableClick
      >
        <div className="bg-card border border-border/50 rounded-lg overflow-hidden">
          {image && (
            <div 
              className="w-full h-32 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
          <div className="p-4">
            <div className="text-sm font-mono text-muted-foreground mb-1">{date}</div>
            <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </InteractiveElement>
    </div>
  );
};

export default TimelineEvent;
