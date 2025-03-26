
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServiceHero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6">{t('services.hero.title')}</h1>
          <p className="text-lg md:text-xl text-text/80 mb-8">
            {t('services.hero.subtitle')}
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">
            <Link to="/contact">
              {t('contact.booking')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
