
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cog, Terminal, GitBranch, ServerCog, Monitor } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import LocalBusinessInfo from '@/components/LocalBusinessInfo';

const LocalServices = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      titleKey: 'services.software.title',
      descriptionKey: 'services.software.description',
    },
    {
      icon: <Cog className="h-6 w-6 text-primary" />,
      titleKey: 'services.automation.title',
      descriptionKey: 'services.automation.description',
    },
    {
      icon: <ServerCog className="h-6 w-6 text-primary" />,
      titleKey: 'services.api.title',
      descriptionKey: 'services.api.description',
    },
    {
      icon: <Terminal className="h-6 w-6 text-primary" />,
      titleKey: 'services.scripting.title',
      descriptionKey: 'services.scripting.description',
    },
    {
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      titleKey: 'services.cicd.title',
      descriptionKey: 'services.cicd.description',
    },
    {
      icon: <Monitor className="h-6 w-6 text-primary" />,
      titleKey: 'services.offshoring.title',
      descriptionKey: 'services.offshoring.description',
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">Zentralschweiz</span>
            </div>
            {/*<h1 className="mb-6">Wirtschaftsstandort Zentralschweiz: Software | Automatisierung | Prozessoptimierung</h1>*/}
            <h1 className="mb-6">{t('local.hero.title')}</h1>
            <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
              {/*Professionelle Softwareentwicklung, Automatisierung, Prozessoptimierung & DevOps in Luzern, Zug und der Umgebung Zentralschweiz.*/}
              {t('local.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Local Business Info */}
      <LocalBusinessInfo />

      {/* Services Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">
              {/*Unsere Dienstleistungen in der Zentralschweiz*/}
              {t('local.services.title')}
            </h2>
            <p className="text-lg text-text/80 text-balance">
              {t('local.services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                titleKey={service.titleKey}
                descriptionKey={service.descriptionKey}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            {/*<h2 className="mb-4">Vorteile eines lokalen IT-Partners</h2>*/}
            <h2 className="mb-4">{t('local.advantages.title')}</h2>
            {/*<p className="text-lg text-text/80">*/}
            {/*  Als Partner aus der Region bieten wir einzigartige Vorteile für Unternehmen in der Zentralschweiz.*/}
            {/*</p>*/}
            <p className="text-lg text-text/80">
              {t('local.advantages.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {/*<h3 className="text-lg font-medium mb-3">Persönliche Betreuung</h3>*/}
              {/*<p className="text-text/80">Direkter Kontakt und regelmässige persönliche Treffen statt anonymer Support-Hotlines.</p>*/}
              <h3 className="text-lg font-medium mb-3">{t('local.advantages.personal.title')}</h3>
              <p className="text-text/80">
                {t('local.advantages.personal.description')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {/*<h3 className="text-lg font-medium mb-3">Kurze Reaktionszeiten</h3>*/}
              {/*<p className="text-text/80">Schnelle Reaktion auf Anfragen und kurze Anfahrtswege für Vor-Ort-Termine.</p>*/}
              <h3 className="text-lg font-medium mb-3">{t('local.advantages.response.title')}</h3>
              <p className="text-text/80">
                {t('local.advantages.response.description')}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {/*<h3 className="text-lg font-medium mb-3">Lokales Netzwerk</h3>*/}
              {/*<p className="text-text/80">Wir kennen da jemanden: Zugriff auf lokale Partner und Ressourcen in der Zentralschweiz.</p>*/}
              <h3 className="text-lg font-medium mb-3">{t('local.advantages.network.title')}</h3>
              <p className="text-text/80">
                {t('local.advantages.network.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-primary/90 to-purple-700 rounded-3xl p-12 text-white text-center relative overflow-hidden animate-scale-in">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              {/*<h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Bereit für Ihre IT-Transformation?</h2>*/}
              {/*<p className="text-lg md:text-xl text-white/90 mb-8">*/}
              {/*  Kontaktieren Sie uns für eine unverbindliche Beratung zu Ihrem Projekt in der Zentralschweiz.*/}
              {/*</p>*/}
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                {t('contact.title')}
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 text-balance">
                {t('contact.subtitle')}
              </p>
              <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 hover:text-primary border-none rounded-full">
                <Link to="/contact">
                  {t('contact.booking')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalServices;
