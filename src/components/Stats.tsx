
import React from 'react';
import AnimatedCounter from '@/components/AnimatedCounter.tsx';
import {Award, BellRingIcon, ReceiptTextIcon, ScaleIcon} from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
      <AnimatedCounter
        value={25}
        label='stats.successfulProjects'
        icon={<ReceiptTextIcon className="h-8 w-8 mx-auto text-primary"/>}
        delay={50}
        suffix="+"
      />
      <AnimatedCounter
        value={12}
        label='stats.yearsSoftwareExperience'
        icon={<Award className="h-8 w-8 mx-auto text-primary"/>}
        delay={300}
        suffix="+"
      />
      <AnimatedCounter
        value={100}
        label='stats.priceworthyImprovements'
        icon={<ScaleIcon className="h-8 w-8 mx-auto text-primary"/>}
        delay={600}
        suffix="%"
      />
      <AnimatedCounter
        value={8}
        label='stats.possibilities'
        icon={<BellRingIcon className="h-8 w-8 mx-auto text-primary"/>}
        delay={0}
        transform={true}
      />
    </div>
  );
}

export default Stats;
