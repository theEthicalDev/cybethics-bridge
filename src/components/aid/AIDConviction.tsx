import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Shield, Handshake, TrendingUp, ArrowRight, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useScrollReveal from '@/hooks/useScrollReveal';

const reasons = [
  { key: 'takeover', icon: Shield },
  { key: 'partnership', icon: Handshake },
  { key: 'results', icon: TrendingUp },
];

const scenarios = [
  { key: '1' },
  { key: '2' },
  { key: '3' },
];

const AIDConviction: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-32 bg-gradient-to-br from-primary/5 via-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10" ref={ref}>
        <header className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="mb-6 text-3xl md:text-4xl font-bold">{t('aid.conviction.title')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t('aid.conviction.subtitle')}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.key}
                className={`card-shine p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 scroll-reveal scroll-reveal-delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t(`aid.conviction.${reason.key}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(`aid.conviction.${reason.key}.description`)}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <h3 className={`text-xl font-semibold text-center mb-8 scroll-reveal ${isVisible ? 'visible' : ''}`}>{t('aid.conviction.scenariosTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <div
                key={scenario.key}
                className={`card-shine rounded-2xl border border-border/50 overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 scroll-reveal scroll-reveal-delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              >
                <div className="p-5 bg-destructive/5 border-b border-border/50">
                  <span className="text-xs font-semibold uppercase tracking-wider text-destructive/70 mb-2 block">{t('aid.conviction.before')}</span>
                  <p className="text-sm font-medium text-foreground">{t(`aid.conviction.scenarios.${scenario.key}.before`)}</p>
                </div>
                <div className="flex items-center justify-center py-2 bg-card">
                  <ArrowDown className="h-5 w-5 text-primary" />
                </div>
                <div className="p-5 bg-primary/5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary/70 mb-2 block">{t('aid.conviction.after')}</span>
                  <p className="text-sm font-medium text-foreground">{t(`aid.conviction.scenarios.${scenario.key}.after`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center scroll-reveal scroll-reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
          <p className="text-lg font-medium text-foreground/90 mb-6 max-w-2xl mx-auto">{t('aid.conviction.promise')}</p>
          <Button asChild variant="gradient" size="lg" className="rounded-full group">
            <Link to="/contact">
              {t('aid.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIDConviction;
