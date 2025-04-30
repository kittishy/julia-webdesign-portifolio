
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: 'low' | 'medium' | 'high';
  disableHover?: boolean;
  disableClick?: boolean;
  onClick?: () => void;
}

const InteractiveElement = ({ 
  children,
  className,
  glowColor = 'rgba(0, 243, 255, 0.3)',
  intensity = 'medium',
  disableHover = false,
  disableClick = false,
  onClick
}: Props) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse move for 3D rotation effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current || disableHover) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate rotation based on mouse position relative to center
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 5;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 5;
    
    setRotation({ x: rotateX, y: rotateY });
    
    // Calculate glow position
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };
  
  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };
  
  // Clean up event listeners
  useEffect(() => {
    return () => {
      setIsHovered(false);
      setRotation({ x: 0, y: 0 });
    };
  }, []);
  
  // Set intensity values
  const intensityValues = {
    low: { scale: 1.02, glow: '10px', shadow: '0 5px 15px' },
    medium: { scale: 1.05, glow: '15px', shadow: '0 8px 25px' },
    high: { scale: 1.08, glow: '20px', shadow: '0 10px 30px' }
  };
  
  const { scale, glow, shadow } = intensityValues[intensity];
  
  return (
    <div
      ref={elementRef}
      className={cn(
        'relative transition-transform duration-300 overflow-hidden',
        !disableHover && 'cursor-pointer',
        isHovered && !disableHover && `scale-${scale}`,
        className
      )}
      style={{
        transform: isHovered && !disableHover ? 
          `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : 
          'perspective(1000px) rotateX(0) rotateY(0)',
        transition: 'transform 0.2s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={!disableClick ? onClick : undefined}
    >
      {/* Glow effect */}
      {isHovered && !disableHover && (
        <div 
          className="absolute inset-0 pointer-events-none z-[-1] opacity-70"
          style={{
            background: `radial-gradient(circle at ${position.x}% ${position.y}%, ${glowColor}, transparent 70%)`,
            boxShadow: `${shadow} ${glowColor}`,
            filter: `blur(${glow})`
          }}
        />
      )}
      
      {/* Content */}
      {children}
    </div>
  );
};

export default InteractiveElement;
