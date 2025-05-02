
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import InteractiveElement from '@/components/InteractiveElement';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, link, delay = 0 }: FeatureCardProps) => {
  return (
    <InteractiveElement
      className={cn(
        "h-full opacity-0 translate-y-4",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${delay * 0.2}s` }}
      glowColor="rgba(255, 249, 232, 0.2)"
    >
      <Link to={link} className="block h-full">
        <div className="h-full glass-panel rounded-xl p-6 shadow-sm">
          <div className="w-14 h-14 rounded-lg bg-primary/30 flex items-center justify-center text-3xl mb-4">
            {icon}
          </div>
          <h3 className="font-playfair text-xl font-medium mb-2 text-accent">{title}</h3>
          <p className="text-sm text-foreground/80">{description}</p>
        </div>
      </Link>
    </InteractiveElement>
  );
};

export default FeatureCard;
