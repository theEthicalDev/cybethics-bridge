
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Settings, Info, Check, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    // Enable Google Analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    // Disable Google Analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
    setShowConsent(false);
  };

  if (!showConsent) return null;

  const translations = {
    de: {
      title: "Cookie-Einstellungen",
      description: "Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern. Mit der Nutzung unserer Website stimmen Sie unserer",
      privacyPolicy: "Datenschutzerklärung",
      accept: "Akzeptieren",
      decline: "Ablehnen",
      to: "zu"
    },
    en: {
      title: "Cookie Settings",
      description: "This website uses cookies to enhance your experience. By using our website, you agree to our",
      privacyPolicy: "Privacy Policy",
      accept: "Accept",
      decline: "Decline",
      to: ""
    }
  };

  const t = translations[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t z-50">
      <div className="container max-w-7xl mx-auto">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>{t.title}</AlertTitle>
          <AlertDescription className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              {t.description}{' '}
              <Link to="/privacy" className="text-primary hover:text-primary/90">
                {t.privacyPolicy}
              </Link>{' '}
              {t.to}.
            </div>
            <div className="flex gap-2 shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="gap-2"
              >
                <X className="h-4 w-4" />
                {t.decline}
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleAccept}
                className="gap-2"
              >
                <Check className="h-4 w-4" />
                {t.accept}
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default CookieConsent;
