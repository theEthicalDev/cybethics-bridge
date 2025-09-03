import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl bg-background/95 backdrop-blur-sm border shadow-lg">
        <div className="flex items-start justify-between p-6">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-semibold mb-2">Cookie-Einstellungen</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
              Diese helfen uns dabei, die Website-Funktionalität zu gewährleisten und Ihre Präferenzen zu speichern.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button onClick={handleAccept} size="sm">
                Akzeptieren
              </Button>
              <Button onClick={handleDecline} variant="outline" size="sm">
                Ablehnen
              </Button>
            </div>
          </div>
          <Button
            onClick={handleDecline}
            variant="ghost"
            size="sm"
            className="shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;