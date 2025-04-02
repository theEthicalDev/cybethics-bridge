
import React from 'react';
import {useLanguage} from '@/contexts/LanguageContext';
import {Card, CardContent} from '@/components/ui/card';
import {CheckCircle} from 'lucide-react';
import Stats from '@/components/Stats';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      title: t('about.values.fairnessTitle'),
      description: t('about.values.fairness'),
      icon: '⚖️',
    },
    {
      title: t('about.values.empathyTitle'),
      description: t('about.values.empathy'),
      icon: '👥',
    },
    {
      title: t('about.values.ethicsTitle'),
      description: t('about.values.ethics'),
      icon: '🔍',
    },
    {
      title: t('about.values.trustTitle'),
      description: t('about.values.trust'),
      icon: '🤝',
    },
  ];

  // Updated to match project page tags
  const skills = [
    'Web Development', 'Spring Boot', 'Angular', 'React', 'Node.js', 
    'Automation', 'PowerAutomate', 'Zapier',
    'API', 'Integration', 'Backend', 'Frontend',
    'Mobile', 'UI/UX', 'CI/CD', 'GitHub Actions', 'Jenkins',
    'Scripting', 'Cloud', 'Software', 'DevOps', 'Docker', 'Kubernetes'
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="pt-12 pb-6 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-2">
                <span className="text-sm font-medium text-primary">{t('about.title')}</span>
              </div>
              <h1 className="mb-4">{t('about.title')}</h1>
              <p className="text-lg text-text/80 mb-6">
                {t('about.intro')}
              </p>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="w-full h-full lg:aspect-square max-w-lg mx-auto relative">
                <div className="lg:absolute inset-0 glass rounded-3xl border border-white/20 overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center lg:p-12">
                    <img 
                      src="/media/cybethics.png"
                      alt={t('about.logoAlt')}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="mb-6">{t('about.story.title')}</h2>
            <p className="text-lg text-text/80">
              {t('about.story.description')}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 animate-fade-up">
            <div className="w-full md:w-1/3 bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-medium mb-2">{t('about.story.cyber.title')}</h3>
              <p className="text-text/70">
                {t('about.story.cyber.description')}
              </p>
            </div>
            
            <div className="text-4xl text-primary/30">+</div>
            
            <div className="w-full md:w-1/3 bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-medium mb-2">{t('about.story.ethics.title')}</h3>
              <p className="text-text/70">
                {t('about.story.ethics.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="mb-4">{t('about.values.title')}</h2>
            <p className="text-lg text-text/80">
              {t('about.values.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                      <p className="text-text/80">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
              <h2 className="mb-6">{t('about.approach.title')}</h2>
              <p className="text-lg text-text/80 mb-6">
                {t('about.approach.description')}
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">{t('about.approach.listenFirst.title')}</h4>
                    <p className="text-text/80">{t('about.approach.listenFirst.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">{t('about.approach.rightSized.title')}</h4>
                    <p className="text-text/80">{t('about.approach.rightSized.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">{t('about.approach.transparent.title')}</h4>
                    <p className="text-text/80">{t('about.approach.transparent.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">{t('about.approach.longTerm.title')}</h4>
                    <p className="text-text/80">{t('about.approach.longTerm.description')}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative order-1 lg:order-2 animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg bg-white p-6 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="text-center">
                    <div className="text-3xl text-primary mb-2">💡</div>
                    <h4 className="font-medium text-sm">{t('about.approach.innovative')}</h4>
                  </div>
                </div>
                <div className="aspect-square rounded-lg bg-white p-6 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="text-center">
                    <div className="text-3xl text-primary mb-2">🛠️</div>
                    <h4 className="font-medium text-sm">{t('about.approach.practical')}</h4>
                  </div>
                </div>
                <div className="aspect-square rounded-lg bg-white p-6 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="text-center">
                    <div className="text-3xl text-primary mb-2">🤝</div>
                    <h4 className="font-medium text-sm">{t('about.approach.collaborative')}</h4>
                  </div>
                </div>
                <div className="aspect-square rounded-lg bg-white p-6 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="text-center">
                    <div className="text-3xl text-primary mb-2">🚀</div>
                    <h4 className="font-medium text-sm">{t('about.approach.efficient')}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Replacing Team Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="mb-4">{t('about.title')}</h2>
            <p className="text-lg text-text/80">
              {t('about.intro')}
            </p>
          </div>

          <Stats></Stats>

        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="mb-4">{t('about.expertise.title')}</h2>
            <p className="text-lg text-text/80">
              {t('about.expertise.description')}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 animate-fade-up">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="bg-white rounded-3xl p-12 text-center relative overflow-hidden border border-gray-100 shadow-lg animate-scale-in">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-medium mb-6">{t('contact.title')}</h2>
              <p className="text-lg text-text/80 mb-8">{t('contact.subtitle')}</p>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-white shadow-sm transition-colors hover:bg-primary/90"
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

export default About;
