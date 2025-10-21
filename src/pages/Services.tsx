
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesCTA from '@/components/services/ServicesCTA';
import { Zap, Network, Code, ArrowRight } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <ServiceHero />
      
      {/* A.I.D. Services Navigation */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">{t('services.detailTitle')}</h2>
            <p className="text-lg text-text/80">{t('services.detailDescription')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/services/automate" className="group">
              <div className="bg-gradient-to-br from-blue-500/10 via-primary/10 to-purple-500/10 rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-white/50 h-full">
                <div className="bg-gradient-to-br from-blue-500/20 to-primary/20 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  {t('services.aid.automate.title')}
                </h3>
                
                <p className="text-base text-text/80 mb-6 leading-relaxed">
                  {t('services.aid.automate.description')}
                </p>
                
                <Button variant="outline" className="rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                  {t('services.more')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Link>

            <Link to="/services/integrate" className="group">
              <div className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-white/50 h-full">
                <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Network className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  {t('services.aid.integrate.title')}
                </h3>
                
                <p className="text-base text-text/80 mb-6 leading-relaxed">
                  {t('services.aid.integrate.description')}
                </p>
                
                <Button variant="outline" className="rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                  {t('services.more')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Link>

            <Link to="/services/develop" className="group">
              <div className="bg-gradient-to-br from-purple-600/10 via-primary/10 to-primary-light/10 rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-white/50 h-full">
                <div className="bg-gradient-to-br from-purple-600/20 to-primary/20 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  {t('services.aid.develop.title')}
                </h3>
                
                <p className="text-base text-text/80 mb-6 leading-relaxed">
                  {t('services.aid.develop.description')}
                </p>
                
                <Button variant="outline" className="rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                  {t('services.more')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <ServicesCTA />
    </div>
  );
};

export default Services;
