import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedCounter from '@/components/AnimatedCounter';
import { Zap, Link2, Code2, TrendingUp } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

const HomepageStats: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const stats = [
    { value: 50, suffix: '+', label: 'homepage.stats.automatedProcesses', icon: <Zap className="h-7 w-7 mx-auto text-primary" />, delay: 0 },
    { value: 25, suffix: '+', label: 'stats.successfulProjects', icon: <Code2 className="h-7 w-7 mx-auto text-primary" />, delay: 200 },
    { value: 15, suffix: '+', label: 'homepage.stats.integratedSystems', icon: <Link2 className="h-7 w-7 mx-auto text-primary" />, delay: 400 },
    { value: 80, suffix: '%', label: 'homepage.stats.efficiencyGain', icon: <TrendingUp className="h-7 w-7 mx-auto text-primary" />, delay: 600 },
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      <div className="container relative z-10" ref={ref}>
        <div className={`text-center mb-10 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <h2 className="mb-3">{t('homepage.stats.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('homepage.stats.subtitle')}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className={`card-shine glass-card rounded-2xl p-2 hover-lift group scroll-reveal scroll-reveal-delay-${index + 1} ${isVisible ? 'visible' : ''}`}>
              <AnimatedCounter
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                delay={stat.delay}
                suffix={stat.suffix}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageStats;
