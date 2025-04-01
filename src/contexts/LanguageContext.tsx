import React, {createContext, useContext, useState, useEffect} from 'react';

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
    'hero.subtitle': 'We build software solutions with integrity, placing ethics and your specific business needs at the forefront of our development process',
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

    'services.detailTitle': 'Our Services',
    'services.detailSubtitle': 'What We Offer',
    'services.detailDescription': 'Explore our comprehensive service offerings designed to transform your business',
    'services.software.title': 'Custom Software Development',
    'services.software.description': 'We develop tailored software solutions to meet your unique business requirements and optimize your operations.',
    'services.software.benefit1': 'Customized solutions aligned with your business goals',
    'services.software.benefit2': 'Scalable architecture for future growth',
    'services.software.benefit3': 'Intuitive user interfaces for better adoption',
    'services.software.benefit4': 'Comprehensive support and maintenance',
    'services.software.process1.title': 'Requirements Analysis',
    'services.software.process1.description': 'We work closely with you to understand your business needs and define clear requirements.',
    'services.software.process2.title': 'Design and Architecture',
    'services.software.process2.description': 'Our experts create a robust architecture and intuitive design for your software.',
    'services.software.process3.title': 'Development and Testing',
    'services.software.process3.description': 'We implement the solution using agile methodologies with continuous testing.',
    'services.software.process4.title': 'Deployment and Support',
    'services.software.process4.description': 'We ensure smooth deployment and provide ongoing support for your software.',
    'services.automation.title': 'Process Automation',
    'services.automation.description': 'Streamline your operations by automating repetitive tasks and complex workflows to improve efficiency and reduce errors.',
    'services.automation.benefit1': 'Increased operational efficiency',
    'services.automation.benefit2': 'Reduced human error',
    'services.automation.benefit3': 'Cost savings through optimized processes',
    'services.automation.benefit4': 'Improved data accuracy and consistency',
    'services.automation.process1.title': 'Process Analysis',
    'services.automation.process1.description': 'We analyze your current workflows to identify automation opportunities.',
    'services.automation.process2.title': 'Solution Design',
    'services.automation.process2.description': 'Our team designs an automation solution tailored to your specific processes.',
    'services.automation.process3.title': 'Implementation',
    'services.automation.process3.description': 'We develop and implement the automation solution with minimal disruption.',
    'services.automation.process4.title': 'Measurement and Optimization',
    'services.automation.process4.description': 'We continuously measure and optimize the automated processes for better results.',
    'services.integration.title': 'System Integration',
    'services.integration.description': 'Connect your diverse applications, data sources, and systems to create a unified and efficient ecosystem.',
    'services.integration.benefit1': 'Seamless data flow across systems',
    'services.integration.benefit2': 'Elimination of data silos',
    'services.integration.benefit3': 'Improved business intelligence',
    'services.integration.benefit4': 'Enhanced operational efficiency',
    'services.integration.process1.title': 'System Assessment',
    'services.integration.process1.description': 'We analyze your existing systems and integration requirements.',
    'services.integration.process2.title': 'Integration Strategy',
    'services.integration.process2.description': 'Our experts develop a comprehensive integration strategy and architecture.',
    'services.integration.process3.title': 'Implementation',
    'services.integration.process3.description': 'We implement the integration solution using appropriate technologies.',
    'services.integration.process4.title': 'Testing and Optimization',
    'services.integration.process4.description': 'We rigorously test and optimize the integrated system for reliability.',
    'services.offshoring.title': 'IT Offshoring & Support',
    'services.offshoring.description': 'Leverage our expertise to manage your IT infrastructure and provide continuous support for your business operations.',
    'services.offshoring.benefit1': 'Cost-effective IT operations',
    'services.offshoring.benefit2': 'Access to specialized expertise',
    'services.offshoring.benefit3': '24/7 support coverage',
    'services.offshoring.benefit4': 'Focus on your core business activities',
    'services.offshoring.process1.title': 'Assessment',
    'services.offshoring.process1.description': 'We assess your current IT operations and support requirements.',
    'services.offshoring.process2.title': 'Transition Planning',
    'services.offshoring.process2.description': 'We develop a detailed transition plan for a smooth handover.',
    'services.offshoring.process3.title': 'Knowledge Transfer',
    'services.offshoring.process3.description': 'We ensure comprehensive knowledge transfer from your team to ours.',
    'services.offshoring.process4.title': 'Ongoing Operations',
    'services.offshoring.process4.description': 'We manage and continuously improve your IT operations and support.',
    'services.benefits': 'Key Benefits',
    'services.technologies': 'Technologies',
    'services.whyChooseUs': 'Why Choose Us',
    'services.whyChooseUsDescription': 'Our team combines deep expertise with a client-centered approach to deliver solutions that truly transform your business operations.',
    'services.getStarted': 'Get Started',
    'services.implementationProcess': 'Our Implementation Process',

    'business.questions.title': 'Do These Challenges Sound Familiar?',
    'business.questions.subtitle': 'Many businesses struggle with these common issues that custom software solutions can address',
    'business.challenge.email.title': "You're drowning in email threads and spreadsheets",
    'business.challenge.email.description': "Keeping track of projects, approvals, and updates through emails and shared documents leads to confusion, version control issues, and missed deadlines.",
    'business.challenge.data.title': "Your data is separated across different tools",
    'business.challenge.data.description': "Information stored in multiple disconnected applications makes it difficult to get a complete picture, leading to inefficiencies and poor decision-making.",
    'business.challenge.copy.title': "Your team wastes hours copying and pasting data",
    'business.challenge.copy.description': "Manual data transfers between different systems or documents create inefficiencies, introduce errors, and prevent your team from focusing on strategic tasks.",
    'business.challenge.gut.title': "You're making business decisions based on gut feeling",
    'business.challenge.gut.description': "Without real-time data and analytics, you're forced to rely on outdated reports or assumptions, leading to missed opportunities and costly mistakes.",
    'business.challenge.admin.title': "Your employees spend more time on admin work than actual work",
    'business.challenge.admin.description': "Manually filling out forms, generating reports, and organizing files takes away time from innovation, problem-solving, and customer service.",
    'business.challenge.systems.title': "Your systems don't talk to each other, causing double work",
    'business.challenge.systems.description': "Disconnected software forces employees to re-enter the same data multiple times, leading to inconsistencies, errors, and inefficiencies.",
    'business.challenge.excel.title': "You're pushing Excel beyond its limits and it's costing you",
    'business.challenge.excel.description': "Using Excel as a database, workflow manager, or reporting tool creates versioning issues, manual errors, lack of collaboration, and security risks.",

    'services.title': 'Our Services',
    'services.subtitle': 'We offer comprehensive software solutions tailored to meet your specific business requirements',
    'services.scripting.title': 'Scripting & Integration',
    'services.scripting.description': 'Connect your systems and automate repetitive tasks with custom scripts and integrations',
    'services.cicd.title': 'CI/CD Implementation',
    'services.cicd.description': 'Implement continuous integration and deployment practices to accelerate your development lifecycle',
    'services.api.title': 'API Development',
    'services.api.description': 'Create robust APIs to enable seamless communication between your systems and third-party services',
    'services.takeover.title': 'Project Takeover',
    'services.takeover.description': 'We can take over and maintain existing projects, providing continued support and development',

    'services.process.title': 'Our Development Process',
    'services.process.subtitle': 'We follow a structured approach to ensure successful delivery of your project',
    'services.process.discovery.title': 'Discovery & Requirements',
    'services.process.discovery.description': 'We start by understanding your business goals, requirements, and expectations through in-depth consultations and analysis of your existing systems',
    'services.process.planning.title': 'Planning & Architecture',
    'services.process.planning.description': 'Based on the gathered requirements, we create a detailed project plan, define the architecture, and establish project milestones and deliverables',
    'services.process.development.title': 'Development & Implementation',
    'services.process.development.description': 'Our experienced team develops your solution using the latest technologies and industry best practices, with regular check-ins to ensure alignment with your vision',
    'services.process.testing.title': 'Testing & Quality Assurance',
    'services.process.testing.description': 'Every solution undergoes rigorous testing to ensure stability, security, and performance before delivery, including user acceptance testing with your team',
    'services.process.deployment.title': 'Deployment & Launch',
    'services.process.deployment.description': 'We carefully deploy your solution, ensuring a smooth transition and minimal disruption to your business operations',
    'services.process.maintenance.title': 'Support & Maintenance',
    'services.process.maintenance.description': 'We provide ongoing support and maintenance to ensure your solution continues to perform optimally and evolves with your business needs',

    'services.hero.title': 'Our Services',
    'services.hero.subtitle': 'We provide ethical software solutions tailored to your specific business needs',
    'services.cta.title': 'Ready to start your project?',
    'services.cta.subtitle': 'Get in touch today to discuss your requirements and how we can help you achieve your business goals',

    'detailed.services.software.title': 'Software Development',
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

    'projects.creditRequest.title': 'Credit Request Management Portal',
    'projects.creditRequest.description': 'Enterprise portal for managing credit requests, approvals, status tracking, and reporting.',
    'projects.creditRequest.longDescription': 'This web application was built using Spring Boot for the backend and Angular for the frontend. It integrates real-time data on credit requests, approvals, and status updates. The portal centralizes credit requests, reducing processing time and improving employee satisfaction. The application is secure, scalable, and user-friendly.',
    'projects.creditRequest.client': 'Financial Services',

    'projects.sftpSync.title': 'SFTP File System Sync Tool',
    'projects.sftpSync.description': 'Custom file management system for automating file transfers, archiving, synchronization, quick file, folder or content search.',
    'projects.sftpSync.longDescription': 'This file management system was developed using Spring Boot and Angular. It provides a user-friendly interface for managing files, folders, and content across multiple SFTP servers. The system includes features for automating file transfers, archiving, synchronization, and quick search. It improves efficiency and reduces manual file management tasks.',
    'projects.sftpSync.client': 'IT Services Provider',

    'projects.morpheusPlugin.title': 'Morpheus Custom Plugin Development',
    'projects.morpheusPlugin.description': 'Custom plugin development as enhancement of the Morpheus cloud management platform for automating cloud operations.',
    'projects.morpheusPlugin.longDescription': 'This project involved developing custom plugins for the Morpheus cloud management platform to automate cloud operations and enhance the platform\'s functionality. The plugins were built using Java integrating the Morpheus Plugin API to provide additional features, improve user experience, and streamline cloud management tasks.',
    'projects.morpheusPlugin.client': 'IT Services Provider',

    'projects.webshopERP.title': 'Webshop to ERP Data Synchronization',
    'projects.webshopERP.description': 'Automated data synchronization between a webshop and an ERP system to ensure up-to-date order processing and inventory management.',
    'projects.webshopERP.longDescription': 'This project involved developing custom scripts and workflows to synchronize data between a Shopware webshop and an BlueOffice ERP system. The solution is a middleware software with an API that connects the two systems, ensuring data consistency and regular updates. The synchronization process includes order processing, inventory management, and product updates.',
    'projects.webshopERP.client': 'Clothing Retailer & Processor',

    'projects.itMonitoring.title': 'IT Systems Monitoring Scripts',
    'projects.itMonitoring.description': 'Custom scripts for automated monitoring, maintenance, and reporting of critical IT systems and infrastructure.',
    'projects.itMonitoring.longDescription': 'This suite of scripts was developed to automate routine maintenance tasks, monitor system health, and generate reports for the IT department. Written primarily in Python, the scripts interact with various systems to collect data, perform maintenance tasks, and alert administrators of potential issues before they impact operations.',
    'projects.itMonitoring.client': 'IT Services Provider',

    'projects.orderPrinting.title': 'Order Printing Monitoring System',
    'projects.orderPrinting.description': 'Real-time monitoring system for tracking printing status of takeaway and delivery orders of restaurants and food production sites.',
    'projects.orderPrinting.longDescription': 'This monitoring system was developed for tracking the printing status of takeaway and delivery orders from restaurants. The system integrates with our customers email and printing systems to provide real-time updates on order status, printing errors, and order completion. The system introduces alerting to improve order processing efficiency, avoid unnecessary costs, and improve customer satisfaction.',
    'projects.orderPrinting.client': 'Restaurant Chain',

    'projects.meetingApproval.title': 'Meeting Approval PowerAutomate Workflow',
    'projects.meetingApproval.description': 'Automated workflow for approving or rejecting Microsoft Bookings meeting requests in Microsoft Teams.',
    'projects.meetingApproval.longDescription': 'This workflow automation was built using Microsoft PowerAutomate to streamline the process of approving or rejecting meeting requests made through Microsoft Bookings. The workflow integrates with Microsoft Teams to notify approvers of pending requests, gather feedback, and update the booking status in real-time. The automation reduces manual intervention, optimizes processes, improves traceability and improves efficiency.',
    'projects.meetingApproval.client': 'IT Services Provider',

    'projects.digitalInfrastructure.title': 'Digital Infrastructure Takeover | IT & Web',
    'projects.digitalInfrastructure.description': 'Complete takeover of website management and full IT offshoring for Kaiten Sushi restaurant chain.',
    'projects.digitalInfrastructure.longDescription': 'This project involved taking over the management of a restaurant chain\'s Wordpress website and providing full IT offshoring services as part of a long-term partnership and IT Single Point of Contact (SPOC) agreement. The services include website maintenance, updates, backups, security, and IT support for the restaurant\'s internal systems and devices across multiple locations. The partnership aims to improve IT efficiency, ensure availability, reduce costs, and ensure business continuity.',
    'projects.digitalInfrastructure.client': 'Restaurant Chain',

    'projects.orderPrintingAutomation.title': 'Order Printing Automation System',
    'projects.orderPrintingAutomation.description': 'Printing automation system for processing takeaway and delivery orders in restaurants.',
    'projects.orderPrintingAutomation.longDescription': 'This project involved an IoT-based printing automation system for processing takeaway & delivery orders in restaurants and production sites. The system integrates with the restaurant\'s ordering system to receive orders and send them to the corresponding printers in the kitchen or production area. The system reduces manual intervention, improves order processing efficiency, and ensures timely delivery of orders to customers.',
    'projects.orderPrintingAutomation.client': 'Restaurant Chain',

    'projects.itSupport.title': 'IT Support & Minor Web Improvements',
    'projects.itSupport.description': 'Complete takeover of website management and IT support for a physiotherapy practice.',
    'projects.itSupport.longDescription': 'This project involved taking over the management of a physiotherapy practice\'s website and providing IT support services as part of a long-term partnership and IT Single Point of Contact (SPOC) agreement. The services includes improvements to the website and IT support for the practice\'s internal systems and devices.',
    'projects.itSupport.client': 'Physiotherapy Practice',

    'projects.educationalKiosk.title': 'Interactive Educational Kiosk | In progress',
    'projects.educationalKiosk.description': 'Interactive touch-screen kiosk application with admin CMS for managing media.',
    'projects.educationalKiosk.longDescription': 'This project involved developing a customized interactive content management system for managing educational content and resources. The platform allows administrators to upload, organize, and distribute educational materials to visitors through an interactive touch-screen kiosk application. The system is user-friendly, secure, and scalable, providing a seamless experience for users.',
    'projects.educationalKiosk.client': 'Educational Institution',

    'projects.aiAppBackend.title': 'AI App Backend API Development',
    'projects.aiAppBackend.description': 'Backend development for an AI chatbot app to automate AI prompts, authoritation, document management, and more.',
    'projects.aiAppBackend.longDescription': 'This project involved developing the backend API for an AI chatbot application that automates AI prompts, authorization, document management, chats and more. The API was built Spring Boot and integrates with the visual Mobile App frontend (Flutter for iOS and Android). The backend API is secure, scalable, and reliable, ensuring smooth operation of the AI application.',
    'projects.aiAppBackend.client': 'Tech Startup',

    'projects.customWebshop.title': 'Custom Webshop Development | In progress',
    'projects.customWebshop.description': 'Custom webshop development for an online rice-based product retailer with product management, order processing, and payment, shipping, and inventory management.',
    'projects.customWebshop.longDescription': 'This project involved developing a custom webshop for an online retailer specializing in rice-based products. The webshop includes features for product management, order processing, payment, shipping, and inventory management. The platform is user-friendly, secure, and scalable, providing a seamless shopping experience for customers.',
    'projects.customWebshop.client': 'Food Manufacturer',

    'projects.taskManager.title': 'Task Manager | Calendar | Time Tracker Sync',
    'projects.taskManager.description': 'Synchonized update of tasks, services, appointments, and time tracking',
    'projects.taskManager.longDescription': 'This project involved developing an automation for synchronizing tasks, services, appointments, and time tracking between multiple systems. The integration connects a task management system (JIRA) with an automated calendar solution (Motion) and time tracking tool (Early) to ensure that all data is up-to-date and consistent across platforms. The automation reduces manual data entry, improves efficiency, ensures accurate time tracking & scheduling and allows focus on core business activities.',
    'projects.taskManager.client': 'IT Services Provider',

    'projects.jenkinsPipeline.title': 'Jenkins CI/CD Pipeline',
    'projects.jenkinsPipeline.description': 'Automated CI/CD pipeline for building, testing, and deploying software applications.',
    'projects.jenkinsPipeline.longDescription': 'This project involved setting up a Jenkins CI/CD pipeline to automate the building, testing, and deployment of software applications. The pipeline integrates with version control systems (Git) and orchestration platforms (Portainer) to automate the software development lifecycle. The CI/CD pipeline ensures faster deployment time, higher code quality, and improved collaboration among development teams.',
    'projects.jenkinsPipeline.client': 'Financial Services',

    'about.title': 'About Us',
    'about.intro': 'We are a team of passionate software developers committed to creating ethical software solutions that help businesses succeed.',
    'about.swiss': 'Swiss Quality Software',
    'about.values.title': 'Our Values',
    'about.values.fairness': 'We believe in fair and transparent pricing based on actual value delivered.',
    'about.values.empathy': 'We put ourselves in your shoes to truly understand your business needs.',
    'about.values.ethics': 'We maintain the highest ethical standards in everything we do.',
    'about.values.trust': 'We build long-term relationships based on trust and mutual respect.',

    'contact.title': 'Let\'s Build Something Great Together',
    'contact.subtitle': 'Ready to discuss your project? Schedule a no-obligation consultation with our team',
    'contact.booking': 'Book a Consultation',
    'contact.start': 'Start Your Project',
    'contact.partner': 'Your Contact Partner',

    'error.404': 'Page not found',
    'error.back': 'Back to home',

    'services.more': 'Learn More',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    'stats.successfulProjects': 'Successful Projects',
    'stats.yearsSoftwareExperience': 'Years of Software Experience',
    'stats.priceworthyImprovements': 'Priceworthy Improvements',
    'stats.possibilities': 'Endless Possibilities',

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

    'hero.title': 'Softwarelösungen für Euer Unternehmen',
    'hero.subtitle': 'Wir entwickeln Softwarelösungen und stellen Eure spezifischen Geschäftsanforderungen in' +
      ' den Mittelpunkt unseres Entwicklungsprozesses',
    'hero.cta': 'Dienstleistungen erkunden',

    'identify.title': 'Erkennt Ihr diese Herausforderungen?',
    'identify.subtitle': 'Viele Unternehmen stehen vor ähnlichen Herausforderungen. Prüft, ob Ihnen etwas davon bekannt vorkommt:',
    'identify.manual.question': 'Verbringt Ihr zu viel Zeit mit sich wiederholenden Aufgaben?',
    'identify.manual.description': 'Manuelle Dateneingabe, Berichtserstellung und andere repetitive Aufgaben verbrauchen wertvolle Mitarbeiterzeit, die besser für strategische Aktivitäten genutzt werden könnte.',
    'identify.integration.question': 'Kommunizieren Eure Systeme nicht effektiv miteinander?',
    'identify.integration.description': 'Verschiedene Abteilungen nutzen separate Systeme, die keine Daten austauschen, was zu Informationssilos führt und Doppelarbeit erfordert.',
    'identify.legacy.question': 'Schränkt veraltete Software Euer Unternehmenswachstum ein?',
    'identify.legacy.description': 'Eure Legacy-Systeme sind schwer zu warten, teuer im Betrieb und können mit Euren sich entwickelnden' +
      ' Geschäftsanforderungen nicht Schritt halten.',
    'identify.insights.question': 'Habt Ihr Schwierigkeiten, umsetzbare Erkenntnisse aus Euren Daten zu gewinnen?',
    'identify.insights.description': 'Trotz Datensammlung könnt Ihr nicht einfach auf Echtzeit-Business-Intelligence zugreifen, um fundierte Entscheidungen zu unterstützen.',
    'identify.scalability.question': 'Hat Eure aktuelle Infrastruktur Schwierigkeiten, mit dem Wachstum Schritt zu halten?',
    'identify.scalability.description': 'Mit der Expansion Eures Unternehmens haben Eure Systeme Schwierigkeiten, mit der steigenden' +
      ' Anzahl von Benutzern, Transaktionen oder Datenvolumen umzugehen.',
    'identify.security.question': 'Seid Ihr besorgt über Compliance- und Sicherheitsrisiken?',
    'identify.security.description': 'Die Einhaltung regulatorischer Anforderungen und der Schutz sensibler Daten vor Sicherheitsbedrohungen wird zunehmend herausfordernd.',
    'identify.cost.question': 'Sind Eure IT-Kosten unvorhersehbar oder höher als erwartet?',
    'identify.cost.description': 'Die Verwaltung und Wartung Eures aktuellen Technologie-Stacks führt zu unvorhersehbaren Ausgaben und' +
      ' höheren Gesamtbetriebskosten.',

    'business.questions.title': 'Klingen diese Herausforderungen vertraut?',
    'business.questions.subtitle': 'Viele Unternehmen kämpfen mit diesen häufigen Problemen, die durch massgeschneiderte Softwarelösungen behoben werden können.',
    'business.challenge.email.title': "Ihr ertrinkt in E-Mail-Threads und Tabellenkalkulationen",
    'business.challenge.email.description': "Die Verfolgung von Projekten, Genehmigungen und Aktualisierungen über E-Mails und freigegebene Dokumente führt zu Verwirrung, Versionskontrollproblemen und verpassten Fristen.",
    'business.challenge.data.title': "Eure Daten sind über verschiedene Tools verteilt",
    'business.challenge.data.description': "Informationen, die in mehreren nicht verbundenen Anwendungen gespeichert sind, machen es schwierig, ein vollständiges Bild zu erhalten, was zu Ineffizienzen und schlechten Entscheidungen führt.",
    'business.challenge.copy.title': "Ihr verschwendet Stunden mit dem Kopieren und Einfügen von Daten",
    'business.challenge.copy.description': "Manuelle Datenübertragungen zwischen verschiedenen Systemen oder Dokumenten schaffen Ineffizienzen, führen zu Fehlern und verhindern, dass Ihr Team sich auf strategische Aufgaben konzentriert.",
    'business.challenge.gut.title': "Ihr trifft Geschäftsentscheidungen basierend auf Bauchgefühl",
    'business.challenge.gut.description': "Ohne Echtzeitdaten und Analysen seid Ihr gezwungen, euch auf veraltete Berichte oder Annahmen" +
      " zu verlassen, was zu verpassten Chancen und kostspieligen Fehlern führt.",
    'business.challenge.admin.title': "Ihr verbringt mehr Zeit mit Verwaltung als mit eigentlicher Arbeit",
    'business.challenge.admin.description': "Das manuelle Ausfüllen von Formularen, das Erstellen von Berichten und das Organisieren von Dateien nimmt Zeit für Innovation, Problemlösung und Kundenservice in Anspruch.",
    'business.challenge.systems.title': "Eure Systeme kommunizieren nicht miteinander, was zu doppelter Arbeit führt",
    'business.challenge.systems.description': "Nicht verbundene Software zwingt Mitarbeiter dazu, dieselben Daten mehrfach einzugeben, was zu Inkonsistenzen, Fehlern und Ineffizienzen führt.",
    'business.challenge.excel.title': "Ihr nutzt Excel über seine Grenzen hinaus und dies kostet euch",
    'business.challenge.excel.description': "Die Verwendung von Excel als Datenbank, Workflow-Manager oder Berichtstool führt zu Versionsproblemen, manuellen Fehlern, mangelnder Zusammenarbeit und Sicherheitsrisiken.",

    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Wir bieten umfassende Softwarelösungen, die auf Eure spezifischen Geschäftsanforderungen zugeschnitten sind',
    'services.software.title': 'Softwareentwicklung',
    'services.software.description': 'Massgeschneiderte Softwarelösungen, die auf Eure einzigartigen Geschäftsherausforderungen und -chancen ausgerichtet sind',
    'services.automation.title': 'Workflow-Automatisierung',
    'services.integration.title': 'Schnittstellenentwicklung (APIs)',
    'services.integration.description': 'Entwicklung und Integration von Schnittstellen (APIs) zur nahtlosen Kommunikation zwischen Euren Systemen und Drittanbieterdiensten',
    'services.automation.description': 'Optimiert Eure Arbeitsabläufe und steigert die Effizienz mit individuellen' +
      ' Automatisierungslösungen',
    'services.scripting.title': 'Skripting & Integration',
    'services.scripting.description': 'Verbindt Eure Systeme und automatisiert wiederkehrende Aufgaben mit benutzerdefinierten' +
      ' Skripts & Integrationen',
    'services.cicd.title': 'CI/CD-Implementierung',
    'services.cicd.description': 'Implementiert kontinuierliche Integrations- und Bereitstellungspraktiken, um Euren' +
      ' Entwicklungszyklus zu beschleunigen',
    'services.api.title': 'Schnittstellenentwicklung (APIs)',
    'services.api.description': 'Erstellt robuste APIs, um eine nahtlose Kommunikation zwischen Euren Systemen und' +
      ' Drittanbieterdiensten zu ermöglichen',
    'services.offshoring.title': 'IT-Übernahme',
    'services.offshoring.description': 'Als Anschlusslösung bieten wir IT-Dienstleistungen an, damit unseren Kunden eine' +
      ' Ansprechperson für alle IT-Angelegenheiten zur Verfügung steht',
    'services.takeover.title': 'Projektübernahme',
    'services.takeover.description': 'Wir können bestehende Projekte übernehmen und warten sowie kontinuierliche Unterstützung und Weiterentwicklung bieten',

    'services.detailTitle': 'Unsere Dienstleistungen',
    'services.detailSubtitle': 'Was wir anbieten',
    'services.detailDescription': 'Entdeckt unser umfassendes Dienstleistungsangebot, das darauf abzielt, Euer Unternehmen zu' +
      ' transformieren',
    'services.software.benefit1': 'Maßgeschneiderte Lösungen, die auf Eure Geschäftsziele abgestimmt sind',
    'services.software.benefit2': 'Skalierbare Architektur für zukünftiges Wachstum',
    'services.software.benefit3': 'Intuitive Benutzeroberflächen für eine bessere Akzeptanz',
    'services.software.benefit4': 'Umfassender Support und Wartung',
    'services.software.process1.title': 'Anforderungsanalyse',
    'services.software.process1.description': 'Wir arbeiten eng mit Euch zusammen, um Eure Geschäftsanforderungen zu verstehen und klare' +
      ' Anforderungen zu definieren.',
    'services.software.process2.title': 'Design und Architektur',
    'services.software.process2.description': 'Cybethics erstellt eine robuste Architektur und ein intuitives Design für Eure Software.',
    'services.software.process3.title': 'Entwicklung und Testen',
    'services.software.process3.description': 'Wir implementieren die Lösung mit agilen Methoden und kontinuierlichem Testen.',
    'services.software.process4.title': 'Bereitstellung und Support',
    'services.software.process4.description': 'Reibungslose Bereitstellung und fortlaufenden Support für Eure Software.',
    'services.automation.benefit1': 'Erhöhte betriebliche Effizienz',
    'services.automation.benefit2': 'Reduzierung menschlicher Fehler',
    'services.automation.benefit3': 'Kosteneinsparungen durch optimierte Prozesse',
    'services.automation.benefit4': 'Verbesserte Datengenauigkeit und Konsistenz',
    'services.automation.process1.title': 'Prozessanalyse',
    'services.automation.process1.description': 'Wir analysieren Eure aktuellen Workflows, um Automatisierungsmöglichkeiten zu identifizieren.',
    'services.automation.process2.title': 'Lösungsdesign',
    'services.automation.process2.description': 'Cybethics entwirft eine Automatisierungslösung, die auf Eure spezifischen Prozesse' +
      ' zugeschnitten ist.',
    'services.automation.process3.title': 'Implementierung',
    'services.automation.process3.description': 'Wir entwickeln und implementieren die Automatisierungslösung mit minimalen Unterbrechungen.',
    'services.automation.process4.title': 'Messung und Optimierung',
    'services.automation.process4.description': 'Wir messen und optimieren die automatisierten Prozesse kontinuierlich für bessere Ergebnisse.',
    'services.integration.benefit1': 'Nahtloser Datenfluss zwischen Systemen',
    'services.integration.benefit2': 'Beseitigung von Datensilos',
    'services.integration.benefit3': 'Reduzierung von manueller oder doppelter Arbeit',
    'services.integration.benefit4': 'Erhöhte betriebliche Effizienz',
    'services.integration.process1.title': 'Systembewertung',
    'services.integration.process1.description': 'Wir analysieren Eure bestehenden Systeme und Integrationsanforderungen.',
    'services.integration.process2.title': 'Integrationsstrategie',
    'services.integration.process2.description': 'Unsere Experten entwickeln eine umfassende Integrationsstrategie und -architektur.',
    'services.integration.process3.title': 'Implementierung',
    'services.integration.process3.description': 'Wir implementieren die Integrationslösung mit den geeigneten Technologien.',
    'services.integration.process4.title': 'Testen und Optimierung',
    'services.integration.process4.description': 'Wir testen und optimieren das integrierte System gründlich auf Zuverlässigkeit.',
    'services.offshoring.benefit1': 'Eine Anlaufstelle für alle IT-Angelegenheiten',
    'services.offshoring.benefit2': 'Kombiniertes Optimierungs- und Kostensenkungspotenzial',
    'services.offshoring.benefit3': '24/7 Support-Option',
    'services.offshoring.benefit4': 'Kalkulierbare Kosten und Budgetsicherheit',
    'services.offshoring.process1.title': 'Bewertung',
    'services.offshoring.process1.description': 'Wir bewerten Eure aktuellen IT-Betriebe und Support-Anforderungen.',
    'services.offshoring.process2.title': 'Übergangsplanung',
    'services.offshoring.process2.description': 'Wir entwickeln einen detaillierten Übergangsplan für eine reibungslose Übergabe.',
    'services.offshoring.process3.title': 'Wissensübertragung',
    'services.offshoring.process3.description': 'Wir sorgen für eine umfassende Wissensübertragung von Eurem Team zu unserem.',
    'services.offshoring.process4.title': 'Laufender Betrieb',
    'services.offshoring.process4.description': 'Wir verwalten und verbessern kontinuierlich Eure IT-Betriebe und den Support.',
    'services.benefits': 'Hauptvorteile',
    'services.technologies': 'Technologien',
    'services.whyChooseUs': 'Warum wir?',
    'services.whyChooseUsDescription': 'Was von unseren Kunden bisher sehr geschätzt wurde, ist die Fähigkeit, uns in ihre' +
      ' Geschäftsprozesse einzufühlen und einzudenken, um massgeschneiderte Lösungen zu entwickeln, die ihre spezifischen' +
      ' Herausforderungen und Ziele ansprechen.',
    'services.getStarted': 'Loslegen',
    'services.implementationProcess': 'Unser Implementierungsprozess',

    'services.process.title': 'Unser Entwicklungsprozess',
    'services.process.subtitle': 'Wir folgen einem strukturierten Ansatz, um den erfolgreichen Abschluss Eures Projekts zu gewährleisten',
    'services.process.discovery.title': 'Entdeckung & Anforderungen',
    'services.process.discovery.description': 'Wir beginnen mit dem Verständnis Eure Geschäftsziele, Anforderungen und Erwartungen durch' +
      ' eingehende Beratungen und Analyse Eurer bestehenden Systeme',
    'services.process.planning.title': 'Planung & Architektur',
    'services.process.planning.description': 'Basierend auf den gesammelten Anforderungen erstellen wir einen detaillierten Projektplan, definieren die Architektur und legen Projektmeilensteine und Deliverables fest',
    'services.process.development.title': 'Entwicklung & Implementierung',
    'services.process.development.description': 'Wir entwickeln Eure Lösung mit den neuesten Technologien und Branchenstandards, mit' +
      ' regelmässigen Check-ins, um die Ausrichtung auf Eure Vision sicherzustellen',
    'services.process.testing.title': 'Testen & Qualitätssicherung',
    'services.process.testing.description': 'Jede Lösung durchläuft rigorose Tests, um Stabilität, Sicherheit und Leistung vor der' +
      ' Lieferung zu gewährleisten, einschliesslich Benutzerakzeptanztests mit Eurem Team',
    'services.process.deployment.title': 'Bereitstellung & Launch',
    'services.process.deployment.description': 'Wir stellen Eure Lösung sorgfältig bereit und sorgen für einen reibungslosen Übergang' +
      ' mit minimaler Unterbrechung Eurer Geschäftsabläufe',
    'services.process.maintenance.title': 'Support & Wartung',
    'services.process.maintenance.description': 'Wir bieten kontinuierlichen Support und Wartung, um sicherzustellen, dass Eure Lösung' +
      ' weiterhin optimal funktioniert und sich mit Euren Geschäftsanforderungen weiterentwickelt',

    'services.hero.title': 'Unsere Dienstleistungen',
    'services.hero.subtitle': 'Wir bieten ethische Softwarelösungen, die auf Eure spezifischen Geschäftsanforderungen zugeschnitten sind',
    'services.cta.title': 'Bereit, mit dem Projekt zu starten?',
    'services.cta.subtitle': 'Kontaktiert Uns uns noch heute, um Eure Anforderungen zu besprechen und wie wir Euch helfen können, Eure' +
      ' Geschäftsziele zu erreichen.',

    'detailed.services.software.title': 'Softwareentwicklung',
    'detailed.services.software.description': 'Wir entwickeln und programmieren massgeschneiderte Softwarelösungen, die auf Eure' +
      ' spezifischen Geschäftsherausforderungen eingehen und mit Euren strategischen Zielen im Einklang stehen. Unser individueller' +
      ' Entwicklungsansatz stellt sicher, dass Ihr genau das bekommt, was Euer Unternehmen benötigt.',
    'detailed.services.software.benefits': 'Perfekte Abstimmung auf Geschäftsprozesse, Skalierbarkeit, Wettbewerbsvorteil, vollständiges Eigentum an geistigem Eigentum sowie kontinuierliche Unterstützung und Wartung.',
    'detailed.services.software.process': 'Wir beginnen mit einer gründlichen Bedarfsanalyse, gefolgt von der Lösungskonzeption, iterativer Entwicklung, umfassenden Tests und Bereitstellung mit dediziertem Support nach dem Start.',

    'detailed.services.automation.title': 'Workflow-Automatisierung',
    'detailed.services.automation.description': 'Wir identifizieren und automatisieren repetitive, manuelle Prozesse, um die Effizienz zu steigern, Fehler zu reduzieren und Euer Team zu entlasten, damit es sich auf Aufgaben mit höherem Wert konzentrieren kann.',
    'detailed.services.automation.benefits': 'Verbesserte Effizienz, reduzierte Betriebskosten, minimierte menschliche Fehler, verbesserte Datengenauigkeit, schnellere Verarbeitungszeiten und bessere Ressourcenzuweisung.',
    'detailed.services.automation.process': 'Wir analysieren Eure Workflows, identifizieren Automatisierungspotenziale, entwerfen Lösungen mit geeigneten Tools, entwickeln und implementieren die Automatisierung und bieten Schulungen und Überwachung an.',

    'detailed.services.api.title': 'Schnittstellenentwicklung (APIs)',
    'detailed.services.api.description': 'Wir entwickeln robuste, sichere APIs, die eine nahtlose Integration zwischen Euren Systemen und Diensten von Drittanbietern ermöglichen und den Datenaustausch und die gemeinsame Nutzung von Funktionen erleichtern.',
    'detailed.services.api.benefits': 'Verbesserte Systemintegration, optimierter Datenfluss, bessere Integration von Drittanbieterdiensten, mobile App-Unterstützung und Förderung von Partner-Ökosystemen.',
    'detailed.services.api.process': 'Wir definieren die API-Anforderungen, konzipieren die Architektur und Endpunkte, entwickeln mit angemessener Sicherheit, testen gründlich auf Leistung und Zuverlässigkeit und bieten Dokumentation und laufende Unterstützung.',

    'detailed.services.scripting.title': 'Skripting & Integration',
    'detailed.services.scripting.description': 'Wir erstellen benutzerdefinierte Skripte zur Automatisierung von Aufgaben, zur Verbindung von Systemen und zur Optimierung von Abläufen, damit Eure bestehende Software effizienter zusammenarbeiten kann.',
    'detailed.services.scripting.benefits': 'Schnelle Implementierung, Kosteneffizienz, Automatisierung von Routineaufgaben, verbesserte Datenkonsistenz und erweiterte Funktionalität bestehender Systeme.',
    'detailed.services.scripting.process': 'Wir identifizieren Integrationsbedürfnisse, wählen geeignete Skriptsprachen und Tools aus,' +
      ' entwickeln und testen die Skripte, implementieren sie in Eurem Workflow und stellen Dokumentation und Support bereit.',

    'detailed.services.cicd.title': 'CI/CD-Implementierung',
    'detailed.services.cicd.description': 'Wir etablieren Pipelines für kontinuierliche Integration und kontinuierliche Bereitstellung, die Eure Software-Test- und Bereitstellungsprozesse automatisieren und zu schnelleren, zuverlässigeren Veröffentlichungen führen.',
    'detailed.services.cicd.benefits': 'Schnellere Markteinführung, reduzierte Bereitstellungsrisiken, verbesserte Codequalität, konsistente Release-Prozesse und verbesserte Teamzusammenarbeit.',
    'detailed.services.cicd.process': 'Wir bewerten Euren aktuellen Entwicklungsworkflow, konzipieren die CI/CD-Pipeline-Architektur, implementieren automatisierte Builds und Tests, richten die Bereitstellungsautomatisierung ein und schulen Euer Team in Best Practices.',

    'detailed.services.offshoring.title': 'IT-Übernahme',
    'detailed.services.offshoring.description': 'Wir helfen Ihnen, Offshore-Entwicklungsteams aufzubauen und zu verwalten, die Eure IT-Fähigkeiten erweitern und gleichzeitig Kosten senken und Zugang zu globalen Talentpools verschaffen.',
    'detailed.services.offshoring.benefits': 'Erhebliche Kosteneinsparungen, Zugang zu spezialisierten Fähigkeiten, Geschäftskontinuität, Skalierbarkeit und Fokus auf Kerngeschäftsaktivitäten.',
    'detailed.services.offshoring.process': 'Wir identifizieren Eure Offshoring-Bedürfnisse, beschaffen und überprüfen qualifizierte Fachkräfte, verwalten den Übergangsprozess, etablieren Kommunikationsprotokolle und bieten laufende Managementunterstützung.',

    'detailed.process.title': 'Unser Implementierungsprozess',
    'detailed.process.description': 'Wir folgen einem strukturierten Ansatz, um die erfolgreiche Bereitstellung all unserer Dienste zu gewährleisten',

    'projects.title': 'Aktuelle Projekte',
    'projects.subtitle': 'Entdeckt einige unserer jüngsten Arbeiten und seht Ihr, wie wir Unternehmen wie dem Euren geholfen haben',
    'projects.viewall': 'Alle Projekte anzeigen',
    'projects.request': 'Ähnliches Projekt anfragen',
    'projects.viewProject': 'Projekt ansehen',

    'projects.creditRequest.title': 'Kreditanfragen-Managementportal',
    'projects.creditRequest.description': 'Unternehmensportal zur Verwaltung von Kreditanforderungen, Genehmigungen, Statusverfolgung und Berichterstattung.',
    'projects.creditRequest.longDescription': 'Diese Webanwendung wurde mit Spring Boot für das Backend und Angular für das Frontend entwickelt. Sie integriert Echtzeitdaten zu Kreditanforderungen, Genehmigungen und Statusaktualisierungen. Das Portal zentralisiert Kreditanforderungen, reduziert die Bearbeitungszeit und verbessert die Mitarbeiterzufriedenheit. Die Anwendung ist sicher, skalierbar und benutzerfreundlich.',
    'projects.creditRequest.client': 'Finanzdienstleistungen',

    'projects.sftpSync.title': 'SFTP-Dateisystem-Synchronisationstool',
    'projects.sftpSync.description': 'Benutzerdefiniertes Dateiverwaltungssystem zur Automatisierung von Dateiübertragungen, Archivierung, Synchronisation und schnellen Datei-, Ordner- oder Inhaltssuchen.',
    'projects.sftpSync.longDescription': 'Dieses Dateiverwaltungssystem wurde mit Spring Boot und Angular entwickelt. Es bietet eine benutzerfreundliche Oberfläche zur Verwaltung von Dateien, Ordnern und Inhalten über mehrere SFTP-Server hinweg. Das System umfasst Funktionen zur Automatisierung von Dateiübertragungen, Archivierung, Synchronisation und schnellen Suche. Es verbessert die Effizienz und reduziert manuelle Dateiverwaltungsaufgaben.',
    'projects.sftpSync.client': 'IT-Dienstleister',

    'projects.morpheusPlugin.title': 'Morpheus Custom Plugin Entwicklung',
    'projects.morpheusPlugin.description': 'Entwicklung eines benutzerdefinierten Plugins zur Erweiterung der Morpheus-Cloud-Management-Plattform zur Automatisierung von Cloud-Operationen.',
    'projects.morpheusPlugin.longDescription': 'Dieses Projekt umfasste die Entwicklung benutzerdefinierter Plugins für die Morpheus-Cloud-Management-Plattform zur Automatisierung von Cloud-Operationen und zur Verbesserung der Funktionalität der Plattform. Die Plugins wurden mit Java entwickelt und integrieren die Morpheus Plugin API, um zusätzliche Funktionen bereitzustellen, die Benutzererfahrung zu verbessern und Cloud-Management-Aufgaben zu optimieren.',
    'projects.morpheusPlugin.client': 'IT-Dienstleister',

    'projects.webshopERP.title': 'Webshop-zu-ERP-Daten-Synchronisation',
    'projects.webshopERP.description': 'Automatisierte Datensynchronisation zwischen einem Webshop und einem ERP-System, um eine aktuelle Auftragsabwicklung und Bestandsverwaltung sicherzustellen.',
    'projects.webshopERP.longDescription': 'Dieses Projekt umfasste die Entwicklung benutzerdefinierter Skripte und Workflows zur Synchronisation von Daten zwischen einem Shopware-Webshop und einem BlueOffice-ERP-System. Die Lösung ist eine Middleware-Software mit einer API, die die beiden Systeme verbindet und Datenkonsistenz und regelmässige Updates sicherstellt. Der Synchronisationsprozess umfasst die Auftragsabwicklung, Bestandsverwaltung und Produktaktualisierungen.',
    'projects.webshopERP.client': 'Bekleidungshändler & Verarbeiter',

    'projects.itMonitoring.title': 'IT-Systemüberwachungsskripte',
    'projects.itMonitoring.description': 'Benutzerdefinierte Skripte zur automatisierten Überwachung, Wartung und Berichterstattung kritischer IT-Systeme und Infrastrukturen.',
    'projects.itMonitoring.longDescription': 'Diese Suite von Skripten wurde entwickelt, um routinemässige Wartungsaufgaben zu automatisieren, die Systemgesundheit zu überwachen und Berichte für die IT-Abteilung zu erstellen. Die Skripte, die hauptsächlich in Python geschrieben sind, interagieren mit verschiedenen Systemen, um Daten zu sammeln, Wartungsaufgaben durchzuführen und Administratoren auf potenzielle Probleme aufmerksam zu machen, bevor sie den Betrieb beeinträchtigen.',
    'projects.itMonitoring.client': 'IT-Dienstleister',

    'projects.orderPrinting.title': 'Bestelldruck-Überwachungssystem',
    'projects.orderPrinting.description': 'Echtzeit-Überwachungssystem zur Verfolgung des Druckstatus von Takeaway- und Lieferbestellungen von Restaurants und Lebensmittelproduktionsstätten.',
    'projects.orderPrinting.longDescription': 'Dieses Überwachungssystem wurde entwickelt, um den Druckstatus von Takeaway- und Lieferbestellungen von Restaurants zu verfolgen. Das System integriert sich in die E-Mail- und Drucksysteme unserer Kunden, um Echtzeit-Updates zum Bestellstatus, Druckfehlern und zur Auftragsfertigstellung bereitzustellen. Das System führt Benachrichtigungen ein, um die Auftragsabwicklungseffizienz zu verbessern, unnötige Kosten zu vermeiden und die Kundenzufriedenheit zu steigern.',
    'projects.orderPrinting.client': 'Restaurantkette',

    'projects.meetingApproval.title': 'Meeting Genehmigungs-Workflow mit PowerAutomate',
    'projects.meetingApproval.description': 'Automatisierter Workflow zur Genehmigung oder Ablehnung von Microsoft Bookings-Meeting-Anfragen in Microsoft Teams.',
    'projects.meetingApproval.longDescription': 'Diese Workflow-Automatisierung wurde mit Microsoft PowerAutomate entwickelt, um den Prozess der Genehmigung oder Ablehnung von Meeting-Anfragen, die über Microsoft Bookings gestellt werden, zu optimieren. Der Workflow integriert sich in Microsoft Teams, um Genehmiger über ausstehende Anfragen zu benachrichtigen, Feedback zu sammeln und den Buchungsstatus in Echtzeit zu aktualisieren. Die Automatisierung reduziert manuelle Eingriffe, optimiert Prozesse, verbessert die Nachverfolgbarkeit und steigert die Effizienz.',
    'projects.meetingApproval.client': 'IT-Dienstleister',

    'projects.digitalInfrastructure.title': 'Digitale Infrastrukturübernahme | IT & Web',
    'projects.digitalInfrastructure.description': 'Komplette Übernahme des Website-Managements und vollständige IT-Übernahme für die' +
      ' Kaiten Sushi-Restaurantkette.',
    'projects.digitalInfrastructure.longDescription': 'Dieses Projekt umfasste die Übernahme des Managements der Wordpress-Website einer' +
      ' Restaurantkette und die Bereitstellung vollständiger IT-Dienstleistungen im Rahmen einer langfristigen Partnerschaft und' +
      ' einer IT-Single-Point-of-Contact (SPOC)-Vereinbarung. Die Dienstleistungen umfassen Website-Wartung, Updates, Backups, Sicherheit und IT-Support für die internen Systeme und Geräte des Restaurants an mehreren Standorten. Die Partnerschaft zielt darauf ab, die IT-Effizienz zu verbessern, die Verfügbarkeit sicherzustellen, Kosten zu senken und die Geschäftskontinuität zu gewährleisten.',
    'projects.digitalInfrastructure.client': 'Restaurantkette',

    'projects.orderPrintingAutomation.title': 'Bestelldruck-Automatisierungssystem',
    'projects.orderPrintingAutomation.description': 'Druckautomatisierungssystem zur Verarbeitung von Takeaway- und Lieferbestellungen in Restaurants.',
    'projects.orderPrintingAutomation.longDescription': 'Dieses Projekt umfasste ein IoT-basiertes Druckautomatisierungssystem zur Verarbeitung von Takeaway- und Lieferbestellungen in Restaurants und Produktionsstätten. Das System integriert sich in das Bestellsystem des Restaurants, um Bestellungen zu empfangen und an die entsprechenden Drucker in der Küche oder im Produktionsbereich zu senden. Das System reduziert manuelle Eingriffe, verbessert die Effizienz der Auftragsabwicklung und stellt sicher, dass Bestellungen rechtzeitig an die Kunden geliefert werden.',
    'projects.orderPrintingAutomation.client': 'Restaurantkette',

    'projects.itSupport.title': 'IT-Support & kleinere Web-Verbesserungen',
    'projects.itSupport.description': 'Komplette Übernahme des Website-Managements und IT-Support für eine Physiotherapiepraxis.',
    'projects.itSupport.longDescription': 'Dieses Projekt umfasste die Übernahme des Managements der Website einer Physiotherapiepraxis und die Bereitstellung von IT-Support-Dienstleistungen im Rahmen einer langfristigen Partnerschaft und einer IT-Single-Point-of-Contact (SPOC)-Vereinbarung. Die Dienstleistungen umfassen Verbesserungen an der Website und IT-Support für die internen Systeme und Geräte der Praxis.',
    'projects.itSupport.client': 'Physiotherapiepraxis',

    'projects.educationalKiosk.title': 'Interaktiver Bildungskiosk | In Arbeit',
    'projects.educationalKiosk.description': 'Interaktive Touchscreen-Kiosk-Anwendung mit Admin-CMS zur Verwaltung von Medien.',
    'projects.educationalKiosk.longDescription': 'Dieses Projekt umfasste die Entwicklung eines massgeschneiderten interaktiven Content-Management-Systems zur Verwaltung von Bildungsinhalten und -ressourcen. Die Plattform ermöglicht es Administratoren, Bildungsinhalte hochzuladen, zu organisieren und an Besucher über eine interaktive Touchscreen-Kiosk-Anwendung zu verteilen. Das System ist benutzerfreundlich, sicher und skalierbar und bietet den Benutzern ein nahtloses Erlebnis.',
    'projects.educationalKiosk.client': 'Bildungseinrichtung',

    'projects.aiAppBackend.title': 'Backend-API-Entwicklung für AI-App',
    'projects.aiAppBackend.description': 'Backend-Entwicklung für eine AI-Chatbot-App zur Automatisierung von AI-Eingabeaufforderungen, Autorisierung, Dokumentenverwaltung und mehr.',
    'projects.aiAppBackend.longDescription': 'Dieses Projekt umfasste die Entwicklung der Backend-API für eine AI-Chatbot-Anwendung, die AI-Eingabeaufforderungen, Autorisierung, Dokumentenverwaltung, Chats und mehr automatisiert. Die API wurde mit Spring Boot entwickelt und integriert sich in das visuelle Mobile App-Frontend (Flutter für iOS und Android). Die Backend-API ist sicher, skalierbar und zuverlässig und stellt den reibungslosen Betrieb der AI-Anwendung sicher.',
    'projects.aiAppBackend.client': 'Tech-Startup',

    'projects.customWebshop.title': 'Benutzerdefinierter Webshop | In Arbeit',
    'projects.customWebshop.description': 'Entwicklung eines benutzerdefinierten Webshops für einen Online-Händler von reisbasierten Produkten mit Produktmanagement, Auftragsabwicklung sowie Zahlungs-, Versand- und Bestandsverwaltung.',
    'projects.customWebshop.longDescription': 'Dieses Projekt umfasste die Entwicklung eines benutzerdefinierten Webshops für einen Online-Händler, der sich auf reisbasierte Produkte spezialisiert hat. Der Webshop umfasst Funktionen für Produktmanagement, Auftragsabwicklung, Zahlung, Versand und Bestandsverwaltung. Die Plattform ist benutzerfreundlich, sicher und skalierbar und bietet den Kunden ein nahtloses Einkaufserlebnis.',
    'projects.customWebshop.client': 'Lebensmittelhersteller',

    'projects.taskManager.title': 'Task Manager | Kalender | Zeiterfassungssynchronisation',
    'projects.taskManager.description': 'Synchronisierte Aktualisierung von Aufgaben, Dienstleistungen, Terminen und Zeiterfassung',
    'projects.taskManager.longDescription': 'Dieses Projekt umfasste die Entwicklung einer Automatisierung zur Synchronisation von Aufgaben, Dienstleistungen, Terminen und Zeiterfassung zwischen mehreren Systemen. Die Integration verbindet ein Aufgabenmanagementsystem (JIRA) mit einer automatisierten Kalendarlösung (Motion) und einem Zeiterfassungstool (Early), um sicherzustellen, dass alle Daten aktuell und konsistent über die Plattformen hinweg sind. Die Automatisierung reduziert manuelle Dateneingaben, verbessert die Effizienz, stellt eine genaue Zeiterfassung und Terminplanung sicher und ermöglicht den Fokus auf Kernaktivitäten des Unternehmens.',
    'projects.taskManager.client': 'IT-Dienstleister',

    'projects.jenkinsPipeline.title': 'Jenkins CI/CD-Pipeline',
    'projects.jenkinsPipeline.description': 'Automatisierte CI/CD-Pipeline zum Erstellen, Testen und Bereitstellen von Softwareanwendungen.',
    'projects.jenkinsPipeline.longDescription': 'Dieses Projekt umfasste die Einrichtung einer Jenkins CI/CD-Pipeline zur Automatisierung des Erstellens, Testens und Bereitstellens von Softwareanwendungen. Die Pipeline integriert sich in Versionskontrollsysteme (Git) und Orchestrierungsplattformen (Portainer), um den Softwareentwicklungszyklus zu automatisieren. Die CI/CD-Pipeline sorgt für schnellere Bereitstellungszeiten, höhere Codequalität und verbesserte Zusammenarbeit zwischen Entwicklungsteams.',
    'projects.jenkinsPipeline.client': 'Finanzdienstleistungen',

    'about.title': 'Über uns',
    'about.intro': 'Wir sind ein Team leidenschaftlicher Softwareentwickler, die sich der Erstellung ethischer Softwarelösungen verschrieben haben, die Unternehmen zum Erfolg verhelfen',
    'about.swiss': 'Schweizer Qualitätssoftware',
    'about.values.title': 'Unsere Werte',
    'about.values.fairness': 'Wir glauben an faire und transparente Preise, die auf dem tatsächlich gelieferten Wert basieren',
    'about.values.empathy': 'Wir versetzen uns in Eure Lage, um Eure Geschäftsanforderungen wirklich zu verstehen',
    'about.values.ethics': 'Wir halten in allem, was wir tun, die höchsten ethischen Standards ein',
    'about.values.trust': 'Wir bauen langfristige Beziehungen auf, die auf Vertrauen und gegenseitigem Respekt basieren',

    'contact.title': 'Lasst uns gemeinsam etwas Grossartiges bauen',
    'contact.subtitle': 'Bereit, Euer Projekt zu besprechen? Vereinbaret eine unverbindliche Beratung mit uns',
    'contact.booking': 'Beratungstermin buchen',
    'contact.start': 'Projekt starten',
    'contact.partner': 'Deine Ansprechperson',

    'error.404': 'Seite nicht gefunden',
    'error.back': 'Zurück zur Startseite',

    'services.more': 'Mehr erfahren',
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.privacy': 'Datenschutzerklärung',
    'footer.terms': 'Nutzungsbedingungen',

    'stats.successfulProjects': 'Erfolgreiche Projekte',
    'stats.yearsSoftwareExperience': 'Jahre Software-Erfahrung',
    'stats.priceworthyImprovements': 'Preiswerte Verbesserungen',
    'stats.possibilities': 'Unbegrenzte Möglichkeiten',

    'common.problems.title': 'Häufige Geschäftsherausforderungen',
    'common.problems.subtitle': 'Die Identifizierung dieser Herausforderungen ist der erste Schritt zu eurer Lösung',
    'common.problems.inefficiency.title': 'Manuelle & ineffiziente Prozesse',
    'common.problems.inefficiency.description': 'Mitarbeiter verbringen zu viel Zeit mit sich wiederholenden Aufgaben, die automatisiert werden könnten, was die Produktivität senkt und die Kosten erhöht.',
    'common.problems.integration.title': 'Systemintegrationsprobleome',
    'common.problems.integration.description': 'Mehrere Systeme, die nicht miteinander kommunizieren, führen zu Datensilos und Doppelarbeit.',
    'common.problems.legacy.title': 'Einschränkungen durch Legacy-Systeme',
    'common.problems.legacy.description': 'Veraltete Software, die das Geschäftswachstum einschränkt, Sicherheitsrisiken erhöht und teuer in der Wartung ist.',
    'common.problems.insights.title': 'Mangel an Dateneinblicken',
    'common.problems.insights.description': 'Unfähigkeit, auf Echtzeit-Business-Intelligence und -Analytik zuzugreifen, um fundierte Entscheidungen zu treffen.',
    'common.problems.scalability.title': 'Skalierbarkeitsherausforderungen',
    'common.problems.scalability.description': 'Aktuelle Systeme haben Schwierigkeiten, mit dem Wachstum von Benutzern, Transaktionen oder Datenvolumen Schritt zu halten, wenn Euer Unternehmen expandiert.',
    'common.problems.compliance.title': 'Compliance- und Sicherheitsbedenken',
    'common.problems.compliance.description': 'Schwierigkeiten bei der Erfüllung gesetzlicher Anforderungen und beim Schutz sensibler Daten vor Sicherheitsbedrohungen.',

    'faq.title': 'Häufig gestellte Fragen',
    'faq.subtitle': 'Findet Antworten auf häufige Fragen zu unseren Softwareentwicklungsdienstleistungen und -prozessen',
    'faq.categories.all': 'Alle Fragen',
    'faq.categories.process': 'Prozess',
    'faq.categories.technical': 'Technisch',
    'faq.categories.business': 'Geschäftlich',

    'faq.process.question': 'Wie sieht Euer Softwareentwicklungsprozess aus?',
    'faq.process.answer': 'Unser Entwicklungsprozess folgt einem strukturierten Ansatz: Entdeckung & Anforderungen, Planung &' +
      ' Architektur, Entwicklung & Implementierung, Tests & Qualitätssicherung, Bereitstellung & Start und fortlaufender Support &' +
      ' Wartung. Wir halten Euch in jeder Phase involviert, um sicherzustellen, dass die Lösung Euren Erwartungen entspricht.',

    'faq.pricing.question': 'Wie bestimmt Ihr  die Kosten eines Projekts?',
    'faq.pricing.answer': 'Die Projektkosten werden auf Basis mehrerer Faktoren bestimmt: Projektumfang und Komplexität, Zeitvorgaben, verwendete Technologien und benötigtes Mass an fortlaufendem Support. Wir bieten transparente Preise ohne versteckte Kosten und können mit Festpreis- oder Zeit-und-Material-Modellen arbeiten, je nach Euren Bedürfnissen.',

    'faq.timeline.question': 'Wie lange dauert typischerweise die Fertigstellung eines Softwareprojekts?',
    'faq.timeline.answer': 'Projektzeitpläne variieren erheblich je nach Umfang und Komplexität. Kleine bis mittlere Projekte können 2-4' +
      ' Monate dauern, während grössere Unternehmenslösungen 6-12 Monate oder länger benötigen können. Wir geben realistische' +
      ' Zeitschätzungen während der Planungsphase und halten Euch während der gesamten Entwicklung über den Fortschritt auf dem Laufenden.',

    'faq.technologies.question': 'Mit welchen Technologien und Programmiersprachen arbeitet Ihr?',
    'faq.technologies.answer': 'Wir arbeiten mit einer breiten Palette von Technologien, darunter: Front-End (React, Angular, Vue.js), Back-End (Node.js, .NET, Python, Java), Mobile (React Native, Flutter), Datenbanken (SQL, NoSQL), Cloud-Plattformen (AWS, Azure, Google Cloud) und DevOps-Tools (Docker, Kubernetes, Jenkins). Wir wählen den besten Technologie-Stack für Eure spezifischen Projektanforderungen.',

    'faq.maintenance.question': 'Bietet Ihr nach dem Launch fortlaufende Wartung und Support an?',
    'faq.maintenance.answer': 'Ja, wir bieten verschiedene Wartungs- und Support-Pakete an, um sicherzustellen, dass Eure Software weiterhin optimal funktioniert. Diese können Fehlerbehebungen, Sicherheitsupdates, Leistungsoptimierungen, Funktionserweiterungen und Benutzerunterstützung umfassen. Wir können ein Support-Paket auf Eure spezifischen Bedürfnisse und Euer Budget zuschneiden.',

    'faq.ownership.question': 'Wer besitzt die Rechte am geistigen Eigentum der entwickelten Software?',
    'faq.ownership.answer': 'Nach der abschliessenden Zahlung behaltt Ihr alle Rechte am geistigen Eigentum der für Euch entwickelten' +
      ' kundenspezifischen Software. Dies umfasst Quellcode, Designelemente und Dokumentation. Wir sind der Meinung, dass Ihr, wenn Ihr' +
      ' für eine massgeschneiderte Entwicklung bezahlt, die Ergebnisse vollständig besitzen solltet. Allerdings behalten wir uns das Recht' +
      ' vor, den entwickelten Code teilweise für weitere Projekte oder als Teil unserer internen Bibliothek zu verwenden. Wir können' +
      ' nicht vergessen, was wir gelernt haben und jedes Mal von vorne anfangen nur weil wir es schon einmal gemacht haben.',

    'faq.communication.question': 'Wie handhabt Ihr Projektkommunikation und Updates?',
    'faq.communication.answer': 'Wir pflegen während des gesamten Projekts regelmässige Kommunikation über Eure bevorzugten Kanäle' +
      ' (E-Mail, Telefon, Videoanrufe, Projektmanagement-Tools). Wir planen regelmässige Fortschrittsberichte, führen Sprint-Demos für' +
      ' iterative Projekte durch und bieten Zugang zu Projekt-Tracking-Tools, damit Ihr den Fortschritt in Echtzeit überwachen könnt.',

    'faq.cta.title': 'Noch Fragen?',
    'faq.cta.subtitle': 'Unser Team steht bereit, um alle weiteren Fragen zu beantworten, die Ihr zu unseren Dienstleistungen oder Euren' +
      ' spezifischen Projektanforderungen habt.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
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
    <LanguageContext.Provider value={{language, toggleLanguage, t, setLanguage}}>
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
