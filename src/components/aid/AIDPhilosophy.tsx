import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, GitMerge, Code2 } from 'lucide-react';

const AIDPhilosophy = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Zap className="h-8 w-8" />,
      key: 'automate',
      color: 'from-primary/10 to-primary/5',
      iconColor: 'text-primary',
      number: '1',
    },
    {
      icon: <GitMerge className="h-8 w-8" />,
      key: 'integrate',
      color: 'from-primary-light/10 to-primary-light/5',
      iconColor: 'text-primary-light',
      number: '2',
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      key: 'develop',
      color: 'from-purple-500/10 to-purple-500/5',
      iconColor: 'text-purple-600',
      number: '3',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/5 to-transparent blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-8 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium text-primary">{t('aid.philosophy.badge')}</span>
          </div>
          <h2 className="mb-6 gradient-text">{t('aid.philosophy.title')}</h2>
          <p className="text-xl text-text-light leading-relaxed">
            {t('aid.philosophy.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className="relative p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group animate-fade-up border border-white/30"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative`}>
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-gray-100`}>
                      <span className="text-xs font-bold text-gray-600">{step.number}</span>
                    </div>
                    <div className={step.iconColor}>{step.icon}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 gradient-text-subtle">
                    {t(`aid.philosophy.${step.key}.title`)}
                  </h3>
                  <p className="text-base text-text/80 leading-relaxed">
                    {t(`aid.philosophy.${step.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDPhilosophy;
