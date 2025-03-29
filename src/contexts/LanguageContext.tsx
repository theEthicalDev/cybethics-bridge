
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  setLanguage: (lang: Language) => void;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    'hero.title': 'Ethical Software Solutions for Your Business',
    'hero.subtitle': 'We build software solutions with integrity, placing ethics and your specific business needs at the forefront of our development process.',
    'hero.cta': 'Explore Services',
    
    'services.title': 'Our Services',
    'services.subtitle': 'We offer comprehensive software solutions tailored to meet your specific business requirements.',
    'services.software.title': 'Custom Software Development',
    'services.software.description': 'Bespoke software solutions designed to address your unique business challenges and opportunities.',
    'services.automation.title': 'Business Process Automation',
    'services.automation.description': 'Streamline your workflows and increase efficiency with custom automation solutions.',
    'services.scripting.title': 'Scripting & Integration',
    'services.scripting.description': 'Connect your systems and automate repetitive tasks with custom scripts and integrations.',
    'services.cicd.title': 'CI/CD Implementation',
    'services.cicd.description': 'Implement continuous integration and deployment practices to accelerate your development lifecycle.',
    'services.api.title': 'API Development',
    'services.api.description': 'Create robust APIs to enable seamless communication between your systems and third-party services.',
    'services.offshoring.title': 'IT Offshoring',
    'services.offshoring.description': 'Reduce costs and access global talent with our IT offshoring services and expertise.',
    'services.takeover.title': 'Project Takeover',
    'services.takeover.description': 'We can take over and maintain existing projects, providing continued support and development.',
    
    'services.process.title': 'Our Development Process',
    'services.process.subtitle': 'We follow a structured approach to ensure successful delivery of your project.',
    'services.process.discovery.title': 'Discovery & Requirements',
    'services.process.discovery.description': 'We start by understanding your business goals, requirements, and expectations through in-depth consultations and analysis of your existing systems.',
    'services.process.planning.title': 'Planning & Architecture',
    'services.process.planning.description': 'Based on the gathered requirements, we create a detailed project plan, define the architecture, and establish project milestones and deliverables.',
    'services.process.development.title': 'Development & Implementation',
    'services.process.development.description': 'Our experienced team develops your solution using the latest technologies and industry best practices, with regular check-ins to ensure alignment with your vision.',
    'services.process.testing.title': 'Testing & Quality Assurance',
    'services.process.testing.description': 'Every solution undergoes rigorous testing to ensure stability, security, and performance before delivery, including user acceptance testing with your team.',
    'services.process.deployment.title': 'Deployment & Launch',
    'services.process.deployment.description': 'We carefully deploy your solution, ensuring a smooth transition and minimal disruption to your business operations.',
    'services.process.maintenance.title': 'Support & Maintenance',
    'services.process.maintenance.description': 'We provide ongoing support and maintenance to ensure your solution continues to perform optimally and evolves with your business needs.',
    
    'services.hero.title': 'Our Services',
    'services.hero.subtitle': 'We provide ethical software solutions tailored to your specific business needs.',
    'services.cta.title': 'Ready to start your project?',
    'services.cta.subtitle': 'Get in touch today to discuss your requirements and how we can help you achieve your business goals.',
    
    'projects.title': 'Recent Projects',
    'projects.subtitle': 'Explore some of our recent work and see how we have helped businesses like yours.',
    'projects.viewall': 'View All Projects',
    'projects.request': 'Request Similar Project',
    
    'about.title': 'About Us',
    'about.intro': 'We are a team of passionate software developers committed to creating ethical software solutions that help businesses succeed.',
    'about.swiss': 'Swiss Quality Software',
    'about.values.title': 'Our Values',
    'about.values.fairness': 'We believe in fair and transparent pricing based on actual value delivered.',
    'about.values.empathy': 'We put ourselves in your shoes to truly understand your business needs.',
    'about.values.ethics': 'We maintain the highest ethical standards in everything we do.',
    'about.values.trust': 'We build long-term relationships based on trust and mutual respect.',
    
    'contact.title': 'Let\'s Build Something Great Together',
    'contact.subtitle': 'Ready to discuss your project? Schedule a no-obligation consultation with our team.',
    'contact.booking': 'Book a Consultation',
    'contact.start': 'Start Your Project',
    
    'error.404': 'Page not found',
    'error.back': 'Back to home',
    
    'services.more': 'Learn More',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    'common.problems.title': 'Common Business Challenges',
    'common.problems.subtitle': 'Identifying these challenges is the first step towards solving them',
    'common.problems.inefficiency.title': 'Manual & Inefficient Processes',
    'common.problems.inefficiency.description': 'Staff spending too much time on repetitive tasks that could be automated, reducing productivity and increasing costs.',
    'common.problems.integration.title': 'System Integration Issues',
    'common.problems.integration.description': 'Multiple systems that don\'t communicate with each other, resulting in data silos and duplicate work.',
    'common.problems.legacy.title': 'Legacy System Limitations',
    'common.problems.legacy.description': 'Outdated software that limits business growth, increases security risks, and is costly to maintain.',
    'common.problems.insights.title': 'Lack of Data Insights',
    'common.problems.insights.description': 'Inability to access real-time business intelligence and analytics to make informed decisions.',
    'common.problems.scalability.title': 'Scalability Challenges',
    'common.problems.scalability.description': 'Current systems struggle to handle growth in users, transactions, or data volume as your business expands.',
    'common.problems.compliance.title': 'Compliance & Security Concerns',
    'common.problems.compliance.description': 'Difficulties meeting regulatory requirements and protecting sensitive data from security threats.',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.projects': 'Projekte',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    
    'hero.title': 'Ethische Softwarelösungen für Ihr Unternehmen',
    'hero.subtitle': 'Wir entwickeln Softwarelösungen mit Integrität und stellen Ethik und Ihre spezifischen Geschäftsanforderungen in den Mittelpunkt unseres Entwicklungsprozesses.',
    'hero.cta': 'Dienstleistungen erkunden',
    
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Wir bieten umfassende Softwarelösungen, die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten sind.',
    'services.software.title': 'Individuelle Softwareentwicklung',
    'services.software.description': 'Maßgeschneiderte Softwarelösungen, die auf Ihre einzigartigen Geschäftsherausforderungen und -chancen ausgerichtet sind.',
    'services.automation.title': 'Automatisierung von Geschäftsprozessen',
    'services.automation.description': 'Optimieren Sie Ihre Arbeitsabläufe und steigern Sie die Effizienz mit individuellen Automatisierungslösungen.',
    'services.scripting.title': 'Skripting & Integration',
    'services.scripting.description': 'Verbinden Sie Ihre Systeme und automatisieren Sie wiederkehrende Aufgaben mit benutzerdefinierten Skripts und Integrationen.',
    'services.cicd.title': 'CI/CD-Implementierung',
    'services.cicd.description': 'Implementieren Sie kontinuierliche Integrations- und Bereitstellungspraktiken, um Ihren Entwicklungszyklus zu beschleunigen.',
    'services.api.title': 'API-Entwicklung',
    'services.api.description': 'Erstellen Sie robuste APIs, um eine nahtlose Kommunikation zwischen Ihren Systemen und Drittanbieterdiensten zu ermöglichen.',
    'services.offshoring.title': 'IT-Offshoring',
    'services.offshoring.description': 'Reduzieren Sie Kosten und nutzen Sie globale Talente mit unseren IT-Offshoring-Dienstleistungen und Expertise.',
    'services.takeover.title': 'Projektübernahme',
    'services.takeover.description': 'Wir können bestehende Projekte übernehmen und warten sowie kontinuierliche Unterstützung und Weiterentwicklung bieten.',
    
    'services.process.title': 'Unser Entwicklungsprozess',
    'services.process.subtitle': 'Wir folgen einem strukturierten Ansatz, um den erfolgreichen Abschluss Ihres Projekts zu gewährleisten.',
    'services.process.discovery.title': 'Entdeckung & Anforderungen',
    'services.process.discovery.description': 'Wir beginnen mit dem Verständnis Ihrer Geschäftsziele, Anforderungen und Erwartungen durch eingehende Beratungen und Analyse Ihrer bestehenden Systeme.',
    'services.process.planning.title': 'Planung & Architektur',
    'services.process.planning.description': 'Basierend auf den gesammelten Anforderungen erstellen wir einen detaillierten Projektplan, definieren die Architektur und legen Projektmeilensteine und Deliverables fest.',
    'services.process.development.title': 'Entwicklung & Implementierung',
    'services.process.development.description': 'Unser erfahrenes Team entwickelt Ihre Lösung mit den neuesten Technologien und Branchenstandards, mit regelmäßigen Check-ins, um die Ausrichtung auf Ihre Vision sicherzustellen.',
    'services.process.testing.title': 'Testen & Qualitätssicherung',
    'services.process.testing.description': 'Jede Lösung durchläuft rigorose Tests, um Stabilität, Sicherheit und Leistung vor der Lieferung zu gewährleisten, einschließlich Benutzerakzeptanztests mit Ihrem Team.',
    'services.process.deployment.title': 'Bereitstellung & Launch',
    'services.process.deployment.description': 'Wir stellen Ihre Lösung sorgfältig bereit und sorgen für einen reibungslosen Übergang mit minimaler Unterbrechung Ihrer Geschäftsabläufe.',
    'services.process.maintenance.title': 'Support & Wartung',
    'services.process.maintenance.description': 'Wir bieten kontinuierlichen Support und Wartung, um sicherzustellen, dass Ihre Lösung weiterhin optimal funktioniert und sich mit Ihren Geschäftsanforderungen weiterentwickelt.',
    
    'services.hero.title': 'Unsere Dienstleistungen',
    'services.hero.subtitle': 'Wir bieten ethische Softwarelösungen, die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten sind.',
    'services.cta.title': 'Bereit, Ihr Projekt zu starten?',
    'services.cta.subtitle': 'Kontaktieren Sie uns noch heute, um Ihre Anforderungen zu besprechen und wie wir Ihnen helfen können, Ihre Geschäftsziele zu erreichen.',
    
    'projects.title': 'Aktuelle Projekte',
    'projects.subtitle': 'Entdecken Sie einige unserer jüngsten Arbeiten und sehen Sie, wie wir Unternehmen wie dem Ihren geholfen haben.',
    'projects.viewall': 'Alle Projekte anzeigen',
    'projects.request': 'Ähnliches Projekt anfragen',
    
    'about.title': 'Über uns',
    'about.intro': 'Wir sind ein Team leidenschaftlicher Softwareentwickler, die sich der Erstellung ethischer Softwarelösungen verschrieben haben, die Unternehmen zum Erfolg verhelfen.',
    'about.swiss': 'Schweizer Qualitätssoftware',
    'about.values.title': 'Unsere Werte',
    'about.values.fairness': 'Wir glauben an faire und transparente Preise, die auf dem tatsächlich gelieferten Wert basieren.',
    'about.values.empathy': 'Wir versetzen uns in Ihre Lage, um Ihre Geschäftsanforderungen wirklich zu verstehen.',
    'about.values.ethics': 'Wir halten in allem, was wir tun, die höchsten ethischen Standards ein.',
    'about.values.trust': 'Wir bauen langfristige Beziehungen auf, die auf Vertrauen und gegenseitigem Respekt basieren.',
    
    'contact.title': 'Lassen Sie uns gemeinsam etwas Großartiges aufbauen',
    'contact.subtitle': 'Bereit, Ihr Projekt zu besprechen? Vereinbaren Sie eine unverbindliche Beratung mit unserem Team.',
    'contact.booking': 'Beratungstermin buchen',
    'contact.start': 'Projekt starten',
    
    'error.404': 'Seite nicht gefunden',
    'error.back': 'Zurück zur Startseite',
    
    'services.more': 'Mehr erfahren',
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.terms': 'Nutzungsbedingungen',
    
    'common.problems.title': 'Häufige Geschäftsherausforderungen',
    'common.problems.subtitle': 'Die Identifizierung dieser Herausforderungen ist der erste Schritt zu ihrer Lösung',
    'common.problems.inefficiency.title': 'Manuelle & ineffiziente Prozesse',
    'common.problems.inefficiency.description': 'Mitarbeiter verbringen zu viel Zeit mit sich wiederholenden Aufgaben, die automatisiert werden könnten, was die Produktivität senkt und die Kosten erhöht.',
    'common.problems.integration.title': 'Systemintegrationsprobleome',
    'common.problems.integration.description': 'Mehrere Systeme, die nicht miteinander kommunizieren, führen zu Datensilos und Doppelarbeit.',
    'common.problems.legacy.title': 'Einschränkungen durch Legacy-Systeme',
    'common.problems.legacy.description': 'Veraltete Software, die das Geschäftswachstum einschränkt, Sicherheitsrisiken erhöht und teuer in der Wartung ist.',
    'common.problems.insights.title': 'Mangel an Dateneinblicken',
    'common.problems.insights.description': 'Unfähigkeit, auf Echtzeit-Business-Intelligence und -Analytik zuzugreifen, um fundierte Entscheidungen zu treffen.',
    'common.problems.scalability.title': 'Skalierbarkeitsherausforderungen',
    'common.problems.scalability.description': 'Aktuelle Systeme haben Schwierigkeiten, mit dem Wachstum von Benutzern, Transaktionen oder Datenvolumen Schritt zu halten, wenn Ihr Unternehmen expandiert.',
    'common.problems.compliance.title': 'Compliance- und Sicherheitsbedenken',
    'common.problems.compliance.description': 'Schwierigkeiten bei der Erfüllung gesetzlicher Anforderungen und beim Schutz sensibler Daten vor Sicherheitsbedrohungen.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  // Get stored language from localStorage or default to 'de'
  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem('language') as Language;
    return storedLanguage ? storedLanguage : 'de';
  });
  
  // Store language preference in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en');
  };
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, setLanguage }}>
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
