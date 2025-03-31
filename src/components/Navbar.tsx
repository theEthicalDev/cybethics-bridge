
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Proper mobile menu handling
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/about', label: t('nav.about') },
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
        <div className={`${isMobile ? 'scale-75' : 'scale-125'} origin-left`}>
          <Logo imgClass={isMobile ? 'h-8' : 'h-12'} className="z-50" />
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                  : 'text-text hover:text-primary'
              } link-underline`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
        
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
        
        {/* Mobile Menu - Updated to have consistent styling regardless of scroll position */}
        <div
          className={`fixed inset-0 bg-white/90 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
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
                className={`text-xl font-medium transition-colors ${
                  isActive(link.path) ? 'text-primary' : 'text-text hover:text-primary'
                }`}
              >
                {link.label}
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
