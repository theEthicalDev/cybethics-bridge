import React from 'react';
import { Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface TimelineItem {
  title: string;
  description: string;
}

interface VerticalTimelineProps {
  items: TimelineItem[];
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ items }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  
  return (
    <div ref={ref} className="relative py-12">
      {/* Center vertical line */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
      
      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <div 
            key={index} 
            className={`flex items-center mb-12 transition-all duration-700 ${
              isVisible ? (isEven ? 'animate-slide-right' : 'animate-slide-left') + ' opacity-100' : 'opacity-0'
            } ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Timeline content */}
            <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <h3 className="text-xl font-medium mb-2 gradient-text">{item.title}</h3>
              <p className="text-text/80">{item.description}</p>
            </div>
            
            {/* Center dot */}
            <div className="relative w-2/12 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300">
                <Check className="w-6 h-6 text-white" />
              </div>
            </div>
            
            {/* Empty space for alignment */}
            <div className="w-5/12"></div>
          </div>
        );
      })}
    </div>
  );
};

export default VerticalTimeline;
