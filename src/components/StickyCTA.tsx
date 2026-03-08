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
      <Link to="/contact" className="flex items-center group">
        {/* Avatar circle - larger, overlapping like a key head */}
        <div className="relative z-10 -mr-3">
          <div className="w-14 h-14 rounded-full bg-primary/90 shadow-large flex items-center justify-center border-2 border-primary-foreground/20 group-hover:shadow-glow transition-all">
            <img
              src="/media/d5a54318-571b-4628-9628-92d6e9cb11bc.png"
              alt="Djordje Karadzic"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        </div>
        {/* Button body - the key shaft */}
        <Button
          variant="gradient"
          size="lg"
          className="rounded-full shadow-large hover:shadow-glow pl-6 pr-6 h-11"
          asChild
        >
          <span className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span className="hidden sm:inline">{t('hero.cta')}</span>
            <span className="sm:hidden">{t('homepage.stickyCta.short')}</span>
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default StickyCTA;
