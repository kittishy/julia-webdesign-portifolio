
import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

const DynamicBackground = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Criar estrelas e elementos de fundo ao montar
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const starsContainer = document.createElement('div');
    starsContainer.className = 'fixed inset-0 z-[-2] overflow-hidden';
    
    // Criar estrelas
    const starCount = Math.floor(window.innerWidth / 8); // Mais estrelas para um céu mais preenchido
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Propriedades aleatórias das estrelas
      const size = Math.random() * 3 + 0.5;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 3 + 2;
      const brightness = Math.random() * 0.6 + 0.4;
      
      // Aplicar estilos à estrela
      star.style.setProperty('--twinkle-delay', `${delay}s`);
      star.style.setProperty('--twinkle-duration', `${duration}s`);
      star.style.setProperty('--star-brightness', `${brightness}`);
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${posX}%`;
      star.style.top = `${posY}%`;
      
      starsContainer.appendChild(star);
    }
    
    // Criar nuvens decorativas
    const createCloud = () => {
      const cloud = document.createElement('div');
      const size = Math.random() * 100 + 150;
      const posX = Math.random() * 100;
      const posY = Math.random() * 30 + 10;
      const opacity = Math.random() * 0.08 + 0.02;
      const duration = Math.random() * 200 + 300;
      
      cloud.className = 'absolute blur-2xl rounded-full';
      cloud.style.width = `${size}px`;
      cloud.style.height = `${size / 2}px`;
      cloud.style.left = `${posX}%`;
      cloud.style.top = `${posY}%`;
      cloud.style.opacity = `${opacity}`;
      cloud.style.backgroundColor = '#FFF9E8';
      cloud.style.animation = `float ${duration}s linear infinite`;
      
      return cloud;
    };
    
    // Adicionar algumas nuvens
    for (let i = 0; i < 6; i++) {
      starsContainer.appendChild(createCloud());
    }
    
    container.appendChild(starsContainer);
    
    // Limpar ao desmontar
    return () => {
      container.removeChild(starsContainer);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="celestial-bg min-h-screen overflow-x-hidden">
      {/* Gradientes decorativos */}
      <div className="fixed top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[100px] z-[-1]" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] z-[-1]" />
      
      {children}
    </div>
  );
};

export default DynamicBackground;
