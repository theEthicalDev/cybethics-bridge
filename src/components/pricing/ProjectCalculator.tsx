
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCalculator = () => {
  const { t } = useLanguage();
  
  const [complexity, setComplexity] = useState([3]);
  const [features, setFeatures] = useState({
    database: false,
    authentication: false,
    payment: false,
    api: false,
    mobile: false,
    cms: false,
  });

  const calculateEstimate = () => {
    let basePrice = complexity[0] * 2000;
    
    if (features.database) basePrice += 3000;
    if (features.authentication) basePrice += 2500;
    if (features.payment) basePrice += 4000;
    if (features.api) basePrice += 3500;
    if (features.mobile) basePrice += 5000;
    if (features.cms) basePrice += 3000;

    return basePrice;
  };

  const handleFeatureToggle = (feature: string) => {
    setFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature as keyof typeof prev]
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">{t('pricing.calculator.title')}</h2>
            <p className="text-lg text-text/80">{t('pricing.calculator.subtitle')}</p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                {t('pricing.calculator.project_calculator')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <label className="block text-sm font-medium mb-4">
                  {t('pricing.calculator.complexity')}: {complexity[0]}/10
                </label>
                <Slider
                  value={complexity}
                  onValueChange={setComplexity}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-text/60 mt-2">
                  <span>{t('pricing.calculator.simple')}</span>
                  <span>{t('pricing.calculator.complex')}</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">{t('pricing.calculator.features')}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(features).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-3 border rounded-lg">
                      <span className="text-sm">{t(`pricing.calculator.feature_${key}`)}</span>
                      <Switch
                        checked={value}
                        onCheckedChange={() => handleFeatureToggle(key)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    CHF {calculateEstimate().toLocaleString()}
                  </div>
                  <p className="text-sm text-text/70 mb-4">
                    <strong>{t('pricing.calculator.disclaimer_bold')}</strong> {t('pricing.calculator.disclaimer')}
                  </p>
                  <Link to="/contact">
                    <Button className="bg-primary hover:bg-primary/90">
                      {t('pricing.calculator.cta')}
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectCalculator;
