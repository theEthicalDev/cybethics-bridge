import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Network, Workflow } from 'lucide-react';

const AIDSynergy = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">{t('aid.synergy.badge')}</span>
            </div>
            <h2 className="mb-6">{t('aid.synergy.title')}</h2>
            <p className="text-lg text-text/80 max-w-2xl mx-auto">
              {t('aid.synergy.subtitle')}
            </p>
          </div>
          
          {/* Interconnected diagram */}
          <div className="relative mb-16 animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Automate Circle */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-light/20 to-primary-light/5 border-2 border-primary-light/30 flex items-center justify-center mb-4 animate-pulse-subtle shadow-glow">
                  <div className="text-center">
                    <p className="text-xl font-semibold text-primary-light">{t('aid.automate.title')}</p>
                  </div>
                </div>
              </div>
              
              {/* Integrate Circle */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center mb-4 animate-pulse-subtle shadow-glow" style={{ animationDelay: '0.2s' }}>
                  <div className="text-center">
                    <p className="text-xl font-semibold text-primary">{t('aid.integrate.title')}</p>
                  </div>
                </div>
              </div>
              
              {/* Develop Circle */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-dark/20 to-primary-dark/5 border-2 border-primary-dark/30 flex items-center justify-center mb-4 animate-pulse-subtle shadow-glow" style={{ animationDelay: '0.4s' }}>
                  <div className="text-center">
                    <p className="text-xl font-semibold text-primary-dark">{t('aid.develop.title')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Connection lines - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute top-16 left-0 right-0">
              <svg className="w-full h-16" viewBox="0 0 800 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: 'hsl(272, 76%, 60%)', stopOpacity: 0.5 }} />
                    <stop offset="50%" style={{ stopColor: 'hsl(272, 76%, 47%)', stopOpacity: 0.5 }} />
                    <stop offset="100%" style={{ stopColor: 'hsl(272, 76%, 35%)', stopOpacity: 0.5 }} />
                  </linearGradient>
                </defs>
                <line x1="15%" y1="50" x2="50%" y2="50" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                <line x1="50%" y1="50" x2="85%" y2="50" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
              </svg>
            </div>
          </div>
          
          {/* Description */}
          <div className="text-center mb-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <p className="text-lg text-text/80 leading-relaxed max-w-3xl mx-auto">
              {t('aid.synergy.description')}
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium text-text/90">{t('aid.synergy.benefit1')}</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium text-text/90">{t('aid.synergy.benefit2')}</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-up" style={{ animationDelay: '500ms' }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium text-text/90">{t('aid.synergy.benefit3')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDSynergy;
