
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, ExternalLink, Code, Cog, Network, Terminal, GitBranch, Smartphone } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Enterprise Resource Management Portal',
      description: 'A comprehensive web portal for enterprise resource management that centralizes data, streamlines workflows, and provides real-time analytics for decision making.',
      longDescription: 'This enterprise portal was built using Spring Boot for the backend and Angular for the frontend. It integrates with multiple data sources and legacy systems to provide a unified interface for managing company resources. Key features include role-based access control, real-time reporting, and workflow automation.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      tags: ['Web Development', 'Spring Boot', 'Angular', 'Enterprise'],
      category: 'software',
      year: '2023',
      client: 'Financial Services Company',
    },
    {
      id: 2,
      title: 'Workflow Automation System',
      description: 'Custom workflow automation solution for streamlining business processes, reducing manual tasks, and improving operational efficiency.',
      longDescription: 'This automation system was implemented using Microsoft Power Automate and custom connectors. It automates document processing, approval workflows, and data synchronization between multiple systems. The solution reduced manual processing time by 75% and virtually eliminated data entry errors.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF1dG9tYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      tags: ['Automation', 'Microsoft PowerAutomate', 'Zapier', 'Workflow'],
      category: 'automation',
      year: '2022',
      client: 'Healthcare Provider',
    },
    {
      id: 3,
      title: 'API Integration Platform',
      description: 'Seamless integration platform connecting multiple systems through custom API development and middleware solutions.',
      longDescription: 'This integration platform serves as a central hub for connecting various systems and applications. It was built using RESTful APIs and webhooks, with a focus on security and reliability. The platform processes over 100,000 transactions daily with 99.99% uptime, ensuring smooth data flow across the organization.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFwaSUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      tags: ['API Development', 'Integration', 'Backend', 'Middleware'],
      category: 'api',
      year: '2023',
      client: 'Retail Chain',
    },
    {
      id: 4,
      title: 'Automated Deployment Pipeline',
      description: 'Fully automated CI/CD pipeline for a microservices architecture, enabling faster releases and improved code quality.',
      longDescription: 'This CI/CD implementation used GitHub Actions to automate building, testing, and deploying microservices to a Kubernetes cluster. The pipeline includes automated testing, security scanning, and deployment with zero downtime. Release cycles were reduced from weeks to days, with the ability to deploy multiple times per day when needed.',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlcGxveW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      tags: ['CI/CD', 'GitHub Actions', 'DevOps', 'Kubernetes'],
      category: 'cicd',
      year: '2022',
      client: 'Technology Startup',
    },
    {
      id: 5,
      title: 'IT Systems Monitoring Scripts',
      description: 'Custom scripts for automated monitoring, maintenance, and reporting of critical IT systems and infrastructure.',
      longDescription: 'This suite of scripts was developed to automate routine maintenance tasks, monitor system health, and generate reports for the IT department. Written primarily in PowerShell and Python, the scripts interact with various systems to collect data, perform maintenance tasks, and alert administrators of potential issues before they impact operations.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNjcmlwdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      tags: ['Scripting', 'PowerShell', 'Python', 'Monitoring'],
      category: 'scripting',
      year: '2023',
      client: 'Manufacturing Company',
    },
    {
      id: 6,
      title: 'Mobile Inventory Management App',
      description: 'Cross-platform mobile application for real-time inventory tracking and management with barcode scanning capabilities.',
      longDescription: 'This mobile app was developed using Flutter to ensure compatibility with both iOS and Android platforms. It features barcode scanning, real-time inventory updates, and offline capabilities for use in warehouses with limited connectivity. The app integrates with the company\'s ERP system through a custom API to maintain data consistency across all platforms.',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGludmVudG9yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      tags: ['Mobile Development', 'Flutter', 'Inventory', 'Cross-platform'],
      category: 'software',
      year: '2022',
      client: 'Logistics Company',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Code className="mr-2 h-4 w-4" />, color: 'from-primary to-purple-600' },
    { id: 'software', label: 'Software Development', icon: <Smartphone className="mr-2 h-4 w-4" />, color: 'from-blue-600 to-blue-400' },
    { id: 'automation', label: 'Automation', icon: <Cog className="mr-2 h-4 w-4" />, color: 'from-violet-600 to-violet-400' },
    { id: 'api', label: 'API & Integration', icon: <Network className="mr-2 h-4 w-4" />, color: 'from-green-600 to-green-400' },
    { id: 'cicd', label: 'CI/CD', icon: <GitBranch className="mr-2 h-4 w-4" />, color: 'from-amber-600 to-amber-400' },
    { id: 'scripting', label: 'Scripting', icon: <Terminal className="mr-2 h-4 w-4" />, color: 'from-red-600 to-red-400' },
  ];

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
          {/* Filter by tags */}
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

          {/* Projects by category */}
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center w-full">
              <TabsList className="flex-wrap space-x-2 mb-8 p-1 bg-transparent justify-center animate-fade-up">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className={`px-4 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:${category.color} data-[state=active]:text-white data-[state=active]:shadow-sm rounded-full flex items-center gap-1 transition-all duration-200`}
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
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
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
              <p className="text-lg md:text-xl text-white/90 mb-8">Ready to bring your ideas to life? Schedule a consultation with our experts.</p>
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
