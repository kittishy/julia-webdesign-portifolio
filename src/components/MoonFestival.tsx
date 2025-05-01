
import { useEffect, useRef } from 'react';

interface LanternProps {
  className?: string;
  delay?: number;
}

export const Lantern = ({ className, delay = 0 }: LanternProps) => {
  return (
    <div 
      className={`lantern float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="lantern-body">
        <div className="lantern-glow"></div>
        <div className="w-full h-full flex items-center justify-center text-accent text-xs font-medium">
          祝福
        </div>
      </div>
      <div className="lantern-bottom"></div>
      <div className="w-px h-8 mx-auto bg-accent/50"></div>
    </div>
  );
};

interface MoonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Moon = ({ className, size = 'lg' }: MoonProps) => {
  const moonRef = useRef<HTMLDivElement>(null);
  
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64 sm:w-80 sm:h-80',
    xl: 'w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]'
  };
  
  useEffect(() => {
    if (!moonRef.current) return;
    
    const moon = moonRef.current;
    
    // Adicionar crateras aleatórias
    for (let i = 0; i < 8; i++) {
      const crater = document.createElement('div');
      crater.className = 'moon-crater';
      
      const size = Math.random() * 30 + 10;
      const posX = Math.random() * 70 + 15;
      const posY = Math.random() * 70 + 15;
      
      crater.style.width = `${size}px`;
      crater.style.height = `${size}px`;
      crater.style.left = `${posX}%`;
      crater.style.top = `${posY}%`;
      
      moon.appendChild(crater);
    }
    
    return () => {
      // Limpar crateras ao desmontar
      const craters = moon.querySelectorAll('.moon-crater');
      craters.forEach(crater => crater.remove());
    };
  }, []);
  
  return (
    <div 
      ref={moonRef}
      className={`moon ${sizeClasses[size]} moon-glow pulse ${className}`}
    ></div>
  );
};

interface CloudProps {
  className?: string;
  opacity?: number;
}

export const Cloud = ({ className, opacity = 0.3 }: CloudProps) => {
  return (
    <div 
      className={`absolute blur-2xl rounded-full bg-accent/30 ${className}`}
      style={{ opacity }}
    ></div>
  );
};

export const MoonWithClouds = () => {
  return (
    <div className="relative h-[450px] w-full flex items-center justify-center">
      <Moon size="xl" className="relative z-10" />
      <Cloud 
        className="w-[200px] h-[100px] left-[15%] top-[35%] float"
        opacity={0.08}
      />
      <Cloud 
        className="w-[300px] h-[120px] right-[15%] top-[45%] float-delayed"
        opacity={0.12}
      />
      
      <Lantern 
        className="absolute left-[10%] top-[30%]" 
        delay={1}
      />
      <Lantern 
        className="absolute right-[10%] top-[20%]" 
        delay={2}
      />
      <Lantern 
        className="absolute left-[20%] top-[60%]" 
        delay={0.5}
      />
      <Lantern 
        className="absolute right-[20%] top-[50%]" 
        delay={1.5}
      />
    </div>
  );
};

export default MoonWithClouds;
