import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~80vh (hero section)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <Button
        asChild
        variant="gradient"
        size="lg"
        className="rounded-full shadow-large hover:shadow-glow group"
      >
        <Link to="/contact" className="flex items-center gap-2 px-6">
          <Calendar className="h-5 w-5" />
          <span className="hidden sm:inline">{t('hero.cta')}</span>
          <span className="sm:hidden">{t('homepage.stickyCta.short')}</span>
        </Link>
      </Button>
    </div>
  );
};

export default StickyCTA;
