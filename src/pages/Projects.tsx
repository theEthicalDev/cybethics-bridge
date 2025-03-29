
import React, {useState} from 'react';
import {useLanguage} from '@/contexts/LanguageContext';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {ArrowRight, ExternalLink, Code, Cog, Network, Terminal, GitBranch, Smartphone, Monitor} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Projects = () => {
  const {t} = useLanguage();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const projects = [
    {
      id: 10,
      title: 'Credit Request Management Portal',
      description: 'Enterprise portal for managing credit requests, approvals, status tracking, and reporting.',
      longDescription: 'This web application was built using Spring Boot for the backend and Angular for the frontend. It integrates' +
        ' real-time data on credit requests, approvals, and status updates. The portal centralizes credit requests, reducing processing time' +
        ' and improving employee satisfaction. The application is secure, scalable, and user-friendly.',
      image: '/lovable-uploads/project-credit.png',
      tags: ['Web Development', 'Spring Boot', 'Angular', 'API Development', 'Backend', 'CI/CD', 'DevOps', 'Docker', 'GitHub Actions', 'Java'],
      category: 'software',
      year: '2024',
      client: 'Financial Services',
    },
    {
      id: 35,
      title: 'SFTP File System Sync Tool',
      description: 'Custom file management system for automating file transfers, archiving, synchronization, quick file, folder or content search.',
      longDescription: 'This file management system was developed using Spring Boot and Angular. It provides a user-friendly interface for' +
        ' managing files, folders, and content across multiple SFTP servers. The system includes features for automating file transfers, archiving,' +
        ' synchronization, and quick search. It improves efficiency and reduces manual file management tasks.',
      image: '/lovable-uploads/project-sftp.png',
      tags: ['Web Development', 'Spring Boot', 'Angular', 'API Development', 'Backend', 'Frontend', 'Java', 'IT', 'CI/CD', 'DevOps', 'Docker'],
      category: 'automation',
      year: '2023',
      client: 'IT Services Provider',
    },
    {
      id: 45,
      title: 'Morpheus Custom Plugin Development',
      description: 'Custom plugin development as enhancement of the Morpheus cloud management platform for automating cloud operations.',
      longDescription: 'This project involved developing custom plugins for the Morpheus cloud management platform to automate cloud operations' +
        ' and enhance the platform\'s functionality. The plugins were built using Java integrating the' +
        ' Morpheus Plugin API to provide' +
        ' additional features, improve user experience, and streamline cloud management tasks.',
      image: '/lovable-uploads/project-morpheus.png',
      tags: ['API Development', 'Integration', 'Frontend', 'Java', 'Plugin Development', 'Automation', 'IT'],
      category: 'api',
      year: '2023',
      client: 'IT Services Provider',
    },
    {
      id: 30,
      title: 'Webshop to ERP Data Synchronization',
      description: 'Automated data synchronization between a webshop and an ERP system to ensure up-to-date order processing and inventory management.',
      longDescription: 'This project involved developing custom scripts and workflows to synchronize data between a Shopware webshop and' +
        ' an BlueOffice ERP system. The solution is a middleware software with an API that connects the two systems, ensuring data consistency' +
        ' and regular updates. The synchronization process includes order processing, inventory management, and product updates.',
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
      description: 'Real-time monitoring system for tracking printing status of takeaway and delivery orders of restaurants and' +
        ' food production sites.',
      longDescription: 'This monitoring system was developed for tracking the printing status of takeaway and delivery orders from restaurants.' +
        ' The system integrates with our customers email and printing systems to provide real-time updates on order status, printing' +
        ' errors, and order completion. The system introduces alerting to improve order processing efficiency, avoid unnecessary costs,' +
        ' and improve customer satisfaction.',
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
      longDescription: 'This workflow automation was built using Microsoft PowerAutomate to streamline the process of approving or' +
        ' rejecting meeting requests made through Microsoft Bookings. The workflow integrates with Microsoft Teams to notify approvers' +
        ' of pending requests, gather feedback, and update the booking status in real-time. The automation reduces manual intervention, ' +
        ' optimizes processes, improves traceability and improves efficiency.',
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
      longDescription: 'This project involved taking over the management of a restaurant chain\'s Wordpress website and providing full IT' +
        ' offshoring services as part of a long-term partnership and IT Single Point of Contact (SPOC) agreement. The services include' +
        ' website maintenance, updates, backups, security, and IT support for the restaurant\'s internal systems and devices across multiple' +
        ' locations. The partnership aims to improve IT efficiency, ensure availability, reduce costs, and ensure business continuity.',
      image: '/lovable-uploads/project-kaiten.png',
      tags: ['Web Development', 'IT Offshoring', 'Wordpress', 'IT Support', 'IT Consulting', 'IT Security', 'Device Management', 'Domain' +
      ' Management', 'Hosting', 'M365', 'Email Management', 'Printer Management', 'Network Management'],
      category: 'it',
      year: '2024-present',
      client: 'Restaurant Chain',
    },
    {
      id: 90,
      title: 'Order Printing Automation System',
      description: 'Printing automation system for processing takeaway and delivery orders in restaurants.',
      longDescription: 'This project involved an IoT-based printing automation system for processing takeaway & delivery orders in' +
        ' restaurants and production sites. The system integrates with the restaurant\'s ordering system to receive orders and send them' +
        ' to the corresponding printers in the kitchen or production area. The system reduces manual intervention, improves order processing' +
        ' efficiency, and ensures timely delivery of orders to customers.',
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
      longDescription: 'This project involved taking over the management of a physiotherapy practice\'s website and providing IT support' +
        ' services as part of a long-term partnership and IT Single Point of Contact (SPOC) agreement. The services includes improvements' +
        ' to the website and IT support for the practice\'s internal systems and devices.',
      image: '/lovable-uploads/img.png',
      tags: ['Web Development', 'IT Support', 'IT Consulting', 'Device Management', 'Domain Management', 'Hosting', 'M365', 'Email' +
      ' Management', 'Printer Management'],
      category: 'it',
      year: '2024-present',
      client: 'Physiotherapy Practice',
    },
    {
      id: 300,
      title: 'Interactive Educational Kiosk | In progress',
      description: 'Interactive touch-screen kiosk application with admin CMS for managing media.',
      longDescription: 'This project involved developing a customized interactive content management system for managing educational' +
        ' content and resources.' +
        ' The platform allows administrators to upload, organize, and distribute educational materials to visitors through an interactive' +
        ' touch-screen kiosk application. The system is user-friendly, secure, and scalable, providing a seamless experience for users.',
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
      longDescription: 'This project involved developing the backend API for an AI chatbot application that automates AI prompts, authorization,' +
        ' document management, chats and more. The API was built Spring Boot and integrates with the visual Mobile App frontend' +
        ' (Flutter for iOS and Android). The backend API is secure, scalable, and reliable, ensuring smooth operation of the AI application.',
      image: '/lovable-uploads/project-ai-backend.png',
      tags: ['API Development', 'Backend', 'Spring Boot', 'Java', 'AI', 'Chatbot'],
      category: 'api',
      year: '2024',
      client: 'Tech Startup',
    },
    {
      id: 5,
      title: 'Custom Webshop Development | In progress',
      description: 'Custom webshop development for an online rice-based product retailer with product management, order processing, and' +
        ' payment, shipping, and inventory management.',
      longDescription: 'This project involved developing a custom webshop for an online retailer specializing in rice-based products.' +
        ' The webshop includes features for product management, order processing, payment, shipping, and inventory management. The platform' +
        ' is user-friendly, secure, and scalable, providing a seamless shopping experience for customers.',
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
      longDescription: 'This project involved developing an automation for synchronizing tasks, services, appointments, and time' +
        ' tracking between multiple systems. The integration connects a task management system (JIRA) with an automated calendar' +
        ' solution (Motion) and time tracking' +
        ' tool (Early) to ensure that all data is up-to-date and consistent across platforms. The automation reduces manual data entry,' +
        ' improves efficiency, ensures accurate time tracking & scheduling and allows focus on core business activities.',
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
      longDescription: 'This project involved setting up a Jenkins CI/CD pipeline to automate the building, testing, and deployment of' +
        ' software applications. The pipeline integrates with version control systems (Git) and orchestration platforms (Portainer) to' +
        ' automate the software development lifecycle. The CI/CD pipeline ensures faster deployment time, higher code quality, and' +
        ' improved collaboration among development teams.',
      image: '/lovable-uploads/project-jenkins.png',
      tags: ['CI/CD', 'Jenkins', 'Automation', 'DevOps', 'Git'],
      category: 'cicd',
      year: '2023',
      client: 'Financial Services',
    },
  ]
  // Remove duplicate projects with the same id
  .filter((project, index, self) => 
    index === self.findIndex((p) => p.id === project.id)
  )
  .sort((a, b) => a.id - b.id);

  // Get unique tags from all projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];

  // Filter projects by category and tag
  const getFilteredProjects = (category: string) => {
    return projects.filter(project =>
      (category === 'all' || project.category === category) &&
      (!selectedTag || project.tags.includes(selectedTag))
    );
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(prevTag => prevTag === tag ? null : tag);
  };

  const categories = [
    {id: 'all', label: 'All Projects', icon: <Code className="mr-2 h-4 w-4"/>, color: 'from-primary to-purple-600'},
    {id: 'software', label: 'Software Development', icon: <Smartphone className="mr-2 h-4 w-4"/>, color: 'from-blue-600 to-blue-400'},
    {id: 'workflow', label: 'Workflow Automation', icon: <Cog className="mr-2 h-4 w-4"/>, color: 'from-yellow-600 to-yellow-400'},
    {id: 'api', label: 'API & Integration', icon: <Network className="mr-2 h-4 w-4"/>, color: 'from-green-600 to-green-400'},
    {id: 'cicd', label: 'CI/CD', icon: <GitBranch className="mr-2 h-4 w-4"/>, color: 'from-amber-600 to-amber-400'},
    {id: 'it', label: 'IT', icon: <Monitor className="mr-2 h-4 w-4"/>, color: 'from-red-600 to-red-400'},
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">{t('projects.title')}</span>
            </div>
            <h1 className="mb-6">{t('projects.title')}</h1>
            <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-8">
        <div className="container">
          {/* Filter by tags - only show on larger screens */}
          {!isMobile && (
            <div className="mb-8 flex flex-wrap gap-2 justify-center animate-fade-up">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className={`cursor-pointer ${selectedTag === tag ? 'bg-primary' : 'hover:bg-gray-100'}`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </Badge>
              ))}
              {selectedTag && (
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => setSelectedTag(null)}
                >
                  Clear Filter
                </Badge>
              )}
            </div>
          )}

          {/* Projects by category */}
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center w-full overflow-x-auto scrollbar-none">
              <TabsList className="flex-nowrap mb-8 p-1 bg-transparent justify-start md:justify-center animate-fade-up">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className={`px-4 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:${category.color} data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-full flex items-center gap-1 transition-all duration-200 whitespace-nowrap`}
                  >
                    {category.icon}
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0 animate-fade-up"
              >
                {getFilteredProjects(category.id).length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getFilteredProjects(category.id).map((project) => (
                      <Card key={project.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow group">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          {/* Only show tags on non-mobile devices */}
                          {!isMobile && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {project.tags.map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className={`font-normal text-xs cursor-pointer ${
                                    selectedTag === tag ? 'bg-primary/20 text-primary' : 'bg-gray-100 text-text/70'
                                  }`}
                                  onClick={() => handleTagClick(tag)}
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                          <CardTitle className="text-lg font-medium">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <CardDescription className="text-text/80">
                            {project.description}
                          </CardDescription>

                          <div className="pt-2 flex justify-between items-center">
                            <div className="text-sm text-text/60">
                              {project.year} • {project.client}
                            </div>
                            <button
                              className="text-sm text-primary font-medium flex items-center group"
                              onClick={() => window.open(`#project-${project.id}`, '_self')}
                            >
                              View Details
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-gray-50 rounded-lg">
                    <p className="text-text/70">No projects match the current filters.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Project Details Sections */}
      {projects.map((project) => (
        <section id={`project-${project.id}`} key={`detail-${project.id}`} className="py-16 border-t border-gray-100">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up order-2 lg:order-1">
                {!isMobile && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                <h2 className="text-2xl md:text-3xl font-medium mb-4">{project.title}</h2>
                <p className="text-text/80 mb-6">{project.longDescription}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm text-text/60 mb-1">Year</h4>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-text/60 mb-1">Client</h4>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-text/60 mb-1">Category</h4>
                    <p className="font-medium">
                      {categories.find(c => c.id === project.category)?.label}
                    </p>
                  </div>
                </div>

                <button className="inline-flex items-center text-primary font-medium hover:underline">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Request Similar Project
                </button>
              </div>

              <div className="relative animate-scale-in order-1 lg:order-2">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-primary/90 to-purple-700 rounded-3xl p-12 text-white text-center relative overflow-hidden animate-scale-in">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Let's Build Your Next Project</h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">Ready to bring your ideas to life? Schedule a consultation with our
                experts.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-primary shadow-sm transition-colors hover:bg-white/90"
              >
                {t('contact.booking')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
