import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Cog, Network, Code, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pillars = [
  {
    key: 'automate',
    icon: Cog,
    path: '/services/automatisierung',
    color: 'from-blue-500/10 to-blue-600/5',
    accent: 'text-blue-600',
    accentBg: 'bg-blue-500/10',
    itemKeys: ['workflow', 'data', 'reporting', 'ai'],
    benefitKeys: ['efficiency', 'errors', 'costs', 'scalability'],
  },
  {
    key: 'integrate',
    icon: Network,
    path: '/services/integration',
    color: 'from-emerald-500/10 to-emerald-600/5',
    accent: 'text-emerald-600',
    accentBg: 'bg-emerald-500/10',
    itemKeys: ['api', 'erp', 'sync', 'tools'],
    benefitKeys: ['dataflow', 'silos', 'intelligence', 'efficiency'],
  },
  {
    key: 'develop',
    icon: Code,
    path: '/services/entwicklung',
    color: 'from-violet-500/10 to-violet-600/5',
    accent: 'text-violet-600',
    accentBg: 'bg-violet-500/10',
    itemKeys: ['web', 'backend', 'tools', 'devops'],
    benefitKeys: ['tailored', 'competitive', 'ownership', 'scalable'],
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
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-8 border border-primary/20">
              <span className="text-sm font-medium text-primary">A.I.D.</span>
            </div>
            <h1 className="mb-6">{t('services.hero.title')}</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance">{t('services.hero.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* AID Pillars — expanded */}
      {pillars.map((pillar, pillarIndex) => {
        const Icon = pillar.icon;
        const sectionKey = pillar.key === 'automate' ? 'automate' : pillar.key === 'integrate' ? 'integrate' : 'develop';
        return (
          <section
            key={pillar.key}
            className={`py-16 md:py-24 ${pillarIndex % 2 === 1 ? 'bg-muted/30' : 'bg-background'}`}
          >
            <div className="container">
              {/* Pillar Header */}
              <div className="flex items-center gap-4 mb-8 animate-fade-up">
                <div className={`w-14 h-14 rounded-2xl ${pillar.accentBg} flex items-center justify-center`}>
                  <Icon className={`h-7 w-7 ${pillar.accent}`} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{t(`aid.framework.${pillar.key}.title`)}</h2>
                  <p className="text-muted-foreground">{t(`servicePage.${sectionKey}.subtitle`)}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl animate-fade-up">
                {t(`servicePage.${sectionKey}.heroDescription`)}
              </p>

              {/* What we do — items grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {pillar.itemKeys.map((item, index) => (
                  <div
                    key={item}
                    className={`p-5 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className={`h-5 w-5 ${pillar.accent} flex-shrink-0 mt-0.5`} />
                      <div>
                        <h4 className="font-semibold mb-1">{t(`servicePage.${sectionKey}.items.${item}.title`)}</h4>
                        <p className="text-sm text-muted-foreground">{t(`servicePage.${sectionKey}.items.${item}.description`)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {pillar.benefitKeys.map((bk, index) => (
                  <div key={bk} className="text-center p-4 rounded-xl bg-card/50 border border-border/30 animate-fade-up" style={{ animationDelay: `${index * 60}ms` }}>
                    <p className="font-semibold text-sm">{t(`servicePage.${sectionKey}.benefits.${bk}.title`)}</p>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <div className="animate-fade-up">
                <Button asChild variant="outline" className="rounded-full group/btn border-border/50 hover:border-primary">
                  <Link to={pillar.path} className="flex items-center">
                    {t(`aid.framework.${pillar.key}.link`)}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        );
      })}

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
