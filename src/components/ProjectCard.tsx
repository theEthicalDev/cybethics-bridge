
import React from 'react';
import {useLanguage} from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  delay?: number;
  requestButton?: React.ReactNode;
  tagColor?: string;
}

const getTagColor = (tag: string): string => {
  const colorMap: Record<string, string> = {
    'Web Development': 'bg-blue-100 text-blue-800',
    'Spring Boot': 'bg-green-100 text-green-800',
    'Angular': 'bg-red-100 text-red-800',
    'React': 'bg-cyan-100 text-cyan-800',
    'Node.js': 'bg-green-100 text-green-800',
    'Automation': 'bg-purple-100 text-purple-800',
    'Microsoft PowerAutomate': 'bg-indigo-100 text-indigo-800',
    'Zapier': 'bg-orange-100 text-orange-800',
    'API Development': 'bg-teal-100 text-teal-800',
    'System Integration': 'bg-yellow-100 text-yellow-800',
    'Integration': 'bg-teal-100 text-teal-800',
    'Backend': 'bg-emerald-100 text-emerald-800',
    'Frontend': 'bg-pink-100 text-pink-800',
    'Mobile': 'bg-amber-100 text-amber-800',
    'UI/UX': 'bg-rose-100 text-rose-800',
    'CI/CD': 'bg-purple-100 text-purple-800',
    'GitHub Actions': 'bg-gray-100 text-gray-800',
    'Jenkins': 'bg-blue-100 text-blue-800',
    'Scripting': 'bg-lime-100 text-lime-800',
    'Cloud Infrastructure': 'bg-sky-100 text-sky-800',
  };
  
  return colorMap[tag] || 'bg-gray-200 text-gray-800';
};

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  tags, 
  url,
  delay = 0,
  requestButton,
  tagColor
}) => {
  const { t } = useLanguage();

  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300 group animate-fade-up flex flex-col" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <CardDescription className="text-text/80">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow content-center">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className={`font-normal ${tagColor || getTagColor(tag)}`}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto grid">
        <Link
          to={url}
          className="text-sm text-primary font-medium flex items-center group">
          {t('projects.viewProject')}
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        {requestButton && (
          <div className="mt-4">
            {requestButton}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
