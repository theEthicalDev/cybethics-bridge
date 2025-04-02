
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-6 md:pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-200">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-text/80 max-w-xs">
              {t('footer.about')}
            </p>
            {/*<div className="flex items-center space-x-2">*/}
            {/*  <div className="w-5 h-5 bg-red-600 rounded"></div>*/}
            {/*  <p className="text-sm font-medium">{t('about.swiss')}</p>*/}
            {/*</div>*/}
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text/80 hover:text-primary transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/services" className="text-text/80 hover:text-primary transition-colors">{t('nav.services')}</Link>
              </li>
              <li>
                <Link to="/projects" className="text-text/80 hover:text-primary transition-colors">{t('nav.projects')}</Link>
              </li>
              <li>
                <Link to="/about" className="text-text/80 hover:text-primary transition-colors">{t('nav.about')}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-text/80 hover:text-primary transition-colors">{t('nav.contact')}</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">{t('nav.services')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-text/80 hover:text-primary transition-colors">{t('services.software.title')}</Link>
              </li>
              <li>
                <Link to="/services" className="text-text/80 hover:text-primary transition-colors">{t('services.automation.title')}</Link>
              </li>
              <li>
                <Link to="/services" className="text-text/80 hover:text-primary transition-colors">{t('services.scripting.title')}</Link>
              </li>
              <li>
                <Link to="/services" className="text-text/80 hover:text-primary transition-colors">{t('services.cicd.title')}</Link>
              </li>
              <li>
                <Link to="/services" className="text-text/80 hover:text-primary transition-colors">{t('services.api.title')}</Link>
              </li>
              <li>
                <Link to="/services" className="text-text/80 hover:text-primary transition-colors">{t('services.takeover.title')}</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">{t('nav.contact')}</h4>
            <address className="not-italic text-text/80">
              <p>Cybethics GmbH</p>
              <p>Emmen | Luzern | Zentralschweiz | CH</p>
              <p className="mt-2">
                <a href="mailto:info@cybethics.com" className="hover:text-primary transition-colors">
                  info@cybethics.com
                </a>
              </p>
            </address>
            <LanguageSwitcher />
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text/60 mb-4 md:mb-0">
            &copy; {currentYear} Cybethics. {t('footer.rights')}.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-text/60 hover:text-primary transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-sm text-text/60 hover:text-primary transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
