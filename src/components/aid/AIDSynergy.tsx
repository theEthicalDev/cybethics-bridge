import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Network, Code } from 'lucide-react';

const AIDSynergy = () => {
  const { t } = useLanguage();

  const synergies = [
    {
      id: 'automate_integrate',
      icons: [<Zap key="zap" className="h-6 w-6" />, <Network key="network" className="h-6 w-6" />],
      titleKey: 'services.aid.synergy.automate_integrate.title',
      descriptionKey: 'services.aid.synergy.automate_integrate.description',
      gradient: 'from-blue-500/10 to-primary/10'
    },
    {
      id: 'integrate_develop',
      icons: [<Network key="network" className="h-6 w-6" />, <Code key="code" className="h-6 w-6" />],
      titleKey: 'services.aid.synergy.integrate_develop.title',
      descriptionKey: 'services.aid.synergy.integrate_develop.description',
      gradient: 'from-primary/10 to-purple-600/10'
    },
    {
      id: 'develop_automate',
      icons: [<Code key="code" className="h-6 w-6" />, <Zap key="zap" className="h-6 w-6" />],
      titleKey: 'services.aid.synergy.develop_automate.title',
      descriptionKey: 'services.aid.synergy.develop_automate.description',
      gradient: 'from-purple-600/10 to-blue-500/10'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/5 to-transparent blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="mb-6">{t('services.aid.synergy.title')}</h2>
          <p className="text-xl text-text-light leading-relaxed">
            {t('services.aid.synergy.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {synergies.map((synergy, index) => (
            <div
              key={synergy.id}
              className={`bg-gradient-to-br ${synergy.gradient} rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group animate-fade-up border border-white/50`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex gap-3 mb-6">
                {synergy.icons.map((icon, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/80 text-primary group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                {t(synergy.titleKey)}
              </h3>
              
              <p className="text-base text-text/80 leading-relaxed">
                {t(synergy.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDSynergy;
