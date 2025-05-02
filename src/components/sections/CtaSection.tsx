
import { Link } from 'react-router-dom';
import InteractiveElement from '@/components/InteractiveElement';
import { useLanguage } from '@/contexts/LanguageContext';

const CtaSection = () => {
  const { t } = useLanguage();
  
  return (
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
  );
};

export default CtaSection;
