import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useLanguage} from '@/contexts/LanguageContext';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import {Button} from '@/components/ui/button';
import {Menu, X, MapPin, ChevronDown, Globe, Cog, Network, Code, Wrench, LayoutGrid} from 'lucide-react';
import {useIsTablet} from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const isTablet = useIsTablet();
  const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const serviceSubItems = [
    { path: '/services/automatisierung', label: t('nav.servicesMenu.automation'), icon: <Cog className="h-4 w-4" /> },
    { path: '/services/integration', label: t('nav.servicesMenu.integration'), icon: <Network className="h-4 w-4" /> },
    { path: '/services/entwicklung', label: t('nav.servicesMenu.development'), icon: <Code className="h-4 w-4" /> },
    { path: '/services', label: t('nav.servicesMenu.all'), icon: <LayoutGrid className="h-4 w-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
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
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/about', label: t('nav.about') },
    { path: '/location', label: 'Standort', icon: <MapPin className="h-3 w-3 ml-1" /> },
    { path: '/faq', label: t('nav.faq') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith('/services') || location.pathname.startsWith('/pricing');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3 glass shadow-sm border-b border-border/50 backdrop-blur-xl' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className={`${isTablet ? 'scale-75' : 'scale-125'} origin-left`}>
          <Logo imgClass={isTablet ? 'h-20' : 'h-16'} className="z-50" />
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.slice(0, 1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors flex items-center link-underline ${
                isActive(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative group">
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors flex items-center link-underline gap-1 ${
                isServicesActive ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              {t('nav.services')}
              <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
            </Link>
            
            {/* Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background border border-border rounded-lg shadow-large py-2 min-w-[220px]">
                {serviceSubItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-muted ${
                      isActive(item.path) ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    <span className="text-primary/70">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors flex items-center link-underline ${
                isActive(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
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
          {isTabletMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-background backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-300 lg:hidden ${
            isTabletMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ top: 0, height: '100vh', position: 'fixed', zIndex: 40 }}
        >
          <nav className="flex flex-col items-center space-y-6 py-12">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-medium transition-colors ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services Accordion */}
            <div className="flex flex-col items-center">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`text-xl font-medium transition-colors flex items-center gap-1 ${
                  isServicesActive ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                {t('nav.services')}
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-96 mt-3' : 'max-h-0'}`}>
                <div className="flex flex-col items-center space-y-3">
                  {serviceSubItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className={`text-base transition-colors flex items-center gap-2 ${
                        isActive(item.path) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      <span className="text-primary/70">{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-medium transition-colors flex items-center ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground hover:text-primary'
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
