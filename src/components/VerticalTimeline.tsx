
import React from 'react';
import { Check } from 'lucide-react';

interface TimelineItem {
  title: string;
  description: string;
}

interface VerticalTimelineProps {
  items: TimelineItem[];
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ items }) => {
  return (
    <div className="relative py-12">
      {/* Center vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
      
      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <div key={index} className={`flex items-center mb-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Timeline content */}
            <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-text/80">{item.description}</p>
            </div>
            
            {/* Center dot */}
            <div className="relative w-2/12 flex justify-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
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
