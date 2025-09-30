
import React from 'react';
import AnimatedCounter from '@/components/AnimatedCounter.tsx';
import {Award, BellRingIcon, ReceiptTextIcon, ScaleIcon} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Stats: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  
  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className={`group transition-all duration-700 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`}>
        <AnimatedCounter
          value={25}
          label='stats.successfulProjects'
          icon={<ReceiptTextIcon className="h-8 w-8 mx-auto text-primary group-hover:text-primary-light transition-colors duration-300"/>}
          delay={50}
          suffix="+"
        />
      </div>
      <div className={`group transition-all duration-700 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
        <AnimatedCounter
          value={12}
          label='stats.yearsSoftwareExperience'
          icon={<Award className="h-8 w-8 mx-auto text-primary group-hover:text-primary-light transition-colors duration-300"/>}
          delay={300}
          suffix="+"
        />
      </div>
      <div className={`group transition-all duration-700 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
        <AnimatedCounter
          value={100}
          label='stats.priceworthyImprovements'
          icon={<ScaleIcon className="h-8 w-8 mx-auto text-primary group-hover:text-primary-light transition-colors duration-300"/>}
          delay={600}
          suffix="%"
        />
      </div>
      <div className={`group transition-all duration-700 ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
        <AnimatedCounter
          value={8}
          label='stats.possibilities'
          icon={<BellRingIcon className="h-8 w-8 mx-auto text-primary group-hover:text-primary-light transition-colors duration-300"/>}
          delay={0}
          transform={true}
        />
      </div>
    </div>
  );
}

export default Stats;
