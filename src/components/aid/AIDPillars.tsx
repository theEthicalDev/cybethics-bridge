import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, GitMerge, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AIDPillars = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: <Zap className="h-10 w-10" />,
      key: 'automate',
      color: 'from-primary/10 to-primary/5',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: <GitMerge className="h-10 w-10" />,
      key: 'integrate',
      color: 'from-primary-light/10 to-primary-light/5',
      iconBg: 'bg-primary-light/10',
      iconColor: 'text-primary-light',
    },
    {
      icon: <Code2 className="h-10 w-10" />,
      key: 'develop',
      color: 'from-purple-500/10 to-purple-500/5',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-primary/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-purple-400/5 to-transparent blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-up">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-8 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium text-primary">{t('aid.pillars.badge')}</span>
          </div>
          <h2 className="mb-6 gradient-text">{t('aid.pillars.title')}</h2>
          <p className="text-xl text-text-light leading-relaxed">
            {t('aid.pillars.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card
              key={pillar.key}
              className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 group animate-fade-up bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl ${pillar.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={pillar.iconColor}>{pillar.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text-subtle">
                  {t(`aid.pillars.${pillar.key}.title`)}
                </h3>
                <p className="text-base text-text/80 mb-4 leading-relaxed">
                  {t(`aid.pillars.${pillar.key}.description`)}
                </p>
                <p className="text-sm text-text/60 italic">
                  {t(`aid.pillars.${pillar.key}.example`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDPillars;
