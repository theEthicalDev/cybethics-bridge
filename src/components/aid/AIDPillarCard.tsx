import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AIDPillarCardProps {
  pillar: 'automate' | 'integrate' | 'develop';
  icon: React.ReactNode;
  delay?: number;
}

const AIDPillarCard: React.FC<AIDPillarCardProps> = ({ pillar, icon, delay = 0 }) => {
  const { t } = useLanguage();
  
  const benefits = [
    t(`aid.${pillar}.benefit1`),
    t(`aid.${pillar}.benefit2`),
    t(`aid.${pillar}.benefit3`),
    t(`aid.${pillar}.benefit4`),
  ];
  
  // Color variations for each pillar
  const colorClasses = {
    automate: 'from-primary-light/10 to-primary/5 hover:from-primary-light/20 hover:to-primary/10',
    integrate: 'from-primary/10 to-primary-dark/5 hover:from-primary/20 hover:to-primary-dark/10',
    develop: 'from-primary-dark/10 to-primary-dark/5 hover:from-primary-dark/20 hover:to-primary-dark/10',
  };
  
  const iconBgClasses = {
    automate: 'bg-gradient-to-br from-primary-light/15 to-primary-light/5',
    integrate: 'bg-gradient-to-br from-primary/15 to-primary/5',
    develop: 'bg-gradient-to-br from-primary-dark/15 to-primary-dark/5',
  };
  
  return (
    <Card 
      className={`group border-0 bg-gradient-to-br ${colorClasses[pillar]} shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-up backdrop-blur-sm`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient overlay for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="pb-4 relative z-10">
        <div className={`p-5 rounded-2xl ${iconBgClasses[pillar]} w-fit mb-6 group-hover:scale-110 transition-all duration-300`}>
          <div className="animate-float-gentle">
            {icon}
          </div>
        </div>
        <div className="space-y-2">
          <CardTitle className="text-2xl font-semibold gradient-text group-hover:scale-105 transition-transform duration-300">
            {t(`aid.${pillar}.title`)}
          </CardTitle>
          <p className="text-sm font-medium text-primary/80">{t(`aid.${pillar}.tagline`)}</p>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10 space-y-4">
        <CardDescription className="text-text/80 text-base leading-relaxed">
          {t(`aid.${pillar}.description`)}
        </CardDescription>
        
        <div className="space-y-2 pt-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <p className="text-sm text-text/70">{benefit}</p>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="relative z-10">
        <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group/btn transition-all duration-300">
          <Link to="/services" className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
            {t(`aid.${pillar}.cta`)}
            <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AIDPillarCard;
