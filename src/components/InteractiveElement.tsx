
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
  style?: React.CSSProperties;
}

const InteractiveElement = ({ 
  children,
  className,
  glowColor = 'rgba(255, 113, 154, 0.3)', // Cor secondary
  intensity = 'medium',
  disableHover = false,
  disableClick = false,
  onClick,
  style
}: Props) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Controlar movimento do mouse para efeito de rotação 3D
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!elementRef.current || disableHover) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calcular rotação com base na posição do mouse em relação ao centro
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 5;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 5;
    
    setRotation({ x: rotateX, y: rotateY });
    
    // Calcular posição do brilho
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };
  
  // Resetar rotação quando o mouse sai
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };
  
  // Limpar event listeners
  useEffect(() => {
    return () => {
      setIsHovered(false);
      setRotation({ x: 0, y: 0 });
    };
  }, []);
  
  // Definir valores de intensidade
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
        isHovered && !disableHover && `scale-[${scale}]`,
        className
      )}
      style={{
        transform: isHovered && !disableHover ? 
          `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : 
          'perspective(1000px) rotateX(0) rotateY(0)',
        transition: 'transform 0.2s ease-out',
        willChange: isHovered ? 'transform' : 'auto',
        ...style
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={!disableClick ? onClick : undefined}
    >
      {/* Efeito de brilho */}
      {isHovered && !disableHover && (
        <div 
          className="absolute inset-0 pointer-events-none z-[-1] opacity-70"
          style={{
            background: `radial-gradient(circle at ${position.x}% ${position.y}%, ${glowColor}, transparent 70%)`,
            boxShadow: `${shadow} ${glowColor}`,
            filter: `blur(${glow})`,
            willChange: 'background, box-shadow'
          }}
        />
      )}
      
      {/* Conteúdo */}
      {children}
    </div>
  );
};

export default InteractiveElement;
