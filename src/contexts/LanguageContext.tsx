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
    'hero.subtitle': 'We build software solutions with integrity, placing ethics and your specific business needs at the forefront of the' +
      ' development process',
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

    'services.detailTitle': 'Services',
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
    'services.software.process2.description': 'Creating a robust architecture and intuitive design for your software.',
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
    'services.automation.process2.description': 'Cybethics designs an automation solution tailored to your specific processes.',
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
    'services.integration.process2.description': 'Cybethics develops a comprehensive integration strategy and architecture.',
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
    'services.whyChooseUsDescription': 'We combine deep expertise with a client-centered approach to deliver solutions that truly' +
      ' transform your business operations.',
    'services.getStarted': 'Get Started',
    'services.implementationProcess': 'Implementation Process',

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

    'services.title': 'Services',
    'services.subtitle': 'We offer comprehensive software solutions tailored to meet your specific business requirements',
    'services.scripting.title': 'Scripting & Integration',
    'services.scripting.description': 'Connect your systems and automate repetitive tasks with custom scripts and integrations',
    'services.cicd.title': 'DevOps',
    'services.cicd.description': 'Implement continuous integration and deployment practices to accelerate your development lifecycle',
    'services.api.title': 'API Development',
    'services.api.description': 'Create robust APIs to enable seamless communication between your systems and third-party services',
    'services.takeover.title': 'Project Takeover',
    'services.takeover.description': 'We can take over and maintain existing projects, providing continued support and development',

    'services.process.title': 'Development Process',
    'services.process.subtitle': 'We follow a structured approach to ensure successful delivery of your project',
    'services.process.discovery.title': 'Discovery & Requirements',
    'services.process.discovery.description': 'We start by understanding your business goals, requirements, and expectations through in-depth consultations and analysis of your existing systems',
    'services.process.planning.title': 'Planning & Architecture',
    'services.process.planning.description': 'Based on the gathered requirements, we create a detailed project plan, define the architecture, and establish project milestones and deliverables',
    'services.process.development.title': 'Development & Implementation',
    'services.process.development.description': 'We develop your solution using the latest technologies and industry' +
      ' best practices, with regular check-ins to ensure alignment with your vision',
    'services.process.testing.title': 'Testing & Quality Assurance',
    'services.process.testing.description': 'Every solution undergoes rigorous testing to ensure stability, security, and performance before delivery, including user acceptance testing with your team',
    'services.process.deployment.title': 'Deployment & Launch',
    'services.process.deployment.description': 'We carefully deploy your solution, ensuring a smooth transition and minimal disruption to your business operations',
    'services.process.maintenance.title': 'Support & Maintenance',
    'services.process.maintenance.description': 'We provide ongoing support and maintenance to ensure your solution continues to perform optimally and evolves with your business needs',

    'services.hero.title': 'Services',
    'services.hero.subtitle': 'We provide ethical software solutions tailored to your specific business needs',
    'services.cta.title': 'Ready to start your project?',
    'services.cta.subtitle': 'Get in touch today to discuss your requirements and how we can help you achieve your business goals',

    'detailed.services.software.title': 'Software Development',
    'detailed.services.software.description': 'We design and build tailored software solutions that address your specific business' +
      ' challenges and align with your strategic goals. The custom development approach ensures you get exactly what your business needs.',
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

    'detailed.services.cicd.title': 'DevOps',
    'detailed.services.cicd.description': 'We establish continuous integration and continuous delivery pipelines that automate your software testing and deployment processes, leading to faster, more reliable releases.',
    'detailed.services.cicd.benefits': 'Faster time to market, reduced deployment risks, improved code quality, consistent release processes, and enhanced team collaboration.',
    'detailed.services.cicd.process': 'We assess your current development workflow, design the DevOps pipeline architecture, implement' +
      ' the automated builds and tests, set up deployment automation, and train your team on best practices.',

    'detailed.services.offshoring.title': 'IT Offshoring',
    'detailed.services.offshoring.description': 'We help you establish and manage offshore development teams that extend your IT capabilities while reducing costs and accessing global talent pools.',
    'detailed.services.offshoring.benefits': 'Significant cost savings, access to specialized skills, business continuity, scalability, and focus on core business activities.',
    'detailed.services.offshoring.process': 'We identify your offshoring needs, source and vet qualified professionals, manage the transition process, establish communication protocols, and provide ongoing management support.',

    'detailed.process.title': 'Implementation Process',
    'detailed.process.description': 'We follow a structured approach to ensure successful delivery of all services',

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

    'projects.jenkinsPipeline.title': 'Jenkins DevOps Pipeline',
    'projects.jenkinsPipeline.description': 'Automated DevOps pipeline for building, testing, and deploying software applications.',
    'projects.jenkinsPipeline.longDescription': 'This project involved setting up a Jenkins DevOps pipeline to automate the building,' +
      ' testing, and deployment of software applications. The pipeline integrates with version control systems (Git) and orchestration' +
      ' platforms (Portainer) to automate the software development lifecycle. The DevOps pipeline ensures faster deployment time, higher' +
      ' code quality, and improved collaboration among development teams.',
    'projects.jenkinsPipeline.client': 'Financial Services',

    'about.story.title': 'Story',
    'about.story.description': 'The name Cybethics combines \'Cyber\' and \'Ethics\' because ethics means something to us. It\'s at the core of how we approach every project and client relationship',
    'about.story.cyber.title': 'Cyber',
    'about.story.cyber.description': 'Representing the expertise in software development, automation, and digital solutions',
    'about.story.ethics.title': 'Ethics',
    'about.story.ethics.description': 'Reflecting the commitment to fairness, transparency, and doing what\'s right for our clients',

    'about.title': 'About Us',
    'about.intro': 'We are a team of passionate software developers committed to creating ethical software solutions that help businesses succeed',
    'about.swiss': 'Swiss Quality Software',
    'about.values.title': 'Values',
    'about.values.description': 'Core values that guide our work and relationships with clients, partners, and team members',
    'about.values.fairnessTitle': 'Fairness',
    'about.values.fairness': 'We believe in fair and transparent pricing based on actual value delivered',
    'about.values.empathyTitle': 'Empathy',
    'about.values.empathy': 'We put ourselves in your shoes to truly understand your business needs',
    'about.values.ethicsTitle': 'Ethics',
    'about.values.ethics': 'We maintain the highest ethical standards in everything we do',
    'about.values.trustTitle': 'Trust',
    'about.values.trust': 'We build long-term relationships based on trust and mutual respect',
    'about.approach.title': 'Approach',
    'about.approach.description': 'We take a client-centered approach to software development, focusing on your unique business needs and goals',
    'about.approach.listenFirst.title': 'Listen',
    'about.approach.listenFirst.description': 'We start by listening to your challenges, goals, and vision for the project',
    'about.approach.rightSized.title': 'Develop',
    'about.approach.rightSized.description': 'We tailor solutions to fit your specific business requirements and budget',
    'about.approach.transparent.title': 'Involve',
    'about.approach.transparent.description': 'We keep you informed and involved throughout the development process',
    'about.approach.longTerm.title': 'Maintain',
    'about.approach.longTerm.description': 'We aim to build a lasting partnership that supports your business growth and success',
    'about.approach.innovative': 'Innovative',
    'about.approach.practical': 'Practical',
    'about.approach.collaborative': 'Collaborative',
    'about.approach.efficient': 'Efficient',

    'contact.title': 'Let\'s Build Something Great Together',
    'contact.subtitle': 'Ready to discuss your project? Schedule a no-obligation consultation with us',
    'contact.booking': 'Book a Consultation',
    'contact.start': 'Start Your Project',
    'contact.partner': 'Your Contact Partner',

    'error.404': 'Page not found',
    'error.back': 'Back to home',

    'services.more': 'Learn More',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.about': 'Crafting customized digital solutions with integrity, putting ethics at the core of the development approach',

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
    'faq.subtitle': 'Find answers to common questions about software development services and processes',
    'faq.categories.all': 'All Questions',
    'faq.categories.process': 'Process',
    'faq.categories.technical': 'Technical',
    'faq.categories.business': 'Business',

    'faq.process.question': 'What is your software development process?',
    'faq.process.answer': 'The development process follows a structured approach: Discovery & Requirements, Planning & Architecture,' +
      ' Development & Implementation, Testing & Quality Assurance, Deployment & Launch, and ongoing Support & Maintenance. We keep you involved at every stage to ensure the solution meets your expectations.',

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
    'faq.cta.subtitle': 'We are ready to answer any additional questions you might have about the services or your specific project' +
      ' needs.',

    'faq.solutions.viewDetails': 'View Details',
    'faq.solutions.commonProblems': 'Common Problems',
    'faq.solutions.ourSolution': 'Solution',
    'faq.solutions.keyBenefits': 'Key Benefits',

    'faq.solutions.legacy.title': 'Legacy Systems Are Holding Your Business Back',
    'faq.solutions.legacy.problems.1': 'Outdated software slows down processes and increases maintenance costs.',
    'faq.solutions.legacy.problems.2': 'Security risks rise due to lack of updates and patches.',
    'faq.solutions.legacy.problems.3': 'Scalability is limited as the business grows.',
    'faq.solutions.legacy.problems.4': 'Integration with modern systems is difficult and time-consuming.',
    'faq.solutions.legacy.problems.5': 'User experience and productivity suffer from outdated technology.',

    'faq.solutions.legacy.solution': 'Modern software solutions replace outdated systems, improve efficiency, reduce maintenance costs, and increase security.',
    'faq.solutions.legacy.benefits.1': 'Increases efficiency and productivity through modern technology.',
    'faq.solutions.legacy.benefits.2': 'Reduces maintenance costs and increases security.',
    'faq.solutions.legacy.benefits.3': 'Enables scalability and integration with modern systems.',
    'faq.solutions.legacy.benefits.4': 'Improves user experience and increases satisfaction.',
    'faq.solutions.legacy.benefits.5': 'Provides a solid foundation for business growth.',

    'faq.solutions.separation.title': 'Scattered Data Is Making It Hard to Keep Track',
    'faq.solutions.separation.problems.1': 'Data is scattered across multiple systems and platforms.',
    'faq.solutions.separation.problems.2': 'Lack of integration leads to inconsistencies and duplicate work.',
    'faq.solutions.separation.problems.3': 'Real-time insights are hard to generate and analyze.',
    'faq.solutions.separation.problems.4': 'Reports require manual consolidation and are often outdated.',
    'faq.solutions.separation.problems.5': 'Data silos hinder collaboration and decision-making.',
    'faq.solutions.separation.solution': 'Centralized data platforms consolidate data, improve integration, and provide real-time insights for better decisions.',

    'faq.solutions.separation.benefits.1': 'Consolidates data for better integration and collaboration.',
    'faq.solutions.separation.benefits.2': 'Tailored solutions to your specific business requirements allow easier adaptation to changing' +
      ' requirements.',
    'faq.solutions.separation.benefits.3': 'Provides real-time insights for informed decisions.',
    'faq.solutions.separation.benefits.4': 'Reduces data silos and unnecessary duplicate work.',
    'faq.solutions.separation.benefits.5': 'Improves data quality and accuracy.',

    'faq.solutions.spreadsheet.title': 'Excel Is Holding Your Business Back',
    'faq.solutions.spreadsheet.problems.1': 'Data inconsistencies and version control issues cause errors.',
    'faq.solutions.spreadsheet.problems.2': 'Collaboration is difficult, leading to inefficiencies.',
    'faq.solutions.spreadsheet.problems.3': 'Repetitive manual data entry wastes valuable time.',
    'faq.solutions.spreadsheet.problems.4': 'Spreadsheets lack automation and real-time insights.',
    'faq.solutions.spreadsheet.problems.5': 'Security risks arise due to unauthorized access and errors.',
    'faq.solutions.spreadsheet.solution': 'A centralized system eliminates errors, enhances collaboration, and improves efficiency.',

    'faq.solutions.spreadsheet.benefits.1': 'Eliminates errors through data consistency.',
    'faq.solutions.spreadsheet.benefits.2': 'Enhances teamwork with real-time collaboration.',
    'faq.solutions.spreadsheet.benefits.3': 'Saves time with automated data entry.',
    'faq.solutions.spreadsheet.benefits.4': 'Provides real-time insights for decision-making.',
    'faq.solutions.spreadsheet.benefits.5': 'Improves security with controlled access.',

    'faq.solutions.automation.title': 'Manual Processes Are Slowing You Down',
    'faq.solutions.automation.problems.1': 'Repetitive manual tasks reduce productivity.',
    'faq.solutions.automation.problems.2': 'Errors and inconsistencies arise from manual data entry.',
    'faq.solutions.automation.problems.3': 'Processes lack standardization and scalability.',
    'faq.solutions.automation.problems.4': 'Employees spend time on low-value, repetitive work.',
    'faq.solutions.automation.problems.5': 'Lack of automation hinders growth and innovation.',
    'faq.solutions.automation.solution': 'Automated processes through APIs, custom applications or scripts increase efficiency and reduce errors.',

    'faq.solutions.automation.benefits.1': 'Increases productivity by automating repetitive tasks.',
    'faq.solutions.automation.benefits.2': 'Reduces errors and inconsistencies in data entry.',
    'faq.solutions.automation.benefits.3': 'Standardizes processes for scalability.',
    'faq.solutions.automation.benefits.4': 'Frees up time for strategic work.',
    'faq.solutions.automation.benefits.5': 'Drives growth and innovation through automation.',

    'faq.solutions.workflow.title': 'Inefficient Workflows Are Slowing You Down',
    'faq.solutions.workflow.problems.1': 'Inefficient workflows slow down processes.',
    'faq.solutions.workflow.problems.2': 'Lack of standardization leads to inconsistencies.',
    'faq.solutions.workflow.problems.3': 'Tasks get lost without clear tracking.',
    'faq.solutions.workflow.problems.4': 'Employees waste time on unnecessary approvals.',
    'faq.solutions.workflow.problems.5': 'Bottlenecks form as workloads increase.',
    'faq.solutions.workflow.solution': 'Optimized workflows reduce inefficiencies, improve tracking, and enhance productivity.',

    'faq.solutions.workflow.benefits.1': 'Increases efficiency with standardized workflows.',
    'faq.solutions.workflow.benefits.2': 'Improves tracking and transparency.',
    'faq.solutions.workflow.benefits.3': 'Speeds up approvals and eliminates bottlenecks.',
    'faq.solutions.workflow.benefits.4': 'Automates repetitive tasks to save time.',
    'faq.solutions.workflow.benefits.5': 'Scales easily as the business grows.',

    'faq.solutions.datadriven.title': 'Lack of Data-Driven Insights Is Hurting Your Business',
    'faq.solutions.datadriven.problems.1': 'Lack of real-time data leads to poor decisions.',
    'faq.solutions.datadriven.problems.2': 'Data is scattered across multiple platforms.',
    'faq.solutions.datadriven.problems.3': 'Reports require manual updates and are often outdated.',
    'faq.solutions.datadriven.problems.4': 'Identifying trends and patterns is time-consuming.',
    'faq.solutions.datadriven.problems.5': 'Inconsistent data affects decision-making accuracy.',
    'faq.solutions.datadriven.solution': 'Centralized data analytics provide accurate, real-time insights for better decisions.',

    'faq.solutions.datadriven.benefits.1': 'Ensures decisions are based on real-time data.',
    'faq.solutions.datadriven.benefits.2': 'Combines all data sources for better analysis.',
    'faq.solutions.datadriven.benefits.3': 'Reduces manual reporting efforts.',
    'faq.solutions.datadriven.benefits.4': 'Speeds up trend identification.',
    'faq.solutions.datadriven.benefits.5': 'Improves decision accuracy.',

    'faq.solutions.database.title': 'Database Problems Are Slowing Down Your Operations',
    'faq.solutions.database.problems.1': 'Poorly structured databases slow down operations.',
    'faq.solutions.database.problems.2': 'Lack of proper indexing affects search performance.',
    'faq.solutions.database.problems.3': 'Data corruption and loss pose serious risks.',
    'faq.solutions.database.problems.4': 'Manual database maintenance increases workload.',
    'faq.solutions.database.problems.5': 'Security vulnerabilities put sensitive data at risk.',
    'faq.solutions.database.solution': 'A well-optimized database improves performance, security, and scalability.',

    'faq.solutions.database.benefits.1': 'Optimized databases ensure fast performance.',
    'faq.solutions.database.benefits.2': 'Indexing speeds up search queries.',
    'faq.solutions.database.benefits.3': 'Data integrity and backups prevent loss.',
    'faq.solutions.database.benefits.4': 'Automated maintenance reduces manual work.',
    'faq.solutions.database.benefits.5': 'Strong security measures protect sensitive information.',

    'faq.solutions.customerSupport.title': 'Outdated Customer Support Slows Your Business',
    'faq.solutions.customerSupport.problems.1': 'Slow response times lead to dissatisfied customers.',
    'faq.solutions.customerSupport.problems.2': 'Inconsistent responses across different support channels.',
    'faq.solutions.customerSupport.problems.3': 'Repetitive manual tasks slow down request processing.',
    'faq.solutions.customerSupport.problems.4': 'Lack of transparency and tracking for customer inquiries.',
    'faq.solutions.customerSupport.problems.5': 'Insufficient data analysis makes problem identification difficult.',
    'faq.solutions.customerSupport.solution': 'An integrated support ticket system improves response times and customer satisfaction.',

    'faq.solutions.customerSupport.benefits.1': 'Increases response speed with automated ticketing.',
    'faq.solutions.customerSupport.benefits.2': 'Ensures consistent answers across all channels.',
    'faq.solutions.customerSupport.benefits.3': 'Automates repetitive inquiries to save time.',
    'faq.solutions.customerSupport.benefits.4': 'Enhances tracking and transparency of support requests.',
    'faq.solutions.customerSupport.benefits.5': 'Enables data-driven insights for better customer experience.',

    'faq.solutions.inventoryManagement.title': 'Lack of Inventory Management Causes Shortages',
    'faq.solutions.inventoryManagement.problems.1': 'Manual inventory tracking leads to frequent errors and delays.',
    'faq.solutions.inventoryManagement.problems.2': 'Lack of real-time stock data impacts restocking decisions.',
    'faq.solutions.inventoryManagement.problems.3': 'Overlooked or miscalculated inventory levels.',
    'faq.solutions.inventoryManagement.problems.4': 'Inventory data is scattered across multiple systems with no integration.',
    'faq.solutions.inventoryManagement.problems.5': 'Financial losses occur due to overstocking or shortages.',
    'faq.solutions.inventoryManagement.solution': 'An automated inventory management system optimizes ordering and reduces errors.',

    'faq.solutions.inventoryManagement.benefits.1': 'Enables real-time monitoring of stock levels.',
    'faq.solutions.inventoryManagement.benefits.2': 'Automates restocking to prevent shortages.',
    'faq.solutions.inventoryManagement.benefits.3': 'Reduces human errors through automated tracking.',
    'faq.solutions.inventoryManagement.benefits.4': 'Integrates all inventory data into a single system.',
    'faq.solutions.inventoryManagement.benefits.5': 'Minimizes financial losses with accurate stock forecasts.',

    'faq.solutions.teamCollaboration.title': 'Inefficient Collaboration Disrupts Teamwork',
    'faq.solutions.teamCollaboration.problems.1': 'Lack of a central platform leads to miscommunication.',
    'faq.solutions.teamCollaboration.problems.2': 'Unclear task distribution and responsibilities.',
    'faq.solutions.teamCollaboration.problems.3': 'Communication issues due to scattered tools and channels.',
    'faq.solutions.teamCollaboration.problems.4': 'Lack of transparency in project progress.',
    'faq.solutions.teamCollaboration.problems.5': 'Poor integration between tools and workflows.',
    'faq.solutions.teamCollaboration.solution': 'An integrated collaboration tool improves team communication and coordination.',

    'faq.solutions.teamCollaboration.benefits.1': 'Encourages teamwork on a central platform.',
    'faq.solutions.teamCollaboration.benefits.2': 'Provides clear task distribution and responsibilities.',
    'faq.solutions.teamCollaboration.benefits.3': 'Unifies communication into a single tool.',
    'faq.solutions.teamCollaboration.benefits.4': 'Increases transparency in project progress.',
    'faq.solutions.teamCollaboration.benefits.5': 'Offers seamless integration with business tools.',

    'faq.solutions.salesAutomation.title': 'Outdated Sales Processes Hinder Growth',
    'faq.solutions.salesAutomation.problems.1': 'Manual entry of sales data leads to errors and delays.',
    'faq.solutions.salesAutomation.problems.2': 'Lack of automation results in inefficient lead follow-ups.',
    'faq.solutions.salesAutomation.problems.3': 'Sales processes are inconsistent and unstructured.',
    'faq.solutions.salesAutomation.problems.4': 'Sales data is not synchronized across different platforms.',
    'faq.solutions.salesAutomation.problems.5': 'Unclear or outdated sales analytics hinder decision-making.',
    'faq.solutions.salesAutomation.solution': 'An automated sales system enhances efficiency and increases conversions.',

    'faq.solutions.salesAutomation.benefits.1': 'Automates data entry and reduces errors.',
    'faq.solutions.salesAutomation.benefits.2': 'Ensures structured and consistent sales processes.',
    'faq.solutions.salesAutomation.benefits.3': 'Automates follow-ups to accelerate sales cycles.',
    'faq.solutions.salesAutomation.benefits.4': 'Synchronizes sales data across platforms for a unified view.',
    'faq.solutions.salesAutomation.benefits.5': 'Provides real-time analytics for sales decision-making.',

    'faq.solutions.projectManagement.title': 'Project Management Issues Threaten Success',
    'faq.solutions.projectManagement.problems.1': 'Unclear project goals and incomplete requirements lead to misunderstandings.',
    'faq.solutions.projectManagement.problems.2': 'Lack of task prioritization results in delays.',
    'faq.solutions.projectManagement.problems.3': 'Poor resource planning jeopardizes deadlines.',
    'faq.solutions.projectManagement.problems.4': 'Project progress is not well-documented or trackable.',
    'faq.solutions.projectManagement.problems.5': 'Communication within the team is poorly organized and fragmented.',
    'faq.solutions.projectManagement.solution': 'A modern project management tool ensures clear goals, transparency, and efficient resource planning.',

    'faq.solutions.projectManagement.benefits.1': 'Provides clear project goals and requirements.',
    'faq.solutions.projectManagement.benefits.2': 'Enables proper task prioritization to avoid delays.',
    'faq.solutions.projectManagement.benefits.3': 'Optimizes resource planning and allocation.',
    'faq.solutions.projectManagement.benefits.4': 'Allows easy tracking of project progress.',
    'faq.solutions.projectManagement.benefits.5': 'Improves team communication and collaboration.',

    'faq.solutions.security.title': 'Security Vulnerabilities Endanger Your Business',
    'faq.solutions.security.problems.1': 'Lack of encryption puts confidential data at risk.',
    'faq.solutions.security.problems.2': 'Insufficient authentication leads to unauthorized access.',
    'faq.solutions.security.problems.3': 'Lack of security updates creates vulnerabilities.',
    'faq.solutions.security.problems.4': 'Absence of security policies results in inconsistent implementation.',
    'faq.solutions.security.problems.5': 'Outdated or faulty code introduces security risks.',
    'faq.solutions.security.solution': 'A robust security system protects data and ensures secure access.',

    'faq.solutions.security.benefits.1': 'Encryption safeguards sensitive information.',
    'faq.solutions.security.benefits.2': 'Secure authentication processes prevent unauthorized access.',
    'faq.solutions.security.benefits.3': 'Regular security updates minimize risks.',
    'faq.solutions.security.benefits.4': 'Clear security policies ensure consistent implementation.',
    'faq.solutions.security.benefits.5': 'Ensures best security practices in code development.',

    'notFound.title': 'Page Not Found',
    'notFound.description': 'The page you are looking for does not exist or has been moved. Please check the URL or return to the homepage.',
    'notFound.returnHome': 'Return to Homepage',
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
      ' den Mittelpunkt des Entwicklungsprozesses',
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

    'services.title': 'Dienstleistungen',
    'services.subtitle': 'Wir bieten umfassende Softwarelösungen, die auf Eure spezifischen Geschäftsanforderungen zugeschnitten sind',
    'services.software.title': 'Softwareentwicklung',
    'services.software.description': 'Massgeschneiderte Softwarelösungen, die auf Eure einzigartigen Geschäftsherausforderungen und -chancen ausgerichtet sind',
    'services.automation.title': 'Workflow-Automatisierung',
    'services.integration.title': 'Schnittstellen (APIs)',
    'services.integration.description': 'Entwicklung und Integration von Schnittstellen (APIs) zur nahtlosen Kommunikation zwischen Euren Systemen und Drittanbieterdiensten',
    'services.automation.description': 'Optimiert Eure Arbeitsabläufe und steigert die Effizienz mit individuellen' +
      ' Automatisierungslösungen',
    'services.scripting.title': 'Skripting & Integration',
    'services.scripting.description': 'Verbindt Eure Systeme und automatisiert wiederkehrende Aufgaben mit benutzerdefinierten' +
      ' Skripts & Integrationen',
    'services.cicd.title': 'DevOps',
    'services.cicd.description': 'Implementiert kontinuierliche Integrations- und Bereitstellungspraktiken, um Euren' +
      ' Entwicklungszyklus zu beschleunigen',
    'services.api.title': 'Schnittstellen (APIs)',
    'services.api.description': 'Erstellt robuste APIs, um eine nahtlose Kommunikation zwischen Euren Systemen und' +
      ' Drittanbieterdiensten zu ermöglichen',
    'services.offshoring.title': 'IT-Übernahme',
    'services.offshoring.description': 'Als Anschlusslösung bieten wir IT-Dienstleistungen an, damit unseren Kunden eine' +
      ' Ansprechperson für alle IT-Angelegenheiten zur Verfügung steht',
    'services.takeover.title': 'Projektübernahme',
    'services.takeover.description': 'Wir können bestehende Projekte übernehmen und warten sowie kontinuierliche Unterstützung und Weiterentwicklung bieten',

    'services.detailTitle': 'Dienstleistungen',
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
    'services.automation.process1.description': 'Analyse Eurer aktuellen Workflows, um Automatisierungsmöglichkeiten zu identifizieren',
    'services.automation.process2.title': 'Lösungsdesign',
    'services.automation.process2.description': 'Entwurf einer Automatisierungslösung, die auf Eure spezifischen Prozesse' +
      ' zugeschnitten ist',
    'services.automation.process3.title': 'Implementierung',
    'services.automation.process3.description': 'Umsetzung der Automatisierungslösung mit minimalen Unterbrechungen',
    'services.automation.process4.title': 'Messung & Optimierung',
    'services.automation.process4.description': 'Überwachung und Optimierung der Automatisierungslösung für maximale Effizienz',
    'services.integration.benefit1': 'Nahtloser Datenfluss zwischen Systemen',
    'services.integration.benefit2': 'Beseitigung von Datensilos',
    'services.integration.benefit3': 'Reduzierung von manueller oder doppelter Arbeit',
    'services.integration.benefit4': 'Erhöhte betriebliche Effizienz',
    'services.integration.process1.title': 'Systembewertung',
    'services.integration.process1.description': 'Analyse Eurer bestehenden Systeme & Integrationsanforderungen',
    'services.integration.process2.title': 'Integrationsstrategie',
    'services.integration.process2.description': 'Entwicklung einer umfassende Integrationsstrategie und -architektur',
    'services.integration.process3.title': 'Implementierung',
    'services.integration.process3.description': 'Umsetzung der Lösung mit den geeigneten Technologien',
    'services.integration.process4.title': 'Testen & Optimierung',
    'services.integration.process4.description': 'Testen & optimieren des integrierten Systems',
    'services.cicd.benefit1': 'Schnellere Bereitstellung von Software',
    'services.cicd.benefit2': 'Reduzierte Bereitstellungsrisiken',
    'services.cicd.benefit3': 'Verbesserte Codequalität und Konsistenz',
    'services.cicd.benefit4': 'Konsistente Bereitstellungsprozesse',
    'services.cicd.process1.title': 'Bewertung',
    'services.cicd.process1.description': 'Analyse Eurer aktuellen Entwicklungs- und Bereitstellungsprozesse',
    'services.cicd.process2.title': 'Planung & Architektur',
    'services.cicd.process2.description': 'Entwicklung einer DevOps-Architektur und -strategie',
    'services.cicd.process3.title': 'Implementierung',
    'services.cicd.process3.description': 'Implementierung der DevOps-Pipeline und Automatisierung',
    'services.cicd.process4.title': 'Testen & Optimierung',
    'services.cicd.process4.description': 'Testen & Optimieren der DevOps-Pipeline',
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

    'services.hero.title': 'Dienstleistungen',
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

    'detailed.services.api.title': 'Schnittstellen (APIs)',
    'detailed.services.api.description': 'Wir entwickeln robuste, sichere APIs, die eine nahtlose Integration zwischen Euren Systemen und Diensten von Drittanbietern ermöglichen und den Datenaustausch und die gemeinsame Nutzung von Funktionen erleichtern.',
    'detailed.services.api.benefits': 'Verbesserte Systemintegration, optimierter Datenfluss, bessere Integration von Drittanbieterdiensten, mobile App-Unterstützung und Förderung von Partner-Ökosystemen.',
    'detailed.services.api.process': 'Wir definieren die API-Anforderungen, konzipieren die Architektur und Endpunkte, entwickeln mit angemessener Sicherheit, testen gründlich auf Leistung und Zuverlässigkeit und bieten Dokumentation und laufende Unterstützung.',

    'detailed.services.scripting.title': 'Skripting & Integration',
    'detailed.services.scripting.description': 'Wir erstellen benutzerdefinierte Skripte zur Automatisierung von Aufgaben, zur Verbindung von Systemen und zur Optimierung von Abläufen, damit Eure bestehende Software effizienter zusammenarbeiten kann.',
    'detailed.services.scripting.benefits': 'Schnelle Implementierung, Kosteneffizienz, Automatisierung von Routineaufgaben, verbesserte Datenkonsistenz und erweiterte Funktionalität bestehender Systeme.',
    'detailed.services.scripting.process': 'Wir identifizieren Integrationsbedürfnisse, wählen geeignete Skriptsprachen und Tools aus,' +
      ' entwickeln und testen die Skripte, implementieren sie in Eurem Workflow und stellen Dokumentation und Support bereit.',

    'detailed.services.cicd.title': 'DevOps',
    'detailed.services.cicd.description': 'Wir etablieren Pipelines für kontinuierliche Integration und kontinuierliche Bereitstellung, die Eure Software-Test- und Bereitstellungsprozesse automatisieren und zu schnelleren, zuverlässigeren Veröffentlichungen führen.',
    'detailed.services.cicd.benefits': 'Schnellere Markteinführung, reduzierte Bereitstellungsrisiken, verbesserte Codequalität, konsistente Release-Prozesse und verbesserte Teamzusammenarbeit.',
    'detailed.services.cicd.process': 'Wir bewerten Euren aktuellen Entwicklungsworkflow, konzipieren die DevOps-Pipeline-Architektur,' +
      ' implementieren automatisierte Builds und Tests, richten die Bereitstellungsautomatisierung ein und schulen Euer Team in Best Practices.',

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

    'projects.jenkinsPipeline.title': 'Jenkins DevOps-Pipeline',
    'projects.jenkinsPipeline.description': 'Automatisierte DevOps-Pipeline zum Erstellen, Testen und Bereitstellen von' +
      ' Softwareanwendungen.',
    'projects.jenkinsPipeline.longDescription': 'Dieses Projekt umfasste die Einrichtung einer Jenkins DevOps-Pipeline zur' +
      ' Automatisierung des Erstellens, Testens und Bereitstellens von Softwareanwendungen. Die Pipeline integriert sich in' +
      ' Versionskontrollsysteme (Git) und Orchestrierungsplattformen (Portainer), um den Softwareentwicklungszyklus zu automatisieren.' +
      ' Die DevOps-Pipeline sorgt für schnellere Bereitstellungszeiten, höhere Codequalität und verbesserte Zusammenarbeit zwischen' +
      ' Entwicklungsteams.',
    'projects.jenkinsPipeline.client': 'Finanzdienstleistungen',

    'about.title': 'Über Cybethics',
    'about.intro': 'Leidenschaftliche Softwareentwickler, die sich der Erstellung ethischer Softwarelösungen verschrieben haben, die' +
      ' Unternehmen zum Erfolg verhelfen',
    'about.swiss': 'Schweizer Qualitätssoftware',
    'about.story.title': 'Geschichte',
    'about.story.description': 'Der Name Cybethics kombiniert \'Cyber\' und \'Ethik\', weil Ethik für uns eine Bedeutung hat. Sie ist der' +
      ' Kern' +
      ' dessen, wie wir jedes Projekt und jede Kundenbeziehung angehen',
    'about.story.cyber.title': 'Cyber',
    'about.story.cyber.description': 'Repräsentiert die Expertise in Softwareentwicklung, Automatisierung und digitalen Lösungen',
    'about.story.ethics.title': 'Ethik',
    'about.story.ethics.description': 'Steht für Verpflichtung zu Fairness, Transparenz und dem, was für eine Kooperation richtig ist',

    'about.values.description': 'Kernwerte leiten unsere Arbeit und Beziehungen zu Kunden, Partnern und Teammitgliedern.',
    'about.values.fairnessTitle': 'Fairness',
    'about.values.empathyTitle': 'Empathie',
    'about.values.ethicsTitle': 'Ethik',
    'about.values.trustTitle': 'Vertrauen',
    'about.approach.title': 'Unser Ansatz',
    'about.approach.description': 'Wir verfolgen einen kundenorientierten Ansatz zur Softwareentwicklung, der sich auf Eure spezifischen Geschäftsbedürfnisse und -ziele konzentriert',
    'about.approach.listenFirst.title': 'Zuhören',
    'about.approach.listenFirst.description': 'Wir beginnen damit, Eure Herausforderungen, Ziele und Visionen für das Projekt zu hören',
    'about.approach.rightSized.title': 'Entwickeln',
    'about.approach.rightSized.description': 'Wir passen unsere Lösungen an Eure spezifischen Geschäftsanforderungen und Budgets an',
    'about.approach.transparent.title': 'Involvieren',
    'about.approach.transparent.description': 'Wir halten Euch während des Entwicklungsprozesses informiert und involviert',
    'about.approach.longTerm.title': 'Pflegen',
    'about.approach.longTerm.description': 'Wir streben danach, eine dauerhafte Partnerschaft aufzubauen, die Euer Geschäftswachstum und -erfolg unterstützt',
    'about.approach.innovative': 'Innovativ',
    'about.approach.practical': 'Praktisch',
    'about.approach.collaborative': 'Kollaborativ',
    'about.approach.efficient': 'Effizient',
    'about.expertise.title': 'Expertise',
    'about.expertise.description': 'Unser Team verfügt über umfangreiche Erfahrung in der Softwareentwicklung, Automatisierung und' +
      ' Integrationstechnologien',

    'about.values.title': 'Werte',
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
    'footer.about': 'Individuelle digitale Lösungen mit Integrität entwickeln und Ethik zum Kern unseres Entwicklungsansatzes machen',

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
    'faq.cta.subtitle': 'Unser Team steht bereit, um alle weiteren Fragen zu beantworten, die Ihr zu Dienstleistungen oder Euren' +
      ' spezifischen Projektanforderungen habt.',

    'faq.solutions.viewDetails': 'Details anzeigen',
    'faq.solutions.commonProblems': 'Häufige Probleme',
    'faq.solutions.ourSolution': 'Lösung',
    'faq.solutions.keyBenefits': 'Hauptvorteile',
    'faq.solutions.title': 'Beispiele',
    'faq.solutions.description': 'Entdeckt, wie unsere massgeschneiderten Softwarelösungen Eure häufigsten Geschäftsherausforderungen' +
      ' lösen und Euer Unternehmen voranbringen können',

    'faq.solutions.legacy.title': 'Legacy-Systeme schränken Euer Geschäft ein',
    'faq.solutions.legacy.problems.1': 'Veraltete Software verlangsamt Prozesse und erhöht die Wartungskosten.',
    'faq.solutions.legacy.problems.2': 'Sicherheitsrisiken steigen durch fehlende Updates und Patches.',
    'faq.solutions.legacy.problems.3': 'Skalierbarkeit ist eingeschränkt, wenn das Unternehmen wächst.',
    'faq.solutions.legacy.problems.4': 'Integration mit modernen Systemen ist schwierig und zeitaufwendig.',
    'faq.solutions.legacy.problems.5': 'Benutzererfahrung und Produktivität leiden unter veralteter Technologie.',

    'faq.solutions.legacy.solution': 'Moderne Softwarelösungen ersetzen veraltete Systeme, verbessern die Effizienz, senken die' +
      ' Wartungskosten und erhöhen die Sicherheit.',
    'faq.solutions.legacy.benefits.1': 'Steigert die Effizienz und Produktivität durch moderne Technologie.',
    'faq.solutions.legacy.benefits.2': 'Senkt die Wartungskosten und erhöht die Sicherheit.',
    'faq.solutions.legacy.benefits.3': 'Ermöglicht Skalierbarkeit und Integration mit modernen Systemen.',
    'faq.solutions.legacy.benefits.4': 'Verbessert die Benutzererfahrung und steigert die Zufriedenheit.',
    'faq.solutions.legacy.benefits.5': 'Bietet eine solide Grundlage für das Unternehmenswachstum.',

    'faq.solutions.separation.title': 'Verstreute Daten erschweren den Überblick',
    'faq.solutions.separation.problems.1': 'Daten sind über mehrere Systeme und Plattformen verstreut.',
    'faq.solutions.separation.problems.2': 'Mangelnde Integration führt zu Inkonsistenzen und Doppelarbeit.',
    'faq.solutions.separation.problems.3': 'Echtzeit-Insights sind schwer zu generieren und zu analysieren.',
    'faq.solutions.separation.problems.4': 'Berichte erfordern manuelle Konsolidierung und sind oft veraltet.',
    'faq.solutions.separation.problems.5': 'Datensilos erschweren die Zusammenarbeit und Entscheidungsfindung.',
    'faq.solutions.separation.solution': 'Zentralisierte Datenplattformen konsolidieren Daten, verbessern die Integration und bieten Echtzeit-Insights für bessere Entscheidungen.',

    'faq.solutions.separation.benefits.1': 'Konsolidiert Daten für bessere Integration und Zusammenarbeit.',
    'faq.solutions.separation.benefits.2': 'Bietet massgeschneiderte Lösungen für Eure spezifischen Geschäftsanforderungen, die eine einfachere Anpassung an ändernde Anforderungen ermöglichen.',
    'faq.solutions.separation.benefits.3': 'Bietet Echtzeit-Insights für fundierte Entscheidungen.',
    'faq.solutions.separation.benefits.4': 'Reduziert Datensilos und unnötige Doppelarbeit.',
    'faq.solutions.separation.benefits.5': 'Verbessert die Datenqualität und Genauigkeit.',

    'faq.solutions.spreadsheet.title': 'Excel bremst Euer Unternehmen',
    'faq.solutions.spreadsheet.problems.1': 'Dateninkonsistenzen und Versionskontrollprobleme führen zu Fehlern.',
    'faq.solutions.spreadsheet.problems.2': 'Die Zusammenarbeit ist schwierig und führt zu Ineffizienzen.',
    'faq.solutions.spreadsheet.problems.3': 'Wiederholte manuelle Dateneingabe kostet wertvolle Zeit.',
    'faq.solutions.spreadsheet.problems.4': 'Tabellenkalkulationen bieten keine Automatisierung und Echtzeit-Insights.',
    'faq.solutions.spreadsheet.problems.5': 'Sicherheitsrisiken entstehen durch unbefugten Zugriff und Fehler.',
    'faq.solutions.spreadsheet.solution': 'Ein zentrales System eliminiert Fehler, verbessert die Zusammenarbeit und steigert die Effizienz.',

    'faq.solutions.spreadsheet.benefits.1': 'Eliminiert Fehler durch Datenkonsistenz.',
    'faq.solutions.spreadsheet.benefits.2': 'Fördert Teamarbeit mit Echtzeit-Zusammenarbeit.',
    'faq.solutions.spreadsheet.benefits.3': 'Spart Zeit durch automatisierte Dateneingabe.',
    'faq.solutions.spreadsheet.benefits.4': 'Bietet Echtzeit-Insights für bessere Entscheidungen.',
    'faq.solutions.spreadsheet.benefits.5': 'Verbessert die Sicherheit durch kontrollierten Zugriff.',

    'faq.solutions.workflow.title': 'Ineffiziente Workflows bremsen Euer Unternehmen',
    'faq.solutions.workflow.problems.1': 'Ineffiziente Workflows bremsen Prozesse.',
    'faq.solutions.workflow.problems.2': 'Fehlende Standardisierung führt zu Inkonsistenzen.',
    'faq.solutions.workflow.problems.3': 'Aufgaben gehen verloren ohne klare Nachverfolgung.',
    'faq.solutions.workflow.problems.4': 'Mitarbeiter verschwenden Zeit mit unnötigen Genehmigungen.',
    'faq.solutions.workflow.problems.5': 'Engpässe entstehen, wenn Arbeitslasten zunehmen.',
    'faq.solutions.workflow.solution': 'Optimierte Workflows reduzieren Ineffizienzen, verbessern die Nachverfolgung und steigern die Produktivität.',

    'faq.solutions.workflow.benefits.1': 'Erhöht die Effizienz durch standardisierte Workflows.',
    'faq.solutions.workflow.benefits.2': 'Verbessert Nachverfolgung und Transparenz.',
    'faq.solutions.workflow.benefits.3': 'Beschleunigt Genehmigungen und beseitigt Engpässe.',
    'faq.solutions.workflow.benefits.4': 'Automatisiert wiederkehrende Aufgaben, um Zeit zu sparen.',
    'faq.solutions.workflow.benefits.5': 'Skaliert problemlos mit dem Wachstum des Unternehmens.',

    'faq.solutions.datadriven.title': 'Fehlende datengesteuerte Einblicke schaden Eurem Unternehmen',
    'faq.solutions.datadriven.problems.1': 'Fehlende Echtzeit-Daten führen zu schlechten Entscheidungen.',
    'faq.solutions.datadriven.problems.2': 'Daten sind über mehrere Plattformen verstreut.',
    'faq.solutions.datadriven.problems.3': 'Berichte erfordern manuelle Aktualisierungen und sind oft veraltet.',
    'faq.solutions.datadriven.problems.4': 'Das Identifizieren von Trends und Mustern ist zeitaufwendig.',
    'faq.solutions.datadriven.problems.5': 'Inkonsistente Daten beeinträchtigen die Genauigkeit der Entscheidungen.',
    'faq.solutions.datadriven.solution': 'Zentralisierte Datenanalyse liefert genaue, Echtzeit-Insights für bessere Entscheidungen.',

    'faq.solutions.datadriven.benefits.1': 'Sichert Entscheidungen auf Grundlage von Echtzeit-Daten.',
    'faq.solutions.datadriven.benefits.2': 'Kombiniert alle Datenquellen für bessere Analysen.',
    'faq.solutions.datadriven.benefits.3': 'Reduziert den Aufwand für manuelle Berichterstellung.',
    'faq.solutions.datadriven.benefits.4': 'Beschleunigt die Identifizierung von Trends.',
    'faq.solutions.datadriven.benefits.5': 'Verbessert die Entscheidungsgenauigkeit.',

    'faq.solutions.database.title': 'Datenbankprobleme beeinträchtigen Euer Geschäft',
    'faq.solutions.database.problems.1': 'Schlecht strukturierte Datenbanken verlangsamen den Betrieb.',
    'faq.solutions.database.problems.2': 'Fehlende Indizierung beeinträchtigt die Suchleistung.',
    'faq.solutions.database.problems.3': 'Datenkorruption und -verlust stellen ernsthafte Risiken dar.',
    'faq.solutions.database.problems.4': 'Manuelle Datenbankwartung erhöht den Arbeitsaufwand.',
    'faq.solutions.database.problems.5': 'Sicherheitslücken gefährden sensible Daten.',
    'faq.solutions.database.solution': 'Eine gut optimierte Datenbank verbessert Leistung, Sicherheit und Skalierbarkeit.',

    'faq.solutions.database.benefits.1': 'Optimierte Datenbanken gewährleisten schnelle Leistung.',
    'faq.solutions.database.benefits.2': 'Indizierung beschleunigt Suchanfragen.',
    'faq.solutions.database.benefits.3': 'Datenintegrität und Backups verhindern Verlust.',
    'faq.solutions.database.benefits.4': 'Automatisierte Wartung reduziert manuellen Aufwand.',
    'faq.solutions.database.benefits.5': 'Starke Sicherheitsmaßnahmen schützen sensible Informationen.',

    // 'faq.solutions.automation.title': 'Manual Processes Are Slowing You Down',
    // 'faq.solutions.automation.problems.1': 'Repetitive manual tasks reduce productivity.',
    // 'faq.solutions.automation.problems.2': 'Errors and inconsistencies arise from manual data entry.',
    // 'faq.solutions.automation.problems.3': 'Processes lack standardization and scalability.',
    // 'faq.solutions.automation.problems.4': 'Employees spend time on low-value, repetitive work.',
    // 'faq.solutions.automation.problems.5': 'Lack of automation hinders growth and innovation.',
    // 'faq.solutions.automation.solution': 'Automated processes through APIs, custom applications or scripts increase efficiency and reduce errors.',
    //
    // 'faq.solutions.automation.benefits.1': 'Increases productivity by automating repetitive tasks.',
    // 'faq.solutions.automation.benefits.2': 'Reduces errors and inconsistencies in data entry.',
    // 'faq.solutions.automation.benefits.3': 'Standardizes processes for scalability.',
    // 'faq.solutions.automation.benefits.4': 'Frees up time for strategic work.',
    // 'faq.solutions.automation.benefits.5': 'Drives growth and innovation through automation.',

    // translate to german
    'faq.solutions.automation.title': 'Manuelle Prozesse bremsen Euch',
    'faq.solutions.automation.problems.1': 'Wiederholende manuelle Aufgaben reduzieren die Produktivität.',
    'faq.solutions.automation.problems.2': 'Fehler und Inkonsistenzen entstehen durch manuelle Dateneingabe.',
    'faq.solutions.automation.problems.3': 'Prozesse fehlen Standardisierung und Skalierbarkeit.',
    'faq.solutions.automation.problems.4': 'Mitarbeiter verbringen Zeit mit wenig wertvoller, wiederholter Arbeit.',
    'faq.solutions.automation.problems.5': 'Mangel an Automatisierung hindert Wachstum und Innovation.',
    'faq.solutions.automation.solution': 'Automatisierte Prozesse durch APIs, benutzerdefinierte Anwendungen oder Skripte erhöhen die Effizienz und reduzieren Fehler.',

    'faq.solutions.automation.benefits.1': 'Steigert die Produktivität durch Automatisierung wiederholter Aufgaben.',
    'faq.solutions.automation.benefits.2': 'Reduziert Fehler und Inkonsistenzen bei der Dateneingabe.',
    'faq.solutions.automation.benefits.3': 'Standardisiert Prozesse für Skalierbarkeit.',
    'faq.solutions.automation.benefits.4': 'Befreit Zeit für strategische Arbeit.',
    'faq.solutions.automation.benefits.5': 'Fördert Wachstum und Innovation durch Automatisierung.',

    'faq.solutions.customerSupport.title': 'Veralteter Kundenservice bremst Euer Geschäft',
    'faq.solutions.customerSupport.problems.1': 'Langsame Reaktionszeiten führen zu unzufriedenen Kunden.',
    'faq.solutions.customerSupport.problems.2': 'Fehlende Konsistenz in den Antworten bei verschiedenen Kanälen.',
    'faq.solutions.customerSupport.problems.3': 'Wiederholte manuelle Aufgaben verlangsamen die Bearbeitung von Anfragen.',
    'faq.solutions.customerSupport.problems.4': 'Mangelnde Transparenz und Nachverfolgbarkeit von Anfragen.',
    'faq.solutions.customerSupport.problems.5': 'Unzureichende Datenanalyse erschwert die Identifizierung von Problemen.',
    'faq.solutions.customerSupport.solution': 'Ein integriertes Support-Ticketsystem verbessert die Reaktionsgeschwindigkeit und die Kundenzufriedenheit.',

    'faq.solutions.customerSupport.benefits.1': 'Erhöht die Reaktionsgeschwindigkeit mit automatisierten Ticket-Systemen.',
    'faq.solutions.customerSupport.benefits.2': 'Sichert konsistente Antworten über alle Kanäle hinweg.',
    'faq.solutions.customerSupport.benefits.3': 'Automatisiert die Bearbeitung häufiger Anfragen, um Zeit zu sparen.',
    'faq.solutions.customerSupport.benefits.4': 'Verbessert die Nachverfolgbarkeit und Transparenz von Anfragen.',
    'faq.solutions.customerSupport.benefits.5': 'Ermöglicht datengestützte Analysen zur Verbesserung der Kundenerfahrung.',

    'faq.solutions.inventoryManagement.title': 'Fehlende Bestandsverwaltung führt zu Engpässen',
    'faq.solutions.inventoryManagement.problems.1': 'Manuelle Bestandsführung führt zu häufigen Fehlern und Verzögerungen.',
    'faq.solutions.inventoryManagement.problems.2': 'Unzureichende Echtzeitdaten zu Beständen beeinträchtigen die Nachbestellung.',
    'faq.solutions.inventoryManagement.problems.3': 'Lagerbestände werden übersehen oder falsch berechnet.',
    'faq.solutions.inventoryManagement.problems.4': 'Bestandsinformationen sind über mehrere Systeme verstreut und nicht miteinander verknüpft.',
    'faq.solutions.inventoryManagement.problems.5': 'Es entstehen finanzielle Verluste aufgrund von Fehlbeständen oder Überschüssen.',
    'faq.solutions.inventoryManagement.solution': 'Ein automatisiertes Bestandsverwaltungssystem optimiert Bestellungen und reduziert Fehler.',

    'faq.solutions.inventoryManagement.benefits.1': 'Ermöglicht Echtzeit-Überwachung der Bestände.',
    'faq.solutions.inventoryManagement.benefits.2': 'Automatisiert Nachbestellungen und reduziert Fehlbestände.',
    'faq.solutions.inventoryManagement.benefits.3': 'Reduziert menschliche Fehler durch die automatische Bestandsverfolgung.',
    'faq.solutions.inventoryManagement.benefits.4': 'Integriert alle Bestandsdaten in einem zentralen System.',
    'faq.solutions.inventoryManagement.benefits.5': 'Minimiert finanzielle Verluste durch genaue Bestandsprognosen.',

    'faq.solutions.teamCollaboration.title': 'Ineffiziente Zusammenarbeit stört die Teamdynamik',
    'faq.solutions.teamCollaboration.problems.1': 'Fehlende zentrale Plattform für die Zusammenarbeit führt zu Missverständnissen.',
    'faq.solutions.teamCollaboration.problems.2': 'Unklare Aufgabenverteilung und Verantwortlichkeiten innerhalb des Teams.',
    'faq.solutions.teamCollaboration.problems.3': 'Kommunikationsprobleme aufgrund verstreuter Tools und Nachrichtenkanäle.',
    'faq.solutions.teamCollaboration.problems.4': 'Mangelnde Transparenz über den Projektfortschritt.',
    'faq.solutions.teamCollaboration.problems.5': 'Unzureichende Integration von Tools und Arbeitsabläufen.',
    'faq.solutions.teamCollaboration.solution': 'Ein integriertes Kollaborationstool verbessert die Teamkommunikation und -koordination.',

    'faq.solutions.teamCollaboration.benefits.1': 'Fördert die Zusammenarbeit auf einer zentralen Plattform.',
    'faq.solutions.teamCollaboration.benefits.2': 'Klare Aufgabenverteilung und transparente Verantwortlichkeiten.',
    'faq.solutions.teamCollaboration.benefits.3': 'Vereinheitlichung der Kommunikation in einem einzigen Tool.',
    'faq.solutions.teamCollaboration.benefits.4': 'Erhöht die Transparenz des Projektfortschritts für alle Beteiligten.',
    'faq.solutions.teamCollaboration.benefits.5': 'Bietet einfache Integration mit anderen Unternehmens-Tools.',

    'faq.solutions.salesAutomation.title': 'Veraltete Verkaufsprozesse bremsen das Wachstum',
    'faq.solutions.salesAutomation.problems.1': 'Manuelle Eingabe von Verkaufsdaten führt zu Fehlern und Verzögerungen.',
    'faq.solutions.salesAutomation.problems.2': 'Fehlende Automatisierung führt zu ineffizientem Follow-up mit Leads.',
    'faq.solutions.salesAutomation.problems.3': 'Verkaufsprozesse sind inkonsistent und ohne klare Struktur.',
    'faq.solutions.salesAutomation.problems.4': 'Daten über verschiedene Verkaufsplattformen sind nicht synchronisiert.',
    'faq.solutions.salesAutomation.problems.5': 'Verkaufskennzahlen und Analysen sind unklar oder nicht aktuell.',
    'faq.solutions.salesAutomation.solution': 'Ein automatisiertes Vertriebssystem verbessert die Effizienz und führt zu mehr Abschlüssen.',

    'faq.solutions.salesAutomation.benefits.1': 'Automatisiert die Dateneingabe und reduziert Fehler.',
    'faq.solutions.salesAutomation.benefits.2': 'Sichert eine konsistente und strukturierte Verkaufsabwicklung.',
    'faq.solutions.salesAutomation.benefits.3': 'Automatisiert Follow-ups, um den Verkaufszyklus zu beschleunigen.',
    'faq.solutions.salesAutomation.benefits.4': 'Synchronisiert Verkaufsdaten auf allen Plattformen für eine einheitliche Sicht.',
    'faq.solutions.salesAutomation.benefits.5': 'Bietet Echtzeit-Analysen zur Unterstützung der Verkaufsentscheidungen.',

    'faq.solutions.projectManagement.title': 'Projektmanagement-Fehler gefährden den Erfolg',
    'faq.solutions.projectManagement.problems.1': 'Unklare Projektziele und unvollständige Anforderungen führen zu Missverständnissen.',
    'faq.solutions.projectManagement.problems.2': 'Mangelnde Priorisierung von Aufgaben führt zu Verzögerungen.',
    'faq.solutions.projectManagement.problems.3': 'Unzureichende Ressourcenplanung gefährdet den Projektzeitrahmen.',
    'faq.solutions.projectManagement.problems.4': 'Projektfortschritte werden nicht klar dokumentiert oder sind schwer nachzuvollziehen.',
    'faq.solutions.projectManagement.problems.5': 'Die Kommunikation im Team ist schlecht organisiert und fragmentiert.',
    'faq.solutions.projectManagement.solution': 'Ein modernes Projektmanagement-Tool sorgt für klare Ziele, Transparenz und effiziente Ressourcenplanung.',

    'faq.solutions.projectManagement.benefits.1': 'Sorgt für klare Ziele und Anforderungen für jedes Projekt.',
    'faq.solutions.projectManagement.benefits.2': 'Bietet eine klare Priorisierung von Aufgaben zur Vermeidung von Verzögerungen.',
    'faq.solutions.projectManagement.benefits.3': 'Optimiert die Ressourcenplanung und -verteilung.',
    'faq.solutions.projectManagement.benefits.4': 'Ermöglicht eine einfache Nachverfolgung des Projektfortschritts.',
    'faq.solutions.projectManagement.benefits.5': 'Verbessert die Teamkommunikation und Zusammenarbeit.',

    'faq.solutions.security.title': 'Sicherheitslücken gefährden die Integrität Eures Unternehmens',
    'faq.solutions.security.problems.1': 'Fehlende Verschlüsselung gefährdet vertrauliche Daten.',
    'faq.solutions.security.problems.2': 'Unzureichende Authentifizierung führt zu unbefugtem Zugriff.',
    'faq.solutions.security.problems.3': 'Mangelnde Sicherheitsupdates stellen eine Bedrohung dar.',
    'faq.solutions.security.problems.4': 'Das Fehlen von Sicherheitsrichtlinien führt zu inkonsistenter Implementierung.',
    'faq.solutions.security.problems.5': 'Schadhafter oder veralteter Code stellt Sicherheitsrisiken dar.',
    'faq.solutions.security.solution': 'Ein durchdachtes Sicherheitssystem schützt Daten und ermöglicht sicheren Zugriff.',

    'faq.solutions.security.benefits.1': 'Verschlüsselung schützt vertrauliche Informationen.',
    'faq.solutions.security.benefits.2': 'Sichere Authentifizierungsprozesse verhindern unbefugten Zugriff.',
    'faq.solutions.security.benefits.3': 'Regelmäßige Sicherheitsupdates minimieren Risiken.',
    'faq.solutions.security.benefits.4': 'Klare Sicherheitsrichtlinien sorgen für konsistente Implementierung.',
    'faq.solutions.security.benefits.5': 'Stellt sicher, dass der Code den besten Sicherheitspraktiken entspricht.',

    'notFound.title': 'Seite nicht gefunden',
    'notFound.description': 'Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben. Bitte überprüfen Sie die URL oder kehren Sie zur Startseite zurück.',
    'notFound.returnHome': 'Zurück zur Startseite',
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
