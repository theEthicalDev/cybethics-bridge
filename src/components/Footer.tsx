import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20 pt-8 md:pt-20 pb-8 relative overflow-hidden">
      {/* Decorative blur orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/6 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Back to top */}
        <div className="flex justify-end mb-8">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
            aria-label="Back to top"
          >
            <span>{t('footer.backToTop') || 'Back to top'}</span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 group-hover:-translate-y-0.5 transition-all">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-white/60 max-w-xs">
              {t('footer.about')}
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-white">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/60 hover:text-primary-foreground link-underline transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-primary-foreground link-underline transition-colors">{t('nav.services')}</Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/60 hover:text-primary-foreground link-underline transition-colors">{t('nav.projects')}</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-white/60 hover:text-primary-foreground link-underline transition-colors">{t('nav.pricing')}</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-primary-foreground link-underline transition-colors">{t('nav.about')}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-primary-foreground link-underline transition-colors">{t('nav.contact')}</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-white">{t('nav.services')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/automatisierung" className="text-white/60 hover:text-primary-foreground link-underline transition-colors">{t('aid.framework.automate.title')}</Link>
              </li>
              <li>
                <Link to="/services/integration" className="text-white/60 hover:text-primary-foreground link-underline transition-colors">{t('aid.framework.integrate.title')}</Link>
              </li>
              <li>
                <Link to="/services/entwicklung" className="text-white/60 hover:text-primary-foreground link-underline transition-colors">{t('aid.framework.develop.title')}</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg text-white">{t('nav.contact')}</h4>
            <address className="not-italic text-white/60">
              <p>Cybethics GmbH</p>
              <p>Emmen | Luzern | Zentralschweiz | CH</p>
              <p className="mt-2">
                <a href="mailto:info@cybethics.com" className="hover:text-primary-foreground link-underline transition-colors">
                  info@cybethics.com
                </a>
              </p>
            </address>
            <LanguageSwitcher />
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/40 mb-4 md:mb-0">
            &copy; {currentYear} Cybethics. {t('footer.rights')}.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-white/40 hover:text-white/80 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-sm text-white/40 hover:text-white/80 transition-colors">
              {t('footer.terms')}
            </Link>
            <Link to="/imprint" className="text-sm text-white/40 hover:text-white/80 transition-colors">
              {t('footer.imprint')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
