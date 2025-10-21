import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Target, TrendingUp, Award } from 'lucide-react';

const AIDPhilosophy = () => {
  const { t } = useLanguage();

  const philosophyPoints = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      titleKey: 'about.aid.philosophy.focus.title',
      descriptionKey: 'about.aid.philosophy.focus.description'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      titleKey: 'about.aid.philosophy.evolution.title',
      descriptionKey: 'about.aid.philosophy.evolution.description'
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      titleKey: 'about.aid.philosophy.quality.title',
      descriptionKey: 'about.aid.philosophy.quality.description'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-8 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium text-primary">A.I.D. Philosophy</span>
          </div>
          <h2 className="mb-6">{t('about.aid.philosophy.title')}</h2>
          <p className="text-lg text-text/80">
            {t('about.aid.philosophy.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophyPoints.map((point, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 w-fit mb-4">
                  {point.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{t(point.titleKey)}</h3>
                <p className="text-text/80 leading-relaxed">{t(point.descriptionKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '400ms' }}>
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-2xl border border-primary/20">
            <p className="text-lg text-text/80 leading-relaxed">
              {t('about.aid.philosophy.conclusion')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDPhilosophy;
