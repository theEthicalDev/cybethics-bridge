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
}

export function getProjects(): Project[] {
  const projects = [
    {
      id: 10,
      title: 'projects.creditRequest.title',
      description: 'projects.creditRequest.description',
      longDescription: 'projects.creditRequest.longDescription',
      image: '/media/project-credit.png',
      tags: ['Web Development', 'Spring Boot', 'Angular', 'API Development', 'Backend', 'DevOps', 'Docker', 'GitHub Actions', 'Java'],
      category: 'software',
      year: '2024',
      client: 'projects.creditRequest.client',
    },
    {
      id: 35,
      title: 'projects.sftpSync.title',
      description: 'projects.sftpSync.description',
      longDescription: 'projects.sftpSync.longDescription',
      image: '/media/project-sftp.png',
      tags: ['Web Development', 'Spring Boot', 'Angular', 'API Development', 'Backend', 'Frontend', 'Java', 'IT', 'DevOps', 'Docker'],
      category: 'automation',
      year: '2023',
      client: 'projects.sftpSync.client',
    },
    {
      id: 45,
      title: 'projects.morpheusPlugin.title',
      description: 'projects.morpheusPlugin.description',
      longDescription: 'projects.morpheusPlugin.longDescription',
      image: '/media/project-morpheus.png',
      tags: ['API Development', 'Integration', 'Frontend', 'Java', 'Plugin Development', 'Automation', 'IT'],
      category: 'api',
      year: '2023',
      client: 'projects.morpheusPlugin.client',
    },
    {
      id: 30,
      title: 'projects.webshopERP.title',
      description: 'projects.webshopERP.description',
      longDescription: 'projects.webshopERP.longDescription',
      image: '/media/project-webshop-erp.png',
      tags: ['Spring Boot', 'API Development', 'Middleware Development', 'Integration', 'Backend', 'Java', 'ERP', 'E-commerce', 'Webshop'],
      category: 'api',
      year: '2024',
      client: 'projects.webshopERP.client',
    },
    {
      id: 250,
      title: 'projects.itMonitoring.title',
      description: 'projects.itMonitoring.description',
      longDescription: 'projects.itMonitoring.longDescription',
      image: '/media/project-graph.png',
      tags: ['Scripting', 'Python', 'Monitoring'],
      category: 'scripting',
      year: '2023',
      client: 'projects.itMonitoring.client',
    },
    {
      id: 50,
      title: 'projects.orderPrinting.title',
      description: 'projects.orderPrinting.description',
      longDescription: 'projects.orderPrinting.longDescription',
      image: '/media/project-printer-monitoring.png',
      tags: ['Web Development', 'API Development', 'Monitoring', 'Backend', 'Frontend', 'Alerting'],
      category: 'software',
      year: '2025',
      client: 'projects.orderPrinting.client',
    },
    {
      id: 170,
      title: 'projects.meetingApproval.title',
      description: 'projects.meetingApproval.description',
      longDescription: 'projects.meetingApproval.longDescription',
      image: '/media/project-powerautomate.png',
      tags: ['PowerAutomate', 'Microsoft Teams', 'Workflow', 'M365', 'Integration', 'Process'],
      category: 'workflow',
      year: '2023',
      client: 'projects.meetingApproval.client',
    },
    {
      id: 12,
      title: 'projects.digitalInfrastructure.title',
      description: 'projects.digitalInfrastructure.description',
      longDescription: 'projects.digitalInfrastructure.longDescription',
      image: '/media/project-kaiten.png',
      tags: ['Web Development', 'Wordpress', 'IT Support', 'M365', 'Email', 'Printer', 'Network', 'Domains & Hosting'],
      category: 'it',
      year: '2024-present',
      client: 'projects.digitalInfrastructure.client',
    },
    {
      id: 90,
      title: 'projects.orderPrintingAutomation.title',
      description: 'projects.orderPrintingAutomation.description',
      longDescription: 'projects.orderPrintingAutomation.longDescription',
      image: '/media/project-printing-automation.png',
      tags: ['IOT', 'Automation', 'Wordpress', 'API Development', 'Backend', 'Process', 'IT'],
      category: 'it',
      year: '2024',
      client: 'projects.orderPrintingAutomation.client',
    },
    {
      id: 145,
      title: 'projects.itSupport.title',
      description: 'projects.itSupport.description',
      longDescription: 'projects.itSupport.longDescription',
      image: '/media/project-physio.png',
      tags: ['Web Development', 'IT Support', 'Domains & Hosting', 'M365', 'Email', 'Printer', 'Network'],
      category: 'it',
      year: '2024-present',
      client: 'projects.itSupport.client',
    },
    {
      id: 300,
      title: 'projects.educationalKiosk.title',
      description: 'projects.educationalKiosk.description',
      longDescription: 'projects.educationalKiosk.longDescription',
      image: '/media/project-ongoing.png',
      tags: ['Web Development', 'CMS', 'Kiosk Application', 'Frontend', 'Backend', 'API Development', 'Spring Boot', 'Angular', 'Java', 'DevOps', 'Docker'],
      category: 'software',
      year: '2025-present',
      client: 'projects.educationalKiosk.client',
    },
    {
      id: 120,
      title: 'projects.aiAppBackend.title',
      description: 'projects.aiAppBackend.description',
      longDescription: 'projects.aiAppBackend.longDescription',
      image: '/media/project-ai-backend.png',
      tags: ['API Development', 'Backend', 'Spring Boot', 'Java', 'AI', 'Chatbot'],
      category: 'api',
      year: '2024',
      client: 'projects.aiAppBackend.client',
    },
    {
      id: 5,
      title: 'projects.customWebshop.title',
      description: 'projects.customWebshop.description',
      longDescription: 'projects.customWebshop.longDescription',
      image: '/media/project-riceage.png',
      tags: ['Web Development', 'E-commerce', 'Webshop', 'Frontend', 'Backend', 'API Development', 'Spring Boot', 'Angular', 'Java', 'Docker'],
      category: 'software',
      year: '2025',
      client: 'projects.customWebshop.client',
    },
    {
      id: 140,
      title: 'projects.taskManager.title',
      description: 'projects.taskManager.description',
      longDescription: 'projects.taskManager.longDescription',
      image: '/media/project-zapier.png',
      tags: ['Zapier', 'Workflow', 'API Development', 'Integration', 'Backend', 'Frontend'],
      category: 'workflow',
      year: '2025',
      client: 'projects.taskManager.client',
    },
    {
      id: 150,
      title: 'projects.jenkinsPipeline.title',
      description: 'projects.jenkinsPipeline.description',
      longDescription: 'projects.jenkinsPipeline.longDescription',
      image: '/media/project-jenkins.png',
      tags: ['Jenkins', 'Automation', 'DevOps', 'Git'],
      category: 'cicd',
      year: '2023',
      client: 'projects.jenkinsPipeline.client',
    },
  ];

  // Filter out duplicates and sort by ID
  return projects
    .filter((project, index, self) =>
      index === self.findIndex((p) => p.id === project.id)
    )
    .sort((a, b) => a.id - b.id);
}