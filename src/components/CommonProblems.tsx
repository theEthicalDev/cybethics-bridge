import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, GitMerge, Code2, ShieldAlert } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ProblemCard = ({ 
  icon, 
  titleKey, 
  descriptionKey, 
  delay = 0,
  iconColor = 'text-primary'
}: { 
  icon: React.ReactNode; 
  titleKey: string; 
  descriptionKey: string; 
  delay?: number;
  iconColor?: string;
}) => {
  const { t } = useLanguage();
  
  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up bg-white/80 backdrop-blur-sm" 
          style={{ animationDelay: `${delay}ms` }}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 mt-1 flex-shrink-0`}>
            <div className={iconColor}>{icon}</div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2 gradient-text-subtle">{t(titleKey)}</h3>
            <p className="text-text/80">{t(descriptionKey)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CommonProblems = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const problemsByPillar = {
    automate: [
      {
        icon: <Zap className="h-5 w-5" />,
        titleKey: 'common.problems.automate.inefficiency.title',
        descriptionKey: 'common.problems.automate.inefficiency.description',
        iconColor: 'text-primary',
      },
      {
        icon: <Zap className="h-5 w-5" />,
        titleKey: 'common.problems.automate.admin.title',
        descriptionKey: 'common.problems.automate.admin.description',
        iconColor: 'text-primary',
      },
    ],
    integrate: [
      {
        icon: <GitMerge className="h-5 w-5" />,
        titleKey: 'common.problems.integrate.integration.title',
        descriptionKey: 'common.problems.integrate.integration.description',
        iconColor: 'text-primary-light',
      },
      {
        icon: <GitMerge className="h-5 w-5" />,
        titleKey: 'common.problems.integrate.insights.title',
        descriptionKey: 'common.problems.integrate.insights.description',
        iconColor: 'text-primary-light',
      },
    ],
    develop: [
      {
        icon: <Code2 className="h-5 w-5" />,
        titleKey: 'common.problems.develop.legacy.title',
        descriptionKey: 'common.problems.develop.legacy.description',
        iconColor: 'text-purple-600',
      },
      {
        icon: <Code2 className="h-5 w-5" />,
        titleKey: 'common.problems.develop.scalability.title',
        descriptionKey: 'common.problems.develop.scalability.description',
        iconColor: 'text-purple-600',
      },
    ],
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden" id="common-problems">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-l from-primary/5 to-transparent blur-2xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-8 backdrop-blur-sm border border-primary/20">
            <span className="text-sm font-medium text-primary">Business Challenges</span>
          </div>
          <h2 className="mb-6 gradient-text">{t('common.problems.title')}</h2>
          <p className="text-xl text-text-light leading-relaxed">
            {t('common.problems.subtitle')}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Automate Section */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold gradient-text-subtle">{t('common.problems.automate.title')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problemsByPillar.automate.map((problem, index) => (
                <ProblemCard
                  key={index}
                  icon={problem.icon}
                  titleKey={problem.titleKey}
                  descriptionKey={problem.descriptionKey}
                  iconColor={problem.iconColor}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          {/* Integrate Section */}
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-light/10 flex items-center justify-center">
                <GitMerge className="h-6 w-6 text-primary-light" />
              </div>
              <h3 className="text-2xl font-bold gradient-text-subtle">{t('common.problems.integrate.title')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problemsByPillar.integrate.map((problem, index) => (
                <ProblemCard
                  key={index}
                  icon={problem.icon}
                  titleKey={problem.titleKey}
                  descriptionKey={problem.descriptionKey}
                  iconColor={problem.iconColor}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          {/* Develop Section */}
          <div className="animate-fade-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Code2 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-purple-600">{t('common.problems.develop.title')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problemsByPillar.develop.map((problem, index) => (
                <ProblemCard
                  key={index}
                  icon={problem.icon}
                  titleKey={problem.titleKey}
                  descriptionKey={problem.descriptionKey}
                  iconColor={problem.iconColor}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          {/* Security/Compliance - Standalone */}
          <div className="animate-fade-up" style={{ animationDelay: '600ms' }}>
            <Card className="border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-red-500/5 flex-shrink-0">
                    <ShieldAlert className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-red-600">{t('common.problems.compliance.title')}</h3>
                    <p className="text-lg text-text/80">{t('common.problems.compliance.description')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonProblems;
