
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6">{t('services.cta.title')}</h2>
          <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
            {t('services.cta.subtitle')}
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full group">
            <Link to="/contact">
              {t('contact.start')}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
