import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageSquare, Lightbulb, Rocket, TrendingUp, ArrowRight } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

const steps = [
  { key: 'step1', youIcon: MessageSquare, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { key: 'step2', youIcon: Lightbulb, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  { key: 'step3', youIcon: Rocket, color: 'text-violet-500', bg: 'bg-violet-500/10' },
  { key: 'step4', youIcon: TrendingUp, color: 'text-amber-500', bg: 'bg-amber-500/10' },
];

const AIDClientJourney: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10" ref={ref}>
        <header className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="mb-6 text-3xl md:text-4xl font-bold">{t('aid.approach.title')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t('aid.journey.subtitle')}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.youIcon;
            return (
              <div
                key={step.key}
                className={`relative scroll-reveal scroll-reveal-delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-12 -right-3 z-10">
                    <ArrowRight className="h-5 w-5 text-primary/40" />
                  </div>
                )}

                <div className="card-shine p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 ${step.color}`} />
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
                  </div>

                  <div className="mb-4 pb-4 border-b border-border/50">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary/70 mb-2 block">{t('aid.journey.youLabel')}</span>
                    <p className="text-sm font-medium text-foreground">{t(`aid.journey.${step.key}.you`)}</p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">{t('aid.journey.weLabel')}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(`aid.journey.${step.key}.we`)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIDClientJourney;
