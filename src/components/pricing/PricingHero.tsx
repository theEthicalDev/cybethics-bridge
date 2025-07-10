
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calculator } from 'lucide-react';

const PricingHero = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Calculator className="inline-block mr-2 h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('pricing.badge')}</span>
          </div>
          <p className="mb-6 text-xl">{t('pricing.title')}</p>
          <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
