
import { Link } from 'react-router-dom';
import InteractiveElement from '@/components/InteractiveElement';
import { useLanguage } from '@/contexts/LanguageContext';
import { Moon } from '@/components/MoonFestival';

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
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
  );
};

export default AboutSection;
