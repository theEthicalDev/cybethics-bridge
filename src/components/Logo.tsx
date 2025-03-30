
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  imgClass?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '', imgClass = 'h-12' }) => {

  const logoPath = '/lovable-uploads/cybethics.png';

  return (
    <Link 
      to="/" 
      className={`inline-block transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <img 
        src={logoPath} 
        alt="Cybethics Logo" 
        className={`${imgClass} w-auto`}
      />
    </Link>
  );
};

export default Logo;
