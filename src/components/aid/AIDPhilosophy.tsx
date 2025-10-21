import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, TrendingUp, Users } from 'lucide-react';

const AIDPhilosophy = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">{t('about.philosophy.badge')}</span>
            </div>
            <h2 className="mb-6">{t('about.philosophy.title')}</h2>
            <p className="text-lg text-text/80 leading-relaxed">
              {t('about.philosophy.description')}
            </p>
          </div>
          
          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 mt-1">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{t('about.philosophy.quality.title')}</h3>
                    <p className="text-text/80">{t('about.philosophy.quality.description')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 mt-1">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{t('about.philosophy.partnership.title')}</h3>
                    <p className="text-text/80">{t('about.philosophy.partnership.description')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 mt-1">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{t('about.philosophy.impact.title')}</h3>
                    <p className="text-text/80">{t('about.philosophy.impact.description')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 mt-1">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{t('about.philosophy.aid.title')}</h3>
                    <p className="text-text/80">{t('about.philosophy.aid.description')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* AID Emphasis */}
          <div className="text-center bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl p-8 animate-fade-up" style={{ animationDelay: '500ms' }}>
            <p className="text-xl font-medium text-primary mb-4">{t('about.philosophy.aidEmphasis.title')}</p>
            <p className="text-text/80 leading-relaxed max-w-2xl mx-auto">
              {t('about.philosophy.aidEmphasis.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDPhilosophy;
