
import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';
import i18n from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';

// Define language options
export type LanguageOption = 'en' | 'de';

// Initialize i18n with both languages
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          common: {
            loading: 'Loading...',
          },
          hero: {
            title: 'We build digital solutions with ethics in mind',
            subtitle: 'Custom software development, automation, and system integration for a sustainable future.',
            contactButton: 'Get in Touch',
            servicesButton: 'Our Services',
          },
          services: {
            title: 'Our Services',
            subtitle: 'We offer a range of services to help you achieve your business goals.',
            customSoftware: {
              title: 'Custom Software Development',
              description: 'Tailored software solutions to meet your unique business needs.',
            },
            automation: {
              title: 'Automation Solutions',
              description: 'Automate repetitive tasks and streamline your workflows.',
            },
            systemIntegration: {
              title: 'System Integration',
              description: 'Connect your systems and data for seamless operations.',
            },
            consulting: {
              title: 'IT Consulting',
              description: 'Expert advice and guidance to optimize your technology strategy.',
            },
            more: 'Learn More',
          },
          projects: {
            title: 'Our Projects',
            subtitle: 'Explore our recent projects and see how we\'ve helped our clients.',
            viewProject: 'View Project',
          },
          contact: {
            title: 'Contact Us',
            subtitle: 'Get in touch to discuss your project and how we can help.',
            booking: 'Book a Consultation',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Message',
            success: 'Message sent successfully!',
            error: 'Failed to send message. Please try again later.',
          },
          footer: {
            copyright: '© 2024 Cybethics. All rights reserved.',
            privacyPolicy: 'Privacy Policy',
            termsOfService: 'Terms of Service',
          },
          navbar: {
            home: 'Home',
            services: 'Services',
            projects: 'Projects',
            about: 'About',
            contact: 'Contact',
            faq: 'FAQ',
          },
          
          // About us page
          about: {
            title: 'About Us',
            intro: 'Cybethics was founded with a mission to deliver digital solutions that not only meet business needs but also uphold the highest ethical standards. Our team combines technical expertise with a deep commitment to fairness, transparency, and responsible innovation.',
            swiss: 'Swiss Quality',
            story: {
              title: 'Our Story',
              description: 'Cybethics was born from the vision of creating a technology company that places ethics at the core of its operations. We recognized that as technology becomes increasingly integrated into every aspect of business and life, the ethical implications of digital solutions grow in importance. Our founders, with backgrounds in both technology and ethics, set out to build a company that demonstrates how ethical principles and business success can work hand in hand.',
              cyber: {
                title: 'Cyber',
                description: 'We leverage cutting-edge technology to create powerful digital solutions for modern businesses.'
              },
              ethics: {
                title: 'Ethics',
                description: 'We integrate ethical principles into every step of our development process and business operations.'
              }
            },
            values: {
              title: 'Our Values',
              description: 'These core values guide every decision we make and every solution we create.',
              fairnessTitle: 'Fairness',
              fairness: 'We ensure our solutions are inclusive, accessible, and provide equal value to all stakeholders.',
              empathyTitle: 'Empathy',
              empathy: 'We approach challenges with a deep understanding of user needs and business contexts.',
              ethicsTitle: 'Integrity',
              ethics: 'We maintain the highest ethical standards in our business practices and technology solutions.',
              trustTitle: 'Transparency',
              trust: 'We operate with openness and clarity in our communications, processes, and pricing.'
            },
            approach: {
              title: 'Our Approach',
              description: 'We believe that successful technology solutions require more than just technical excellence - they need a thoughtful, human-centered approach.',
              listenFirst: {
                title: 'Listen First',
                description: 'We begin by deeply understanding your business context, challenges, and goals before proposing solutions.'
              },
              rightSized: {
                title: 'Right-Sized Solutions',
                description: 'We create solutions that match your specific needs, avoiding unnecessary complexity or over-engineering.'
              },
              transparent: {
                title: 'Transparent Process',
                description: 'We keep you informed at every stage with clear communication about progress, challenges, and decisions.'
              },
              longTerm: {
                title: 'Long-Term Partnership',
                description: 'We aim to build lasting relationships based on trust, mutual success, and continuous improvement.'
              },
              innovative: 'Innovative',
              practical: 'Practical',
              collaborative: 'Collaborative',
              efficient: 'Efficient'
            },
            impact: {
              title: 'Our Impact',
              description: 'We measure our success by the positive difference we make for our clients and their stakeholders.'
            },
            expertise: {
              title: 'Our Technical Expertise',
              description: 'We combine deep technical knowledge with industry best practices to deliver exceptional solutions.'
            },
            cta: {
              title: 'Ready to work with us?',
              description: 'Schedule a consultation to discuss your project and explore how we can help you achieve your goals.'
            }
          },
          
          // FAQ page
          faq: {
            title: 'Frequently Asked Questions',
            subtitle: 'Find answers to common questions about our services and process.',
            categories: {
              all: 'All Questions',
              process: 'Process',
              pricing: 'Pricing',
              technical: 'Technical',
              support: 'Support',
            },
            process: {
              question: 'What is your development process like?',
              answer: 'Our development process typically includes discovery, planning, development, testing, deployment, and ongoing support phases. We work collaboratively with clients throughout each stage, ensuring transparency and alignment with business goals. We use agile methodologies to adapt quickly to changing requirements and deliver incremental value.',
            },
            pricing: {
              question: 'How do you structure your pricing?',
              answer: 'We offer flexible pricing models including project-based fixed quotes, hourly rates, and retainer arrangements. After understanding your requirements during initial consultations, we provide transparent pricing proposals with no hidden costs. We tailor our approach to fit your budget constraints while ensuring quality outcomes.',
            },
            timeline: {
              question: 'How long does a typical project take?',
              answer: 'Project timelines vary based on scope, complexity, and requirements. Small projects might take 4-6 weeks, while more complex ones could span several months. During our discovery phase, we\'ll provide a detailed timeline with milestones. We emphasize realistic estimates and maintain transparent communication about progress and any adjustments needed.',
            },
            technologies: {
              question: 'What technologies do you work with?',
              answer: 'We work with a wide range of modern technologies including JavaScript frameworks (React, Angular, Vue), backend technologies (Node.js, Spring Boot, .NET), database systems (SQL and NoSQL), cloud platforms (AWS, Azure, GCP), and automation tools (Power Automate, Zapier). We select technologies based on project needs rather than personal preferences.',
            },
            maintenance: {
              question: 'Do you offer maintenance and support?',
              answer: 'Yes, we provide ongoing maintenance and support options for all our solutions. These can include regular updates, security patches, performance optimization, bug fixes, and feature enhancements. We offer flexible support packages with defined SLAs to ensure your systems remain secure, efficient, and aligned with evolving business needs.',
            },
            ownership: {
              question: 'Who owns the intellectual property rights to the developed software?',
              answer: 'Upon full payment, you (the client) own the intellectual property rights to the custom code developed specifically for your project. We may use certain proprietary frameworks or tools that remain our property, but these are licensed to you for unlimited use within your solution. This approach is clearly documented in our contracts.',
            },
            communication: {
              question: 'How do you handle project communication?',
              answer: 'We establish clear communication channels from project start, including regular status meetings, progress reports, and access to project management tools. You\'ll have a dedicated project manager as your primary point of contact. We emphasize proactive communication, particularly around timeline changes or challenges, ensuring you\'re never left in the dark.',
            },
            solutions: {
              title: 'Common Business Problems Solved',
              description: 'Explore how our solutions address specific business challenges across different contexts.',
              viewDetails: 'View Detailed Solution',
              commonProblems: 'Common Problems',
              ourSolution: 'Our Solution',
              keyBenefits: 'Key Benefits',
              spreadsheet: {
                title: 'From Spreadsheets to Systems',
                problems: {
                  1: 'Inconsistent data entry and formula errors',
                  2: 'Limited access control and security',
                  3: 'Difficulty managing multiple users or versions',
                  4: 'Performance issues with large datasets',
                  5: 'Limited reporting and analytics capabilities'
                },
                solution: 'We transform spreadsheet-based processes into robust, custom web applications that maintain the familiar workflow while adding security, scalability, and advanced features. Our solutions include proper database design, user authentication, role-based permissions, audit trails, and reporting dashboards.',
                benefits: {
                  1: 'Elimination of data inconsistencies and formula errors',
                  2: 'Enhanced security with proper access controls',
                  3: 'Support for concurrent users and data integrity',
                  4: 'Improved performance with large datasets',
                  5: 'Advanced reporting and visualization capabilities'
                }
              },
              automation: {
                title: 'Workflow Automation',
                problems: {
                  1: 'Time-consuming manual processes',
                  2: 'Error-prone repetitive tasks',
                  3: 'Inefficient resource allocation',
                  4: 'Lack of process standardization',
                  5: 'Delays in business operations'
                },
                solution: 'We implement automation solutions that streamline repetitive tasks, standardize processes, and reduce manual effort. Using tools like Power Automate, Zapier, or custom-developed automation scripts, we create workflows that trigger actions based on specific events, route approvals, process data, and generate notifications.',
                benefits: {
                  1: 'Significant time savings on routine tasks',
                  2: 'Reduced errors in business processes',
                  3: 'Better resource allocation for higher-value work',
                  4: 'Consistent process execution every time',
                  5: 'Faster completion of business operations'
                }
              },
              legacy: {
                title: 'Legacy System Modernization',
                problems: {
                  1: 'Outdated technology that\'s difficult to maintain',
                  2: 'Limited compatibility with modern systems',
                  3: 'Security vulnerabilities in older platforms',
                  4: 'Difficulty finding developers for legacy technologies',
                  5: 'Inability to support new business requirements'
                },
                solution: 'We modernize legacy systems through careful assessment, strategic planning, and phased implementation. Our approach may include refactoring code, rebuilding components with modern technologies, creating API layers, migrating data, and establishing integration patterns that preserve essential functionality while enabling new capabilities.',
                benefits: {
                  1: 'Improved maintainability and reduced technical debt',
                  2: 'Enhanced integration with modern systems and services',
                  3: 'Better security and compliance with current standards',
                  4: 'Access to larger talent pool for ongoing development',
                  5: 'Platform that supports innovation and new features'
                }
              },
              integration: {
                title: 'System Integration',
                problems: {
                  1: 'Disconnected systems requiring manual data transfer',
                  2: 'Data inconsistencies across different applications',
                  3: 'Inefficient processes spanning multiple systems',
                  4: 'Limited visibility across business operations',
                  5: 'Difficulty implementing end-to-end workflows'
                },
                solution: 'We create seamless integrations between your business systems using API development, middleware solutions, and ETL processes. Our integration strategies focus on real-time or scheduled data synchronization, consistent data transformations, error handling, and monitoring to ensure systems work together reliably.',
                benefits: {
                  1: 'Elimination of manual data entry across systems',
                  2: 'Consistent, reliable data across all platforms',
                  3: 'Streamlined processes that span multiple systems',
                  4: 'Comprehensive visibility into business operations',
                  5: 'Efficient end-to-end workflows across applications'
                }
              },
              workflow: {
                title: 'Collaborative Workspaces',
                problems: {
                  1: 'Information silos between departments',
                  2: 'Inefficient team collaboration processes',
                  3: 'Challenges with remote or distributed teams',
                  4: 'Inconsistent project management practices',
                  5: 'Difficulty tracking team productivity and progress'
                },
                solution: 'We build collaborative digital workspaces that centralize communication, document sharing, task management, and reporting. Our solutions incorporate role-based access, notification systems, document versioning, task assignments, progress tracking, and integrations with existing tools to create unified team environments.',
                benefits: {
                  1: 'Breaking down of information silos between teams',
                  2: 'More efficient collaboration and knowledge sharing',
                  3: 'Effective support for remote and hybrid work models',
                  4: 'Standardized project management across the organization',
                  5: 'Better visibility into team productivity and bottlenecks'
                }
              },
              datadriven: {
                title: 'Data-Driven Decision Making',
                problems: {
                  1: 'Difficulty accessing relevant business data',
                  2: 'Time-consuming manual reporting processes',
                  3: 'Inability to analyze trends and patterns',
                  4: 'Decisions based on intuition rather than data',
                  5: 'Lack of real-time insights into business performance'
                },
                solution: 'We implement business intelligence solutions that transform raw data into actionable insights. Our approach includes data warehouse design, ETL processes, interactive dashboards, automated reporting, and predictive analytics tools that make data accessible and meaningful to decision-makers at all levels.',
                benefits: {
                  1: 'Easy access to relevant business data for all stakeholders',
                  2: 'Automated generation of reports and dashboards',
                  3: 'Advanced analytics to identify trends and opportunities',
                  4: 'More confident, data-backed decision making',
                  5: 'Real-time visibility into key performance indicators'
                }
              },
              database: {
                title: 'Database Design & Optimization',
                problems: {
                  1: 'Poor database performance affecting operations',
                  2: 'Data integrity and quality issues',
                  3: 'Difficulty scaling with growing data volumes',
                  4: 'Complex queries requiring specialized expertise',
                  5: 'Inadequate data security and access controls'
                },
                solution: 'We design, optimize, and manage database systems that provide the foundation for reliable applications and analytics. Our services include database architecture, performance tuning, normalization, indexing strategies, security implementation, backup solutions, and migration between database platforms as needs evolve.',
                benefits: {
                  1: 'Significantly improved application performance',
                  2: 'Enhanced data integrity and quality',
                  3: 'Scalable architecture that grows with your business',
                  4: 'Optimized queries and reporting capabilities',
                  5: 'Robust security and compliance with data regulations'
                }
              }
            }
          },
          cta: {
            title: 'Ready to transform your business?',
            subtitle: 'Schedule a consultation with our team to discuss your project.'
          }
        }
      },
      de: {
        translation: {
          common: {
            loading: 'Laden...',
          },
          hero: {
            title: 'Wir entwickeln digitale Lösungen mit ethischen Grundsätzen',
            subtitle: 'Massgeschneiderte Softwareentwicklung, Automatisierung und Systemintegration für eine nachhaltige Zukunft.',
            contactButton: 'Kontaktieren Sie uns',
            servicesButton: 'Unsere Dienstleistungen',
          },
          services: {
            title: 'Unsere Dienstleistungen',
            subtitle: 'Wir bieten eine Reihe von Dienstleistungen an, die Ihnen helfen, Ihre Geschäftsziele zu erreichen.',
            customSoftware: {
              title: 'Massgeschneiderte Softwareentwicklung',
              description: 'Massgeschneiderte Softwarelösungen, die Ihren individuellen Geschäftsanforderungen entsprechen.',
            },
            automation: {
              title: 'Automatisierungslösungen',
              description: 'Automatisieren Sie repetitive Aufgaben und optimieren Sie Ihre Arbeitsabläufe.',
            },
            systemIntegration: {
              title: 'Systemintegration',
              description: 'Verbinden Sie Ihre Systeme und Daten für einen reibungslosen Betrieb.',
            },
            consulting: {
              title: 'IT-Beratung',
              description: 'Expertenrat und -anleitung zur Optimierung Ihrer Technologiestrategie.',
            },
            more: 'Mehr erfahren',
          },
          projects: {
            title: 'Unsere Projekte',
            subtitle: 'Entdecken Sie unsere aktuellen Projekte und sehen Sie, wie wir unseren Kunden geholfen haben.',
            viewProject: 'Projekt ansehen',
          },
          contact: {
            title: 'Kontaktieren Sie uns',
            subtitle: 'Nehmen Sie Kontakt auf, um Ihr Projekt zu besprechen und wie wir Ihnen helfen können.',
            booking: 'Beratung buchen',
            name: 'Name',
            email: 'E-Mail',
            message: 'Nachricht',
            send: 'Nachricht senden',
            success: 'Nachricht erfolgreich gesendet!',
            error: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später noch einmal.',
          },
          footer: {
            copyright: '© 2024 Cybethics. Alle Rechte vorbehalten.',
            privacyPolicy: 'Datenschutzbestimmungen',
            termsOfService: 'Nutzungsbedingungen',
          },
          navbar: {
            home: 'Startseite',
            services: 'Dienstleistungen',
            projects: 'Projekte',
            about: 'Über uns',
            contact: 'Kontakt',
            faq: 'FAQ',
          },
          
          // About us page in German
          about: {
            title: 'Über Uns',
            intro: 'Cybethics wurde mit dem Ziel gegründet, digitale Lösungen zu liefern, die nicht nur Geschäftsanforderungen erfüllen, sondern auch höchste ethische Standards einhalten. Unser Team verbindet technisches Fachwissen mit einem tiefen Engagement für Fairness, Transparenz und verantwortungsvolle Innovation.',
            swiss: 'Schweizer Qualität',
            story: {
              title: 'Unsere Geschichte',
              description: 'Cybethics entstand aus der Vision, ein Technologieunternehmen zu schaffen, das Ethik in den Mittelpunkt seiner Tätigkeit stellt. Wir haben erkannt, dass mit der zunehmenden Integration von Technologie in jeden Aspekt des Geschäfts- und Privatlebens die ethischen Auswirkungen digitaler Lösungen immer wichtiger werden. Unsere Gründer, mit Hintergrund in Technologie und Ethik, machten sich daran, ein Unternehmen aufzubauen, das zeigt, wie ethische Grundsätze und geschäftlicher Erfolg Hand in Hand gehen können.',
              cyber: {
                title: 'Cyber',
                description: 'Wir nutzen modernste Technologie, um leistungsstarke digitale Lösungen für moderne Unternehmen zu schaffen.'
              },
              ethics: {
                title: 'Ethik',
                description: 'Wir integrieren ethische Grundsätze in jeden Schritt unseres Entwicklungsprozesses und unserer Geschäftstätigkeit.'
              }
            },
            values: {
              title: 'Unsere Werte',
              description: 'Diese Grundwerte leiten jede Entscheidung, die wir treffen, und jede Lösung, die wir erstellen.',
              fairnessTitle: 'Fairness',
              fairness: 'Wir stellen sicher, dass unsere Lösungen inklusiv und zugänglich sind und allen Beteiligten gleichen Wert bieten.',
              empathyTitle: 'Empathie',
              empathy: 'Wir gehen mit einem tiefen Verständnis für Benutzerbedürfnisse und Geschäftskontexte an Herausforderungen heran.',
              ethicsTitle: 'Integrität',
              ethics: 'Wir halten in unseren Geschäftspraktiken und Technologielösungen die höchsten ethischen Standards ein.',
              trustTitle: 'Transparenz',
              trust: 'Wir arbeiten mit Offenheit und Klarheit in unserer Kommunikation, unseren Prozessen und unserer Preisgestaltung.'
            },
            approach: {
              title: 'Unser Ansatz',
              description: 'Wir glauben, dass erfolgreiche Technologielösungen mehr als nur technische Exzellenz erfordern - sie benötigen einen durchdachten, menschenzentrierten Ansatz.',
              listenFirst: {
                title: 'Zuerst Zuhören',
                description: 'Wir beginnen damit, Ihren Geschäftskontext, Ihre Herausforderungen und Ziele gründlich zu verstehen, bevor wir Lösungen vorschlagen.'
              },
              rightSized: {
                title: 'Passende Lösungen',
                description: 'Wir erstellen Lösungen, die Ihren spezifischen Anforderungen entsprechen und unnötige Komplexität oder Überentwicklung vermeiden.'
              },
              transparent: {
                title: 'Transparenter Prozess',
                description: 'Wir halten Sie in jeder Phase mit klarer Kommunikation über Fortschritte, Herausforderungen und Entscheidungen auf dem Laufenden.'
              },
              longTerm: {
                title: 'Langfristige Partnerschaft',
                description: 'Wir streben danach, dauerhafte Beziehungen aufzubauen, die auf Vertrauen, gegenseitigem Erfolg und kontinuierlicher Verbesserung basieren.'
              },
              innovative: 'Innovativ',
              practical: 'Praktisch',
              collaborative: 'Kollaborativ',
              efficient: 'Effizient'
            },
            impact: {
              title: 'Unsere Wirkung',
              description: 'Wir messen unseren Erfolg an dem positiven Unterschied, den wir für unsere Kunden und deren Stakeholder machen.'
            },
            expertise: {
              title: 'Unsere Technische Expertise',
              description: 'Wir kombinieren tiefes technisches Wissen mit Branchenstandards, um außergewöhnliche Lösungen zu liefern.'
            },
            cta: {
              title: 'Bereit mit uns zu arbeiten?',
              description: 'Vereinbaren Sie eine Beratung, um Ihr Projekt zu besprechen und zu erkunden, wie wir Ihnen helfen können, Ihre Ziele zu erreichen.'
            }
          },
          
          // FAQ page in German
          faq: {
            title: 'Häufig Gestellte Fragen',
            subtitle: 'Finden Sie Antworten auf häufige Fragen zu unseren Dienstleistungen und Prozessen.',
            categories: {
              all: 'Alle Fragen',
              process: 'Prozess',
              pricing: 'Preisgestaltung',
              technical: 'Technisch',
              support: 'Support',
            },
            process: {
              question: 'Wie sieht Ihr Entwicklungsprozess aus?',
              answer: 'Unser Entwicklungsprozess umfasst typischerweise die Phasen Discovery, Planung, Entwicklung, Tests, Deployment und laufende Unterstützung. Wir arbeiten in jeder Phase kollaborativ mit Kunden zusammen und sorgen für Transparenz und Ausrichtung an Geschäftszielen. Wir verwenden agile Methoden, um schnell auf sich ändernde Anforderungen zu reagieren und inkrementellen Wert zu liefern.',
            },
            pricing: {
              question: 'Wie strukturieren Sie Ihre Preisgestaltung?',
              answer: 'Wir bieten flexible Preismodelle, darunter projektbasierte Festpreise, Stundensätze und Retainer-Vereinbarungen. Nach dem Verständnis Ihrer Anforderungen in ersten Beratungen bieten wir transparente Preisvorschläge ohne versteckte Kosten. Wir passen unseren Ansatz an Ihre Budgetbeschränkungen an und stellen gleichzeitig qualitativ hochwertige Ergebnisse sicher.',
            },
            timeline: {
              question: 'Wie lange dauert ein typisches Projekt?',
              answer: 'Die Projektzeiten variieren je nach Umfang, Komplexität und Anforderungen. Kleine Projekte können 4-6 Wochen dauern, während komplexere Projekte mehrere Monate umfassen können. Während unserer Discovery-Phase stellen wir einen detaillierten Zeitplan mit Meilensteinen bereit. Wir legen Wert auf realistische Schätzungen und pflegen eine transparente Kommunikation über Fortschritte und erforderliche Anpassungen.',
            },
            technologies: {
              question: 'Mit welchen Technologien arbeiten Sie?',
              answer: 'Wir arbeiten mit einer breiten Palette moderner Technologien, darunter JavaScript-Frameworks (React, Angular, Vue), Backend-Technologien (Node.js, Spring Boot, .NET), Datenbanksysteme (SQL und NoSQL), Cloud-Plattformen (AWS, Azure, GCP) und Automatisierungstools (Power Automate, Zapier). Wir wählen Technologien basierend auf Projektanforderungen und nicht nach persönlichen Vorlieben aus.',
            },
            maintenance: {
              question: 'Bieten Sie Wartung und Support an?',
              answer: 'Ja, wir bieten laufende Wartungs- und Supportoptionen für alle unsere Lösungen an. Diese können regelmäßige Updates, Sicherheitspatches, Leistungsoptimierung, Fehlerbehebungen und Funktionserweiterungen umfassen. Wir bieten flexible Supportpakete mit definierten SLAs, um sicherzustellen, dass Ihre Systeme sicher, effizient und an sich entwickelnde Geschäftsanforderungen angepasst bleiben.',
            },
            ownership: {
              question: 'Wer besitzt die Rechte an geistigen Eigentum der entwickelten Software?',
              answer: 'Nach vollständiger Bezahlung besitzen Sie (der Kunde) die Rechte an geistigem Eigentum für den speziell für Ihr Projekt entwickelten benutzerdefinierten Code. Wir verwenden möglicherweise bestimmte proprietäre Frameworks oder Tools, die unser Eigentum bleiben, aber diese werden Ihnen für die unbegrenzte Nutzung innerhalb Ihrer Lösung lizenziert. Dieser Ansatz ist in unseren Verträgen klar dokumentiert.',
            },
            communication: {
              question: 'Wie handhaben Sie die Projektkommunikation?',
              answer: 'Wir etablieren von Projektbeginn an klare Kommunikationskanäle, einschließlich regelmäßiger Statusbesprechungen, Fortschrittsberichte und Zugang zu Projektmanagement-Tools. Sie haben einen dedizierten Projektmanager als primären Ansprechpartner. Wir legen Wert auf proaktive Kommunikation, insbesondere bei Zeitplanänderungen oder Herausforderungen, um sicherzustellen, dass Sie nie im Dunkeln gelassen werden.',
            },
            solutions: {
              title: 'Gelöste Geschäftsprobleme',
              description: 'Entdecken Sie, wie unsere Lösungen spezifische Geschäftsherausforderungen in verschiedenen Kontexten adressieren.',
              viewDetails: 'Detaillierte Lösung anzeigen',
              commonProblems: 'Häufige Probleme',
              ourSolution: 'Unsere Lösung',
              keyBenefits: 'Hauptvorteile',
              spreadsheet: {
                title: 'Von Tabellenkalkulationen zu Systemen',
                problems: {
                  1: 'Inkonsistente Dateneingabe und Formelfehlern',
                  2: 'Eingeschränkte Zugriffssteuerung und Sicherheit',
                  3: 'Schwierigkeiten bei der Verwaltung mehrerer Benutzer oder Versionen',
                  4: 'Leistungsprobleme bei großen Datensätzen',
                  5: 'Eingeschränkte Berichts- und Analysefunktionen'
                },
                solution: 'Wir transformieren tabellenbasierte Prozesse in robuste, benutzerdefinierte Webanwendungen, die den vertrauten Workflow beibehalten und gleichzeitig Sicherheit, Skalierbarkeit und erweiterte Funktionen hinzufügen. Unsere Lösungen umfassen richtiges Datenbankdesign, Benutzerauthentifizierung, rollenbasierte Berechtigungen, Audit-Trails und Berichtsdashboards.',
                benefits: {
                  1: 'Beseitigung von Dateninkonsistenzen und Formelfehlern',
                  2: 'Verbesserte Sicherheit mit angemessenen Zugriffskontrollen',
                  3: 'Unterstützung für gleichzeitige Benutzer und Datenintegrität',
                  4: 'Verbesserte Leistung bei großen Datensätzen',
                  5: 'Erweiterte Berichts- und Visualisierungsfunktionen'
                }
              },
              automation: {
                title: 'Workflow-Automatisierung',
                problems: {
                  1: 'Zeitaufwändige manuelle Prozesse',
                  2: 'Fehleranfällige wiederkehrende Aufgaben',
                  3: 'Ineffiziente Ressourcenzuweisung',
                  4: 'Mangel an Prozessstandardisierung',
                  5: 'Verzögerungen in Geschäftsabläufen'
                },
                solution: 'Wir implementieren Automatisierungslösungen, die repetitive Aufgaben rationalisieren, Prozesse standardisieren und den manuellen Aufwand reduzieren. Mit Tools wie Power Automate, Zapier oder benutzerdefinierten Automatisierungsskripten erstellen wir Workflows, die Aktionen basierend auf spezifischen Ereignissen auslösen, Genehmigungen leiten, Daten verarbeiten und Benachrichtigungen generieren.',
                benefits: {
                  1: 'Erhebliche Zeitersparnis bei Routineaufgaben',
                  2: 'Reduzierte Fehler in Geschäftsprozessen',
                  3: 'Bessere Ressourcenzuweisung für höherwertige Arbeit',
                  4: 'Konsistente Prozessausführung jedes Mal',
                  5: 'Schnellere Abwicklung von Geschäftsvorgängen'
                }
              },
              legacy: {
                title: 'Modernisierung von Legacy-Systemen',
                problems: {
                  1: 'Veraltete Technologie, die schwer zu warten ist',
                  2: 'Begrenzte Kompatibilität mit modernen Systemen',
                  3: 'Sicherheitslücken in älteren Plattformen',
                  4: 'Schwierigkeiten, Entwickler für Legacy-Technologien zu finden',
                  5: 'Unfähigkeit, neue Geschäftsanforderungen zu unterstützen'
                },
                solution: 'Wir modernisieren Legacy-Systeme durch sorgfältige Bewertung, strategische Planung und stufenweise Implementierung. Unser Ansatz kann Refactoring von Code, Neuaufbau von Komponenten mit modernen Technologien, Erstellung von API-Schichten, Datenmigration und Etablierung von Integrationsmustern umfassen, die wesentliche Funktionalität bewahren und gleichzeitig neue Fähigkeiten ermöglichen.',
                benefits: {
                  1: 'Verbesserte Wartbarkeit und reduzierte technische Schulden',
                  2: 'Verbesserte Integration mit modernen Systemen und Diensten',
                  3: 'Bessere Sicherheit und Einhaltung aktueller Standards',
                  4: 'Zugang zu größerem Talentpool für laufende Entwicklung',
                  5: 'Plattform, die Innovation und neue Funktionen unterstützt'
                }
              },
              integration: {
                title: 'Systemintegration',
                problems: {
                  1: 'Getrennte Systeme, die manuellen Datentransfer erfordern',
                  2: 'Dateninkonsistenzen über verschiedene Anwendungen hinweg',
                  3: 'Ineffiziente Prozesse über mehrere Systeme hinweg',
                  4: 'Eingeschränkte Sichtbarkeit über Geschäftsabläufe hinweg',
                  5: 'Schwierigkeit bei der Implementierung von End-to-End-Workflows'
                },
                solution: 'Wir schaffen nahtlose Integrationen zwischen Ihren Geschäftssystemen mithilfe von API-Entwicklung, Middleware-Lösungen und ETL-Prozessen. Unsere Integrationsstrategien konzentrieren sich auf Echtzeit- oder geplante Datensynchronisation, konsistente Datentransformationen, Fehlerbehandlung und Überwachung, um sicherzustellen, dass Systeme zuverlässig zusammenarbeiten.',
                benefits: {
                  1: 'Beseitigung manueller Dateneingabe zwischen Systemen',
                  2: 'Konsistente, zuverlässige Daten über alle Plattformen hinweg',
                  3: 'Optimierte Prozesse, die mehrere Systeme umfassen',
                  4: 'Umfassende Sichtbarkeit in Geschäftsabläufe',
                  5: 'Effiziente End-to-End-Workflows über Anwendungen hinweg'
                }
              },
              workflow: {
                title: 'Kollaborative Arbeitsumgebungen',
                problems: {
                  1: 'Informationssilos zwischen Abteilungen',
                  2: 'Ineffiziente Teamprozesse',
                  3: 'Herausforderungen mit Remote- oder verteilten Teams',
                  4: 'Inkonsistente Projektmanagementpraktiken',
                  5: 'Schwierigkeiten bei der Verfolgung von Teamproduktivität und Fortschritt'
                },
                solution: 'Wir bauen kollaborative digitale Arbeitsumgebungen, die Kommunikation, Dokumentenaustausch, Aufgabenmanagement und Berichterstattung zentralisieren. Unsere Lösungen umfassen rollenbasierten Zugriff, Benachrichtigungssysteme, Dokumentenversionierung, Aufgabenzuweisungen, Fortschrittsverfolgung und Integrationen mit bestehenden Tools, um einheitliche Teamumgebungen zu schaffen.',
                benefits: {
                  1: 'Aufbrechen von Informationssilos zwischen Teams',
                  2: 'Effizientere Zusammenarbeit und Wissensaustausch',
                  3: 'Effektive Unterstützung für Remote- und Hybridarbeitsmodelle',
                  4: 'Standardisiertes Projektmanagement in der gesamten Organisation',
                  5: 'Bessere Sichtbarkeit in Teamproduktivität und Engpässe'
                }
              },
              datadriven: {
                title: 'Datengestützte Entscheidungsfindung',
                problems: {
                  1: 'Schwierigkeit beim Zugriff auf relevante Geschäftsdaten',
                  2: 'Zeitaufwändige manuelle Berichtsprozesse',
                  3: 'Unfähigkeit, Trends und Muster zu analysieren',
                  4: 'Entscheidungen basierend auf Intuition statt auf Daten',
                  5: 'Mangel an Echtzeit-Einblicken in die Geschäftsleistung'
                },
                solution: 'Wir implementieren Business-Intelligence-Lösungen, die Rohdaten in umsetzbare Erkenntnisse umwandeln. Unser Ansatz umfasst Data-Warehouse-Design, ETL-Prozesse, interaktive Dashboards, automatisierte Berichterstattung und prädiktive Analysetools, die Daten für Entscheidungsträger auf allen Ebenen zugänglich und aussagekräftig machen.',
                benefits: {
                  1: 'Einfacher Zugriff auf relevante Geschäftsdaten für alle Stakeholder',
                  2: 'Automatisierte Erstellung von Berichten und Dashboards',
                  3: 'Fortschrittliche Analytik zur Identifizierung von Trends und Chancen',
                  4: 'Sicherere, datengestützte Entscheidungsfindung',
                  5: 'Echtzeit-Sichtbarkeit in Schlüsselleistungsindikatoren'
                }
              },
              database: {
                title: 'Datenbankdesign & Optimierung',
                problems: {
                  1: 'Schlechte Datenbankleistung, die Operationen beeinträchtigt',
                  2: 'Datenintegritäts- und Qualitätsprobleme',
                  3: 'Schwierigkeiten bei der Skalierung mit wachsenden Datenvolumen',
                  4: 'Komplexe Abfragen, die spezielles Fachwissen erfordern',
                  5: 'Unzureichende Datensicherheit und Zugriffskontrollen'
                },
                solution: 'Wir entwerfen, optimieren und verwalten Datenbanksysteme, die die Grundlage für zuverlässige Anwendungen und Analysen bilden. Unsere Dienstleistungen umfassen Datenbankarchitektur, Leistungsoptimierung, Normalisierung, Indexierungsstrategien, Sicherheitsimplementierung, Backup-Lösungen und Migration zwischen Datenbankplattformen je nach Bedarf.',
                benefits: {
                  1: 'Deutlich verbesserte Anwendungsleistung',
                  2: 'Verbesserte Datenintegrität und -qualität',
                  3: 'Skalierbare Architektur, die mit Ihrem Unternehmen wächst',
                  4: 'Optimierte Abfragen und Berichtsfunktionen',
                  5: 'Robuste Sicherheit und Einhaltung von Datenvorschriften'
                }
              }
            }
          },
          cta: {
            title: 'Bereit, Ihr Unternehmen zu transformieren?',
            subtitle: 'Vereinbaren Sie eine Beratung mit unserem Team, um Ihr Projekt zu besprechen.'
          }
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // not needed for react
    }
  });

interface LanguageContextType {
  language: LanguageOption;
  setLanguage: (lang: LanguageOption) => void;
  t: (key: string, options?: object) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [language, setLanguage] = useState<LanguageOption>('en');
  const {t, i18n} = useTranslation();
  
  // Set the language in i18n when it changes
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  
  return (
    <LanguageContext.Provider value={{language, setLanguage, t}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
