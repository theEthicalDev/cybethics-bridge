import React from 'react';
import AnimatedCounter from '@/components/AnimatedCounter.tsx';
import {Award, BellRingIcon, ReceiptTextIcon, ScaleIcon} from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
      <AnimatedCounter
        value={25}
        label="Successful Projects"
        icon={<ReceiptTextIcon className="h-8 w-8 mx-auto text-primary"/>}
        delay={50}
        suffix="+"
      />
      <AnimatedCounter
        value={12}
        label="Years Software Experience"
        icon={<Award className="h-8 w-8 mx-auto text-primary"/>}
        delay={300}
        suffix="+"
      />
      <AnimatedCounter
        value={100}
        label="Priceworthy Improvements"
        icon={<ScaleIcon className="h-8 w-8 mx-auto text-primary"/>}
        delay={600}
        suffix="%"
      />
      <AnimatedCounter
        value={8}
        label="Possibilities"
        icon={<BellRingIcon className="h-8 w-8 mx-auto text-primary"/>}
        delay={900}
        transform={true}
      />
    </div>
  );
}

export default Stats;