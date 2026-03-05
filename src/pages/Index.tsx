import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import Stats from '@/components/Stats';
import AIDProblemStatement from '@/components/aid/AIDProblemStatement';
import AIDFramework from '@/components/aid/AIDFramework';
import AIDApproach from '@/components/aid/AIDApproach';
import AIDTargetClients from '@/components/aid/AIDTargetClients';
import AIDConviction from '@/components/aid/AIDConviction';
import AIDClientJourney from '@/components/aid/AIDClientJourney';
import AIDScope from '@/components/aid/AIDScope';
import ContactPartner from '@/components/ContactPartner';
import HomepageStats from '@/components/HomepageStats';
import ProblemFinder from '@/components/ProblemFinder';
import HomepageFAQ from '@/components/HomepageFAQ';
import StickyCTA from '@/components/StickyCTA';
import { getProjects } from '@/utils/projectData';

const Index = () => {
  const { t } = useLanguage();
  const projects = getProjects().slice(0, 3);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <StickyCTA />
      <HeroSection />
      <HomepageStats />
      <AIDProblemStatement />
      <AIDFramework />
      <AIDApproach />
      <AIDClientJourney />
      <AIDConviction />
      <ContactPartner />
      <AIDScope />
      <ProblemFinder />
      <AIDTargetClients />
      <HomepageFAQ />

      {/* Projects Section */}
      <section aria-labelledby="projects-heading" className="py-16 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-2xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
            <div className="max-w-2xl animate-fade-up">
              <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-8 border border-primary/20">
                <span className="text-sm font-medium text-primary">{t('projects.title')}</span>
              </div>
              <h2 id="projects-heading" className="mb-6">{t('projects.title')}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">{t('projects.subtitle')}</p>
            </div>
            <Button asChild variant="outline" size="lg" className="mt-6 md:mt-0 group rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <Link to="/projects" className="flex items-center font-semibold">
                {t('projects.viewall')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
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

      {/* About Section */}
      <section aria-labelledby="about-heading" className="py-12 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <Stats />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <h2 id="about-heading" className="mb-4">{t('about.title')}</h2>
                <p className="text-lg text-muted-foreground mb-6">{t('about.intro')}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">{t('about.values.title')}</h3>
                <ul className="space-y-3">
                  {['fairness', 'empathy', 'ethics', 'trust'].map((value) => (
                    <li key={value} className="flex items-start">
                      <div className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <p>{t(`about.values.${value}`)}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4 group">
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
      <section aria-labelledby="cta-heading" className="py-16 md:py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl p-16 md:p-20 text-primary-foreground text-center overflow-hidden shadow-large">
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto animate-fade-up">
              <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8">{t('aid.cta.title')}</h2>
              <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed max-w-3xl mx-auto">{t('aid.cta.subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button asChild size="lg" variant="outline" className="bg-background text-primary hover:bg-background/90 border-none rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                  <Link to="/contact" className="px-8 py-4 font-semibold">
                    <Calendar className="mr-2 h-5 w-5" />
                    {t('aid.cta.button')}
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-transparent text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 hover:border-primary-foreground rounded-full hover:scale-105 transition-all duration-300">
                  <Link to="/services" className="px-8 py-4 font-semibold">
                    {t('nav.services')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
