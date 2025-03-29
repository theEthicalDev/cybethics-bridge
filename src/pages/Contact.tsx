import React, {useState} from 'react';
import {useLanguage} from '@/contexts/LanguageContext';
import {Card} from '@/components/ui/card';
import {Mail, MapPin, Phone} from 'lucide-react';

const Contact = () => {
  const {t, language} = useLanguage();
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  // Microsoft Bookings URLs
  const bookingUrls = {
    en: 'https://outlook.office365.com/book/Meetings@cybethics.com/',
    de: 'https://outlook.office365.com/book/cybethics@cybethics.com/'
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary"/>,
      title: 'Email',
      content: 'info@cybethics.com',
      link: 'mailto:info@cybethics.com',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary"/>,
      title: 'Phone',
      content: '+41 41 521 32 79',
      link: 'tel:+41123456789',
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary"/>,
      title: 'Location',
      content: 'Emmen 📍 Luzern 📍 Switzerland',
      link: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67473.34567433297!2d8.23025083798067!3d47.0770799150297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ffd006436942d%3A0x3a3d41af9207071d!2sFeldbreitequartier%20Emmen!5e0!3m2!1sde!2sch!4v1743022148634!5m2!1sde!2sch',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 mt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-24 bg-gray-100">
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
      {/*<section className="py-8 bg-gray-100">*/}
      {/*  <div className="container">*/}
      {/*    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">*/}
      {/*      {contactInfo.map((item, index) => (*/}
      {/*        <Card key={index}*/}
      {/*              className="border-0 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"*/}
      {/*              style={{animationDelay: `${index * 100}ms`}}>*/}
      {/*          <CardContent className="p-8 flex flex-col items-center text-center">*/}
      {/*            <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">*/}
      {/*              {item.icon}*/}
      {/*            </div>*/}
      {/*            <h3 className="text-lg font-medium mb-2">{item.title}</h3>*/}
      {/*            <a*/}
      {/*              href={item.link}*/}
      {/*              className="text-text/80 hover:text-primary transition-colors"*/}
      {/*            >*/}
      {/*              {item.content}*/}
      {/*            </a>*/}
      {/*          </CardContent>*/}
      {/*        </Card>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Booking Section */}
      <section id="booking" className="py-8 bg-gray-100">
        <div className="container">
          <div className="">
            <Card className="border-0 overflow-hidden animate-scale-in shadow-none">
              <div className="relative">
                {!isIframeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                    <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                  </div>
                )}
                <iframe
                  src={bookingUrls[language]}
                  id={'booking-iframe'}
                  width="100%"
                  scrolling="no"
                  className={`border-0 h-[1900px] sm:h-[3000px] md:h-[3300px] lg:h-[1790px] xl:h-[1880px] 2xl:h-[1820px] ${isIframeLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                  onLoad={() => setIsIframeLoaded(true)}
                  title={`Microsoft Bookings (${language === 'en' ? 'English' : 'Deutsch'})`}
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-md animate-scale-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67473.34567433297!2d8.23025083798067!3d47.0770799150297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ffd006436942d%3A0x3a3d41af9207071d!2sFeldbreitequartier%20Emmen!5e0!3m2!1sde!2sch!4v1743022148634!5m2!1sde!2sch"
              width="100%"
              height="100%"
              style={{border: 0}}
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
