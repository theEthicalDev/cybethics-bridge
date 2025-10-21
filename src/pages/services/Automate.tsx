import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/utils/projectData';
import {
  Zap, ArrowRight, CheckCircle2, Workflow, Mail, FileText,
  Database, Clock, Bot, ClipboardList, TrendingDown, Users, Target
} from 'lucide-react';

const Automate = () => {
  const { t } = useLanguage();
  const automationProjects = getProjects().filter(p => ['automation', 'workflow', 'scripting'].includes(p.category)).slice(0, 4);
  const automationChallenges = [
    { icon: <ClipboardList className="h-5 w-5 text-primary" />, titleKey: 'common.problems.inefficiency.title', descriptionKey: 'common.problems.inefficiency.description' },
    { icon: <Clock className="h-5 w-5 text-primary" />, titleKey: 'common.problems.legacy.title', descriptionKey: 'common.problems.legacy.description' }
  ];

  const whatWeAutomate = [
    { icon: <Workflow className="h-6 w-6" />, titleKey: 'services.aid.automate.what.item1.title', descKey: 'services.aid.automate.what.item1.description' },
    { icon: <Database className="h-6 w-6" />, titleKey: 'services.aid.automate.what.item2.title', descKey: 'services.aid.automate.what.item2.description' },
    { icon: <Mail className="h-6 w-6" />, titleKey: 'services.aid.automate.what.item3.title', descKey: 'services.aid.automate.what.item3.description' },
    { icon: <FileText className="h-6 w-6" />, titleKey: 'services.aid.automate.what.item4.title', descKey: 'services.aid.automate.what.item4.description' },
    { icon: <Clock className="h-6 w-6" />, titleKey: 'services.aid.automate.what.item5.title', descKey: 'services.aid.automate.what.item5.description' },
    { icon: <Bot className="h-6 w-6" />, titleKey: 'services.aid.automate.what.item6.title', descKey: 'services.aid.automate.what.item6.description' }
  ];

  const benefits = [
    { icon: <Clock className="h-6 w-6" />, titleKey: 'services.aid.automate.benefits.item1.title', descKey: 'services.aid.automate.benefits.item1.description' },
    { icon: <CheckCircle2 className="h-6 w-6" />, titleKey: 'services.aid.automate.benefits.item2.title', descKey: 'services.aid.automate.benefits.item2.description' },
    { icon: <TrendingDown className="h-6 w-6" />, titleKey: 'services.aid.automate.benefits.item3.title', descKey: 'services.aid.automate.benefits.item3.description' },
    { icon: <Users className="h-6 w-6" />, titleKey: 'services.aid.automate.benefits.item4.title', descKey: 'services.aid.automate.benefits.item4.description' }
  ];

  const processSteps = [
    { icon: <Target className="h-8 w-8" />, titleKey: 'services.aid.automate.process.analysis.title', descKey: 'services.aid.automate.process.analysis.description' },
    { icon: <FileText className="h-8 w-8" />, titleKey: 'services.aid.automate.process.design.title', descKey: 'services.aid.automate.process.design.description' },
    { icon: <Workflow className="h-8 w-8" />, titleKey: 'services.aid.automate.process.implementation.title', descKey: 'services.aid.automate.process.implementation.description' },
    { icon: <CheckCircle2 className="h-8 w-8" />, titleKey: 'services.aid.automate.process.testing.title', descKey: 'services.aid.automate.process.testing.description' },
    { icon: <Zap className="h-8 w-8" />, titleKey: 'services.aid.automate.process.optimization.title', descKey: 'services.aid.automate.process.optimization.description' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-500/10 via-primary/10 to-purple-500/10 md:mt-12 pt-36 pb-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full mb-6">
              <span className="text-sm font-medium text-primary uppercase">{t('services.aid.automate.badge')}</span>
            </div>
            <h1 className="mb-6">{t('services.aid.automate.hero.title')}</h1>
            <p className="text-xl text-text/80 mb-8">{t('services.aid.automate.hero.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full group"><Link to="/contact">{t('contact.booking')}<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="rounded-full"><Link to="/projects">{t('nav.projects')}</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-16 md:py-24 bg-white"><div className="container"><div className="text-center max-w-3xl mx-auto mb-16"><h2 className="mb-4">{t('services.aid.automate.what.title')}</h2><p className="text-lg text-text/80">{t('services.aid.automate.what.subtitle')}</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{whatWeAutomate.map((item, index) => (<Card key={index} className="border-2 hover:border-primary/50 transition-all"><CardContent className="p-6"><div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-4 rounded-2xl w-fit mb-4">{item.icon}</div><h3 className="text-xl font-semibold mb-3">{t(item.titleKey)}</h3><p className="text-text/70">{t(item.descKey)}</p></CardContent></Card>))}</div></div></section>

      {/* Challenges */}
      <section className="py-16 md:py-24 bg-gray-50"><div className="container"><div className="text-center max-w-3xl mx-auto mb-16"><h2 className="mb-4">{t('services.aid.automate.challenges.title')}</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">{automationChallenges.map((c, i) => (<Card key={i}><CardContent className="p-6"><div className="flex items-start gap-4"><div className="p-3 rounded-lg bg-primary/10">{c.icon}</div><div><h3 className="text-lg font-medium mb-2">{t(c.titleKey)}</h3><p className="text-text/80">{t(c.descriptionKey)}</p></div></div></CardContent></Card>))}</div></div></section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white"><div className="container"><div className="text-center max-w-3xl mx-auto mb-16"><h2 className="mb-4">{t('services.aid.automate.benefits.title')}</h2></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((b, i) => (<div key={i} className="text-center"><div className="bg-gradient-to-br from-primary/10 to-blue-500/10 p-6 rounded-2xl w-fit mx-auto mb-4">{b.icon}</div><h3 className="text-xl font-semibold mb-3">{t(b.titleKey)}</h3><p className="text-text/70">{t(b.descKey)}</p></div>))}</div></div></section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-gray-50"><div className="container"><div className="text-center max-w-3xl mx-auto mb-16"><h2 className="mb-4">{t('services.aid.automate.process.title')}</h2></div><div className="max-w-4xl mx-auto space-y-6">{processSteps.map((s, i) => (<div key={i} className="flex gap-6 items-start"><div className="bg-gradient-to-br from-primary to-blue-600 text-white p-4 rounded-2xl">{s.icon}</div><div className="flex-1 bg-white p-6 rounded-2xl"><h3 className="text-xl font-semibold mb-2">{t(s.titleKey)}</h3><p className="text-text/70">{t(s.descKey)}</p></div></div>))}</div></div></section>

      {/* Projects */}
      <section className="py-16 md:py-24 bg-white"><div className="container"><div className="text-center mb-16"><h2>{t('services.aid.automate.projects.title')}</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">{automationProjects.map(p => <ProjectCard key={p.id} title={t(p.title)} description={t(p.description)} image={p.image} tags={p.tags} url={`/projects#project-${p.id}`} />)}</div><div className="text-center"><Button asChild variant="outline" className="rounded-full"><Link to="/projects">{t('projects.viewAll')}</Link></Button></div></div></section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-blue-600 text-white"><div className="container"><div className="max-w-3xl mx-auto text-center"><h2 className="mb-6 text-white">{t('services.aid.automate.cta.title')}</h2><p className="text-xl mb-8">{t('services.aid.automate.cta.subtitle')}</p><Button asChild size="lg" className="bg-white text-primary rounded-full"><Link to="/contact">{t('contact.booking')}</Link></Button></div></div></section>
    </div>
  );
};

export default Automate;
