import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useLanguage} from '@/contexts/LanguageContext';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import {Button} from '@/components/ui/button';
import {Menu, X, MapPin} from 'lucide-react';
import {useIsTablet} from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isTablet = useIsTablet();
  const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Proper mobile menu handling
    if (isTabletMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isTabletMenuOpen]);

  useEffect(() => {
    setIsTabletMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/pricing', label: t('nav.pricing') },
    { path: '/about', label: t('nav.about') },
    { path: '/location', label: 'Standort', icon: <MapPin className="h-3 w-3 ml-1" /> },
    { path: '/faq', label: t('nav.faq') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Dynamically sized logo based on screen size */}
        <div className={`${isTablet ? 'scale-75' : 'scale-125'} origin-left`}>
          <Logo imgClass={isTablet ? 'h-20' : 'h-16'} className="z-50" />
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors flex items-center ${
                isActive(link.path)
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                  : 'text-text hover:text-primary'
              } link-underline`}
            >
              {link.label}
              {link.icon}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden z-50"
          onClick={() => setIsTabletMenuOpen(!isTabletMenuOpen)}
        >
          {isTabletMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
        
        {/* Mobile Menu - Updated to have consistent styling regardless of scroll position */}
        <div
          className={`fixed inset-0 bg-white backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-300 lg:hidden ${
            isTabletMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            top: 0,
            height: '100vh',
            position: 'fixed',
            zIndex: 40,
          }}
        >
          <nav className="flex flex-col items-center space-y-6 py-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-medium transition-colors flex items-center ${
                  isActive(link.path) ? 'text-primary' : 'text-text hover:text-primary'
                }`}
              >
                {link.label}
                {link.icon && <span className="ml-2">{link.icon}</span>}
              </Link>
            ))}
            <LanguageSwitcher className="mt-6" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
