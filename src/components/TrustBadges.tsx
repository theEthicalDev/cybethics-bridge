import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Server, ShieldCheck } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

const techLogos: { name: string; logo: string }[] = [
  { name: 'GitHub', logo: '/media/tech/github.svg' },
  { name: 'Microsoft', logo: '/media/tech/microsoft.svg' },
  { name: 'JetBrains', logo: '/media/tech/jetbrains.svg' },
  { name: 'Java', logo: '/media/tech/java.svg' },
  { name: 'Spring Boot', logo: '/media/tech/spring.svg' },
  { name: 'Lovable', logo: '/media/tech/lovable.ico' },
  { name: 'IntelliJ', logo: '/media/tech/intellij.svg' },
  { name: 'Shopware', logo: '/media/tech/shopware.svg' },
  { name: 'Directus', logo: '/media/tech/directus.svg' },
  { name: 'Angular', logo: '/media/tech/angular.svg' },
  { name: 'PostgreSQL', logo: '/media/tech/postgresql.svg' },
];

const TrustBadges: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-10 md:py-14 bg-muted/20" ref={ref}>
      <div className="container">
        {/* Trust badges */}
        <div className={`flex flex-wrap justify-center gap-6 md:gap-10 mb-10 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-card border border-border/40 shadow-soft">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">ISO-konform</span>
          </div>
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-card border border-border/40 shadow-soft">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">{t('homepage.trust.gdpr')}</span>
          </div>
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-card border border-border/40 shadow-soft">
            <Server className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-foreground">{t('homepage.trust.hosting')}</span>
          </div>
        </div>

        {/* Sliding tech banner with real logos */}
        <div className={`overflow-hidden scroll-reveal scroll-reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techLogos, ...techLogos].map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-6 md:mx-10 flex items-center gap-2.5"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-6 w-6 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <span className="text-sm font-medium text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 tracking-wide uppercase">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
