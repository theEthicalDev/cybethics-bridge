
import React, {useState} from 'react';
import {useLanguage} from '@/contexts/LanguageContext';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {ArrowRight, ExternalLink, Code, Cog, Network, Terminal, GitBranch, Smartphone, Monitor} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {getProjects} from '@/utils/projectData.ts';
import path from 'path';
import {Link} from 'react-router-dom';

const Projects = () => {
  const {t} = useLanguage();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const projects = getProjects();

  // Get unique tags from all projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];

  // Filter projects by category and tag
  const getFilteredProjects = (category: string) => {
    return projects.filter(project =>
      (category === 'all' || project.category === category) &&
      (!selectedTag || project.tags.includes(selectedTag))
    );
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(prevTag => prevTag === tag ? null : tag);
  };
  
  // Scroll to project detail section
  const scrollToProject = (projectId: string) => {
    const element = document.getElementById(`project-${projectId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    {id: 'all', label: 'All Projects', icon: <Code className="mr-2 h-4 w-4"/>, color: 'from-primary to-purple-600'},
    {id: 'software', label: t('services.software.title'), icon: <Terminal className="mr-2 h-4 w-4"/>, color: 'from-purple-600 to-purple-400'},
    {id: 'workflow', label: t('services.automation.title'), icon: <Cog className="mr-2 h-4 w-4"/>, color: 'from-yellow-600 to-yellow-400'},
    {id: 'api', label: t('services.api.title'), icon: <Network className="mr-2 h-4 w-4"/>, color: 'from-green-600 to-green-400'},
    {id: 'cicd', label: t('services.cicd.title'), icon: <GitBranch className="mr-2 h-4 w-4"/>, color: 'from-amber-600 to-amber-400'},
    {id: 'it', label: t('services.offshoring.title'), icon: <Smartphone className="mr-2 h-4 w-4"/>, color: 'from-blue-600 to-blue-400'},
  ];

  return (
    <div className="min-h-screen pt-24 md:pb-16">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">{t('projects.title')}</span>
            </div>
            <h1 className="mb-6">{t('projects.title')}</h1>
            <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-8">
        <div className="container">
          {/* Filter by tags - only show on larger screens */}
          {!isMobile && (
            <div className="mb-8 flex flex-wrap gap-2 justify-center animate-fade-up">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className={`cursor-pointer ${selectedTag === tag ? 'bg-primary' : 'hover:bg-gray-100'}`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </Badge>
              ))}
              {selectedTag && (
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => setSelectedTag(null)}
                >
                  Clear Filter
                </Badge>
              )}
            </div>
          )}

          {/* Projects by category */}
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center w-full overflow-x-auto scrollbar-none">
              <TabsList className="flex-nowrap mb-8 p-1 bg-transparent justify-start md:justify-center animate-fade-up custom-scroll" style={{overflowY: 'hidden'}}>
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className={`px-4 py-2.5 data-[state=active]:bg-gradient-to-r data-[state=active]:${category.color} data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-full flex items-center gap-1 transition-all duration-200 whitespace-nowrap`}
                  >
                    {category.icon}
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <style>
                  {`
                  .custom-scroll {
                      overflow-x: auto;
                      scrollbar-width: none; /* Firefox */
                      -ms-overflow-style: none; /* Internet Explorer 10+ */
                  }

                  .custom-scroll::-webkit-scrollbar {
                      display: none; /* Safari and Chrome */
                  }
                  `}
              </style>
            </div>

            {categories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0 animate-fade-up"
              >
                {getFilteredProjects(category.id).length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getFilteredProjects(category.id).map((project) => (
                      <Card key={project.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow group">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={project.image}
                            alt={t(project.title)}
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          {/* Only show tags on non-mobile devices */}
                          {!isMobile && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {project.tags.map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className={`font-normal text-xs cursor-pointer ${
                                    selectedTag === tag ? 'bg-primary/20 text-primary' : 'bg-gray-100 text-text/70'
                                  }`}
                                  onClick={() => handleTagClick(tag)}
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                          <CardTitle className="text-lg font-medium">{t(project.title)}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <CardDescription className="text-text/80">
                            {t(project.description)}
                          </CardDescription>

                          <div className="pt-2 flex justify-between items-center">
                            <div className="text-sm text-text/60">
                              {project.year} • {t(project.client)}
                            </div>
                            <button
                              className="text-sm text-primary font-medium flex items-center group"
                              onClick={() => scrollToProject(project.id.toString())}
                            >
                              {t('faq.solutions.viewDetails')}
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-gray-50 rounded-lg">
                    <p className="text-text/70">No projects match the current filters.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Project Details Sections */}
      {projects.map((project) => (
        <section id={`project-${project.id}`} key={`detail-${project.id}`} className="py-16 border-t border-gray-100">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-up order-2 lg:order-1">
                {!isMobile && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                <h2 className="text-wrap break-words md:text-3xl font-medium mb-4">{t(project.title)}</h2>
                <p className="text-text/80 mb-6">{t(project.longDescription)}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-sm text-text/60 mb-1">{t('projects.year')}</h4>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-text/60 mb-1">{t('projects.client')}</h4>
                    <p className="font-medium text-wrap">{t(project.client)}</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-text/60 mb-1">{t('projects.category')}</h4>
                    <p className="font-medium">
                      {categories.find(c => c.id === project.category)?.label}
                    </p>
                  </div>
                </div>

                <button className="inline-flex items-center text-primary font-medium hover:underline">
                  <Link to="/contact" className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-1"/>
                    {t('projects.request')}
                  </Link>
                </button>
              </div>

              <div className="relative animate-scale-in order-1 lg:order-2">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-primary/90 to-purple-700 rounded-3xl p-12 text-white text-center relative overflow-hidden animate-scale-in">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Let's Build Your Next Project</h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 text-balance">Ready to bring your ideas to life? Schedule a consultation with our
                experts.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-primary shadow-sm transition-colors hover:bg-white/90"
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

export default Projects;
