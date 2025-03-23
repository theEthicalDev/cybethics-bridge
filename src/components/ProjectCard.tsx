
import React from 'react';
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
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  tags, 
  url,
  delay = 0,
  requestButton
}) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md group animate-fade-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="font-normal bg-gray-100 text-text/70">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-text/80">
          {description}
        </CardDescription>
        {requestButton && (
          <div className="mt-4">
            {requestButton}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link 
          to={url}
          className="text-sm text-primary font-medium flex items-center group"
        >
          View Project
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
