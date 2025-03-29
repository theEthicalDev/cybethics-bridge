
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';
import { User, BarChart2, Award, ThumbsUp } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      title: 'Fairness',
      description: t('about.values.fairness'),
      icon: '⚖️',
    },
    {
      title: 'Empathy',
      description: t('about.values.empathy'),
      icon: '👥',
    },
    {
      title: 'Ethics',
      description: t('about.values.ethics'),
      icon: '🔍',
    },
    {
      title: 'Trust',
      description: t('about.values.trust'),
      icon: '🤝',
    },
  ];

  const skills = [
    'Spring Boot', 'Angular', 'React', 'Node.js', 
    'Microsoft PowerAutomate', 'Zapier', 
    'CI/CD', 'GitHub Actions', 'Jenkins',
    'API Development', 'System Integration',
    'Scripting', 'Cloud Infrastructure',
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
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
              
              <div className="pt-4">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-red-600 rounded"></div>
                  <p className="text-base font-medium">{t('about.swiss')}</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="w-full h-full aspect-square max-w-lg mx-auto relative">
                <div className="absolute inset-0 glass rounded-3xl border border-white/20 overflow-hidden">
                  <div className="h-full w-full flex items-center justify-center p-12">
                    <img 
                      src="/lovable-uploads/192393ac-becc-48a5-9de0-8d8874776f38.png"
                      alt="Cybethics Logo"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Name Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="mb-6">Our Story</h2>
            <p className="text-lg text-text/80">
              The name <span className="text-primary font-medium">Cybethics</span> combines "Cyber" and "Ethics" because ethics means something to us. It's at the core of how we approach every project and client relationship.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 animate-fade-up">
            <div className="w-full md:w-1/3 bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Cyber</h3>
              <p className="text-text/70">
                Representing our technical expertise in software development, automation, and digital solutions.
              </p>
            </div>
            
            <div className="text-4xl text-primary/30">+</div>
            
            <div className="w-full md:w-1/3 bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary text-xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Ethics</h3>
              <p className="text-text/70">
                Highlighting our commitment to fairness, transparency, and doing what's right for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="mb-4">{t('about.values.title')}</h2>
            <p className="text-lg text-text/80">
              Our values guide everything we do, from how we interact with clients to how we approach development challenges.
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
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
              <h2 className="mb-6">Our Approach</h2>
              <p className="text-lg text-text/80 mb-6">
                We believe that successful software projects start with understanding the real needs and goals of our clients. Our approach focuses on these key principles:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Listen First</h4>
                    <p className="text-text/80">We take the time to truly understand your business objectives before proposing solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Right-sized Solutions</h4>
                    <p className="text-text/80">We implement the most suitable solution, not necessarily the most complex or expensive one.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Transparent Communication</h4>
                    <p className="text-text/80">We maintain clear and honest communication throughout the project lifecycle.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Long-term Partnership</h4>
                    <p className="text-text/80">We aim to be a trusted partner in your digital journey, not just a service provider.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative order-1 lg:order-2 animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg bg-white p-6 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="text-center">
                    <div className="text-3xl text-primary mb-2">💡</div>
                    <h4 className="font-medium text-sm">Innovative</h4>
                  </div>
                </div>
                <div className="aspect-square rounded-lg bg-white p-6 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="text-center">
                    <div className="text-3xl text-primary mb-2">🛠️</div>
                    <h4 className="font-medium text-sm">Practical</h4>
                  </div>
                </div>
                <div className="aspect-square rounded-lg bg-white p-6 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="text-center">
                    <div className="text-3xl text-primary mb-2">🤝</div>
                    <h4 className="font-medium text-sm">Collaborative</h4>
                  </div>
                </div>
                <div className="aspect-square rounded-lg bg-white p-6 shadow-md flex items-center justify-center hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
                  <div className="text-center">
                    <div className="text-3xl text-primary mb-2">🚀</div>
                    <h4 className="font-medium text-sm">Efficient</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Replacing Team Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="mb-4">Our Impact</h2>
            <p className="text-lg text-text/80">
              Our dedication to quality and client satisfaction has helped us achieve impressive results
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <AnimatedCounter 
              value={50} 
              label="Happy Clients" 
              icon={<User className="h-8 w-8 mx-auto text-primary" />}
              delay={0} 
            />
            <AnimatedCounter 
              value={125} 
              label="Projects Completed" 
              icon={<BarChart2 className="h-8 w-8 mx-auto text-primary" />}
              delay={300} 
            />
            <AnimatedCounter 
              value={10} 
              label="Years Experience" 
              icon={<Award className="h-8 w-8 mx-auto text-primary" />}
              delay={600} 
            />
            <AnimatedCounter 
              value={99} 
              label="Success Rate" 
              icon={<ThumbsUp className="h-8 w-8 mx-auto text-primary" />}
              delay={900} 
              suffix="%" 
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="mb-4">Our Expertise</h2>
            <p className="text-lg text-text/80">
              We bring a diverse range of technical skills and expertise to solve your most complex challenges.
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
      <section className="py-16">
        <div className="container">
          <div className="bg-white rounded-3xl p-12 text-center relative overflow-hidden border border-gray-100 shadow-lg animate-scale-in">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Ready to work with us?</h2>
              <p className="text-lg text-text/80 mb-8">Schedule a consultation with our team to discuss your project requirements.</p>
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
