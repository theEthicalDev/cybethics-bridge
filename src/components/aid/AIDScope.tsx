import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Code, Server, HeadphonesIcon, CheckCircle2, Sparkles } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

const categories = [
  { key: 'analysis', icon: Search, color: 'text-blue-500', bg: 'bg-blue-500/10', items: 4 },
  { key: 'implementation', icon: Code, color: 'text-emerald-500', bg: 'bg-emerald-500/10', items: 4 },
  { key: 'operations', icon: Server, color: 'text-violet-500', bg: 'bg-violet-500/10', items: 4 },
  { key: 'support', icon: HeadphonesIcon, color: 'text-amber-500', bg: 'bg-amber-500/10', items: 4 },
];

const AIDScope: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10" ref={ref}>
        <header className={`text-center max-w-3xl mx-auto mb-16 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="mb-6 text-3xl md:text-4xl font-bold">{t('aid.scope.title')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{t('aid.scope.subtitle')}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.key}
                className={`card-shine p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 scroll-reveal scroll-reveal-delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${cat.bg} flex items-center justify-center`}>
                    <Icon className={`h-6 w-6 ${cat.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{t(`aid.scope.${cat.key}.title`)}</h3>
                </div>
                <ul className="space-y-3">
                  {Array.from({ length: cat.items }, (_, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{t(`aid.scope.${cat.key}.item${i + 1}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className={`max-w-3xl mx-auto scroll-reveal scroll-reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
            <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
            <p className="text-lg font-semibold text-foreground">{t('aid.scope.youOnly')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDScope;
