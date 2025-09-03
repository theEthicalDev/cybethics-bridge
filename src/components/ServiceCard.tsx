
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, titleKey, descriptionKey, delay = 0 }) => {
  const { t } = useLanguage();
  
  return (
    <Card className="group border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-up backdrop-blur-sm" style={{ animationDelay: `${delay}ms` }}>
      {/* Gradient overlay for visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="pb-4 relative z-10">
        <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 w-fit mb-6 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 group-hover:scale-110">
          <div className="animate-float-gentle">
            {icon}
          </div>
        </div>
        <CardTitle className="text-xl font-semibold gradient-text-subtle group-hover:scale-105 transition-transform duration-300">{t(titleKey)}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-text/80 text-base leading-relaxed">
          {t(descriptionKey)}
        </CardDescription>
      </CardContent>
      <CardFooter className="relative z-10">
        <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group/btn transition-all duration-300">
          <Link to="/services" className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
            {t('services.more')}
            <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
