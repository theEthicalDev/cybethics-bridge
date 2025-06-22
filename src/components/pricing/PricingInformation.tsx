
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, Wrench } from 'lucide-react';

const PricingInformation = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">{t('pricing.information.title')}</h2>
            <p className="text-lg text-text/80">{t('pricing.information.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  {t('pricing.information.estimation.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-text/80">{t('pricing.information.estimation.description')}</p>
                <ul className="space-y-2 text-sm text-text/70">
                  <li>• {t('pricing.information.estimation.complexity')}</li>
                  <li>• {t('pricing.information.estimation.requirements')}</li>
                  <li>• {t('pricing.information.estimation.accuracy')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  {t('pricing.information.maintenance.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-text/80">{t('pricing.information.maintenance.description')}</p>
                <ul className="space-y-2 text-sm text-text/70">
                  <li>• {t('pricing.information.maintenance.when_needed')}</li>
                  <li>• {t('pricing.information.maintenance.when_not_needed')}</li>
                  <li>• {t('pricing.information.maintenance.benefits')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingInformation;
