
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Settings, Info, Check, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

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

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t z-50">
      <div className="container max-w-7xl mx-auto">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Cookie-Einstellungen</AlertTitle>
          <AlertDescription className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern. 
              Mit der Nutzung unserer Website stimmen Sie unserer{' '}
              <Link to="/privacy" className="text-primary hover:text-primary/90">
                Datenschutzerklärung
              </Link>{' '}
              zu.
            </div>
            <div className="flex gap-2 shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="gap-2"
              >
                <X className="h-4 w-4" />
                Ablehnen
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleAccept}
                className="gap-2"
              >
                <Check className="h-4 w-4" />
                Akzeptieren
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default CookieConsent;
