import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Workflow, Rocket } from 'lucide-react';

const AIDSynergy = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      key: 'benefit1',
      color: 'text-primary',
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      key: 'benefit2',
      color: 'text-primary-light',
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      key: 'benefit3',
      color: 'text-purple-600',
    },
  ];

  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-l from-primary/5 to-transparent blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-8 backdrop-blur-sm border border-primary/20">
              <span className="text-sm font-medium text-primary">{t('aid.synergy.badge')}</span>
            </div>
            <h2 className="mb-6 gradient-text">{t('aid.synergy.title')}</h2>
            <p className="text-xl text-text-light leading-relaxed mb-12">
              {t('aid.synergy.subtitle')}
            </p>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.key}
                  className="flex items-start gap-4 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`flex-shrink-0 ${benefit.color}`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 gradient-text-subtle">
                      {t(`aid.synergy.${benefit.key}.title`)}
                    </h3>
                    <p className="text-base text-text/80">
                      {t(`aid.synergy.${benefit.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="gradient" size="lg" className="mt-12 rounded-full group">
              <Link to="/services">
                {t('aid.synergy.cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="relative animate-scale-in" style={{ animationDelay: '200ms' }}>
            <div className="relative p-8">
              {/* Decorative elements showing AID interconnection */}
              <div className="grid grid-cols-3 gap-4">
                {/* Automate */}
                <div className="col-span-3 flex justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center backdrop-blur-sm border border-primary/20 shadow-lg hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold gradient-text">A</span>
                  </div>
                </div>
                
                {/* Integration lines */}
                <div className="col-span-3 flex justify-center items-center h-16">
                  <div className="w-0.5 h-full bg-gradient-to-b from-primary/40 to-transparent"></div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
                  <div className="w-0.5 h-full bg-gradient-to-b from-primary/40 to-transparent"></div>
                </div>

                {/* Integrate and Develop */}
                <div className="col-span-3 flex justify-center gap-16">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary-light/20 to-primary-light/10 flex items-center justify-center backdrop-blur-sm border border-primary-light/20 shadow-lg hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold gradient-text">I</span>
                  </div>
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center backdrop-blur-sm border border-purple-500/20 shadow-lg hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-purple-600">D</span>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-purple-500/10 blur-3xl opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIDSynergy;
