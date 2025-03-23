
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
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden animate-fade-up" style={{ animationDelay: `${delay}ms` }}>
      <CardHeader className="pb-2">
        <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-xl font-medium">{t(titleKey)}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-text/80 text-base">
          {t(descriptionKey)}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group">
          <Link to="/services" className="flex items-center text-sm font-medium">
            {t('services.more')}
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
