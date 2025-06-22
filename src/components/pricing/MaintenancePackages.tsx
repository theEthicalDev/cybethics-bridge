
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const MaintenancePackages = () => {
  const { t } = useLanguage();

  const packages = [
    {
      id: 'basic',
      icon: '🥉',
      popular: false,
    },
    {
      id: 'secure',
      icon: '🥈',
      popular: true,
    },
    {
      id: 'continuous',
      icon: '🥇',
      popular: false,
    },
    {
      id: 'individual',
      icon: '⚙️',
      popular: false,
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">{t('pricing.maintenance.title')}</h2>
            <p className="text-lg text-text/80">{t('pricing.maintenance.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`relative border-0 shadow-md hover:shadow-lg transition-shadow ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-3 py-1">
                      {t('pricing.maintenance.popular')}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="text-3xl mb-2">{pkg.icon}</div>
                  <CardTitle className="text-xl">
                    {t(`pricing.maintenance.${pkg.id}.title`)}
                  </CardTitle>
                  {pkg.id !== 'individual' && (
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary">
                        {t(`pricing.maintenance.${pkg.id}.price_monthly`)}
                      </div>
                      <div className="text-sm text-text/60">
                        {t(`pricing.maintenance.${pkg.id}.price_yearly`)}
                      </div>
                    </div>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    {Array.from({ length: pkg.id === 'individual' ? 1 : pkg.id === 'basic' ? 2 : pkg.id === 'secure' ? 5 : 6 }, (_, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500 font-bold">▶️</span>
                        <span>{t(`pricing.maintenance.${pkg.id}.feature_${i + 1}`)}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <Link to="/contact">
                      <Button 
                        className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-600 hover:bg-gray-700'}`}
                      >
                        {pkg.id === 'individual' 
                          ? t('pricing.maintenance.contact_us')
                          : t('pricing.maintenance.choose_plan')
                        }
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenancePackages;
