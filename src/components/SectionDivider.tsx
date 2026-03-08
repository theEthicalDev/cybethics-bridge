import React from 'react';

interface SectionDividerProps {
  variant?: 'wave' | 'curve' | 'slant';
  fillColor?: string;
  className?: string;
  flip?: boolean;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'wave',
  fillColor = 'hsl(var(--background))',
  className = '',
  flip = false,
}) => {
  const style: React.CSSProperties = flip ? { transform: 'scaleY(-1)' } : {};

  const paths: Record<string, string> = {
    wave: 'M0,32 C320,80 640,0 960,40 C1280,80 1440,20 1440,20 L1440,64 L0,64 Z',
    curve: 'M0,48 Q720,0 1440,48 L1440,64 L0,64 Z',
    slant: 'M0,64 L1440,20 L1440,64 L0,64 Z',
  };

  return (
    <div className={`w-full overflow-hidden leading-none ${className}`} style={style}>
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="w-full h-10 md:h-14 block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={paths[variant]} fill={fillColor} />
      </svg>
    </div>
  );
};

export default SectionDivider;
