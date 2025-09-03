import React from 'react';
import {useLanguage} from '@/contexts/LanguageContext';
import {Button} from '@/components/ui/button';
import {Link} from 'react-router-dom';
import {ArrowRight, Calendar, CheckCircle2, Code, Cog, GitBranch, Monitor, ServerCog, Terminal} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import VerticalProcessTimeline from '@/components/VerticalProcessTimeline';
import {useIsMobile} from '@/hooks/use-mobile';
import Stats from '@/components/Stats';
import LocalBusinessInfo from '@/components/LocalBusinessInfo';

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
      style={{animationDelay: `${index * 100}ms`}}
    >
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-base text-text/80 mt-1">{description}</p>
      </div>
    </div>
  );
};

const Index = () => {
  const {t} = useLanguage();
  const isMobile = useIsMobile();

  // Get the first three projects from the projects list
  const projects = getProjects().slice(0, 3);

  const services = [
    {
      icon: <Code className="h-6 w-6 text-primary"/>,
      titleKey: 'services.software.title',
      descriptionKey: 'services.software.description',
    },
    {
      icon: <Cog className="h-6 w-6 text-primary"/>,
      titleKey: 'services.automation.title',
      descriptionKey: 'services.automation.description',
    },
    {
      icon: <ServerCog className="h-6 w-6 text-primary"/>,
      titleKey: 'services.api.title',
      descriptionKey: 'services.api.description',
    },
    {
      icon: <Terminal className="h-6 w-6 text-primary"/>,
      titleKey: 'services.scripting.title',
      descriptionKey: 'services.scripting.description',
    },
    {
      icon: <GitBranch className="h-6 w-6 text-primary"/>,
      titleKey: 'services.cicd.title',
      descriptionKey: 'services.cicd.description',
    },
    {
      icon: <Monitor className="h-6 w-6 text-primary"/>,
      titleKey: 'services.offshoring.title',
      descriptionKey: 'services.offshoring.description',
    }
  ];

  // Updated Business Challenges with new content
  const businessChallenges = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary"/>,
      title: 'business.challenge.email.title',
      description: 'business.challenge.email.description',
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary"/>,
      title: 'business.challenge.data.title',
      description: 'business.challenge.data.description',
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary"/>,
      title: 'business.challenge.copy.title',
      description: 'business.challenge.copy.description',
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary"/>,
      title: 'business.challenge.gut.title',
      description: 'business.challenge.gut.description',
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary"/>,
      title: 'business.challenge.admin.title',
      description: 'business.challenge.admin.description',
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary"/>,
      title: 'business.challenge.systems.title',
      description: 'business.challenge.systems.description',
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary"/>,
      title: 'business.challenge.excel.title',
      description: 'business.challenge.excel.description',
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection/>

      {/* Business Challenges Section - Enhanced with modern design */}
      <section aria-labelledby="challenges-heading" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden" id="identify-challenges">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl animate-float-gentle"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/10 to-transparent blur-3xl animate-float-gentle" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container relative z-10">
          <header className="text-center max-w-4xl mx-auto mb-20 animate-fade-up">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-8 backdrop-blur-sm border border-primary/20">
              <span className="text-sm font-medium text-primary">Herausforderungen identifizieren</span>
            </div>
            <h2 id="challenges-heading" className="mb-6 gradient-text">{t('business.questions.title')}</h2>
            <p className="text-xl text-text-light leading-relaxed">
              {t('business.questions.subtitle')}
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businessChallenges.map((challenge, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group animate-fade-up border border-white/30" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1 p-2 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                      {challenge.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold gradient-text-subtle mb-2">{t(challenge.title)}</h3>
                      <p className="text-base text-text/80 leading-relaxed">{t(challenge.description)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-up" style={{animationDelay: '800ms'}}>
            <Button asChild variant="gradient" size="lg" className="rounded-full group">
              <Link to="/faq">
                {t('services.more')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section - Enhanced */}
      <section aria-labelledby="projects-heading" className="py-16 md:py-32 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-l from-primary/5 to-transparent blur-2xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
            <div className="max-w-2xl animate-fade-up">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-8 backdrop-blur-sm border border-primary/20">
                <span className="text-sm font-medium text-primary">Unsere Projekte</span>
              </div>
              <h2 id="projects-heading" className="mb-6 gradient-text">{t('projects.title')}</h2>
              <p className="text-xl text-text-light leading-relaxed">
                {t('projects.subtitle')}
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="mt-6 md:mt-0 group rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 animate-fade-up" style={{animationDelay: '200ms'}}>
              <Link to="/projects" className="flex items-center font-semibold gradient-text-subtle">
                {t('projects.viewall')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"/>
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="hover-lift animate-fade-up" style={{animationDelay: `${index * 150}ms`}}>
                <ProjectCard
                  title={t(project.title)}
                  description={t(project.description)}
                  image={project.image}
                  tags={project.tags}
                  url={`/projects#project-${project.id}`}
                  delay={0}
                  requestButton={
                    <Button asChild variant="gradient" size="sm" className="mt-6 w-full rounded-full">
                      <Link to="/contact">{t('projects.request')}</Link>
                    </Button>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/media/project-ai-backend.png"
                alt={t('seo.softwareentwicklung.imageAlt')}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t('seo.softwareentwicklung.title')}</h2>
              <p className="text-lg text-text/80 mb-6">
                {t('seo.softwareentwicklung.description')}
              </p>
              <p className="text-base text-text/70 mb-4">
                {t('seo.softwareentwicklung.details')}
              </p>
              <p className="text-sm text-text/60 mb-8">
                {t('seo.softwareentwicklung.contact') + ' '}
                <Link to="/services" className="text-primary hover:underline">{t('seo.softwareentwicklung.webDevelopment')}</Link>,
                <Link to="/services" className="text-primary hover:underline ml-1">{t('seo.softwareentwicklung.api')}</Link>,
                <Link to="/services" className="text-primary hover:underline ml-1">{t('seo.softwareentwicklung.projectConsulting')} </Link>
                {t('seo.softwareentwicklung.or')}
                <Link to="/service" className="text-primary hover:underline ml-1"> {t('seo.softwareentwicklung.customSolutions')}</Link>.
                {' ' + t('seo.softwareentwicklung.readMore1')} <Link to="/projects" className="text-primary hover:underline">{t('seo.softwareentwicklung.readMore2')}</Link>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm">
                  <Link to="/services">{t('seo.softwareentwicklung.cta')}</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/contact">{t('seo.contact.cta')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Content Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">{t('seo.automatisierung.title')}</h2>
              <p className="text-lg text-text/80 mb-6">
                {t('seo.automatisierung.description')}
              </p>
              <p className="text-base text-text/70 mb-4">
                {t('seo.automatisierung.details')}
              </p>
              <p className="text-sm text-text/60 mb-8">
                {t('seo.automatisierung.info1')}
                <Link to="/faq" className="text-primary hover:underline">{t('seo.automatisierung.faq')}</Link>
                {t('seo.automatisierung.info2') + ' '}
                <Link to="/contact" className="text-primary hover:underline ml-1">{t('seo.automatisierung.freeConsulting')}</Link>.
                {t('seo.automatisierung.info3') + ' '}
                <Link to="/about" className="text-primary hover:underline">{t('seo.automatisierung.team')}</Link>
                {t('seo.automatisierung.info4')}
                <Link to="/about" className="text-primary hover:underline ml-1">{t('seo.automatisierung.workingStyle')}</Link>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm">
                  <Link to="/services">{t('seo.automatisierung.cta')}</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/projects">{t('seo.projects.cta')}</Link>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/media/project-powerautomate.png"
                alt={t('seo.automatisierung.imageAlt')}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Business Info Section */}
      <LocalBusinessInfo/>

      {/* Services Section */}
      <section aria-labelledby="services-heading" className="py-12 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="services-heading" className="mb-4">{t('services.title')}</h2>
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
      <section aria-labelledby="process-heading" className="py-12 md:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 id="process-heading" className="mb-4">{t('services.process.title')}</h2>
            <p className="text-lg text-text/80">
              {t('services.process.subtitle')}
            </p>
          </div>

          <VerticalProcessTimeline/>
        </div>
      </section>

      {/* About Section */}
      <section aria-labelledby="about-heading" className="py-12 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              {/* Stats Counter Section */}
              <Stats></Stats>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <h2 id="about-heading" className="mb-4">{t('about.title')}</h2>
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
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with stunning visuals */}
      <section aria-labelledby="cta-heading" className="py-16 md:py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="relative bg-gradient-to-br from-primary via-primary-light to-purple-600 rounded-3xl p-16 md:p-20 text-white text-center overflow-hidden shadow-large hover:shadow-xl transition-all duration-500">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
              <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-2xl animate-float-gentle" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-gradient-shift"></div>
              </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto animate-fade-up">
              <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
                <span className="text-sm font-medium text-white">Bereit für Ihr Projekt?</span>
              </div>
              <h2 id="cta-heading" className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">{t('contact.title')}</h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12 text-balance leading-relaxed max-w-3xl mx-auto">{t('contact.subtitle')}</p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button asChild
                        size="lg"
                        variant="outline"
                        className="bg-white text-primary hover:bg-white/90 hover:text-primary border-none rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Link to="/contact" className="px-8 py-4 font-semibold">
                    <Calendar className="mr-2 h-5 w-5"/>
                    {t('contact.booking')}
                  </Link>
                </Button>
                
                <Button asChild
                        size="lg"
                        className="bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white rounded-full hover:scale-105 transition-all duration-300">
                  <Link to="/services" className="px-8 py-4 font-semibold">
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 h-5 w-5"/>
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 border border-white/20 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-white/10 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
