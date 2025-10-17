import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AIDHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-purple-50/20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl animate-float-gentle" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/10 to-transparent blur-3xl animate-float-gentle" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-soft mb-8 animate-fade-up">
            <span className="text-sm font-medium gradient-text">{t('hero.badge')}</span>
          </div>

          {/* Title */}
          <h1 className="mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-light mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-medium hover:shadow-large group">
              <Link to="/services">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5">
              <Link to="/contact">
                {t('contact.start')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDHero;
