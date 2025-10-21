import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Zap, Network, Code, ArrowRight } from 'lucide-react';

const AIDPillars = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      id: 'automate',
      icon: <Zap className="h-8 w-8 text-primary" />,
      titleKey: 'services.aid.automate.title',
      descriptionKey: 'services.aid.automate.description',
      examplesKey: 'services.aid.automate.examples',
      gradient: 'from-blue-500/10 via-primary/10 to-purple-500/10',
      iconBg: 'bg-gradient-to-br from-blue-500/20 to-primary/20'
    },
    {
      id: 'integrate',
      icon: <Network className="h-8 w-8 text-primary" />,
      titleKey: 'services.aid.integrate.title',
      descriptionKey: 'services.aid.integrate.description',
      examplesKey: 'services.aid.integrate.examples',
      gradient: 'from-primary/10 via-purple-500/10 to-pink-500/10',
      iconBg: 'bg-gradient-to-br from-primary/20 to-purple-500/20'
    },
    {
      id: 'develop',
      icon: <Code className="h-8 w-8 text-primary" />,
      titleKey: 'services.aid.develop.title',
      descriptionKey: 'services.aid.develop.description',
      examplesKey: 'services.aid.develop.examples',
      gradient: 'from-purple-600/10 via-primary/10 to-primary-light/10',
      iconBg: 'bg-gradient-to-br from-purple-600/20 to-primary/20'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-8 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium text-primary">A.I.D. Framework</span>
          </div>
          <h2 className="mb-6">{t('services.aid.title')}</h2>
          <p className="text-xl text-text-light leading-relaxed">
            {t('services.aid.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`bg-gradient-to-br ${pillar.gradient} rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 group animate-fade-up border border-white/50`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`${pillar.iconBg} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {pillar.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                {t(pillar.titleKey)}
              </h3>
              
              <p className="text-base text-text/80 mb-6 leading-relaxed">
                {t(pillar.descriptionKey)}
              </p>
              
              <div className="space-y-2 mb-6">
                <p className="text-sm font-medium text-text/70 uppercase tracking-wide">
                  {t('services.aid.examples')}:
                </p>
                <div className="text-sm text-text/70">
                  {t(pillar.examplesKey)}
                </div>
              </div>

              <Button asChild variant="outline" size="lg" className="w-full rounded-full border-2 border-primary/30 hover:border-primary">
                <Link to={`/services/${pillar.id}`}>
                  {t('common.learnmore')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-up" style={{ animationDelay: '500ms' }}>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full group">
            <Link to="/services">
              {t('services.more')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIDPillars;
