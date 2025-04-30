
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { translations } from '@/translations';

type Language = 'pt' | 'en';
type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  t: (key: TranslationKey) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  // Load saved language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    } else {
      // Use browser language if available and supported
      const browserLang = navigator.language.substring(0, 2);
      if (browserLang === 'pt' || browserLang === 'en') {
        setLanguage(browserLang as Language);
      }
    }
  }, []);

  // Save language preference whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Toggle between PT and EN
  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'pt' ? 'en' : 'pt'));
  };

  // Function to get translated text
  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
