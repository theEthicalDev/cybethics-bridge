
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'small' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'small', className = '' }) => {
  const logoPath = variant === 'small' 
    ? '/lovable-uploads/192393ac-becc-48a5-9de0-8d8874776f38.png' 
    : '/lovable-uploads/192393ac-becc-48a5-9de0-8d8874776f38.png';
  
  // Increased size by 25%
  const logoSize = variant === 'small' ? 'h-20' : 'h-40';
  
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

export default Logo;
