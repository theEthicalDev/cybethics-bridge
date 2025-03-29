
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cog, Terminal, GitBranch, ServerCog, Monitor, User, BarChart2, ThumbsUp, Award } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import CommonProblems from '@/components/CommonProblems';
import VerticalProcessTimeline from '@/components/VerticalProcessTimeline';

const Index = () => {
  const { t } = useLanguage();
  const [projects, setProjects] = useState([
    {
      title: 'Enterprise Web Portal',
      description: 'A comprehensive web portal for enterprise resource management built with Spring Boot and Angular.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGFwcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      tags: ['Web Development', 'Spring Boot', 'Angular'],
      url: '/projects',
      tagColor: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'Workflow Automation System',
      description: 'Custom workflow automation solution for streamlining business processes and improving efficiency.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF1dG9tYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      tags: ['Automation', 'Microsoft PowerAutomate', 'Zapier'],
      url: '/projects',
      tagColor: 'bg-purple-100 text-purple-800'
    },
    {
      title: 'API Integration Platform',
      description: 'Seamless integration platform connecting multiple systems through custom API development.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFwaSUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      tags: ['API Development', 'Integration', 'Backend'],
      url: '/projects',
      tagColor: 'bg-green-100 text-green-800'
    },
  ]);

  // Fetch and update projects from Projects page
  // Note: In a real app, this would be done with global state or API calls
  // This is a placeholder to demonstrate the concept

  const services = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      titleKey: 'services.software.title',
      descriptionKey: 'services.software.description',
    },
    {
      icon: <Cog className="h-6 w-6 text-primary" />,
      titleKey: 'services.automation.title',
      descriptionKey: 'services.automation.description',
    },
    {
      icon: <Terminal className="h-6 w-6 text-primary" />,
      titleKey: 'services.scripting.title',
      descriptionKey: 'services.scripting.description',
    },
    {
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      titleKey: 'services.cicd.title',
      descriptionKey: 'services.cicd.description',
    },
    {
      icon: <ServerCog className="h-6 w-6 text-primary" />,
      titleKey: 'services.api.title',
      descriptionKey: 'services.api.description',
    },
    {
      icon: <Monitor className="h-6 w-6 text-primary" />,
      titleKey: 'services.offshoring.title',
      descriptionKey: 'services.offshoring.description',
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Common Problems Section */}
      <CommonProblems />
      
      {/* Projects Section */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="mb-4">{t('projects.title')}</h2>
              <p className="text-lg text-text/80">
                {t('projects.subtitle')}
              </p>
            </div>
            <Button asChild variant="ghost" className="mt-4 md:mt-0 group">
              <Link to="/projects" className="flex items-center font-medium">
                {t('projects.viewall')}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                tagColor={project.tagColor}
                url={project.url}
                delay={index * 100}
                requestButton={
                  <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                    <Link to="/contact">{t('projects.request')}</Link>
                  </Button>
                }
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section - add top padding to account for Contact Partner overlap */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">{t('services.title')}</h2>
            <p className="text-lg text-text/80">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                titleKey={service.titleKey}
                descriptionKey={service.descriptionKey}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Development Process Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">{t('services.process.title')}</h2>
            <p className="text-lg text-text/80">
              {t('services.process.subtitle')}
            </p>
          </div>
          
          <VerticalProcessTimeline />
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              {/* Stats Counter Section */}
              <div className="grid grid-cols-2 gap-6">
                <AnimatedCounter 
                  value={50} 
                  label="Happy Clients" 
                  icon={<User className="h-8 w-8 mx-auto" />}
                  delay={0} 
                />
                <AnimatedCounter 
                  value={125} 
                  label="Projects Completed" 
                  icon={<BarChart2 className="h-8 w-8 mx-auto" />}
                  delay={300} 
                />
                <AnimatedCounter 
                  value={10} 
                  label="Years Experience" 
                  icon={<Award className="h-8 w-8 mx-auto" />}
                  delay={600} 
                />
                <AnimatedCounter 
                  value={99} 
                  label="Success Rate" 
                  icon={<ThumbsUp className="h-8 w-8 mx-auto" />}
                  delay={900} 
                />
              </div>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <h2 className="mb-4">{t('about.title')}</h2>
                <p className="text-lg text-text/80 mb-6">
                  {t('about.intro')}
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium">{t('about.values.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <p>{t('about.values.fairness')}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <p>{t('about.values.empathy')}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <p>{t('about.values.ethics')}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <p>{t('about.values.trust')}</p>
                  </li>
                </ul>
              </div>
              
              <Button asChild className="bg-primary hover:bg-primary/90 text-white mt-4 group">
                <Link to="/about">
                  {t('nav.about')}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="bg-gradient-to-br from-primary/90 to-purple-700 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">{t('contact.title')}</h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">{t('contact.subtitle')}</p>
              <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 hover:text-primary border-none rounded-full">
                <Link to="/contact">
                  {t('contact.booking')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
