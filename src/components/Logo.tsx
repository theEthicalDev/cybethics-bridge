
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'small', className = '' }) => {
  const logoPath = variant === 'small' 
    ? '/lovable-uploads/192393ac-becc-48a5-9de0-8d8874776f38.png' 
    : '/lovable-uploads/192393ac-becc-48a5-9de0-8d8874776f38.png';

  const logoSize = LogoSize[variant.toUpperCase()];
  
  return (
    <Link 
      to="/" 
      className={`inline-block transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <img 
        src={logoPath} 
        alt="Cybethics Logo" 
        className={`${logoSize} w-auto`} 
      />
    </Link>
  );
};

enum LogoSize {
  SMALL = 'h-12',
  MEDIUM = 'h-20',
  LARGE = 'h-32',
}

export default Logo;
