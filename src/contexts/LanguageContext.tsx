
import React, { createContext, useContext, useState, useCallback } from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

interface TranslationContextProps {
  language: string;
  t: (key: string, options?: any) => string | object;
  setLanguage: (lang: string) => void;
}

const TranslationContext = createContext<TranslationContextProps>({
  language: 'en',
  t: (key: string) => key,
  setLanguage: () => {},
});

interface LanguageProviderProps {
  children: React.ReactNode;
}

const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      faq: "FAQ"
    },
    hero: {
      title: "Ethical solutions for the digital age",
      subtitle: "We help businesses thrive by building custom software solutions, automating processes, and providing expert IT consulting.",
      cta: "Learn more"
    },
    services: {
      title: "Our Services",
      subtitle: "We offer a wide range of services to help businesses of all sizes succeed.",
      software: {
        title: "Custom Software Development",
        description: "We design, develop, and maintain custom software solutions tailored to your specific needs.",
        benefit1: "Bespoke solutions tailored to your unique requirements",
        benefit2: "Scalable and flexible architecture",
        benefit3: "Improved efficiency and productivity",
        benefit4: "Competitive advantage through innovation",
        process1: {
          title: "Requirements Gathering",
          description: "We work closely with you to understand your business needs and define the project scope."
        },
        process2: {
          title: "Design and Development",
          description: "Our team of experienced developers will create a custom software solution that meets your specific requirements."
        },
        process3: {
          title: "Testing and Quality Assurance",
          description: "We thoroughly test our software to ensure it is bug-free and meets your expectations."
        },
        process4: {
          title: "Deployment and Maintenance",
          description: "We deploy and maintain your software to ensure it is always up-to-date and running smoothly."
        }
      },
      automation: {
        title: "Business Process Automation",
        description: "We automate repetitive tasks and workflows to improve efficiency and reduce costs.",
        benefit1: "Increased efficiency and productivity",
        benefit2: "Reduced costs and errors",
        benefit3: "Improved compliance and security",
        benefit4: "Better customer experience",
        process1: {
          title: "Process Analysis",
          description: "We analyze your business processes to identify areas for automation."
        },
        process2: {
          title: "Solution Design",
          description: "We design an automation solution that meets your specific needs."
        },
        process3: {
          title: "Implementation and Testing",
          description: "We implement and test the automation solution to ensure it is working properly."
        },
        process4: {
          title: "Monitoring and Maintenance",
          description: "We monitor and maintain the automation solution to ensure it is always running smoothly."
        }
      },
      scripting: {
        title: "Scripting and DevOps",
        description: "We automate tasks and workflows to improve efficiency and reduce costs.",
        benefit1: "Increased efficiency and productivity",
        benefit2: "Reduced costs and errors",
        benefit3: "Improved compliance and security",
        benefit4: "Better customer experience"
      },
      cicd: {
        title: "CI/CD Pipelines",
        description: "We automate the software delivery process to improve speed and quality.",
        benefit1: "Faster time to market",
        benefit2: "Improved software quality",
        benefit3: "Reduced risk",
        benefit4: "Increased efficiency"
      },
      api: {
        title: "API Development",
        description: "We design, develop, and maintain APIs to connect your systems and data.",
        benefit1: "Improved data sharing",
        benefit2: "Increased efficiency",
        benefit3: "New revenue streams",
        benefit4: "Better customer experience"
      },
      offshoring: {
        title: "IT Support & Offshoring",
        description: "We provide expert IT support and offshoring services to help you focus on your core business.",
        benefit1: "Reduced costs",
        benefit2: "Access to a global talent pool",
        benefit3: "24/7 support",
        benefit4: "Improved efficiency"
      },
      more: "Explore more",
      process: {
        title: "Our Development Process",
        subtitle: "We follow a proven development process to ensure the success of your project."
      },
      detailTitle: "Comprehensive Services",
      detailSubtitle: "End-to-End Solutions for Your Business Needs",
      detailDescription: "Explore our detailed service offerings designed to address every aspect of your business technology requirements.",
      benefits: "Key Benefits",
      technologies: "Technologies",
      whyChooseUs: "Why Choose Us?",
      whyChooseUsDescription: "We are committed to providing our clients with the highest quality services and support.",
      getStarted: "Get Started",
      implementationProcess: "Implementation Process",
      hero: {
        title: "Empowering Your Business with Innovative Solutions",
        subtitle: "Discover how our tailored services can drive efficiency, growth, and success for your organization."
      },
      cta: {
        title: "Ready to Transform Your Business?",
        subtitle: "Contact us today to learn more about how we can help you achieve your goals.",
        start: "Get Started Now"
      }
    },
    projects: {
      title: "Our Projects",
      subtitle: "We have a proven track record of success in delivering high-quality software solutions.",
      viewall: "View All Projects",
      request: "Request a Similar Project"
    },
    about: {
      title: "About Us",
      intro: "We are a team of experienced software developers and IT consultants dedicated to helping businesses succeed.",
      values: {
        title: "Our Values",
        fairness: "Fairness in all our dealings",
        empathy: "Empathy for our clients and their needs",
        ethics: "Ethical business practices",
        trust: "Trust in our relationships"
      }
    },
    contact: {
      title: "Contact Us",
      subtitle: "We'd love to hear from you! Contact us today to learn more about our services.",
      booking: "Book a free consultation",
      partner: "Your Contact Partner"
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Here are some of the most frequently asked questions about our services."
    },
    stats: {
      successfulProjects: "Successful Projects",
      yearsSoftwareExperience: "Years of Software Experience",
      priceworthyImprovements: "Price-worthy Improvements",
      possibilities: "Possibilities"
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
      returnHome: "Return to Home"
    },
    business: {
      questions: {
        title: "Is this you?",
        subtitle: "Answer these questions to identify challenges in your business"
      },
      challenge: {
        email: {
          title: "You're drowning in email threads and spreadsheets",
          description: "Keeping track of projects, approvals, and updates through emails and shared documents leads to confusion, version control issues, and missed deadlines."
        },
        data: {
          title: "Your team wastes hours copying and pasting data",
          description: "Manual data transfers between different systems or documents create inefficiencies, introduce errors, and prevent your team from focusing on strategic tasks."
        },
        copy: {
          title: "Your data is separated across different tools",
          description: "Information stored in multiple disconnected applications makes it difficult to get a complete picture, leading to inefficiencies and poor decision-making."
        },
        gut: {
          title: "You're making business decisions based on gut feeling",
          description: "Without real-time data and analytics, you're forced to rely on outdated reports or assumptions, leading to missed opportunities and costly mistakes."
        },
        admin: {
          title: "Your employees spend more time on admin work than actual work",
          description: "Manually filling out forms, generating reports, and organizing files takes away time from innovation, problem-solving, and customer service."
        },
        systems: {
          title: "Your systems don't talk to each other, causing double work",
          description: "Disconnected software forces employees to re-enter the same data multiple times, leading to inconsistencies, errors, and inefficiencies."
        },
        excel: {
          title: "You're pushing Excel beyond its limits and it's costing you",
          description: "Using Excel as a database, workflow manager, or reporting tool creates versioning issues, manual errors, lack of collaboration, and security risks."
        }
      }
    },
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Dienstleistungen",
      projects: "Projekte",
      about: "Über uns",
      contact: "Kontakt",
      faq: "FAQ"
    },
    hero: {
      title: "Ethische Lösungen für das digitale Zeitalter",
      subtitle: "Wir helfen Unternehmen, erfolgreich zu sein, indem wir maßgeschneiderte Softwarelösungen entwickeln, Prozesse automatisieren und kompetente IT-Beratung anbieten.",
      cta: "Mehr erfahren"
    },
    services: {
      title: "Unsere Dienstleistungen",
      subtitle: "Wir bieten eine breite Palette von Dienstleistungen an, um Unternehmen jeder Größe zum Erfolg zu verhelfen.",
      software: {
        title: "Individuelle Softwareentwicklung",
        description: "Wir entwerfen, entwickeln und pflegen individuelle Softwarelösungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind.",
        benefit1: "Maßgeschneiderte Lösungen für Ihre individuellen Anforderungen",
        benefit2: "Skalierbare und flexible Architektur",
        benefit3: "Verbesserte Effizienz und Produktivität",
        benefit4: "Wettbewerbsvorteil durch Innovation",
        process1: {
          title: "Anforderungserfassung",
          description: "Wir arbeiten eng mit Ihnen zusammen, um Ihre Geschäftsanforderungen zu verstehen und den Projektumfang zu definieren."
        },
        process2: {
          title: "Design und Entwicklung",
          description: "Unser Team aus erfahrenen Entwicklern erstellt eine individuelle Softwarelösung, die Ihren spezifischen Anforderungen entspricht."
        },
        process3: {
          title: "Testen und Qualitätssicherung",
          description: "Wir testen unsere Software gründlich, um sicherzustellen, dass sie fehlerfrei ist und Ihren Erwartungen entspricht."
        },
        process4: {
          title: "Bereitstellung und Wartung",
          description: "Wir stellen Ihre Software bereit und warten sie, um sicherzustellen, dass sie immer auf dem neuesten Stand ist und reibungslos läuft."
        }
      },
      automation: {
        title: "Automatisierung von Geschäftsprozessen",
        description: "Wir automatisieren sich wiederholende Aufgaben und Arbeitsabläufe, um die Effizienz zu verbessern und Kosten zu senken.",
        benefit1: "Erhöhte Effizienz und Produktivität",
        benefit2: "Reduzierte Kosten und Fehler",
        benefit3: "Verbesserte Compliance und Sicherheit",
        benefit4: "Bessere Kundenerfahrung",
        process1: {
          title: "Prozessanalyse",
          description: "Wir analysieren Ihre Geschäftsprozesse, um Bereiche für die Automatisierung zu identifizieren."
        },
        process2: {
          title: "Lösungsdesign",
          description: "Wir entwerfen eine Automatisierungslösung, die Ihren spezifischen Bedürfnissen entspricht."
        },
        process3: {
          title: "Implementierung und Tests",
          description: "Wir implementieren und testen die Automatisierungslösung, um sicherzustellen, dass sie ordnungsgemäß funktioniert."
        },
        process4: {
          title: "Überwachung und Wartung",
          description: "Wir überwachen und warten die Automatisierungslösung, um sicherzustellen, dass sie immer reibungslos läuft."
        }
      },
      scripting: {
        title: "Skripting und DevOps",
        description: "Wir automatisieren Aufgaben und Arbeitsabläufe, um die Effizienz zu verbessern und Kosten zu senken.",
        benefit1: "Erhöhte Effizienz und Produktivität",
        benefit2: "Reduzierte Kosten und Fehler",
        benefit3: "Verbesserte Compliance und Sicherheit",
        benefit4: "Bessere Kundenerfahrung"
      },
      cicd: {
        title: "CI/CD-Pipelines",
        description: "Wir automatisieren den Softwarebereitstellungsprozess, um Geschwindigkeit und Qualität zu verbessern.",
        benefit1: "Schnellere Markteinführungszeit",
        benefit2: "Verbesserte Softwarequalität",
        benefit3: "Reduziertes Risiko",
        benefit4: "Erhöhte Effizienz"
      },
      api: {
        title: "API-Entwicklung",
        description: "Wir entwerfen, entwickeln und pflegen APIs, um Ihre Systeme und Daten zu verbinden.",
        benefit1: "Verbesserte Datenfreigabe",
        benefit2: "Erhöhte Effizienz",
        benefit3: "Neue Einnahmequellen",
        benefit4: "Bessere Kundenerfahrung"
      },
      offshoring: {
        title: "IT-Support & Offshoring",
        description: "Wir bieten kompetenten IT-Support und Offshoring-Services, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
        benefit1: "Reduzierte Kosten",
        benefit2: "Zugang zu einem globalen Talentpool",
        benefit3: "24/7-Support",
        benefit4: "Erhöhte Effizienz"
      },
      more: "Mehr entdecken",
      process: {
        title: "Unser Entwicklungsprozess",
        subtitle: "Wir folgen einem bewährten Entwicklungsprozess, um den Erfolg Ihres Projekts sicherzustellen."
      },
      detailTitle: "Umfassende Dienstleistungen",
      detailSubtitle: "End-to-End-Lösungen für Ihre Geschäftsanforderungen",
      detailDescription: "Entdecken Sie unsere detaillierten Serviceangebote, die entwickelt wurden, um jeden Aspekt Ihrer geschäftlichen Technologieanforderungen zu erfüllen.",
      benefits: "Hauptvorteile",
      technologies: "Technologien",
      whyChooseUs: "Warum uns wählen?",
      whyChooseUsDescription: "Wir sind bestrebt, unseren Kunden die hochwertigsten Dienstleistungen und Support zu bieten.",
      getStarted: "Loslegen",
      implementationProcess: "Implementierungsprozess",
      hero: {
        title: "Stärken Sie Ihr Geschäft mit innovativen Lösungen",
        subtitle: "Entdecken Sie, wie unsere maßgeschneiderten Dienstleistungen die Effizienz, das Wachstum und den Erfolg Ihres Unternehmens fördern können."
      },
      cta: {
        title: "Bereit, Ihr Geschäft zu transformieren?",
        subtitle: "Kontaktieren Sie uns noch heute, um mehr darüber zu erfahren, wie wir Ihnen helfen können, Ihre Ziele zu erreichen.",
        start: "Jetzt loslegen"
      }
    },
    projects: {
      title: "Unsere Projekte",
      subtitle: "Wir haben eine nachgewiesene Erfolgsbilanz bei der Bereitstellung hochwertiger Softwarelösungen.",
      viewall: "Alle Projekte ansehen",
      request: "Ein ähnliches Projekt anfordern"
    },
    about: {
      title: "Über uns",
      intro: "Wir sind ein Team aus erfahrenen Softwareentwicklern und IT-Beratern, die sich der Unterstützung von Unternehmen zum Erfolg verschrieben haben.",
      values: {
        title: "Unsere Werte",
        fairness: "Fairness in all unseren Geschäften",
        empathy: "Empathie für unsere Kunden und ihre Bedürfnisse",
        ethics: "Ethische Geschäftspraktiken",
        trust: "Vertrauen in unsere Beziehungen"
      }
    },
    contact: {
      title: "Kontaktieren Sie uns",
      subtitle: "Wir würden uns freuen, von Ihnen zu hören! Kontaktieren Sie uns noch heute, um mehr über unsere Dienstleistungen zu erfahren.",
      booking: "Buchen Sie eine kostenlose Beratung",
      partner: "Ihr Ansprechpartner"
    },
    faq: {
      title: "Häufig gestellte Fragen",
      subtitle: "Hier sind einige der am häufigsten gestellten Fragen zu unseren Dienstleistungen."
    },
    stats: {
      successfulProjects: "Erfolgreiche Projekte",
      yearsSoftwareExperience: "Jahre Software-Erfahrung",
      priceworthyImprovements: "Preiswerte Verbesserungen",
      possibilities: "Möglichkeiten"
    },
    notFound: {
      title: "Seite nicht gefunden",
      description: "Die gesuchte Seite wurde möglicherweise entfernt, umbenannt oder ist vorübergehend nicht verfügbar.",
      returnHome: "Zurück zur Startseite"
    },
    business: {
      questions: {
        title: "Sind Sie das?",
        subtitle: "Beantworten Sie diese Fragen, um Herausforderungen in Ihrem Unternehmen zu identifizieren"
      },
      challenge: {
        email: {
          title: "Sie ertrinken in E-Mail-Threads und Tabellenkalkulationen",
          description: "Die Verfolgung von Projekten, Genehmigungen und Updates über E-Mails und gemeinsam genutzte Dokumente führt zu Verwirrung, Versionskontrollproblemen und verpassten Fristen."
        },
        data: {
          title: "Ihr Team verschwendet Stunden mit dem Kopieren und Einfügen von Daten",
          description: "Manuelle Datenübertragungen zwischen verschiedenen Systemen oder Dokumenten schaffen Ineffizienzen, führen zu Fehlern und hindern Ihr Team daran, sich auf strategische Aufgaben zu konzentrieren."
        },
        copy: {
          title: "Ihre Daten sind auf verschiedene Tools verteilt",
          description: "In mehreren nicht verbundenen Anwendungen gespeicherte Informationen erschweren es, ein vollständiges Bild zu erhalten, was zu Ineffizienzen und schlechten Entscheidungen führt."
        },
        gut: {
          title: "Sie treffen Geschäftsentscheidungen aus dem Bauch heraus",
          description: "Ohne Echtzeitdaten und -analysen sind Sie gezwungen, sich auf veraltete Berichte oder Annahmen zu verlassen, was zu verpassten Chancen und kostspieligen Fehlern führt."
        },
        admin: {
          title: "Ihre Mitarbeiter verbringen mehr Zeit mit Verwaltungsarbeit als mit eigentlicher Arbeit",
          description: "Das manuelle Ausfüllen von Formularen, Erstellen von Berichten und Organisieren von Dateien nimmt Zeit für Innovation, Problemlösung und Kundenservice weg."
        },
        systems: {
          title: "Ihre Systeme kommunizieren nicht miteinander, was zu Doppelarbeit führt",
          description: "Nicht verbundene Software zwingt Mitarbeiter, dieselben Daten mehrfach einzugeben, was zu Inkonsistenzen, Fehlern und Ineffizienzen führt."
        },
        excel: {
          title: "Sie bringen Excel an seine Grenzen und das kostet Sie",
          description: "Die Verwendung von Excel als Datenbank, Workflow-Manager oder Reporting-Tool schafft Versionierungsprobleme, manuelle Fehler, mangelnde Zusammenarbeit und Sicherheitsrisiken."
        }
      }
    },
  }
};

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translations.en },
      de: { translation: translations.de },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>(i18next.language);

  const changeLanguage = useCallback((lang: string) => {
    i18next.changeLanguage(lang).then(() => {
      setLanguage(lang);
    });
  }, []);

  const t = useCallback((key: string, options?: any) => {
    return i18next.t(key, options);
  }, []);

  return (
    <TranslationContext.Provider value={{ language, t, setLanguage: changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

const useLanguage = (): TranslationContextProps => {
  return useContext(TranslationContext);
};

export { LanguageProvider, useLanguage };
