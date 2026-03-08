import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, CheckCircle2 } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

const traits = ['trait1', 'trait2', 'trait3', 'trait4'];

const AIDTargetClients: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className={`scroll-reveal ${isVisible ? 'visible' : ''}`}>
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-8 border border-primary/20 badge-shimmer">
              <Building2 className="inline h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">{t('aid.target.title')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('aid.target.title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t('aid.target.description')}</p>
          </div>

          <div className="space-y-4">
            {traits.map((trait, index) => (
              <div
                key={trait}
                className={`flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 scroll-reveal scroll-reveal-delay-${index + 1} ${isVisible ? 'visible' : ''}`}
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">{t(`aid.target.${trait}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDTargetClients;
