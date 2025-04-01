import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

type LanguageContextType = {
  language: 'en' | 'de';
  setLanguage: (lang: 'en' | 'de') => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    
    // Home page
    'hero.title': 'Software that works exactly like you need it',
    'hero.subtitle': 'We develop customized software solutions to automate and optimize your business processes.',
    'hero.cta': 'Book a Free Consultation',
    'hero.secondary': 'Learn More',
    
    // Business Challenges
    'business.questions.title': 'Common Business Challenges',
    'business.questions.subtitle': 'Do any of these challenges sound familiar to your business?',
    'business.challenge.email.title': 'You\'re drowning in email threads and spreadsheets',
    'business.challenge.email.description': 'Keeping track of projects, approvals, and updates through emails and shared documents leads to confusion, version control issues, and missed deadlines.',
    'business.challenge.data.title': 'Your team wastes hours copying and pasting data',
    'business.challenge.data.description': 'Manual data transfers between different systems or documents create inefficiencies, introduce errors, and prevent your team from focusing on strategic tasks.',
    'business.challenge.copy.title': 'Your data is separated across different tools',
    'business.challenge.copy.description': 'Information stored in multiple disconnected applications makes it difficult to get a complete picture, leading to inefficiencies and poor decision-making.',
    'business.challenge.gut.title': 'You\'re making business decisions based on gut feeling',
    'business.challenge.gut.description': 'Without real-time data and analytics, you\'re forced to rely on outdated reports or assumptions, leading to missed opportunities and costly mistakes.',
    'business.challenge.admin.title': 'Your employees spend more time on admin work than actual work',
    'business.challenge.admin.description': 'Manually filling out forms, generating reports, and organizing files takes away time from innovation, problem-solving, and customer service.',
    'business.challenge.systems.title': 'Your systems don\'t talk to each other, causing double work',
    'business.challenge.systems.description': 'Disconnected software forces employees to re-enter the same data multiple times, leading to inconsistencies, errors, and inefficiencies.',
    'business.challenge.excel.title': 'You\'re pushing Excel beyond its limits and it\'s costing you',
    'business.challenge.excel.description': 'Using Excel as a database, workflow manager, or reporting tool creates versioning issues, manual errors, lack of collaboration, and security risks.',
    
    // Services page
    'services.title': 'Our Services',
    'services.subtitle': 'We offer a range of services to meet your business needs',
    'services.more': 'Explore Services',
    
    // Service categories
    'services.software.title': 'Custom Software Development',
    'services.software.description': 'Tailored applications designed to fit your specific business needs and processes.',
    'services.automation.title': 'Workflow Automation',
    'services.automation.description': 'Streamline repetitive tasks to increase efficiency and reduce errors.',
    'services.scripting.title': 'Scripting & Macros',
    'services.scripting.description': 'Custom scripts to automate manual processes and extend existing software capabilities.',
    'services.cicd.title': 'CI/CD Pipeline Setup',
    'services.cicd.description': 'Automate software testing and deployment for faster and more reliable releases.',
    'services.api.title': 'API Development & Integration',
    'services.api.description': 'Connect different systems and applications to work together seamlessly.',
    'services.offshoring.title': 'IT Infrastructure & Consulting',
    'services.offshoring.description': 'Expert guidance on technology infrastructure and strategy.',
    
    // Services process
    'services.process.title': 'Our Development Process',
    'services.process.subtitle': 'We follow a proven process to ensure the success of your project',
    'services.process.discovery': 'Discovery',
    'services.process.design': 'Design',
    'services.process.development': 'Development',
    'services.process.testing': 'Testing',
    'services.process.deployment': 'Deployment',
    'services.process.support': 'Support',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Take a look at some of our recent work and success stories',
    'projects.viewall': 'View All Projects',
    'projects.request': 'Request Similar Solution',
    
    // About
    'about.title': 'About Us',
    'about.intro': 'We are a team of passionate software developers dedicated to helping businesses leverage technology to solve real-world problems. With a focus on ethical business practices, we develop solutions that truly meet your needs without unnecessary complexity or expense.',
    'about.swiss': 'Swiss Quality Software',
    'about.values.title': 'Our Values',
    'about.values.fairness': 'We believe in fair business practices and transparent pricing. No surprises, no hidden costs.',
    'about.values.empathy': 'We put ourselves in your shoes to deeply understand your business challenges.',
    'about.values.ethics': 'We maintain high ethical standards in all our business dealings and recommendations.',
    'about.values.trust': 'We build long-term relationships based on trust and consistently delivering on our promises.',
    'about.logo.alt': 'Cybethics Logo',
    'about.story.title': 'Our Story',
    'about.story.description': 'The name Cybethics combines "Cyber" and "Ethics" because ethics means something to us. It\'s at the core of how we approach every project and client relationship.',
    'about.cyber.title': 'Cyber',
    'about.cyber.description': 'Representing our technical expertise in software development, automation, and digital solutions.',
    'about.ethics.title': 'Ethics',
    'about.ethics.description': 'Highlighting our commitment to fairness, transparency, and doing what\'s right for our clients.',
    'about.values.description': 'Our values guide everything we do, from how we interact with clients to how we approach development challenges.',
    'about.values.fairness.title': 'Fairness',
    'about.values.empathy.title': 'Empathy',
    'about.values.ethics.title': 'Ethics',
    'about.values.trust.title': 'Trust',
    'about.approach.title': 'Our Approach',
    'about.approach.description': 'We believe that successful software projects start with understanding the real needs and goals of our clients. Our approach focuses on these key principles:',
    'about.approach.listen.title': 'Listen First',
    'about.approach.listen.description': 'We take the time to truly understand your business objectives before proposing solutions.',
    'about.approach.rightsized.title': 'Right-sized Solutions',
    'about.approach.rightsized.description': 'We implement the most suitable solution, not necessarily the most complex or expensive one.',
    'about.approach.transparent.title': 'Transparent Communication',
    'about.approach.transparent.description': 'We maintain clear and honest communication throughout the project lifecycle.',
    'about.approach.longterm.title': 'Long-term Partnership',
    'about.approach.longterm.description': 'We aim to be a trusted partner in your digital journey, not just a service provider.',
    'about.qualities.innovative': 'Innovative',
    'about.qualities.practical': 'Practical',
    'about.qualities.collaborative': 'Collaborative',
    'about.qualities.efficient': 'Efficient',
    'about.impact.title': 'Our Impact',
    'about.impact.description': 'Our dedication to quality and client satisfaction has helped us achieve impressive results',
    'about.expertise.title': 'Our Expertise',
    'about.expertise.description': 'We bring a diverse range of technical skills and expertise to solve your most complex challenges.',
    'about.cta.title': 'Ready to work with us?',
    'about.cta.description': 'Schedule a consultation with our team to discuss your specific project requirements.',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to discuss how we can help your business? Schedule a consultation with our team.',
    'contact.booking': 'Book a Consultation',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about our services and process',
    'faq.cta.title': 'Still Have Questions?',
    'faq.cta.subtitle': 'Contact us for a free consultation to discuss your specific needs',
    'faq.process.question': 'What is your development process?',
    'faq.process.answer': 'Our development process starts with a thorough discovery phase to understand your needs, followed by design, development, testing, deployment, and ongoing support. We keep you involved at every step with regular updates and demos.',
    'faq.pricing.question': 'How do you determine pricing for projects?',
    'faq.pricing.answer': 'Our pricing is based on the scope and complexity of your project. We provide detailed estimates after the initial consultation and discovery phase. We offer both fixed-price and time-and-materials pricing models depending on your needs.',
    'faq.timeline.question': 'How long does a typical project take?',
    'faq.timeline.answer': 'Project timelines vary greatly depending on scope and complexity. Simple automation projects might take 2-4 weeks, while more complex custom software could take 3-6 months. We provide detailed timelines during the discovery phase.',
    'faq.technologies.question': 'What technologies and platforms do you work with?',
    'faq.technologies.answer': 'We work with a wide range of technologies including Java, Python, JavaScript, React, Angular, Node.js, .NET, and more. We\'re also experienced with cloud platforms like AWS, Azure, and Google Cloud, as well as automation tools like Power Automate and Zapier.',
    'faq.maintenance.question': 'Do you provide ongoing maintenance and support?',
    'faq.maintenance.answer': 'Yes, we offer ongoing maintenance and support services to ensure your software continues to function optimally. We can provide different support levels based on your needs, from basic bug fixes to comprehensive 24/7 support.',
    'faq.ownership.question': 'Who owns the intellectual property of the developed software?',
    'faq.ownership.answer': 'You do. Once the project is completed and paid for, you own all intellectual property rights to the custom software we develop for you.',
    'faq.communication.question': 'How do you handle communication during projects?',
    'faq.communication.answer': 'We maintain regular communication through your preferred channels (email, phone, video calls, or project management tools). We provide weekly progress updates and schedule regular demo sessions to show you the evolving product.',
    
    // Footer
    'footer.copyright': '© 2024 Cybethics. All rights reserved.',
    
    // Stats
    'stats.successfulProjects': 'Successful Projects',
    'stats.yearsSoftwareExperience': 'Years Experience',
    'stats.priceworthyImprovements': 'Price-worthy Improvements',
    'stats.possibilities': 'Endless Possibilities',
    
    // NotFound page
    'notFound.title': 'Page Not Found',
    'notFound.description': 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
    'notFound.returnHome': 'Return to Home',
    
    // Client names
    'client.enterprise': 'Enterprise Corp',
    'client.startup': 'Tech Startup',
    'client.retail': 'Retail Chain',
    'client.manufacturing': 'Manufacturing Co.',
    'client.healthcare': 'Healthcare Provider',
    'client.financial': 'Financial Services',
    'client.logistics': 'Logistics Company',
    'client.government': 'Government Agency',
    'client.education': 'Educational Institution',
    'client.nonprofit': 'Nonprofit Organization',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.services': 'Dienstleistungen',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    'nav.faq': 'FAQ',
    
    // Home page
    'hero.title': 'Software, die genau so funktioniert, wie Sie es brauchen',
    'hero.subtitle': 'Wir entwickeln maßgeschneiderte Softwarelösungen zur Automatisierung und Optimierung Ihrer Geschäftsprozesse.',
    'hero.cta': 'Kostenlose Beratung buchen',
    'hero.secondary': 'Mehr erfahren',
    
    // Business Challenges
    'business.questions.title': 'Häufige Geschäftsherausforderungen',
    'business.questions.subtitle': 'Kommen Ihnen diese Herausforderungen in Ihrem Unternehmen bekannt vor?',
    'business.challenge.email.title': 'Sie ertrinken in E-Mail-Threads und Tabellenkalkulationen',
    'business.challenge.email.description': 'Die Verfolgung von Projekten, Genehmigungen und Updates durch E-Mails und gemeinsam genutzte Dokumente führen zu Verwirrung, Versionskontrollproblemen und verpassten Fristen.',
    'business.challenge.data.title': 'Ihr Team verschwendet Stunden mit dem Kopieren und Einfügen von Daten',
    'business.challenge.data.description': 'Manuelle Datenübertragungen zwischen verschiedenen Systemen oder Dokumenten führen zu Ineffizienzen, verursachen Fehler und hindern Ihr Team daran, sich auf strategische Aufgaben zu konzentrieren.',
    'business.challenge.copy.title': 'Ihre Daten sind auf verschiedene Tools verteilt',
    'business.challenge.copy.description': 'In mehreren getrennten Anwendungen gespeicherte Informationen erschweren es, ein vollständiges Bild zu erhalten, was zu Ineffizienzen und schlechten Entscheidungen führt.',
    'business.challenge.gut.title': 'Sie treffen Geschäftsentscheidungen basierend auf Bauchgefühl',
    'business.challenge.gut.description': 'Ohne Echtzeitdaten und Analysen sind Sie gezwungen, sich auf veraltete Berichte oder Annahmen zu verlassen, was zu verpassten Chancen und kostspieligen Fehlern führt.',
    'business.challenge.admin.title': 'Ihre Mitarbeiter verbringen mehr Zeit mit Verwaltungsarbeit als mit eigentlicher Arbeit',
    'business.challenge.admin.description': 'Das manuelle Ausfüllen von Formularen, Generieren von Berichten und Organisieren von Dateien nimmt Zeit für Innovation, Problemlösung und Kundenservice weg.',
    'business.challenge.systems.title': 'Ihre Systeme kommunizieren nicht miteinander, was zu Doppelarbeit führt',
    'business.challenge.systems.description': 'Unverbundene Software zwingt Mitarbeiter, dieselben Daten mehrmals einzugeben, was zu Inkonsistenzen, Fehlern und Ineffizienzen führt.',
    'business.challenge.excel.title': 'Sie bringen Excel an seine Grenzen und das kostet Sie',
    'business.challenge.excel.description': 'Die Verwendung von Excel als Datenbank, Workflow-Manager oder Berichtswerkzeug führt zu Versionierungsproblemen, manuellen Fehlern, mangelnder Zusammenarbeit und Sicherheitsrisiken.',
    
    // Services page
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Wir bieten eine Reihe von Dienstleistungen an, um Ihre Geschäftsanforderungen zu erfüllen',
    'services.more': 'Dienstleistungen erkunden',
    
    // Service categories
    'services.software.title': 'Individuelle Softwareentwicklung',
    'services.software.description': 'Maßgeschneiderte Anwendungen, die auf Ihre spezifischen Geschäftsanforderungen und -prozesse zugeschnitten sind.',
    'services.automation.title': 'Workflow-Automatisierung',
    'services.automation.description': 'Optimierung wiederkehrender Aufgaben zur Steigerung der Effizienz und Reduzierung von Fehlern.',
    'services.scripting.title': 'Skripte & Makros',
    'services.scripting.description': 'Benutzerdefinierte Skripte zur Automatisierung manueller Prozesse und Erweiterung bestehender Softwarefunktionen.',
    'services.cicd.title': 'CI/CD-Pipeline-Einrichtung',
    'services.cicd.description': 'Automatisieren Sie Software-Tests und -Bereitstellungen für schnellere und zuverlässigere Releases.',
    'services.api.title': 'API-Entwicklung & Integration',
    'services.api.description': 'Verbinden Sie verschiedene Systeme und Anwendungen, damit sie nahtlos zusammenarbeiten.',
    'services.offshoring.title': 'IT-Infrastruktur & Beratung',
    'services.offshoring.description': 'Fachkundige Beratung zu Technologieinfrastruktur und -strategie.',
    
    // Services process
    'services.process.title': 'Unser Entwicklungsprozess',
    'services.process.subtitle': 'Wir folgen einem bewährten Prozess, um den Erfolg Ihres Projekts zu gewährleisten',
    'services.process.discovery': 'Entdeckung',
    'services.process.design': 'Design',
    'services.process.development': 'Entwicklung',
    'services.process.testing': 'Testen',
    'services.process.deployment': 'Bereitstellung',
    'services.process.support': 'Support',
    
    // Projects
    'projects.title': 'Unsere Projekte',
    'projects.subtitle': 'Werfen Sie einen Blick auf einige unserer jüngsten Arbeiten und Erfolgsgeschichten',
    'projects.viewall': 'Alle Projekte anzeigen',
    'projects.request': 'Ähnliche Lösung anfragen',
    
    // About
    'about.title': 'Über uns',
    'about.intro': 'Wir sind ein Team leidenschaftlicher Softwareentwickler, die sich darauf konzentrieren, Unternehmen dabei zu helfen, Technologie zur Lösung realer Probleme einzusetzen. Mit einem Fokus auf ethische Geschäftspraktiken entwickeln wir Lösungen, die wirklich Ihren Bedürfnissen entsprechen, ohne unnötige Komplexität oder Kosten.',
    'about.swiss': 'Schweizer Qualitätssoftware',
    'about.values.title': 'Unsere Werte',
    'about.values.fairness': 'Wir glauben an faire Geschäftspraktiken und transparente Preisgestaltung. Keine Überraschungen, keine versteckten Kosten.',
    'about.values.empathy': 'Wir versetzen uns in Ihre Lage, um Ihre Geschäftsherausforderungen tief zu verstehen.',
    'about.values.ethics': 'Wir halten hohe ethische Standards in allen unseren Geschäftsbeziehungen und Empfehlungen ein.',
    'about.values.trust': 'Wir bauen langfristige Beziehungen auf, die auf Vertrauen und der konsequenten Erfüllung unserer Versprechen basieren.',
    'about.logo.alt': 'Cybethics Logo',
    'about.story.title': 'Unsere Geschichte',
    'about.story.description': 'Der Name Cybethics kombiniert "Cyber" und "Ethik", weil Ethik für uns etwas bedeutet. Es ist der Kern unserer Herangehensweise an jedes Projekt und jede Kundenbeziehung.',
    'about.cyber.title': 'Cyber',
    'about.cyber.description': 'Repräsentiert unsere technische Expertise in Softwareentwicklung, Automatisierung und digitalen Lösungen.',
    'about.ethics.title': 'Ethik',
    'about.ethics.description': 'Unterstreicht unser Engagement für Fairness, Transparenz und das Richtige für unsere Kunden zu tun.',
    'about.values.description': 'Unsere Werte leiten alles, was wir tun, von der Art und Weise, wie wir mit Kunden interagieren, bis hin zur Herangehensweise an Entwicklungsherausforderungen.',
    'about.values.fairness.title': 'Fairness',
    'about.values.empathy.title': 'Empathie',
    'about.values.ethics.title': 'Ethik',
    'about.values.trust.title': 'Vertrauen',
    'about.approach.title': 'Unser Ansatz',
    'about.approach.description': 'Wir glauben, dass erfolgreiche Softwareprojekte mit dem Verständnis der tatsächlichen Bedürfnisse und Ziele unserer Kunden beginnen. Unser Ansatz konzentriert sich auf diese Schlüsselprinzipien:',
    'about.approach.listen.title': 'Zuerst zuhören',
    'about.approach.listen.description': 'Wir nehmen uns die Zeit, Ihre Geschäftsziele wirklich zu verstehen, bevor wir Lösungen vorschlagen.',
    'about.approach.rightsized.title': 'Passgenaue Lösungen',
    'about.approach.rightsized.description': 'Wir implementieren die am besten geeignete Lösung, nicht unbedingt die komplexeste oder teuerste.',
    'about.approach.transparent.title': 'Transparente Kommunikation',
    'about.approach.transparent.description': 'Wir pflegen eine klare und ehrliche Kommunikation während des gesamten Projektlebenszyklus.',
    'about.approach.longterm.title': 'Langfristige Partnerschaft',
    'about.approach.longterm.description': 'Wir streben danach, ein vertrauenswürdiger Partner auf Ihrer digitalen Reise zu sein, nicht nur ein Dienstleister.',
    'about.qualities.innovative': 'Innovativ',
    'about.qualities.practical': 'Praktisch',
    'about.qualities.collaborative': 'Kollaborativ',
    'about.qualities.efficient': 'Effizient',
    'about.impact.title': 'Unsere Wirkung',
    'about.impact.description': 'Unsere Hingabe an Qualität und Kundenzufriedenheit hat uns geholfen, beeindruckende Ergebnisse zu erzielen',
    'about.expertise.title': 'Unsere Expertise',
    'about.expertise.description': 'Wir bringen ein vielfältiges Spektrum an technischen Fähigkeiten und Fachwissen mit, um Ihre komplexesten Herausforderungen zu lösen.',
    'about.cta.title': 'Bereit mit uns zu arbeiten?',
    'about.cta.description': 'Vereinbaren Sie eine Beratung mit unserem Team, um Ihre spezifischen Projektanforderungen zu besprechen.',
    
    // Contact
    'contact.title': 'Kontakt aufnehmen',
    'contact.subtitle': 'Bereit zu besprechen, wie wir Ihrem Unternehmen helfen können? Vereinbaren Sie eine Beratung mit unserem Team.',
    'contact.booking': 'Beratungstermin buchen',
    'contact.form.name': 'Ihr Name',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.phone': 'Telefonnummer',
    'contact.form.message': 'Ihre Nachricht',
    'contact.form.submit': 'Nachricht senden',
    
    // FAQ
    'faq.title': 'Häufig gestellte Fragen',
    'faq.subtitle': 'Finden Sie Antworten auf häufig gestellte Fragen zu unseren Dienstleistungen und Prozessen',
    'faq.cta.title': 'Noch Fragen?',
    'faq.cta.subtitle': 'Kontaktieren Sie uns für eine kostenlose Beratung, um Ihre spezifischen Bedürfnisse zu besprechen',
    'faq.process.question': 'Wie ist Ihr Entwicklungsprozess?',
    'faq.process.answer': 'Unser Entwicklungsprozess beginnt mit einer gründlichen Entdeckungsphase, um Ihre Bedürfnisse zu verstehen, gefolgt von Design, Entwicklung, Tests, Bereitstellung und laufendem Support. Wir halten Sie bei jedem Schritt mit regelmäßigen Updates und Demos auf dem Laufenden.',
    'faq.pricing.question': 'Wie bestimmen Sie die Preise für Projekte?',
    'faq.pricing.answer': 'Unsere Preisgestaltung basiert auf dem Umfang und der Komplexität Ihres Projekts. Wir liefern detaillierte Schätzungen nach der ersten Beratung und Entdeckungsphase. Wir bieten sowohl Festpreis- als auch Zeit-und-Material-Preismodelle an, je nach Ihren Bedürfnissen.',
    'faq.timeline.question': 'Wie lange dauert ein typisches Projekt?',
    'faq.timeline.answer': 'Projektzeitpläne variieren stark je nach Umfang und Komplexität. Einfache Automatisierungsprojekte können 2-4 Wochen dauern, während komplexere individuelle Software 3-6 Monate dauern kann. Wir stellen detaillierte Zeitpläne während der Entdeckungsphase bereit.',
    'faq.technologies.question': 'Mit welchen Technologien und Plattformen arbeiten Sie?',
    'faq.technologies.answer': 'Wir arbeiten mit einer breiten Palette von Technologien wie Java, Python, JavaScript, React, Angular, Node.js, .NET und mehr. Wir haben auch Erfahrung mit Cloud-Plattformen wie AWS, Azure und Google Cloud sowie Automatisierungstools wie Power Automate und Zapier.',
    'faq.maintenance.question': 'Bieten Sie laufende Wartung und Support an?',
    'faq.maintenance.answer': 'Ja, wir bieten laufende Wartungs- und Supportdienste an, um sicherzustellen, dass Ihre Software weiterhin optimal funktioniert. Wir können verschiedene Supportlevel basierend auf Ihren Bedürfnissen anbieten, von grundlegenden Fehlerbehebungen bis hin zu umfassendem 24/7-Support.',
    'faq.ownership.question': 'Wer besitzt die geistigen Eigentumsrechte der entwickelten Software?',
    'faq.ownership.answer': 'Sie. Sobald das Projekt abgeschlossen und bezahlt ist, besitzen Sie alle geistigen Eigentumsrechte an der für Sie entwickelten benutzerdefinierten Software.',
    'faq.communication.question': 'Wie handhaben Sie die Kommunikation während der Projekte?',
    'faq.communication.answer': 'Wir pflegen regelmäßige Kommunikation über Ihre bevorzugten Kanäle (E-Mail, Telefon, Videoanrufe oder Projektmanagement-Tools). Wir liefern wöchentliche Fortschrittsupdates und planen regelmäßige Demo-Sitzungen, um Ihnen das sich entwickelnde Produkt zu zeigen.',
    
    // Footer
    'footer.copyright': '© 2024 Cybethics. Alle Rechte vorbehalten.',
    
    // Stats
    'stats.successfulProjects': 'Erfolgreiche Projekte',
    'stats.yearsSoftwareExperience': 'Jahre Erfahrung',
    'stats.priceworthyImprovements': 'Preiswerte Verbesserungen',
    'stats.possibilities': 'Endlose Möglichkeiten',
    
    // NotFound page
    'notFound.title': 'Seite nicht gefunden',
    'notFound.description': 'Die gesuchte Seite wurde möglicherweise entfernt, umbenannt oder ist vorübergehend nicht verfügbar.',
    'notFound.returnHome': 'Zurück zur Startseite',
    
    // Client names
    'client.enterprise': 'Enterprise GmbH',
    'client.startup': 'Tech Startup',
    'client.retail': 'Einzelhandelskette',
    'client.manufacturing': 'Fertigungsunternehmen',
    'client.healthcare': 'Gesundheitsdienstleister',
    'client.financial': 'Finanzdienstleister',
    'client.logistics': 'Logistikunternehmen',
    'client.government': 'Regierungsbehörde',
    'client.education': 'Bildungseinrichtung',
    'client.nonprofit': 'Gemeinnützige Organisation',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
