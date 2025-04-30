
import { useEffect, useState, useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

const DynamicBackground = ({ children }: Props) => {
  const starsRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState<'dawn' | 'day' | 'dusk' | 'night'>('day');
  
  // Determine time of day based on current hour
  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 8) {
        setTime('dawn');
      } else if (hour >= 8 && hour < 17) {
        setTime('day');
      } else if (hour >= 17 && hour < 20) {
        setTime('dusk');
      } else {
        setTime('night');
      }
    };
    
    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);
  
  // Create stars
  useEffect(() => {
    if (!starsRef.current) return;
    
    const createStars = () => {
      const container = starsRef.current;
      if (!container) return;
      
      container.innerHTML = '';
      
      const starCount = Math.min(window.innerWidth / 3, 200);
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.setProperty('--opacity', (Math.random() * 0.7 + 0.3).toString());
        star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
        star.style.setProperty('--delay', `${Math.random() * 2}s`);
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        container.appendChild(star);
      }
    };
    
    createStars();
    window.addEventListener('resize', createStars);
    
    return () => window.removeEventListener('resize', createStars);
  }, []);
  
  // Occasionally create meteors
  useEffect(() => {
    if (!starsRef.current || time !== 'night') return;
    
    const createMeteor = () => {
      const container = starsRef.current;
      if (!container) return;
      
      const meteor = document.createElement('div');
      meteor.className = 'meteor animate-meteor';
      
      const width = Math.random() * 200 + 100;
      meteor.style.width = `${width}px`;
      meteor.style.height = '2px';
      
      meteor.style.left = `${Math.random() * 100}%`;
      meteor.style.top = '-2px';
      
      container.appendChild(meteor);
      
      // Remove meteor after animation completes
      setTimeout(() => {
        container.removeChild(meteor);
      }, 5000);
    };
    
    const interval = setInterval(createMeteor, 10000); // Create meteor every 10 seconds
    
    return () => clearInterval(interval);
  }, [time]);
  
  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Dynamic background based on time of day */}
      <div 
        className={`fixed inset-0 transition-colors duration-3000 z-[-2] ${
          time === 'dawn' ? 'bg-gradient-to-t from-[#614385] to-[#516395]' :
          time === 'day' ? 'bg-gradient-to-b from-[#141e30] to-[#243b55]' :
          time === 'dusk' ? 'bg-gradient-to-t from-[#232526] to-[#414345]' :
          'bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]'
        }`}
      />
      
      {/* Stars container */}
      <div ref={starsRef} className="stars-container">
        {/* Stars will be created dynamically */}
      </div>
      
      {/* Content */}
      {children}
    </div>
  );
};

export default DynamicBackground;
