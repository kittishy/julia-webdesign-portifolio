
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import MainLayout from '@/layouts/MainLayout';
import InteractiveElement from '@/components/InteractiveElement';
import CharacterCarousel from '@/components/CharacterCarousel';
import SearchBar from '@/components/SearchBar';
import { useLanguage } from '@/contexts/LanguageContext';
import { trackMouseMovement } from '@/utils/mouse-tracking';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  // Track scroll progress
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
  
  // Apply parallax effect on hero section
  useEffect(() => {
    if (!heroRef.current || !heroImgRef.current) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speed = 0.3;
      
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${scrollY * speed}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Mouse tracking for hero section
  useEffect(() => {
    if (!heroImgRef.current) return;
    
    return trackMouseMovement((x, y) => {
      if (heroImgRef.current) {
        const moveX = (x - 0.5) * 10;
        const moveY = (y - 0.5) * 10;
        heroImgRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
      }
    });
  }, []);
  
  // Register home page visit
  useEffect(() => {
    const visitedSections = JSON.parse(localStorage.getItem('visitedSections') || '{}');
    visitedSections.home = true;
    localStorage.setItem('visitedSections', JSON.stringify(visitedSections));
  }, []);
  
  return (
    <MainLayout>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      
      {/* Hero section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background image with parallax */}
        <div 
          ref={heroImgRef}
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center -z-10 transition-transform duration-300"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=1920&auto=format&fit=crop)',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(255, 255, 255, 0.85)'
          }}
        />
        
        {/* Hero content */}
        <div className="container mx-auto px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div 
              className="max-w-lg mx-auto md:mx-0 text-center md:text-left"
              data-aos="fade-up"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-semibold mb-6 elegant-heading">
                {t('siteName')}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                {t('siteTagline')}
              </p>
              
              <SearchBar className="mb-8 mx-auto md:mx-0 max-w-md" />
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
            
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              {/* Character carousel will go here */}
              <CharacterCarousel />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-muted-foreground">{t('scrollDown')}</span>
          <div className="w-6 h-9 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-2" />
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="section-container bg-white/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold mb-4 elegant-heading">
              {t('interactiveExperience')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('exploreDigitalExperience')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title={t('visualStory')}
              description={t('visualStoryDesc')}
              icon="📚"
              link="/journey"
              delay={0}
            />
            <FeatureCard
              title={t('conceptPortfolio')}
              description={t('conceptPortfolioDesc')}
              icon="🎨"
              link="/portfolio"
              delay={1}
            />
            <FeatureCard
              title={t('challengesAchievements')}
              description={t('challengesAchievementsDesc')}
              icon="🏆"
              link="/challenges"
              delay={2}
            />
          </div>
        </div>
      </section>
      
      {/* About section */}
      <section className="section-container">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold mb-6 elegant-heading">
                {t('aboutProject')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
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
                    <span className="text-primary mt-0.5">✓</span>
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
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent z-0" />
              <div className="relative z-10 aspect-video rounded-xl overflow-hidden shadow-lg">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1000&auto=format&fit=crop)' }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="section-container bg-white/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-semibold mb-6 elegant-heading">
              {t('readyToStart')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
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
    >
      <Link to={link} className="block h-full">
        <div className="h-full bg-white/70 backdrop-blur-sm border border-border/30 rounded-xl p-6 shadow-sm">
          <div className="w-12 h-12 rounded-lg bg-muted/20 flex items-center justify-center text-2xl mb-4">
            {icon}
          </div>
          <h3 className="font-montserrat text-xl font-medium mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </Link>
    </InteractiveElement>
  );
};

export default Index;
