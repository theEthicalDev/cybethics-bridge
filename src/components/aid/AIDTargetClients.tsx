import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, CheckCircle2 } from 'lucide-react';

const traits = ['trait1', 'trait2', 'trait3', 'trait4'];

const AIDTargetClients: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="animate-fade-up">
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-8 border border-primary/20">
              <Building2 className="inline h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">{t('aid.target.title')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('aid.target.title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t('aid.target.description')}</p>
          </div>

          <div className="space-y-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
            {traits.map((trait, index) => (
              <div
                key={trait}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
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
