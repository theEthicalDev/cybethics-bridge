import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Cog, Network, Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pillars = [
  {
    key: 'automate',
    icon: Cog,
    path: '/services/automatisierung',
    color: 'from-blue-500/10 to-blue-600/5',
    accent: 'text-blue-600',
    accentBg: 'bg-blue-500/10',
    serviceKeys: ['services.automation.title', 'services.scripting.title'],
  },
  {
    key: 'integrate',
    icon: Network,
    path: '/services/integration',
    color: 'from-emerald-500/10 to-emerald-600/5',
    accent: 'text-emerald-600',
    accentBg: 'bg-emerald-500/10',
    serviceKeys: ['services.integration.title', 'services.api.title'],
  },
  {
    key: 'develop',
    icon: Code,
    path: '/services/entwicklung',
    color: 'from-violet-500/10 to-violet-600/5',
    accent: 'text-violet-600',
    accentBg: 'bg-violet-500/10',
    serviceKeys: ['services.software.title', 'services.cicd.title'],
  },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="pt-12 pb-12 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="mb-6">{t('services.hero.title')}</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance">{t('services.hero.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* AID Pillars */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.key}
                  className={`group relative p-8 rounded-2xl bg-gradient-to-br ${pillar.color} border border-border/50 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-fade-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${pillar.accentBg} flex items-center justify-center`}>
                      <Icon className={`h-7 w-7 ${pillar.accent}`} />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-4">{t(`aid.framework.${pillar.key}.title`)}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{t(`aid.framework.${pillar.key}.description`)}</p>

                  <ul className="space-y-2 mb-8">
                    {pillar.serviceKeys.map((sk) => (
                      <li key={sk} className="flex items-center gap-2 text-sm text-foreground/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {t(sk)}
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="outline" className="w-full rounded-full group/btn border-border/50 hover:border-primary">
                    <Link to={pillar.path} className="flex items-center justify-center">
                      {t(`aid.framework.${pillar.key}.link`)}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">{t('services.cta.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t('services.cta.subtitle')}</p>
            <Button asChild size="lg" className="rounded-full group">
              <Link to="/contact">
                {t('aid.cta.button')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
