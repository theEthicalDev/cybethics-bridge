// This utility file provides a consistent way to access project data across the application

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  year: string;
  client: string;
  tagColor?: string;
}

export function getProjects(): Project[] {
  const projects = [
    {
      id: 10,
      title: 'Credit Request Management Portal',
      description: 'Enterprise portal for managing credit requests, approvals, status tracking, and reporting.',
      longDescription: 'This web application was built using Spring Boot for the backend and Angular for the frontend. It integrates real-time data on credit requests, approvals, and status updates. The portal centralizes credit requests, reducing processing time and improving employee satisfaction. The application is secure, scalable, and user-friendly.',
      image: '/lovable-uploads/project-credit.png',
      tags: ['Web Development', 'Spring Boot', 'Angular', 'API Development', 'Backend', 'CI/CD', 'DevOps', 'Docker', 'GitHub Actions', 'Java'],
      category: 'software',
      year: '2024',
      client: 'Financial Services',
      tagColor: 'bg-blue-100 text-blue-800'
    },
    {
      id: 35,
      title: 'SFTP File System Sync Tool',
      description: 'Custom file management system for automating file transfers, archiving, synchronization, quick file, folder or content search.',
      longDescription: 'This file management system was developed using Spring Boot and Angular. It provides a user-friendly interface for managing files, folders, and content across multiple SFTP servers. The system includes features for automating file transfers, archiving, synchronization, and quick search. It improves efficiency and reduces manual file management tasks.',
      image: '/lovable-uploads/project-sftp.png',
      tags: ['Web Development', 'Spring Boot', 'Angular', 'API Development', 'Backend', 'Frontend', 'Java', 'IT', 'CI/CD', 'DevOps', 'Docker'],
      category: 'automation',
      year: '2023',
      client: 'IT Services Provider',
      tagColor: 'bg-purple-100 text-purple-800'
    },
    {
      id: 45,
      title: 'Morpheus Custom Plugin Development',
      description: 'Custom plugin development as enhancement of the Morpheus cloud management platform for automating cloud operations.',
      longDescription: 'This project involved developing custom plugins for the Morpheus cloud management platform to automate cloud operations and enhance the platform\'s functionality. The plugins were built using Java integrating the Morpheus Plugin API to provide additional features, improve user experience, and streamline cloud management tasks.',
      image: '/lovable-uploads/project-morpheus.png',
      tags: ['API Development', 'Integration', 'Frontend', 'Java', 'Plugin Development', 'Automation', 'IT'],
      category: 'api',
      year: '2023',
      client: 'IT Services Provider',
      tagColor: 'bg-green-100 text-green-800'
    },
    {
      id: 30,
      title: 'Webshop to ERP Data Synchronization',
      description: 'Automated data synchronization between a webshop and an ERP system to ensure up-to-date order processing and inventory management.',
      longDescription: 'This project involved developing custom scripts and workflows to synchronize data between a Shopware webshop and an BlueOffice ERP system. The solution is a middleware software with an API that connects the two systems, ensuring data consistency and regular updates. The synchronization process includes order processing, inventory management, and product updates.',
      image: '/lovable-uploads/project-webshop-erp.png',
      tags: ['Spring Boot', 'API Development', 'Middleware Development', 'Integration', 'Backend', 'Java'],
      category: 'api',
      year: '2024',
      client: 'Clothing Retailer & Processor',
    },
    {
      id: 250,
      title: 'IT Systems Monitoring Scripts',
      description: 'Custom scripts for automated monitoring, maintenance, and reporting of critical IT systems and infrastructure.',
      longDescription: 'This suite of scripts was developed to automate routine maintenance tasks, monitor system health, and generate reports for the IT department. Written primarily in Python, the scripts interact with various systems to collect data, perform maintenance tasks, and alert administrators of potential issues before they impact operations.',
      image: '/lovable-uploads/project-graph.png',
      tags: ['Scripting', 'Python', 'Monitoring'],
      category: 'scripting',
      year: '2023',
      client: 'IT Services Provider',
    },
    {
      id: 50,
      title: 'Order Printing Monitoring System',
      description: 'Real-time monitoring system for tracking printing status of takeaway and delivery orders of restaurants and food production sites.',
      longDescription: 'This monitoring system was developed for tracking the printing status of takeaway and delivery orders from restaurants. The system integrates with our customers email and printing systems to provide real-time updates on order status, printing errors, and order completion. The system introduces alerting to improve order processing efficiency, avoid unnecessary costs, and improve customer satisfaction.',
      image: '/lovable-uploads/project-printer-monitoring.png',
      tags: ['Web Development', 'API Development', 'Monitoring', 'Backend', 'Frontend', 'Alerting', 'Next.js'],
      category: 'software',
      year: '2025',
      client: 'Restaurant Chain',
    },
    {
      id: 170,
      title: 'Meeting Approval PowerAutomate Workflow',
      description: 'Automated workflow for approving or rejecting Microsoft Bookings meeting requests in Microsoft Teams.',
      longDescription: 'This workflow automation was built using Microsoft PowerAutomate to streamline the process of approving or rejecting meeting requests made through Microsoft Bookings. The workflow integrates with Microsoft Teams to notify approvers of pending requests, gather feedback, and update the booking status in real-time. The automation reduces manual intervention, optimizes processes, improves traceability and improves efficiency.',
      image: '/lovable-uploads/project-powerautomate.png',
      tags: ['PowerAutomate', 'Microsoft Teams', 'Workflow Automation', 'M365', 'Integration', 'Process Optimization'],
      category: 'workflow',
      year: '2023',
      client: 'IT Services Provider',
    },
    {
      id: 12,
      title: 'Digital Infrastructure Takeover | IT & Web',
      description: 'Complete takeover of website management and full IT offshoring for Kaiten Sushi restaurant chain.',
      longDescription: 'This project involved taking over the management of a restaurant chain\'s Wordpress website and providing full IT offshoring services as part of a long-term partnership and IT Single Point of Contact (SPOC) agreement. The services include website maintenance, updates, backups, security, and IT support for the restaurant\'s internal systems and devices across multiple locations. The partnership aims to improve IT efficiency, ensure availability, reduce costs, and ensure business continuity.',
      image: '/lovable-uploads/project-kaiten.png',
      tags: ['Web Development', 'IT Offshoring', 'Wordpress', 'IT Support', 'IT Consulting', 'IT Security', 'Device Management', 'Domain Management', 'Hosting', 'M365', 'Email Management', 'Printer Management', 'Network Management'],
      category: 'it',
      year: '2024-present',
      client: 'Restaurant Chain',
    },
    {
      id: 90,
      title: 'Order Printing Automation System',
      description: 'Printing automation system for processing takeaway and delivery orders in restaurants.',
      longDescription: 'This project involved an IoT-based printing automation system for processing takeaway & delivery orders in restaurants and production sites. The system integrates with the restaurant\'s ordering system to receive orders and send them to the corresponding printers in the kitchen or production area. The system reduces manual intervention, improves order processing efficiency, and ensures timely delivery of orders to customers.',
      image: '/lovable-uploads/project-printing-automation.png',
      tags: ['IOT', 'Automation', 'Wordpress', 'API Development', 'Backend', 'Process Optimization', 'IT'],
      category: 'it',
      year: '2024',
      client: 'Restaurant Chain',
    },
    {
      id: 140,
      title: 'IT Support & Minor Web Improvements',
      description: 'Complete takeover of website management and IT support for a physiotherapy practice.',
      longDescription: 'This project involved taking over the management of a physiotherapy practice\'s website and providing IT support services as part of a long-term partnership and IT Single Point of Contact (SPOC) agreement. The services includes improvements to the website and IT support for the practice\'s internal systems and devices.',
      image: '/lovable-uploads/img.png',
      tags: ['Web Development', 'IT Support', 'IT Consulting', 'Device Management', 'Domain Management', 'Hosting', 'M365', 'Email Management', 'Printer Management'],
      category: 'it',
      year: '2024-present',
      client: 'Physiotherapy Practice',
    },
    {
      id: 300,
      title: 'Interactive Educational Kiosk | In progress',
      description: 'Interactive touch-screen kiosk application with admin CMS for managing media.',
      longDescription: 'This project involved developing a customized interactive content management system for managing educational content and resources. The platform allows administrators to upload, organize, and distribute educational materials to visitors through an interactive touch-screen kiosk application. The system is user-friendly, secure, and scalable, providing a seamless experience for users.',
      image: '/lovable-uploads/project-ongoing.png',
      tags: ['Web Development', 'CMS', 'Kiosk Application', 'Frontend', 'Backend', 'API Development', 'Spring Boot', 'Angular', 'Java', 'CI/CD', 'DevOps', 'Docker'],
      category: 'software',
      year: '2025-present',
      client: 'Educational Institution',
    },
    {
      id: 120,
      title: 'AI App Backend API Development',
      description: 'Backend development for an AI chatbot app to automate AI prompts, authoritation, document management, and more.',
      longDescription: 'This project involved developing the backend API for an AI chatbot application that automates AI prompts, authorization, document management, chats and more. The API was built Spring Boot and integrates with the visual Mobile App frontend (Flutter for iOS and Android). The backend API is secure, scalable, and reliable, ensuring smooth operation of the AI application.',
      image: '/lovable-uploads/project-ai-backend.png',
      tags: ['API Development', 'Backend', 'Spring Boot', 'Java', 'AI', 'Chatbot'],
      category: 'api',
      year: '2024',
      client: 'Tech Startup',
    },
    {
      id: 5,
      title: 'Custom Webshop Development | In progress',
      description: 'Custom webshop development for an online rice-based product retailer with product management, order processing, and payment, shipping, and inventory management.',
      longDescription: 'This project involved developing a custom webshop for an online retailer specializing in rice-based products. The webshop includes features for product management, order processing, payment, shipping, and inventory management. The platform is user-friendly, secure, and scalable, providing a seamless shopping experience for customers.',
      image: '/lovable-uploads/project-riceage.png',
      tags: ['Web Development', 'E-commerce', 'Webshop', 'Frontend', 'Backend', 'API Development', 'Spring Boot', 'Angular', 'Java', 'Docker'],
      category: 'software',
      year: '2025',
      client: 'Food Manufacturer',
    },
    {
      id: 140,
      title: 'Task Manager | Calendar | Time Tracker Sync',
      description: 'Synchonized update of tasks, services, appointments, and time tracking',
      longDescription: 'This project involved developing an automation for synchronizing tasks, services, appointments, and time tracking between multiple systems. The integration connects a task management system (JIRA) with an automated calendar solution (Motion) and time tracking tool (Early) to ensure that all data is up-to-date and consistent across platforms. The automation reduces manual data entry, improves efficiency, ensures accurate time tracking & scheduling and allows focus on core business activities.',
      image: '/lovable-uploads/project-zapier.png',
      tags: ['Zapier', 'Workflow Automation', 'API Development', 'Integration', 'Backend', 'Frontend'],
      category: 'workflow',
      year: '2025',
      client: 'IT Services Provider',
    },
    {
      id: 150,
      title: 'Jenkins CI/CD Pipeline',
      description: 'Automated CI/CD pipeline for building, testing, and deploying software applications.',
      longDescription: 'This project involved setting up a Jenkins CI/CD pipeline to automate the building, testing, and deployment of software applications. The pipeline integrates with version control systems (Git) and orchestration platforms (Portainer) to automate the software development lifecycle. The CI/CD pipeline ensures faster deployment time, higher code quality, and improved collaboration among development teams.',
      image: '/lovable-uploads/project-jenkins.png',
      tags: ['CI/CD', 'Jenkins', 'Automation', 'DevOps', 'Git'],
      category: 'cicd',
      year: '2023',
      client: 'Financial Services',
    },
  ];

  // Filter out duplicates and sort by ID
  return projects
    .filter((project, index, self) => 
      index === self.findIndex((p) => p.id === project.id)
    )
    .sort((a, b) => a.id - b.id);
}
