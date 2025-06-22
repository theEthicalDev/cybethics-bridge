
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Shield, Zap, Crown, Phone } from 'lucide-react';

const MaintenancePackages = () => {
  const { t } = useLanguage();

  const packages = [
    {
      id: 'basic',
      icon: Shield,
      popular: false,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'secure',
      icon: Zap,
      popular: true,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      id: 'continuous',
      icon: Crown,
      popular: false,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">{t('pricing.maintenance.title')}</h2>
            <p className="text-lg text-text/80 mb-8">{t('pricing.maintenance.subtitle')}</p>
            
            {/* Explanation section */}
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-medium mb-3 text-primary">{t('pricing.maintenance.explanation')}</h3>
              <p className="text-text/80">{t('pricing.maintenance.explanation_text')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg) => {
              const IconComponent = pkg.icon;
              return (
                <Card key={pkg.id} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${pkg.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-primary text-white px-4 py-1.5 text-sm font-medium">
                        {t('pricing.maintenance.popular')}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${pkg.bgColor} flex items-center justify-center`}>
                      <IconComponent className={`h-8 w-8 ${pkg.color}`} />
                    </div>
                    <CardTitle className="text-2xl mb-4">
                      {t(`pricing.maintenance.${pkg.id}.title`)}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">
                        {t(`pricing.maintenance.${pkg.id}.price_monthly`)}
                      </div>
                      <div className="text-sm text-text/60">
                        {t(`pricing.maintenance.${pkg.id}.price_yearly`)}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {Array.from({ length: pkg.id === 'basic' ? 2 : pkg.id === 'secure' ? 5 : 6 }, (_, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-green-500 font-bold text-lg">✓</span>
                          <span className="text-sm">{t(`pricing.maintenance.${pkg.id}.feature_${i + 1}`)}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-6">
                      <Link to="/contact">
                        <Button 
                          className={`w-full py-3 text-base font-medium ${
                            pkg.popular 
                              ? 'bg-primary hover:bg-primary/90 shadow-lg' 
                              : 'bg-gray-600 hover:bg-gray-700'
                          }`}
                        >
                          {t('pricing.maintenance.choose_plan')}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Individual maintenance section */}
          <Card className="border-2 border-dashed border-gray-300 bg-gradient-to-r from-gray-50 to-gray-100">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Phone className="h-8 w-8 text-gray-600" />
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-4">{t('pricing.maintenance.individual.title')}</h3>
              <p className="text-text/80 max-w-2xl mx-auto mb-6">
                {t('pricing.maintenance.individual.description')}
              </p>
              <Link to="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  {t('pricing.maintenance.contact_individual')}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MaintenancePackages;
