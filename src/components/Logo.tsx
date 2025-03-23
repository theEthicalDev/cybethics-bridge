
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'small' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'small', className = '' }) => {
  // Using the images you've provided
  const logoPath = variant === 'small' 
    ? '/lovable-uploads/d46c2302-4770-4fd6-ba0f-e09aad347275.png' 
    : '/lovable-uploads/192393ac-becc-48a5-9de0-8d8874776f38.png';
  
  const logoSize = variant === 'small' ? 'h-10' : 'h-16';
  
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
