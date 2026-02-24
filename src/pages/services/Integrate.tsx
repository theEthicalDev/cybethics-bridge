import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Network, ArrowRight, CheckCircle2, GitMerge, Database, Brain, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/utils/projectData';

const items = ['api', 'erp', 'sync', 'tools'];
const benefitKeys = ['dataflow', 'silos', 'intelligence', 'efficiency'];
const benefitIcons = [GitMerge, Database, Brain, Workflow];
const processSteps = ['step1', 'step2', 'step3', 'step4'];
const challengeKeys = ['data', 'systems', 'excel'];
const projectIds = [30, 45, 35];

const Integrate = () => {
  const { t } = useLanguage();
  const allProjects = getProjects();
  const projects = allProjects.filter(p => projectIds.includes(p.id));

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="pt-12 pb-12 md:py-24 bg-gradient-to-br from-emerald-50/50 via-background to-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 rounded-full mb-8 border border-emerald-500/20">
              <Network className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-600">{t('servicePage.integrate.title')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('servicePage.integrate.subtitle')}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{t('servicePage.integrate.heroDescription')}</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('servicePage.integrate.whatWeDo')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {items.map((item, index) => (
              <div key={item} className="p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-semibold mb-3">{t(`servicePage.integrate.items.${item}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(`servicePage.integrate.items.${item}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('servicePage.integrate.challengesTitle')}</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {challengeKeys.map((key, index) => (
              <div key={key} className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{t(`business.challenge.${key}.title`)}</h3>
                    <p className="text-muted-foreground">{t(`business.challenge.${key}.description`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('servicePage.integrate.benefitsTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefitKeys.map((key, index) => {
              const Icon = benefitIcons[index];
              return (
                <div key={key} className="text-center p-6 rounded-2xl bg-card border border-border/50 shadow-soft animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{t(`servicePage.integrate.benefits.${key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`servicePage.integrate.benefits.${key}.description`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('servicePage.integrate.processTitle')}</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-6 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold mb-1">{t(`servicePage.integrate.process.${step}.title`)}</h3>
                  <p className="text-muted-foreground">{t(`servicePage.integrate.process.${step}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('servicePage.integrate.projectsTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <div key={project.id} className="animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                <ProjectCard
                  title={t(project.title)}
                  description={t(project.description)}
                  image={project.image}
                  tags={project.tags}
                  url={`/projects#project-${project.id}`}
                  delay={0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tools */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">{t('servicePage.integrate.partnersTitle')}</h3>
            <p className="text-muted-foreground leading-relaxed">{t('servicePage.integrate.partnersDescription')}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {t('servicePage.integrate.technologies').split(', ').map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm font-medium shadow-soft">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12">
        <div className="container text-center">
          <h3 className="text-lg font-semibold mb-4">{t('servicePage.integrate.technologiesTitle')}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {t('servicePage.integrate.technologies').split(', ').map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm font-medium shadow-soft">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('aid.cta.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t('aid.cta.subtitle')}</p>
            <Button asChild size="lg" className="rounded-full group">
              <Link to="/contact">
                {t('aid.cta.button')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrate;
