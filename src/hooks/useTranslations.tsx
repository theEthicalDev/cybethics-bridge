
import { useLanguage } from '@/contexts/LanguageContext';
import deTranslations from '@/locales/de.json';
import enTranslations from '@/locales/en.json';

const translations = {
  de: deTranslations,
  en: enTranslations,
};

export const useTranslations = () => {
  const { language } = useLanguage();
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
  
  return { t };
};
