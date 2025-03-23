
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`${language === 'en' ? 'text-primary font-medium' : 'text-text/70'} transition-colors hover:text-primary`}
      >
        EN
      </Button>
      <span className="text-text/40">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('de')}
        className={`${language === 'de' ? 'text-primary font-medium' : 'text-text/70'} transition-colors hover:text-primary`}
      >
        DE
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
