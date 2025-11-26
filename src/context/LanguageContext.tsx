import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { content } from '../data/content';

type Language = 'en' | 'ru' | 'es' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: typeof content.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Simple toggle for testing, though explicit setLanguage is better for >2 languages
  const toggleLanguage = () => {
    setLanguage(prev => {
        if (prev === 'en') return 'ru';
        if (prev === 'ru') return 'es';
        if (prev === 'es') return 'zh';
        return 'en';
    });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t: content[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};