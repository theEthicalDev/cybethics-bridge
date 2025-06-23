
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCalculator = () => {
  const { t } = useLanguage();
  
  const [projectSize, setProjectSize] = useState('small');
  const [appTypes, setAppTypes] = useState({
    web: false,
    ios: false,
    android: false,
    desktop: false,
    api: false,
  });
  
  const [features, setFeatures] = useState({
    // Users & Accounts
    email_signup: false,
    facebook_signup: false,
    twitter_signup: false,
    google_signup: false,
    linkedin_signup: false,
    github_signup: false,
    invitation_emails: false,
    multitenant: false,
    
    // User Generated Content
    dashboard: false,
    activity_feed: false,
    file_upload: false,
    profiles: false,
    transactional_emails: false,
    tags: false,
    ratings: false,
    media_processing: false,
    search: false,
    
    // Dates & Locations
    calendar: false,
    map_display: false,
    custom_markers: false,
    bookings: false,
    
    // Social & Engagement
    messaging: false,
    forums: false,
    social_sharing: false,
    facebook_graph: false,
    
    // Billing & eCommerce
    subscriptions: false,
    payment: false,
    cart: false,
    marketplace: false,
    product_mgmt: false,
    
    // Admin, Feedback & Analytics
    cms: false,
    user_admin: false,
    moderation: false,
    intercom: false,
    usage: false,
    crash: false,
    performance: false,
    multilingual: false,
    
    // External APIs
    third_party: false,
    own_api: false,
    sms: false,
    phone_masking: false,
  });

  const calculateEstimate = () => {
    let basePrice = 0;
    
    // Base price by project size
    switch (projectSize) {
      case 'small':
        basePrice = 5000;
        break;
      case 'medium':
        basePrice = 15000;
        break;
      case 'large':
        basePrice = 35000;
        break;
    }
    
    // App type multipliers
    let appMultiplier = 1;
    const selectedApps = Object.values(appTypes).filter(Boolean).length;
    if (selectedApps > 1) {
      appMultiplier = 1 + (selectedApps - 1) * 0.5;
    }
    if (appTypes.ios) appMultiplier += 0.3;
    if (appTypes.android) appMultiplier += 0.3;
    if (appTypes.desktop) appMultiplier += 0.4;
    if (appTypes.api) appMultiplier += 0.2;
    
    basePrice *= appMultiplier;
    
    // Feature additions
    const featurePrices = {
      // Users & Accounts
      email_signup: 1500,
      facebook_signup: 800,
      twitter_signup: 800,
      google_signup: 800,
      linkedin_signup: 800,
      github_signup: 800,
      invitation_emails: 1200,
      multitenant: 5000,
      
      // User Generated Content
      dashboard: 3000,
      activity_feed: 2500,
      file_upload: 2000,
      profiles: 2000,
      transactional_emails: 1500,
      tags: 1000,
      ratings: 1800,
      media_processing: 4000,
      search: 3000,
      
      // Dates & Locations
      calendar: 3500,
      map_display: 2500,
      custom_markers: 2000,
      bookings: 4000,
      
      // Social & Engagement
      messaging: 4500,
      forums: 3500,
      social_sharing: 1500,
      facebook_graph: 1000,
      
      // Billing & eCommerce
      subscriptions: 5000,
      payment: 4000,
      cart: 2500,
      marketplace: 8000,
      product_mgmt: 3500,
      
      // Admin, Feedback & Analytics
      cms: 3000,
      user_admin: 2500,
      moderation: 3000,
      intercom: 1200,
      usage: 2000,
      crash: 1500,
      performance: 2000,
      multilingual: 3500,
      
      // External APIs
      third_party: 2500,
      own_api: 3500,
      sms: 1500,
      phone_masking: 1800,
    };

    Object.entries(features).forEach(([key, value]) => {
      if (value) {
        basePrice += featurePrices[key as keyof typeof featurePrices] || 0;
      }
    });

    return Math.round(basePrice);
  };

  const handleAppTypeToggle = (type: string) => {
    setAppTypes(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature as keyof typeof prev]
    }));
  };

  const featureSections = [
    {
      key: 'users_accounts',
      features: ['email_signup', 'facebook_signup', 'twitter_signup', 'google_signup', 'linkedin_signup', 'github_signup', 'invitation_emails', 'multitenant']
    },
    {
      key: 'user_content',
      features: ['dashboard', 'activity_feed', 'file_upload', 'profiles', 'transactional_emails', 'tags', 'ratings', 'media_processing', 'search']
    },
    {
      key: 'dates_locations',
      features: ['calendar', 'map_display', 'custom_markers', 'bookings']
    },
    {
      key: 'social_engagement',
      features: ['messaging', 'forums', 'social_sharing', 'facebook_graph']
    },
    {
      key: 'billing_ecommerce',
      features: ['subscriptions', 'payment', 'cart', 'marketplace', 'product_mgmt']
    },
    {
      key: 'admin_analytics',
      features: ['cms', 'user_admin', 'moderation', 'intercom', 'usage', 'crash', 'performance', 'multilingual']
    },
    {
      key: 'external_apis',
      features: ['third_party', 'own_api', 'sms', 'phone_masking']
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="calculator-section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium mb-4">{t('pricing.calculator.title')}</h2>
            <p className="text-lg text-text/80">{t('pricing.calculator.subtitle')}</p>
          </div>

          <div className="flex gap-8 relative">
            {/* Main Calculator */}
            <div className="flex-1">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    {t('pricing.calculator.project_calculator')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Project Size Selection */}
                  <div>
                    <h4 className="text-lg font-medium mb-4">{t('pricing.calculator.project_size')}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {['small', 'medium', 'large'].map((size) => (
                        <div
                          key={size}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                            projectSize === size 
                              ? 'border-primary bg-primary/10 shadow-md transform scale-105' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setProjectSize(size)}
                        >
                          <div className="font-medium">{t(`pricing.calculator.project_size_${size}`)}</div>
                          <div className="text-sm text-text/70 mt-1 mb-3">{t(`pricing.calculator.project_size_${size}_desc`)}</div>
                          <div className="flex items-center gap-1 text-xs text-primary/70 mt-auto">
                            <FileText className="h-3 w-3" />
                            <span>{t(`pricing.calculator.project_size_${size}_pages`)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* App Types */}
                  <div>
                    <h4 className="text-lg font-medium mb-4">{t('pricing.calculator.app_types')}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {Object.entries(appTypes).map(([key, value]) => (
                        <div 
                          key={key} 
                          className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                            value 
                              ? 'border-primary bg-primary/10 shadow-md' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => handleAppTypeToggle(key)}
                        >
                          <span className="text-sm font-medium">{t(`pricing.calculator.app_type_${key}`)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Feature Sections */}
                  {featureSections.map((section) => (
                    <div key={section.key}>
                      <h4 className="text-lg font-medium mb-4">{t(`pricing.calculator.${section.key}`)}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.features.map((feature) => (
                          <div 
                            key={feature} 
                            className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                              features[feature as keyof typeof features]
                                ? 'border-primary bg-primary/10 shadow-md'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                            onClick={() => handleFeatureToggle(feature)}
                          >
                            <span className="text-sm font-medium">{t(`pricing.calculator.${section.key}_${feature}`)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

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

            {/* Sticky Total Estimate - Only visible within calculator section */}
            <div className="w-64 relative">
              <div className="sticky top-24">
                <div className="bg-white border-2 border-primary/20 rounded-lg p-6 shadow-lg">
                  <div className="text-center">
                    <div className="text-sm text-text/70 mb-2">{t('pricing.calculator.estimate')}</div>
                    <div className="text-3xl font-bold text-primary mb-4">
                      CHF {calculateEstimate().toLocaleString()}
                    </div>
                    <Link to="/contact">
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        {t('pricing.calculator.cta')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCalculator;
