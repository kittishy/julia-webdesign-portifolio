
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InteractiveElement from '@/components/InteractiveElement';
import SearchBar from '@/components/SearchBar';
import { useLanguage } from '@/contexts/LanguageContext';
import MoonWithClouds from '@/components/MoonFestival';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          <div 
            className="max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-semibold mb-6 text-accent">
              {t('siteName')}
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              {t('siteTagline')}
            </p>
            
            <SearchBar className="mb-12 mx-auto max-w-md" />
            
            <MoonWithClouds />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <InteractiveElement>
                <Link
                  to="/journey"
                  className="button-primary"
                >
                  {t('startJourney')}
                </Link>
              </InteractiveElement>
              <InteractiveElement>
                <Link
                  to="/portfolio"
                  className="button-secondary"
                >
                  {t('viewConcepts')}
                </Link>
              </InteractiveElement>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de rolagem */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-foreground/60">{t('scrollDown')}</span>
        <div className="w-6 h-9 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
