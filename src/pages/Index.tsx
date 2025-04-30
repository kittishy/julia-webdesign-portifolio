
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import MainLayout from '@/layouts/MainLayout';
import InteractiveElement from '@/components/InteractiveElement';
import { trackMouseMovement } from '@/utils/mouse-tracking';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  
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
      const speed = 0.5;
      
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
        const moveX = (x - 0.5) * 20;
        const moveY = (y - 0.5) * 20;
        heroImgRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
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
          className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      
      {/* Hero section */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
        {/* Background image with parallax */}
        <div 
          ref={heroImgRef}
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center -z-10 transition-transform duration-300"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop)',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }}
        />
        
        {/* Hero content */}
        <div className="container mx-auto px-6 lg:px-8">
          <div 
            className="max-w-3xl mx-auto text-center"
            data-aos="fade-up"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 neon-text">
              CINEMATIC VOYAGE
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Uma jornada imersiva através de ideias e conceitos criativos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <InteractiveElement>
                <Link
                  to="/journey"
                  className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  Iniciar Jornada
                </Link>
              </InteractiveElement>
              <InteractiveElement>
                <Link
                  to="/portfolio"
                  className="px-6 py-3 bg-muted/50 text-foreground font-medium rounded-md hover:bg-muted/70 transition-colors"
                >
                  Ver Conceitos
                </Link>
              </InteractiveElement>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <div className="w-6 h-9 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2" />
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="section-container">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 neon-text">
              EXPERIÊNCIA INTERATIVA
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore uma experiência digital única e envolvente, com elementos interativos e narrativas visuais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="História Visual"
              description="Uma narrativa interativa que revela minha jornada de aprendizado e desenvolvimento."
              icon="📚"
              link="/journey"
              delay={0}
            />
            <FeatureCard
              title="Portfólio Conceitual"
              description="Explore conceitos e ideias criativas que demonstram meu potencial e visão."
              icon="🎨"
              link="/portfolio"
              delay={1}
            />
            <FeatureCard
              title="Desafios & Conquistas"
              description="Complete desafios interativos e desbloqueie informações exclusivas."
              icon="🏆"
              link="/challenges"
              delay={2}
            />
          </div>
        </div>
      </section>
      
      {/* About section */}
      <section className="section-container bg-muted/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 neon-text">
                SOBRE O PROJETO
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Este projeto é um portfólio interativo que vai além da simples exibição de trabalhos. É uma experiência 
                imersiva projetada para engajar visitantes e demonstrar habilidades criativas através de:
              </p>
              <ul className="space-y-3">
                {[
                  'Interatividade profunda e envolvente',
                  'Narrativas visuais que contam uma história',
                  'Elementos de gamificação que incentivam exploração',
                  'Design cinemático e atmosférico',
                  'Experiência de usuário personalizada'
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
                    className="px-6 py-3 bg-muted/50 text-foreground font-medium rounded-md hover:bg-muted/70 transition-colors"
                  >
                    Entre em Contato
                  </Link>
                </InteractiveElement>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-neon-purple/20 to-transparent z-0" />
              <div className="relative z-10 aspect-video rounded-lg overflow-hidden neon-border">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop)' }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-neon-green/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="section-container">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 neon-text">
              PRONTO PARA COMEÇAR?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Embarque nessa viagem cinemática e explore um universo de criatividade e inovação.
            </p>
            <InteractiveElement>
              <Link
                to="/journey"
                className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Iniciar Exploração
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
        <div className="h-full bg-card border border-border/50 rounded-lg p-6">
          <div className="w-12 h-12 rounded-lg bg-muted/30 flex items-center justify-center text-2xl mb-4">
            {icon}
          </div>
          <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </Link>
    </InteractiveElement>
  );
};

export default Index;
