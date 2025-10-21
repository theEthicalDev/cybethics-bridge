import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Target, TrendingUp } from 'lucide-react';
import { getProjects } from '@/utils/projectData';

interface AIDBentoGridProps {
  category: 'automate' | 'integrate' | 'develop';
}

const AIDBentoGrid: React.FC<AIDBentoGridProps> = ({ category }) => {
  const { t } = useLanguage();
  const allProjects = getProjects();

  // Map categories to project categories
  const categoryMap = {
    automate: ['automation', 'workflow', 'scripting'],
    integrate: ['api', 'integration'],
    develop: ['software']
  };

  // Get 2 projects for this category
  const categoryProjects = allProjects
    .filter(p => categoryMap[category].includes(p.category))
    .slice(0, 2);

  const challenges = [
    t(`services.aid.bento.${category}.challenge1`),
    t(`services.aid.bento.${category}.challenge2`),
    t(`services.aid.bento.${category}.challenge3`)
  ];

  const solutions = [
    t(`services.aid.bento.${category}.solution1`),
    t(`services.aid.bento.${category}.solution2`),
    t(`services.aid.bento.${category}.solution3`)
  ];

  const benefits = [
    t(`services.aid.bento.${category}.benefit1`),
    t(`services.aid.bento.${category}.benefit2`),
    t(`services.aid.bento.${category}.benefit3`)
  ];

  // Category colors
  const colors = {
    automate: 'from-blue-500/10 to-purple-500/10 border-blue-500/20',
    integrate: 'from-purple-500/10 to-pink-500/10 border-purple-500/20',
    develop: 'from-pink-500/10 to-primary/10 border-primary/20'
  };

  const iconColors = {
    automate: 'text-blue-600',
    integrate: 'text-purple-600',
    develop: 'text-primary'
  };

  return (
    <section className={`py-16 md:py-24 relative overflow-hidden bg-gradient-to-br ${colors[category]}`}>
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className={`inline-block px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full mb-6 border ${colors[category]}`}>
            <span className={`text-sm font-medium ${iconColors[category]}`}>
              {t(`services.aid.${category}.title`)}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
            {t(`services.aid.bento.${category}.title`)}
          </h2>
          <p className="text-lg md:text-xl text-text/80">
            {t(`services.aid.bento.${category}.subtitle`)}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Challenges Card - Spans 2 columns on large screens */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-white/50 animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${colors[category]}`}>
                <Target className={`h-6 w-6 ${iconColors[category]}`} />
              </div>
              <h3 className="text-2xl font-semibold gradient-text-subtle">
                {t(`services.aid.bento.challengesTitle`)}
              </h3>
            </div>
            <div className="space-y-4">
              {challenges.map((challenge, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <CheckCircle2 className={`h-5 w-5 ${iconColors[category]} flex-shrink-0 mt-1 group-hover:scale-110 transition-transform`} />
                  <p className="text-base text-text/80">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-white/50 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${colors[category]}`}>
                <TrendingUp className={`h-6 w-6 ${iconColors[category]}`} />
              </div>
              <h3 className="text-2xl font-semibold gradient-text-subtle">
                {t(`services.aid.bento.benefitsTitle`)}
              </h3>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <CheckCircle2 className={`h-5 w-5 ${iconColors[category]} flex-shrink-0 mt-1 group-hover:scale-110 transition-transform`} />
                  <p className="text-sm text-text/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Cards */}
          {categoryProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-white/50 group animate-fade-up"
              style={{ animationDelay: `${(idx + 2) * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={t(project.title)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${colors[category]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2 gradient-text-subtle">{t(project.title)}</h4>
                <p className="text-sm text-text/70 mb-4 line-clamp-2">{t(project.description)}</p>
                <Link to={`/projects#project-${project.id}`}>
                  <Button variant="ghost" size="sm" className={`${iconColors[category]} hover:bg-transparent group/btn`}>
                    {t('projects.viewdetails')}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}

          {/* Solutions Card - Spans remaining space */}
          <div className={`${categoryProjects.length === 2 ? 'lg:col-span-1' : 'lg:col-span-2'} bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-white/50 animate-fade-up`} style={{ animationDelay: '400ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${colors[category]}`}>
                <CheckCircle2 className={`h-6 w-6 ${iconColors[category]}`} />
              </div>
              <h3 className="text-2xl font-semibold gradient-text-subtle">
                {t(`services.aid.bento.solutionsTitle`)}
              </h3>
            </div>
            <div className="space-y-4">
              {solutions.map((solution, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <ArrowRight className={`h-5 w-5 ${iconColors[category]} flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform`} />
                  <p className="text-base text-text/80">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '500ms' }}>
          <Button asChild variant="gradient" size="lg" className="rounded-full group">
            <Link to={`/services/${category}`}>
              {t('services.aid.bento.learnMore')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIDBentoGrid;
