
import { useLanguage } from '@/contexts/LanguageContext';
import { Lantern } from '@/components/MoonFestival';
import FeatureCard from '@/components/FeatureCard';

const FeaturesSection = () => {
  const { t } = useLanguage();
  
  return (
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
  );
};

export default FeaturesSection;
