
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import MainLayout from '@/layouts/MainLayout';
import InteractiveElement from '@/components/InteractiveElement';
import SearchBar from '@/components/SearchBar';
import { useLanguage } from '@/contexts/LanguageContext';
import MoonWithClouds, { Moon, Lantern } from '@/components/MoonFestival';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useLanguage();
  
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
      
      {/* Seção de hero */}
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
      
      {/* Seção de destaques */}
      <section className="section-container bg-primary/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-playfair font-semibold mb-4 text-accent">
              {t('interactiveExperience')}
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              {t('exploreDigitalExperience')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title={t('visualStory')}
              description={t('visualStoryDesc')}
              icon="🏮"
              link="/journey"
              delay={0}
            />
            <FeatureCard
              title={t('conceptPortfolio')}
              description={t('conceptPortfolioDesc')}
              icon="🌕"
              link="/portfolio"
              delay={1}
            />
            <FeatureCard
              title={t('challengesAchievements')}
              description={t('challengesAchievementsDesc')}
              icon="🎭"
              link="/challenges"
              delay={2}
            />
          </div>
          
          {/* Elementos decorativos */}
          <div className="absolute -bottom-10 -right-10 opacity-50">
            <Lantern delay={1.5} />
          </div>
          <div className="absolute -bottom-10 -left-10 opacity-50">
            <Lantern delay={2.2} />
          </div>
        </div>
      </section>
      
      {/* Sobre o Festival */}
      <section className="section-container">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-playfair font-semibold mb-6 text-accent">
                {t('aboutProject')}
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                {t('aboutProjectDesc')}
              </p>
              <ul className="space-y-3">
                {[
                  t('aboutProjectPoint1'),
                  t('aboutProjectPoint2'),
                  t('aboutProjectPoint3'),
                  t('aboutProjectPoint4'),
                  t('aboutProjectPoint5')
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-secondary mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <InteractiveElement>
                  <Link
                    to="/contact"
                    className="button-secondary"
                  >
                    {t('getInTouch')}
                  </Link>
                </InteractiveElement>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-secondary/10 to-transparent z-0" />
              <div className="relative z-10 aspect-video rounded-xl overflow-hidden shadow-lg border border-border/20">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488503674815-d6c13687ff65?q=80&w=1000&auto=format&fit=crop)' }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/15 rounded-full blur-3xl -z-10" />
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2">
                <Moon size="sm" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA seção */}
      <section className="section-container bg-primary/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-playfair font-semibold mb-6 text-accent">
              {t('readyToStart')}
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              {t('readyToStartDesc')}
            </p>
            <InteractiveElement>
              <Link
                to="/journey"
                className="button-primary"
              >
                {t('startExploration')}
              </Link>
            </InteractiveElement>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

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

export default Index;
