
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  imgClass?: string;
  variant?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  imgClass = '', 
  variant = 'medium' 
}) => {
  const logoPath = '/lovable-uploads/cybethics.png';
  
  const getSizeClass = () => {
    switch (variant) {
      case 'small':
        return 'h-8';
      case 'medium':
        return 'h-12';
      case 'large':
        return 'h-16';
      default:
        return 'h-12';
    }
  };

  const sizeClass = imgClass || getSizeClass();

  return (
    <Link 
      to="/" 
      className={`inline-block transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <img 
        src={logoPath} 
        alt="Cybethics Logo" 
        className={`${sizeClass} w-auto`}
      />
    </Link>
  );
};

export default Logo;
