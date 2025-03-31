
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
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    'hero.title': 'Ethical Software Solutions for Your Business',
    'hero.subtitle': 'We build software solutions with integrity, placing ethics and your specific business needs at the forefront of our development process.',
    'hero.cta': 'Explore Services',

    'identify.title': 'Do You Recognize These Challenges?',
    'identify.subtitle': 'Many businesses face similar challenges. Check if any of these sound familiar:',
    'identify.manual.question': 'Do you or your staff spend too much time on repetitive tasks?',
    'identify.manual.description': 'Manual data entry, report generation, and other repetitive tasks are consuming valuable staff time that could be better spent on strategic activities.',
    'identify.integration.question': 'Are your systems not communicating effectively with each other?',
    'identify.integration.description': 'Different departments use separate systems that don\'t share data, causing information silos and requiring duplicate work.',
    'identify.legacy.question': 'Is outdated software limiting your business growth?',
    'identify.legacy.description': 'Your legacy systems are difficult to maintain, expensive to operate, and can\'t keep pace with your evolving business needs.',
    'identify.insights.question': 'Do you struggle to get actionable insights from your data?',
    'identify.insights.description': 'Despite collecting data, you can\'t easily access real-time business intelligence to support informed decision-making.',
    'identify.scalability.question': 'Is your current infrastructure struggling to handle growth?',
    'identify.scalability.description': 'As your business expands, your systems are having difficulty managing increased users, transactions, or data volume.',
    'identify.security.question': 'Are you concerned about compliance and security risks?',
    'identify.security.description': 'Meeting regulatory requirements and protecting sensitive data from security threats is becoming increasingly challenging.',
    'identify.cost.question': 'Are IT costs unpredictable or higher than expected?',
    'identify.cost.description': 'Managing and maintaining your current technology stack is resulting in unpredictable expenses and higher total cost of ownership.',
    
    'business.questions.title': 'Do These Challenges Sound Familiar?',
    'business.questions.subtitle': 'Many businesses struggle with these common issues that custom software solutions can address.',
    'business.challenge.emails': 'You\'re drowning in email threads and spreadsheets',
    'business.challenge.emails.desc': 'Keeping track of projects, approvals, and updates through emails and shared documents leads to confusion, version control issues, and missed deadlines.',
    'business.challenge.copying': 'Your team wastes hours copying and pasting data',
    'business.challenge.copying.desc': 'Manual data transfers between different systems or documents create inefficiencies, introduce errors, and prevent your team from focusing on strategic tasks.',
    'business.challenge.separated': 'Your data is separated across different tools',
    'business.challenge.separated.desc': 'Information stored in multiple disconnected applications makes it difficult to get a complete picture, leading to inefficiencies and poor decision-making.',
    'business.challenge.gutfeeling': 'You\'re making business decisions based on gut feeling',
    'business.challenge.gutfeeling.desc': 'Without real-time data and analytics, you\'re forced to rely on outdated reports or assumptions, leading to missed opportunities and costly mistakes.',
    'business.challenge.adminwork': 'Your employees spend more time on admin work than actual work',
    'business.challenge.adminwork.desc': 'Manually filling out forms, generating reports, and organizing files takes away time from innovation, problem-solving, and customer service.',
    'business.challenge.doublework': 'Your systems don\'t talk to each other, causing double work',
    'business.challenge.doublework.desc': 'Disconnected software forces employees to re-enter the same data multiple times, leading to inconsistencies, errors, and inefficiencies.',
    'business.challenge.excel': 'You\'re pushing Excel beyond its limits and it\'s costing you',
    'business.challenge.excel.desc': 'Using Excel as a database, workflow manager, or reporting tool creates versioning issues, manual errors, lack of collaboration, and security risks.',
    
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
    
    'detailed.services.software.title': 'Custom Software Development',
    'detailed.services.software.description': 'We design and build tailored software solutions that address your specific business challenges and align with your strategic goals. Our custom development approach ensures you get exactly what your business needs.',
    'detailed.services.software.benefits': 'Perfect alignment with business processes, scalability, competitive advantage, full ownership of intellectual property, and ongoing support and maintenance.',
    'detailed.services.software.process': 'We begin with a thorough needs analysis, followed by solution design, iterative development, comprehensive testing, and deployment with dedicated post-launch support.',
    
    'detailed.services.automation.title': 'Business Process Automation',
    'detailed.services.automation.description': 'We identify and automate repetitive, manual processes to increase efficiency, reduce errors, and free up your team to focus on higher-value activities.',
    'detailed.services.automation.benefits': 'Enhanced efficiency, reduced operational costs, minimized human error, improved data accuracy, faster processing times, and better resource allocation.',
    'detailed.services.automation.process': 'We analyze your workflows, identify automation opportunities, design solutions using appropriate tools, develop and implement the automation, and provide training and monitoring.',
    
    'detailed.services.api.title': 'API Development',
    'detailed.services.api.description': 'We design and build robust, secure APIs that enable seamless integration between your systems and third-party services, facilitating data exchange and functionality sharing.',
    'detailed.services.api.benefits': 'Enhanced system integration, improved data flow, better third-party service integration, mobile app enablement, and support for partner ecosystems.',
    'detailed.services.api.process': 'We define the API requirements, design the architecture and endpoints, develop with proper security, thoroughly test for performance and reliability, and provide documentation and ongoing support.',
    
    'detailed.services.scripting.title': 'Scripting & Integration',
    'detailed.services.scripting.description': 'We create custom scripts to automate tasks, connect systems, and streamline operations, enabling your existing software to work together more efficiently.',
    'detailed.services.scripting.benefits': 'Quick implementation, cost-effectiveness, automation of routine tasks, enhanced data consistency, and extended functionality of existing systems.',
    'detailed.services.scripting.process': 'We identify integration needs, select appropriate scripting languages and tools, develop and test the scripts, implement them into your workflow, and provide documentation and support.',
    
    'detailed.services.cicd.title': 'CI/CD Implementation',
    'detailed.services.cicd.description': 'We establish continuous integration and continuous delivery pipelines that automate your software testing and deployment processes, leading to faster, more reliable releases.',
    'detailed.services.cicd.benefits': 'Faster time to market, reduced deployment risks, improved code quality, consistent release processes, and enhanced team collaboration.',
    'detailed.services.cicd.process': 'We assess your current development workflow, design the CI/CD pipeline architecture, implement the automated builds and tests, set up deployment automation, and train your team on best practices.',
    
    'detailed.services.offshoring.title': 'IT Offshoring',
    'detailed.services.offshoring.description': 'We help you establish and manage offshore development teams that extend your IT capabilities while reducing costs and accessing global talent pools.',
    'detailed.services.offshoring.benefits': 'Significant cost savings, access to specialized skills, business continuity, scalability, and focus on core business activities.',
    'detailed.services.offshoring.process': 'We identify your offshoring needs, source and vet qualified professionals, manage the transition process, establish communication protocols, and provide ongoing management support.',
    
    'detailed.process.title': 'Our Implementation Process',
    'detailed.process.description': 'We follow a structured approach to ensure successful delivery of all our services',
    
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
    
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about our software development services and processes',
    'faq.categories.all': 'All Questions',
    'faq.categories.process': 'Process',
    'faq.categories.technical': 'Technical',
    'faq.categories.business': 'Business',
    
    'faq.process.question': 'What is your software development process?',
    'faq.process.answer': 'Our development process follows a structured approach: Discovery & Requirements, Planning & Architecture, Development & Implementation, Testing & Quality Assurance, Deployment & Launch, and ongoing Support & Maintenance. We keep you involved at every stage to ensure the solution meets your expectations.',
    
    'faq.pricing.question': 'How do you determine the cost of a project?',
    'faq.pricing.answer': 'Project costs are determined based on several factors: project scope and complexity, timeline requirements, technologies involved, and the level of ongoing support needed. We provide transparent pricing with no hidden fees and can work with fixed-price or time-and-materials models depending on your needs.',
    
    'faq.timeline.question': 'How long does it typically take to complete a software project?',
    'faq.timeline.answer': 'Project timelines vary significantly depending on scope and complexity. Small to medium projects might take 2-4 months, while larger enterprise solutions can take 6-12 months or more. We provide realistic timeline estimates during the planning phase and keep you updated on progress throughout development.',
    
    'faq.technologies.question': 'What technologies and programming languages do you work with?',
    'faq.technologies.answer': 'We work with a wide range of technologies including but not limited to: front-end (React, Angular, Vue.js), back-end (Node.js, .NET, Python, Java), mobile (React Native, Flutter), databases (SQL, NoSQL), cloud platforms (AWS, Azure, Google Cloud), and DevOps tools (Docker, Kubernetes, Jenkins). We choose the best technology stack for your specific project needs.',
    
    'faq.maintenance.question': 'Do you provide ongoing maintenance and support after launch?',
    'faq.maintenance.answer': 'Yes, we offer various maintenance and support packages to ensure your software continues to perform optimally. These can include bug fixes, security updates, performance optimization, feature enhancements, and user support. We can tailor a support package to match your specific needs and budget.',
    
    'faq.ownership.question': 'Who owns the intellectual property rights to the developed software?',
    'faq.ownership.answer': 'Upon final payment, you retain full ownership of all intellectual property rights to the custom software we develop for you. This includes source code, design elements, and documentation. We believe that if you pay for custom development, you should own the results completely.',
    
    'faq.communication.question': 'How do you handle project communication and updates?',
    'faq.communication.answer': 'We maintain regular communication throughout the project using your preferred channels (email, phone, video calls, project management tools). We schedule regular progress updates, conduct sprint demos for iterative projects, and provide access to project tracking tools so you can monitor progress in real-time.',
    
    'faq.cta.title': 'Still Have Questions?',
    'faq.cta.subtitle': 'Our team is ready to answer any additional questions you might have about our services or your specific project needs.'
  },
  de: {
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.projects': 'Projekte',
    'nav.about': 'Über uns',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    
    'hero.title': 'Ethische Softwarelösungen für Ihr Unternehmen',
    'hero.subtitle': 'Wir entwickeln Softwarelösungen mit Integrität und stellen Ethik und Ihre spezifischen Geschäftsanforderungen in den Mittelpunkt unseres Entwicklungsprozesses.',
    'hero.cta': 'Dienstleistungen erkunden',

    'identify.title': 'Erkennen Sie diese Herausforderungen?',
    'identify.subtitle': 'Viele Unternehmen stehen vor ähnlichen Herausforderungen. Prüfen Sie, ob Ihnen etwas davon bekannt vorkommt:',
    'identify.manual.question': 'Verbringen Sie oder Ihre Mitarbeiter zu viel Zeit mit sich wiederholenden Aufgaben?',
    'identify.manual.description': 'Manuelle Dateneingabe, Berichtserstellung und andere repetitive Aufgaben verbrauchen wertvolle Mitarbeiterzeit, die besser für strategische Aktivitäten genutzt werden könnte.',
    'identify.integration.question': 'Kommunizieren Ihre Systeme nicht effektiv miteinander?',
    'identify.integration.description': 'Verschiedene Abteilungen nutzen separate Systeme, die keine Daten austauschen, was zu Informationssilos führt und Doppelarbeit erfordert.',
    'identify.legacy.question': 'Schränkt veraltete Software Ihr Unternehmenswachstum ein?',
    'identify.legacy.description': 'Ihre Legacy-Systeme sind schwer zu warten, teuer im Betrieb und können mit Ihren sich entwickelnden Geschäftsanforderungen nicht Schritt halten.',
    'identify.insights.question': 'Haben Sie Schwierigkeiten, umsetzbare Erkenntnisse aus Ihren Daten zu gewinnen?',
    'identify.insights.description': 'Trotz Datensammlung können Sie nicht einfach auf Echtzeit-Business-Intelligence zugreifen, um fundierte Entscheidungen zu unterstützen.',
    'identify.scalability.question': 'Hat Ihre aktuelle Infrastruktur Schwierigkeiten, mit dem Wachstum Schritt zu halten?',
    'identify.scalability.description': 'Mit der Expansion Ihres Unternehmens haben Ihre Systeme Schwierigkeiten, mit der steigenden Anzahl von Benutzern, Transaktionen oder Datenvolumen umzugehen.',
    'identify.security.question': 'Sind Sie besorgt über Compliance- und Sicherheitsrisiken?',
    'identify.security.description': 'Die Einhaltung regulatorischer Anforderungen und der Schutz sensibler Daten vor Sicherheitsbedrohungen wird zunehmend herausfordernd.',
    'identify.cost.question': 'Sind Ihre IT-Kosten unvorhersehbar oder höher als erwartet?',
    'identify.cost.description': 'Die Verwaltung und Wartung Ihres aktuellen Technologie-Stacks führt zu unvorhersehbaren Ausgaben und höheren Gesamtbetriebskosten.',
    
    'business.questions.title': 'Klingen diese Herausforderungen vertraut?',
    'business.questions.subtitle': 'Viele Unternehmen kämpfen mit diesen häufigen Problemen, die durch maßgeschneiderte Softwarelösungen behoben werden können.',
    'business.challenge.emails': 'Sie ertrinken in E-Mail-Threads und Tabellenkalkulationen',
    'business.challenge.emails.desc': 'Die Verfolgung von Projekten, Genehmigungen und Aktualisierungen über E-Mails und gemeinsam genutzte Dokumente führt zu Verwirrung, Versionskontrollproblemen und verpassten Fristen.',
    'business.challenge.copying': 'Ihr Team verschwendet Stunden mit dem Kopieren und Einfügen von Daten',
    'business.challenge.copying.desc': 'Manuelle Datenübertragungen zwischen verschiedenen Systemen oder Dokumenten schaffen Ineffizienzen, führen zu Fehlern und hindern Ihr Team daran, sich auf strategische Aufgaben zu konzentrieren.',
    'business.challenge.separated': 'Ihre Daten sind auf verschiedene Tools verteilt',
    'business.challenge.separated.desc': 'In mehreren getrennten Anwendungen gespeicherte Informationen erschweren es, ein vollständiges Bild zu erhalten, was zu Ineffizienzen und schlechten Entscheidungen führt.',
    'business.challenge.gutfeeling': 'Sie treffen Geschäftsentscheidungen auf Basis von Bauchgefühl',
    'business.challenge.gutfeeling.desc': 'Ohne Echtzeitdaten und -analysen sind Sie gezwungen, sich auf veraltete Berichte oder Annahmen zu verlassen, was zu verpassten Chancen und kostspieligen Fehlern führt.',
    'business.challenge.adminwork': 'Ihre Mitarbeiter verbringen mehr Zeit mit Verwaltungsarbeit als mit eigentlicher Arbeit',
    'business.challenge.adminwork.desc': 'Das manuelle Ausfüllen von Formularen, Erstellen von Berichten und Organisieren von Dateien nimmt Zeit für Innovation, Problemlösung und Kundenservice weg.',
    'business.challenge.doublework': 'Ihre Systeme kommunizieren nicht miteinander, was zu Doppelarbeit führt',
    'business.challenge.doublework.desc': 'Unverbundene Software zwingt Mitarbeiter, dieselben Daten mehrfach einzugeben, was zu Inkonsistenzen, Fehlern und Ineffizienzen führt.',
    'business.challenge.excel': 'Sie treiben Excel über seine Grenzen hinaus und das kostet Sie',
    'business.challenge.excel.desc': 'Die Verwendung von Excel als Datenbank, Workflow-Manager oder Reporting-Tool schafft Versionierungsprobleme, manuelle Fehler, mangelnde Zusammenarbeit und Sicherheitsrisiken.',
    
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Wir bieten umfassende Softwarelösungen, die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten sind.',
    'services.software.title': 'Individuelle Softwareentwicklung',
    'services.software.description': 'Massgeschneiderte Softwarelösungen, die auf Ihre einzigartigen Geschäftsherausforderungen und -chancen ausgerichtet sind.',
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
    'services.process.development.description': 'Unser erfahrenes Team entwickelt Ihre Lösung mit den neuesten Technologien und Branchenstandards, mit regelmässigen Check-ins, um die Ausrichtung auf Ihre Vision sicherzustellen.',
    'services.process.testing.title': 'Testen & Qualitätssicherung',
    'services.process.testing.description': 'Jede Lösung durchläuft rigorose Tests, um Stabilität, Sicherheit und Leistung vor der Lieferung zu gewährleisten, einschliesslich Benutzerakzeptanztests mit Ihrem Team.',
    'services.process.deployment.title': 'Bereitstellung & Launch',
    'services.process.deployment.description': 'Wir stellen Ihre Lösung sorgfältig bereit und sorgen für einen reibungslosen Übergang mit minimaler Unterbrechung Ihrer Geschäftsabläufe.',
    'services.process.maintenance.title': 'Support & Wartung',
    'services.process.maintenance.description': 'Wir bieten kontinuierlichen Support und Wartung, um sicherzustellen, dass Ihre Lösung weiterhin optimal funktioniert und sich mit Ihren Geschäftsanforderungen weiterentwickelt.',
    
    'services.hero.title': 'Unsere Dienstleistungen',
    'services.hero.subtitle': 'Wir bieten ethische Softwarelösungen, die auf Ihre spezifischen Geschäftsanforderungen zugeschnitten sind.',
    'services.cta.title': 'Bereit, Ihr Projekt zu starten?',
    'services.cta.subtitle': 'Kontaktieren Sie uns noch heute, um Ihre Anforderungen zu besprechen und wie wir Ihnen helfen können, Ihre Geschäftsziele zu erreichen.',
    
    'detailed.services.software.title': 'Individuelle Softwareentwicklung',
    'detailed.services.software.description': 'Wir entwickeln und programmieren massgeschneiderte Softwarelösungen, die auf Ihre spezifischen Geschäftsherausforderungen eingehen und mit Ihren strategischen Zielen im Einklang stehen. Unser individueller Entwicklungsansatz stellt sicher, dass Sie genau das bekommen, was Ihr Unternehmen benötigt.',
    'detailed.services.software.benefits': 'Perfekte Abstimmung auf Geschäftsprozesse, Skalierbarkeit, Wettbewerbsvorteil, vollständiges Eigentum an geistigem Eigentum sowie kontinuierliche Unterstützung und Wartung.',
    'detailed.services.software.process': 'Wir beginnen mit einer gründlichen Bedarfsanalyse, gefolgt von der Lösungskonzeption, iterativer Entwicklung, umfassenden Tests und Bereitstellung mit dediziertem Support nach dem Start.',
    
    'detailed.services.automation.title': 'Automatisierung von Geschäftsprozessen',
    'detailed.services.automation.description': 'Wir identifizieren und automatisieren repetitive, manuelle Prozesse, um die Effizienz zu steigern, Fehler zu reduzieren und Ihr Team zu entlasten, damit es sich auf Aufgaben mit höherem Wert konzentrieren kann.',
    'detailed.services.automation.benefits': 'Verbesserte Effizienz, reduzierte Betriebskosten, minimierte menschliche Fehler, verbesserte Datengenauigkeit, schnellere Verarbeitungszeiten und bessere Ressourcenzuweisung.',
    'detailed.services.automation.process': 'Wir analysieren Ihre Workflows, identifizieren Automatisierungspotenziale, entwerfen Lösungen mit geeigneten Tools, entwickeln und implementieren die Automatisierung und bieten Schulungen und Überwachung an.',
    
    'detailed.services.api.title': 'API-Entwicklung',
    'detailed.services.api.description': 'Wir entwickeln robuste, sichere APIs, die eine nahtlose Integration zwischen Ihren Systemen und Diensten von Drittanbietern ermöglichen und den Datenaustausch und die gemeinsame Nutzung von Funktionen erleichtern.',
    'detailed.services.api.benefits': 'Verbesserte Systemintegration, optimierter Datenfluss, bessere Integration von Drittanbieterdiensten, mobile App-Unterstützung und Förderung von Partner-Ökosystemen.',
    'detailed.services.api.process': 'Wir definieren die API-Anforderungen, konzipieren die Architektur und Endpunkte, entwickeln mit angemessener Sicherheit, testen gründlich auf Leistung und Zuverlässigkeit und bieten Dokumentation und laufende Unterstützung.',
    
    'detailed.services.scripting.title': 'Skripting & Integration',
    'detailed.services.scripting.description': 'Wir erstellen benutzerdefinierte Skripte zur Automatisierung von Aufgaben, zur Verbindung von Systemen und zur Optimierung von Abläufen, damit Ihre bestehende Software effizienter zusammenarbeiten kann.',
    'detailed.services.scripting.benefits': 'Schnelle Implementierung, Kosteneffizienz, Automatisierung von Routineaufgaben, verbesserte Datenkonsistenz und erweiterte Funktionalität bestehender Systeme.',
    'detailed.services.scripting.process': 'Wir identifizieren Integrationsbedürfnisse, wählen geeignete Skriptsprachen und Tools aus, entwickeln und testen die Skripte, implementieren sie in Ihren Workflow und stellen Dokumentation und Support bereit.',
    
    'detailed.services.cicd.title': 'CI/CD-Implementierung',
    'detailed.services.cicd.description': 'Wir etablieren Pipelines für kontinuierliche Integration und kontinuierliche Bereitstellung, die Ihre Software-Test- und Bereitstellungsprozesse automatisieren und zu schnelleren, zuverlässigeren Veröffentlichungen führen.',
    'detailed.services.cicd.benefits': 'Schnellere Markteinführung, reduzierte Bereitstellungsrisiken, verbesserte Codequalität, konsistente Release-Prozesse und verbesserte Teamzusammenarbeit.',
    'detailed.services.cicd.process': 'Wir bewerten Ihren aktuellen Entwicklungsworkflow, konzipieren die CI/CD-Pipeline-Architektur, implementieren automatisierte Builds und Tests, richten die Bereitstellungsautomatisierung ein und schulen Ihr Team in Best Practices.',
    
    'detailed.services.offshoring.title': 'IT-Offshoring',
    'detailed.services.offshoring.description': 'Wir helfen Ihnen, Offshore-Entwicklungsteams aufzubauen und zu verwalten, die Ihre IT-Fähigkeiten erweitern und gleichzeitig Kosten senken und Zugang zu globalen Talentpools verschaffen.',
    'detailed.services.offshoring.benefits': 'Erhebliche Kosteneinsparungen, Zugang zu spezialisierten Fähigkeiten, Geschäftskontinuität, Skalierbarkeit und Fokus auf Kerngeschäftsaktivitäten.',
    'detailed.services.offshoring.process': 'Wir identifizieren Ihre Offshoring-Bedürfnisse, beschaffen und überprüfen qualifizierte Fachkräfte, verwalten den Übergangsprozess, etablieren Kommunikationsprotokolle und bieten laufende Managementunterstützung.',
    
    'detailed.process.title': 'Unser Implementierungsprozess',
    'detailed.process.description': 'Wir folgen einem strukturierten Ansatz, um die erfolgreiche Bereitstellung all unserer Dienste zu gewährleisten',
    
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
    
    'contact.title': 'Lassen Sie uns gemeinsam etwas Grossartiges aufbauen',
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
    
    'faq.title': 'Häufig gestellte Fragen',
    'faq.subtitle': 'Finden Sie Antworten auf häufige Fragen zu unseren Softwareentwicklungsdienstleistungen und -prozessen',
    'faq.categories.all': 'Alle Fragen',
    'faq.categories.process': 'Prozess',
    'faq.categories.technical': 'Technisch',
    'faq.categories.business': 'Geschäftlich',
    
    'faq.process.question': 'Wie sieht Ihr Softwareentwicklungsprozess aus?',
    'faq.process.answer': 'Unser Entwicklungsprozess folgt einem strukturierten Ansatz: Entdeckung & Anforderungen, Planung & Architektur, Entwicklung & Implementierung, Tests & Qualitätssicherung, Bereitstellung & Start und fortlaufender Support & Wartung. Wir halten Sie in jeder Phase involviert, um sicherzustellen, dass die Lösung Ihren Erwartungen entspricht.',
    
    'faq.pricing.question': 'Wie bestimmen Sie die Kosten eines Projekts?',
    'faq.pricing.answer': 'Die Projektkosten werden auf Basis mehrerer Faktoren bestimmt: Projektumfang und Komplexität, Zeitvorgaben, verwendete Technologien und benötigtes Maß an fortlaufendem Support. Wir bieten transparente Preise ohne versteckte Kosten und können mit Festpreis- oder Zeit-und-Material-Modellen arbeiten, je nach Ihren Bedürfnissen.',
    
    'faq.timeline.question': 'Wie lange dauert typischerweise die Fertigstellung eines Softwareprojekts?',
    'faq.timeline.answer': 'Projektzeitpläne variieren erheblich je nach Umfang und Komplexität. Kleine bis mittlere Projekte können 2-4 Monate dauern, während größere Unternehmenslösungen 6-12 Monate oder länger benötigen können. Wir geben realistische Zeitschätzungen während der Planungsphase und halten Sie während der gesamten Entwicklung über den Fortschritt auf dem Laufenden.',
    
    'faq.technologies.question': 'Mit welchen Technologien und Programmiersprachen arbeiten Sie?',
    'faq.technologies.answer': 'Wir arbeiten mit einer breiten Palette von Technologien, darunter: Front-End (React, Angular, Vue.js), Back-End (Node.js, .NET, Python, Java), Mobile (React Native, Flutter), Datenbanken (SQL, NoSQL), Cloud-Plattformen (AWS, Azure, Google Cloud) und DevOps-Tools (Docker, Kubernetes, Jenkins). Wir wählen den besten Technologie-Stack für Ihre spezifischen Projektanforderungen.',
    
    'faq.maintenance.question': 'Bieten Sie nach dem Launch fortlaufende Wartung und Support an?',
    'faq.maintenance.answer': 'Ja, wir bieten verschiedene Wartungs- und Support-Pakete an, um sicherzustellen, dass Ihre Software weiterhin optimal funktioniert. Diese können Fehlerbehebungen, Sicherheitsupdates, Leistungsoptimierungen, Funktionserweiterungen und Benutzerunterstützung umfassen. Wir können ein Support-Paket auf Ihre spezifischen Bedürfnisse und Ihr Budget zuschneiden.',
    
    'faq.ownership.question': 'Wer besitzt die Rechte am geistigen Eigentum der entwickelten Software?',
    'faq.ownership.answer': 'Nach der abschließenden Zahlung behalten Sie alle Rechte am geistigen Eigentum der für Sie entwickelten kundenspezifischen Software. Dies umfasst Quellcode, Designelemente und Dokumentation. Wir sind der Meinung, dass Sie, wenn Sie für eine maßgeschneiderte Entwicklung bezahlen, die Ergebnisse vollständig besitzen sollten.',
    
    'faq.communication.question': 'Wie handhaben Sie Projektkommunikation und Updates?',
    'faq.communication.answer': 'Wir pflegen während des gesamten Projekts regelmäßige Kommunikation über Ihre bevorzugten Kanäle (E-Mail, Telefon, Videoanrufe, Projektmanagement-Tools). Wir planen regelmäßige Fortschrittsberichte, führen Sprint-Demos für iterative Projekte durch und bieten Zugang zu Projekt-Tracking-Tools, damit Sie den Fortschritt in Echtzeit überwachen können.',
    
    'faq.cta.title': 'Noch Fragen?',
    'faq.cta.subtitle': 'Unser Team steht bereit, um alle weiteren Fragen zu beantworten, die Sie zu unseren Dienstleistungen oder Ihren spezifischen Projektanforderungen haben könnten.'
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
