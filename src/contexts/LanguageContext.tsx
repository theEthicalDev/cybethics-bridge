
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'de';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero section
    'hero.title': 'Ethics in Software Development',
    'hero.subtitle': 'Crafting Customized Digital Solutions with Integrity',
    'hero.cta': 'Discover Our Services',
    
    // Services section
    'services.title': 'Our Services',
    'services.subtitle': 'Tailored solutions for your unique challenges',
    
    'services.software.title': 'Customized Software Development',
    'services.software.description': 'Web, desktop, and mobile applications built to your specifications',
    
    'services.automation.title': 'Workflow Automation',
    'services.automation.description': 'Streamline your processes with Microsoft PowerAutomate and Zapier',
    
    'services.scripting.title': 'Scripting',
    'services.scripting.description': 'Custom scripts for IT departments and businesses',
    
    'services.cicd.title': 'CI/CD Implementation',
    'services.cicd.description': 'Continuous integration and deployment with GitHub Actions or Jenkins',
    
    'services.api.title': 'API Development',
    'services.api.description': 'Custom interfaces and API integration with existing systems',
    
    'services.takeover.title': 'Website Takeover & IT Support',
    'services.takeover.description': 'Complete website management and comprehensive IT support services',
    
    'services.more': 'Learn More',
    
    // Projects section
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Showcasing our work and expertise',
    'projects.viewall': 'View All Projects',
    'projects.request': 'Request Similar Project',
    
    // About section
    'about.title': 'About Cybethics',
    'about.subtitle': 'Where Cyber meets Ethics',
    'about.intro': 'Cybethics combines technological expertise with ethical principles. Our name represents our commitment to both cybernetics and ethics in all we do.',
    'about.values.title': 'Our Values',
    'about.values.fairness': 'Fairness is one of our main drivers, which is why we always strive for common ground, to be a fair partner for every customer.',
    'about.values.empathy': 'One of our main strengths is to put ourselves in our customers\' shoes and think about their actual goal.',
    'about.values.ethics': 'We believe it\'s ethical to only implement the most suitable solution, not the most expensive one.',
    'about.values.trust': 'We want to be a trustworthy partner in your digital journey.',
    'about.swiss': 'We prefer deeds to words',
    
    // Contact section
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Book a consultation with our experts',
    'contact.booking': 'Schedule a Meeting',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Development Process
    'dev.process.title': 'Our Development Process',
    'dev.process.discovery': 'Discovery',
    'dev.process.planning': 'Planning',
    'dev.process.implementation': 'Implementation',
    'dev.process.delivery': 'Delivery',
    'dev.process.discovery.desc': 'We understand your requirements and business goals.',
    'dev.process.planning.desc': 'We create a detailed plan with timeline and deliverables.',
    'dev.process.implementation.desc': 'We develop the solution with regular updates and testing.',
    'dev.process.delivery.desc': 'We deliver the finished product with support and training.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.projects': 'Projekte',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    
    // Hero section
    'hero.title': 'Ethik in der Softwareentwicklung',
    'hero.subtitle': 'Massgeschneiderte digitale Lösungen mit Integrität',
    'hero.cta': 'Entdecken Sie unsere Dienstleistungen',
    
    // Services section
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Massgeschneiderte Lösungen für Ihre individuellen Herausforderungen',
    
    'services.software.title': 'Massgeschneiderte Softwareentwicklung',
    'services.software.description': 'Web-, Desktop- und Mobile-Anwendungen nach Ihren Vorgaben',
    
    'services.automation.title': 'Workflow-Automatisierung',
    'services.automation.description': 'Optimieren Sie Ihre Prozesse mit Microsoft PowerAutomate und Zapier',
    
    'services.scripting.title': 'Skripting',
    'services.scripting.description': 'Benutzerdefinierte Skripte für IT-Abteilungen und Unternehmen',
    
    'services.cicd.title': 'CI/CD Implementierung',
    'services.cicd.description': 'Kontinuierliche Integration und Bereitstellung mit GitHub Actions oder Jenkins',
    
    'services.api.title': 'Schnittstellenentwicklung',
    'services.api.description': 'Benutzerdefinierte Schnittstellen und API-Integration mit bestehenden Systemen',
    
    'services.takeover.title': 'Website-Übernahme & IT-Support',
    'services.takeover.description': 'Komplettes Website-Management und umfassende IT-Support-Dienstleistungen',
    
    'services.more': 'Mehr erfahren',
    
    // Projects section
    'projects.title': 'Unsere Projekte',
    'projects.subtitle': 'Präsentation unserer Arbeit und Expertise',
    'projects.viewall': 'Alle Projekte ansehen',
    'projects.request': 'Ähnliches Projekt anfragen',
    
    // About section
    'about.title': 'Über Cybethics',
    'about.subtitle': 'Wo Cyber auf Ethik trifft',
    'about.intro': 'Cybethics verbindet technologisches Fachwissen mit ethischen Grundsätzen. Unser Name steht für unser Engagement für Kybernetik und Ethik in allem, was wir tun.',
    'about.values.title': 'Unsere Werte',
    'about.values.fairness': 'Fairness ist einer unserer Hauptantriebe, weshalb wir stets nach einem gemeinsamen Nenner streben, um ein fairer Partner für jeden Kunden zu sein.',
    'about.values.empathy': 'Eine unserer Hauptstärken ist es, uns in die Lage unserer Kunden zu versetzen und über ihr eigentliches Ziel nachzudenken.',
    'about.values.ethics': 'Wir glauben, dass es ethisch ist, nur die am besten geeignete Lösung zu implementieren, nicht die teuerste.',
    'about.values.trust': 'Wir möchten ein vertrauenswürdiger Partner auf Ihrem digitalen Weg sein.',
    'about.swiss': 'Wir bevorzugen Taten statt Worte',
    
    // Contact section
    'contact.title': 'Kontaktieren Sie uns',
    'contact.subtitle': 'Buchen Sie eine Beratung mit unseren Experten',
    'contact.booking': 'Termin vereinbaren',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Nutzungsbedingungen',
    
    // Development Process
    'dev.process.title': 'Unser Entwicklungsprozess',
    'dev.process.discovery': 'Entdeckung',
    'dev.process.planning': 'Planung',
    'dev.process.implementation': 'Umsetzung',
    'dev.process.delivery': 'Lieferung',
    'dev.process.discovery.desc': 'Wir verstehen Ihre Anforderungen und Geschäftsziele.',
    'dev.process.planning.desc': 'Wir erstellen einen detaillierten Plan mit Zeitplan und Lieferergebnissen.',
    'dev.process.implementation.desc': 'Wir entwickeln die Lösung mit regelmässigen Updates und Tests.',
    'dev.process.delivery.desc': 'Wir liefern das fertige Produkt mit Support und Schulung.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
