import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Cog, ArrowRight, CheckCircle2, Zap, TrendingDown, Scale, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/utils/projectData';

const items = ['workflow', 'data', 'reporting', 'ai'];
const benefitKeys = ['efficiency', 'errors', 'costs', 'scalability'];
const benefitIcons = [Zap, CheckCircle2, TrendingDown, Scale];
const processSteps = ['step1', 'step2', 'step3', 'step4'];
const challengeKeys = ['email', 'copy', 'admin'];
const projectIds = [170, 140, 90];

const Automate = () => {
  const { t } = useLanguage();
  const allProjects = getProjects();
  const projects = allProjects.filter(p => projectIds.includes(p.id));

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="pt-12 pb-12 md:py-24 bg-gradient-to-br from-blue-50/50 via-background to-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 rounded-full mb-8 border border-blue-500/20">
              <Cog className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">{t('servicePage.automate.title')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('servicePage.automate.subtitle')}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{t('servicePage.automate.heroDescription')}</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('servicePage.automate.whatWeDo')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {items.map((item, index) => (
              <div key={item} className="p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-semibold mb-3">{t(`servicePage.automate.items.${item}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(`servicePage.automate.items.${item}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('servicePage.automate.challengesTitle')}</h2>
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
          <h2 className="text-3xl font-bold mb-12 text-center">{t('servicePage.automate.benefitsTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefitKeys.map((key, index) => {
              const Icon = benefitIcons[index];
              return (
                <div key={key} className="text-center p-6 rounded-2xl bg-card border border-border/50 shadow-soft animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{t(`servicePage.automate.benefits.${key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`servicePage.automate.benefits.${key}.description`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('servicePage.automate.processTitle')}</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {processSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-6 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold mb-1">{t(`servicePage.automate.process.${step}.title`)}</h3>
                  <p className="text-muted-foreground">{t(`servicePage.automate.process.${step}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('servicePage.automate.projectsTitle')}</h2>
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

      {/* Technologies */}
      <section className="py-12 bg-muted/30">
        <div className="container text-center">
          <h3 className="text-lg font-semibold mb-4">{t('servicePage.automate.technologiesTitle')}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {t('servicePage.automate.technologies').split(', ').map((tech) => (
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

export default Automate;
