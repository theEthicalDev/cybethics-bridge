import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, FileText, Wrench, BarChart3 } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

const steps = [
  { key: 'step1', icon: Search },
  { key: 'step2', icon: FileText },
  { key: 'step3', icon: Wrench },
  { key: 'step4', icon: BarChart3 },
];

const AIDApproach: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container relative z-10" ref={ref}>
        <header className={`text-center max-w-3xl mx-auto mb-20 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="mb-6 text-3xl md:text-4xl font-bold">{t('aid.approach.title')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t('aid.approach.subtitle')}</p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>

            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.key}
                    className={`flex items-start gap-8 scroll-reveal scroll-reveal-delay-${index + 1} ${isVisible ? 'visible' : ''}`}
                  >
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-primary/60">{String(index + 1).padStart(2, '0')}</span>
                        <h3 className="text-xl font-semibold">{t(`aid.approach.${step.key}.title`)}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{t(`aid.approach.${step.key}.description`)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDApproach;
