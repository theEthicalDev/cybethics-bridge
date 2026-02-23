import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Cog, Network, Code, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pillars = [
  { key: 'automate', icon: Cog, path: '/services/automatisierung', color: 'from-blue-500/10 to-blue-600/5', accent: 'text-blue-600', accentBg: 'bg-blue-500/10' },
  { key: 'integrate', icon: Network, path: '/services/integration', color: 'from-emerald-500/10 to-emerald-600/5', accent: 'text-emerald-600', accentBg: 'bg-emerald-500/10' },
  { key: 'develop', icon: Code, path: '/services/entwicklung', color: 'from-violet-500/10 to-violet-600/5', accent: 'text-violet-600', accentBg: 'bg-violet-500/10' },
];

const AIDFramework: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="aid-framework" className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <header className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
          <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-8 border border-primary/20">
            <span className="text-sm font-medium text-primary">A.I.D.</span>
          </div>
          <h2 className="mb-6 text-3xl md:text-4xl font-bold">{t('aid.framework.title')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t('aid.framework.subtitle')}</p>
        </header>

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
                  <span className={`text-4xl font-bold ${pillar.accent} opacity-30`}>
                    {t(`aid.framework.${pillar.key}.letter`)}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4">{t(`aid.framework.${pillar.key}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{t(`aid.framework.${pillar.key}.description`)}</p>
                <p className="text-sm font-medium text-foreground/80 mb-6 italic">{t(`aid.framework.${pillar.key}.outcomes`)}</p>

                <Button asChild variant="outline" className="rounded-full group/btn border-border/50 hover:border-primary">
                  <Link to={pillar.path} className="flex items-center">
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
  );
};

export default AIDFramework;
