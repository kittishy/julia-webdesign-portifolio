
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="language-switcher"
      aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <span className="text-sm font-medium">
        {language === 'pt' ? 'EN' : 'PT'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
