
import { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutSection from '@/components/sections/AboutSection';
import CtaSection from '@/components/sections/CtaSection';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Acompanhar progresso de rolagem
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = Math.min(scrollY / docHeight, 1);
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Registrar visita à página inicial
  useEffect(() => {
    const visitedSections = JSON.parse(localStorage.getItem('visitedSections') || '{}');
    visitedSections.home = true;
    localStorage.setItem('visitedSections', JSON.stringify(visitedSections));
  }, []);
  
  return (
    <MainLayout>
      {/* Barra de progresso */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CtaSection />
    </MainLayout>
  );
};

export default Index;
