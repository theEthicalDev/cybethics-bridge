import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Unplug, Clock, Layers } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

const problems = [
  { key: 'disconnected', icon: Unplug },
  { key: 'manual', icon: Clock },
  { key: 'complexity', icon: Layers },
];

const AIDProblemStatement: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-destructive/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10" ref={ref}>
        <header className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="mb-6 text-3xl md:text-4xl font-bold">{t('aid.problem.title')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t('aid.problem.subtitle')}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.key}
                className={`card-shine p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 scroll-reveal scroll-reveal-delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t(`aid.problem.${problem.key}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(`aid.problem.${problem.key}.description`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIDProblemStatement;
