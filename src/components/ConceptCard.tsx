
import { useState } from 'react';
import { cn } from '@/lib/utils';
import InteractiveElement from './InteractiveElement';

interface ConceptProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  preview: string;
  fullImage?: string;
  className?: string;
  isInteractive?: boolean;
}

const ConceptCard = ({
  id,
  title,
  description,
  tags,
  preview,
  fullImage,
  className,
  isInteractive = true
}: ConceptProps) => {
  const [expanded, setExpanded] = useState(false);
  
  // Update localStorage when a project is viewed
  const handleViewProject = () => {
    setExpanded(true);
    
    // Update visited projects count for achievement tracking
    const visitedSections = JSON.parse(localStorage.getItem('visitedSections') || '{}');
    visitedSections.viewedProjects = (visitedSections.viewedProjects || 0) + 1;
    localStorage.setItem('visitedSections', JSON.stringify(visitedSections));
  };
  
  return (
    <InteractiveElement 
      className={cn(
        "rounded-lg overflow-hidden",
        isInteractive ? "cursor-pointer" : "cursor-default",
        className
      )}
      glowColor="rgba(154, 0, 255, 0.3)"
      disableHover={!isInteractive}
      disableClick={!isInteractive}
      onClick={isInteractive ? handleViewProject : undefined}
    >
      <div className={cn(
        "bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-500",
        expanded ? "max-h-[800px]" : "max-h-96"
      )}>
        {/* Preview image */}
        <div className="relative h-48 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500"
            style={{ 
              backgroundImage: `url(${expanded && fullImage ? fullImage : preview})`,
              transform: expanded ? "scale(1)" : "scale(1.05)"
            }}
          />
          {!expanded && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4">
              <span className="text-sm font-medium text-white/90">
                Click to expand
              </span>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-0.5 bg-muted/50 rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Description */}
          <p className={cn(
            "text-sm text-muted-foreground transition-all duration-300",
            expanded ? "line-clamp-none" : "line-clamp-3"
          )}>
            {description}
          </p>
          
          {/* Expand/collapse button */}
          {expanded && (
            <button
              className="mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(false);
              }}
            >
              Collapse
            </button>
          )}
        </div>
      </div>
    </InteractiveElement>
  );
};

export default ConceptCard;
