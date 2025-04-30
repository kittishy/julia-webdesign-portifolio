
import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

const DynamicBackground = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create stars on mount
  useEffect(() => {
    if (!containerRef.current) return;
    
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';
    
    // Create stars
    const starCount = Math.floor(window.innerWidth / 10); // Responsive star count
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random star properties
      const size = Math.random() * 3 + 1;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 2;
      const opacity = Math.random() * 0.3 + 0.1;
      
      // Apply star styles
      star.style.setProperty('--delay', `${delay}s`);
      star.style.setProperty('--duration', `${duration}s`);
      star.style.setProperty('--opacity', `${opacity}`);
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${posX}%`;
      star.style.top = `${posY}%`;
      
      starsContainer.appendChild(star);
    }
    
    // Add meteor effect occasionally
    const createMeteor = () => {
      const meteor = document.createElement('div');
      meteor.className = 'meteor';
      
      const size = Math.random() * 2 + 1;
      const posX = Math.random() * 100;
      const posY = Math.random() * 40;
      const duration = Math.random() * 2 + 1;
      
      meteor.style.width = `${size}px`;
      meteor.style.height = `${Math.random() * 20 + 30}px`;
      meteor.style.left = `${posX}%`;
      meteor.style.top = `${posY}%`;
      meteor.style.animationDuration = `${duration}s`;
      meteor.style.opacity = '1';
      
      starsContainer.appendChild(meteor);
      
      setTimeout(() => {
        meteor.remove();
      }, duration * 1000);
    };
    
    // Add meteors randomly
    const meteorInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        createMeteor();
      }
    }, 3000);
    
    containerRef.current.appendChild(starsContainer);
    
    // Clean up
    return () => {
      clearInterval(meteorInterval);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="celestial-bg min-h-screen bg-celestial-pattern overflow-x-hidden">
      {/* Background gradient circles/elements */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="fixed top-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-2xl -z-10" />
      
      {children}
    </div>
  );
};

export default DynamicBackground;
