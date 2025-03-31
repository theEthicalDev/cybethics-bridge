import React from 'react';
import {useLanguage} from '@/contexts/LanguageContext';
import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import {ArrowRight, CheckCircle2, Code, Cog, FileSpreadsheet, GitBranch, Monitor, ServerCog, Terminal} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import VerticalProcessTimeline from '@/components/VerticalProcessTimeline';
import {useIsMobile} from '@/hooks/use-mobile';
import Stats from '@/components/Stats';

// Import the project data directly
import {getProjects} from '@/utils/projectData';

const BusinessChallenge = ({ 
  icon, 
  title, 
  description, 
  index = 0 
}: { 
  icon: React.ReactNode;
  title: string; 
  description: string;
  index?: number; 
}) => {
  return (
    <div 
      className="flex items-start gap-4 animate-fade-up" 
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <p className="text-lg font-medium">{title}</p>
        <p className="text-base text-text/80 mt-1">{description}</p>
      </div>
    </div>
  );
};

const Index = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  // Get the first three projects from the projects list
  const projects = getProjects().slice(0, 3);

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

  // Updated Business Challenges with new content
  const businessChallenges = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "You're drowning in email threads and spreadsheets",
      description: "Keeping track of projects, approvals, and updates through emails and shared documents leads to confusion, version control issues, and missed deadlines.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "Your team wastes hours copying and pasting data",
      description: "Manual data transfers between different systems or documents create inefficiencies, introduce errors, and prevent your team from focusing on strategic tasks.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "Your data is separated across different tools",
      description: "Information stored in multiple disconnected applications makes it difficult to get a complete picture, leading to inefficiencies and poor decision-making.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "You're making business decisions based on gut feeling",
      description: "Without real-time data and analytics, you're forced to rely on outdated reports or assumptions, leading to missed opportunities and costly mistakes.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "Your employees spend more time on admin work than actual work",
      description: "Manually filling out forms, generating reports, and organizing files takes away time from innovation, problem-solving, and customer service.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "Your systems don't talk to each other, causing double work",
      description: "Disconnected software forces employees to re-enter the same data multiple times, leading to inconsistencies, errors, and inefficiencies.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "You're pushing Excel beyond its limits and it's costing you",
      description: "Using Excel as a database, workflow manager, or reporting tool creates versioning issues, manual errors, lack of collaboration, and security risks.",
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Business Challenges Section - Updated with new design */}
      <section className="py-24 bg-gray-50" id="identify-challenges">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">{t('business.questions.title')}</h2>
            <p className="text-lg text-text/80">
              {t('business.questions.subtitle')}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {businessChallenges.map((challenge, index) => (
              <BusinessChallenge
                key={index}
                icon={challenge.icon}
                title={challenge.title}
                description={challenge.description}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full group">
              <Link to="/faq">
                {t('services.more')}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
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
                url={`/projects#project-${project.id}`}
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
      
      {/* Services Section */}
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
              <Stats></Stats>
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
