
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  // Microsoft Bookings URLs
  const bookingUrls = {
    en: 'https://outlook.office365.com/book/Meetings@cybethics.com/',
    de: 'https://outlook.office365.com/book/cybethics@cybethics.com/'
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      content: 'info@cybethics.com',
      link: 'mailto:info@cybethics.com',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Phone',
      content: '+41 123 456 789',
      link: 'tel:+41123456789',
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Location',
      content: 'Switzerland',
      link: 'https://goo.gl/maps/Switzerland',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">{t('contact.title')}</span>
            </div>
            <h1 className="mb-6">{t('contact.title')}</h1>
            <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <a 
                    href={item.link} 
                    className="text-text/80 hover:text-primary transition-colors"
                  >
                    {item.content}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-md overflow-hidden animate-scale-in">
              <Tabs defaultValue={language} className="w-full">
                <TabsList className="w-full grid grid-cols-2">
                  <TabsTrigger value="en">English</TabsTrigger>
                  <TabsTrigger value="de">Deutsch</TabsTrigger>
                </TabsList>
                <TabsContent value="en" className="animate-fade-in">
                  <div className="relative">
                    {!isIframeLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                      </div>
                    )}
                    <iframe 
                      src={bookingUrls.en}
                      width="100%" 
                      height="700" 
                      className={`border-0 ${isIframeLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                      onLoad={() => setIsIframeLoaded(true)}
                      title="Microsoft Bookings (English)"
                    ></iframe>
                  </div>
                </TabsContent>
                <TabsContent value="de" className="animate-fade-in">
                  <div className="relative">
                    {!isIframeLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                      </div>
                    )}
                    <iframe 
                      src={bookingUrls.de}
                      width="100%" 
                      height="700" 
                      className={`border-0 ${isIframeLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                      onLoad={() => setIsIframeLoaded(true)}
                      title="Microsoft Bookings (Deutsch)"
                    ></iframe>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-md animate-scale-in">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398118.6367112432!2d7.10412!3d46.8131873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2sSwitzerland!5e0!3m2!1sen!2sus!4v1664896655127!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Cybethics Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
