
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ClipboardList, 
  WifiOff, 
  Clock, 
  PieChart, 
  TrendingUp, 
  ShieldAlert 
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ProblemCard = ({ 
  icon, 
  titleKey, 
  descriptionKey, 
  delay = 0 
}: { 
  icon: React.ReactNode; 
  titleKey: string; 
  descriptionKey: string; 
  delay?: number; 
}) => {
  const { t } = useLanguage();
  
  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up" 
          style={{ animationDelay: `${delay}ms` }}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10 mt-1 flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">{t(titleKey)}</h3>
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
  
  // Problems grouped by AID pillars
  const problems = [
    {
      icon: <ClipboardList className="h-5 w-5 text-primary" />,
      titleKey: 'common.problems.inefficiency.title',
      descriptionKey: 'common.problems.inefficiency.description',
      aidPillar: 'AUTOMATE'
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      titleKey: 'common.problems.legacy.title',
      descriptionKey: 'common.problems.legacy.description',
      aidPillar: 'AUTOMATE'
    },
    {
      icon: <WifiOff className="h-5 w-5 text-primary" />,
      titleKey: 'common.problems.integration.title',
      descriptionKey: 'common.problems.integration.description',
      aidPillar: 'INTEGRATE'
    },
    {
      icon: <PieChart className="h-5 w-5 text-primary" />,
      titleKey: 'common.problems.insights.title',
      descriptionKey: 'common.problems.insights.description',
      aidPillar: 'INTEGRATE'
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      titleKey: 'common.problems.scalability.title',
      descriptionKey: 'common.problems.scalability.description',
      aidPillar: 'DEVELOP'
    },
    {
      icon: <ShieldAlert className="h-5 w-5 text-primary" />,
      titleKey: 'common.problems.compliance.title',
      descriptionKey: 'common.problems.compliance.description',
      aidPillar: 'DEVELOP'
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-50" id="common-problems">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">{t('common.problems.title')}</h2>
          <p className="text-lg text-text/80">
            {t('common.problems.subtitle')}
          </p>
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isMobile ? 'max-w-full overflow-hidden' : ''}`}>
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              icon={problem.icon}
              titleKey={problem.titleKey}
              descriptionKey={problem.descriptionKey}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonProblems;
