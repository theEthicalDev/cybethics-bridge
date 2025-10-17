import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Network, Layers } from 'lucide-react';

const AIDSynergy: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: <Zap className="h-6 w-6 text-primary" />, key: 'benefit1' },
    { icon: <Network className="h-6 w-6 text-primary" />, key: 'benefit2' },
    { icon: <Layers className="h-6 w-6 text-primary" />, key: 'benefit3' },
  ];

  return (
    <section className="py-16 md:py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-soft mb-8">
              <span className="text-sm font-medium gradient-text">{t('aid.badge')}</span>
            </div>
            
            <h2 className="mb-6 gradient-text">
              {t('aid.synergy.title')}
            </h2>
            
            <p className="text-xl text-text-light leading-relaxed">
              {t('aid.synergy.subtitle')}
            </p>
          </div>

          {/* Description card */}
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-gray-100 shadow-soft mb-12 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <p className="text-lg text-text/80 leading-relaxed text-center">
              {t('aid.synergy.description')}
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.key}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 mb-4">
                  {benefit.icon}
                </div>
                <p className="text-base text-text/80 leading-relaxed">
                  {t(`aid.synergy.${benefit.key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDSynergy;
