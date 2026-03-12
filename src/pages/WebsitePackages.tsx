
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Globe, Check, ArrowRight, Sparkles, Rocket, Crown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import StickyCTA from '@/components/StickyCTA';

const packages = [
  {
    id: 'starter',
    icon: Sparkles,
    features: 5,
    popular: false,
    accent: 'from-blue-500/10 to-blue-600/5',
    accentBorder: 'border-blue-500/20',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-500/10',
  },
  {
    id: 'business',
    icon: Rocket,
    features: 7,
    popular: true,
    accent: 'from-primary/10 to-primary/5',
    accentBorder: 'border-primary/30',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
  },
  {
    id: 'premium',
    icon: Crown,
    features: 9,
    popular: false,
    accent: 'from-amber-500/10 to-amber-600/5',
    accentBorder: 'border-amber-500/20',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-500/10',
  },
];

const WebsitePackages = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="pt-12 pb-12 md:py-24 bg-gradient-to-br from-primary/5 via-background to-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full mb-8 border border-primary/20">
              <Globe className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">{t('websitePackages.badge')}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-text-subtle">
              {t('websitePackages.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('websitePackages.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => {
              const IconComponent = pkg.icon;
              return (
                <Card
                  key={pkg.id}
                  className={`relative border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${pkg.accent} ${pkg.popular ? 'ring-2 ring-primary md:scale-105' : ''} flex flex-col animate-fade-up`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-primary text-primary-foreground px-4 py-1.5 text-sm font-medium shadow-md">
                        {t('websitePackages.popular')}
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4 pt-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${pkg.iconBg} flex items-center justify-center`}>
                      <IconComponent className={`h-8 w-8 ${pkg.iconColor}`} />
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      {t(`websitePackages.${pkg.id}.title`)}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {t(`websitePackages.${pkg.id}.description`)}
                    </p>
                    <div className="mt-4 space-y-1">
                      <div className="text-3xl font-bold text-primary">
                        {t(`websitePackages.${pkg.id}.price`)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {t(`websitePackages.${pkg.id}.priceNote`)}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <ul className="space-y-3 flex-1">
                      {Array.from({ length: pkg.features }, (_, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm">{t(`websitePackages.${pkg.id}.feature_${i + 1}`)}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6">
                      <Link to="/contact">
                        <Button
                          className={`w-full py-3 text-base font-medium ${
                            pkg.popular
                              ? 'bg-primary hover:bg-primary/90 shadow-lg text-primary-foreground'
                              : ''
                          }`}
                          variant={pkg.popular ? 'default' : 'outline'}
                        >
                          {t('websitePackages.cta')}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('websitePackages.info.title')}</h2>
            <p className="text-muted-foreground text-lg mb-8">{t('websitePackages.info.description')}</p>
            <Link to="/contact">
              <Button variant="gradient" size="lg" className="rounded-full shadow-large">
                {t('websitePackages.info.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <StickyCTA />
    </div>
  );
};

export default WebsitePackages;
