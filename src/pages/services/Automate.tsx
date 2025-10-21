import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Code, 
  Workflow,
  Bot,
  Timer,
  TrendingUp,
  Shield,
  Target
} from 'lucide-react';
import { getProjects } from '@/utils/projectData';
import ProjectCard from '@/components/ProjectCard';

const Automate = () => {
  const { t } = useLanguage();
  
  // Get automation-related projects
  const automationProjects = getProjects()
    .filter(p => ['automation', 'workflow', 'scripting'].includes(p.category))
    .slice(0, 6);

  // Challenges from main page that fit automation
  const automationChallenges = [
    'business.challenge.email',
    'business.challenge.admin',
    'business.challenge.copy',
  ];

  const processSteps = [
    { icon: <Target className="h-6 w-6" />, key: 'analysis' },
    { icon: <Code className="h-6 w-6" />, key: 'design' },
    { icon: <Workflow className="h-6 w-6" />, key: 'implementation' },
    { icon: <Shield className="h-6 w-6" />, key: 'testing' },
    { icon: <TrendingUp className="h-6 w-6" />, key: 'optimization' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50/30">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-transparent blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-purple-400/20 to-transparent blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/5 rounded-full mb-8 backdrop-blur-sm border border-blue-500/20">
              <span className="text-sm font-medium text-blue-600 flex items-center">
                <Zap className="mr-2 h-4 w-4" />
                {t('services.aid.automate.badge')}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">{t('services.aid.automate.hero.title')}</h1>
            <p className="text-xl md:text-2xl text-text-light leading-relaxed mb-8">
              {t('services.aid.automate.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="gradient" size="lg" className="rounded-full group">
                <Link to="/contact">
                  {t('contact.booking')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-blue-500/30 hover:border-blue-500">
                <Link to="/projects">
                  {t('projects.viewall')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              {t('services.aid.automate.what.title')}
            </h2>
            <p className="text-lg md:text-xl text-text/80">
              {t('services.aid.automate.what.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((num, idx) => (
              <div 
                key={num}
                className="bg-gradient-to-br from-blue-50/50 to-white p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-blue-100/50 group animate-fade-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <Bot className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 gradient-text-subtle">
                  {t(`services.aid.automate.what.item${num}.title`)}
                </h3>
                <p className="text-text/70">
                  {t(`services.aid.automate.what.item${num}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              {t('services.aid.automate.challenges.title')}
            </h2>
            <p className="text-lg md:text-xl text-text/80">
              {t('services.aid.automate.challenges.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
            {automationChallenges.map((challenge, idx) => (
              <div 
                key={challenge}
                className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group animate-fade-up border border-white/30"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1 p-2 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 group-hover:from-blue-500/20 group-hover:to-purple-500/10 transition-all duration-300">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold gradient-text-subtle mb-2">
                      {t(`${challenge}.title`)}
                    </h3>
                    <p className="text-base text-text/80 leading-relaxed">
                      {t(`${challenge}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              {t('services.aid.automate.benefits.title')}
            </h2>
            <p className="text-lg md:text-xl text-text/80">
              {t('services.aid.automate.benefits.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((num, idx) => (
              <div 
                key={num}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50/30 to-transparent hover:from-blue-50/50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Timer className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 gradient-text-subtle">
                    {t(`services.aid.automate.benefits.item${num}.title`)}
                  </h3>
                  <p className="text-text/70">
                    {t(`services.aid.automate.benefits.item${num}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              {t('services.aid.automate.process.title')}
            </h2>
            <p className="text-lg md:text-xl text-text/80">
              {t('services.aid.automate.process.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step, idx) => (
              <div 
                key={step.key}
                className="flex items-start gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/5">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 gradient-text-subtle">
                    {t(`services.aid.automate.process.${step.key}.title`)}
                  </h3>
                  <p className="text-text/70">
                    {t(`services.aid.automate.process.${step.key}.description`)}
                  </p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              {t('services.aid.automate.projects.title')}
            </h2>
            <p className="text-lg md:text-xl text-text/80">
              {t('services.aid.automate.projects.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationProjects.map((project, idx) => (
              <div key={project.id} className="animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
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

          <div className="text-center mt-12 animate-fade-up">
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-blue-500/30 hover:border-blue-500">
              <Link to="/projects">
                {t('projects.viewall')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-500 via-purple-500 to-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('services.aid.automate.cta.title')}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {t('services.aid.automate.cta.subtitle')}
            </p>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-none rounded-full">
              <Link to="/contact">
                {t('contact.booking')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Automate;
