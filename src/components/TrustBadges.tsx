import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Server, ShieldCheck, Github, Database, Code2, Globe, Cpu, Layers, Box, Terminal, Hexagon, Component } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

const techLogos: { name: string; icon: React.ElementType }[] = [
  { name: 'Proton', icon: Shield },
  { name: 'GitHub', icon: Github },
  { name: 'Microsoft', icon: Layers },
  { name: 'JetBrains', icon: Hexagon },
  { name: 'Java', icon: Cpu },
  { name: 'Spring Boot', icon: Terminal },
  { name: 'Lovable', icon: Box },
  { name: 'IntelliJ', icon: Code2 },
  { name: 'Shopware', icon: Globe },
  { name: 'Directus', icon: Database },
  { name: 'Angular', icon: Component },
  { name: 'PostgreSQL', icon: Database },
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

        {/* Sliding tech banner with icons */}
        <div className={`overflow-hidden scroll-reveal scroll-reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techLogos, ...techLogos].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex-shrink-0 mx-6 md:mx-10 flex items-center gap-2"
                >
                  <Icon className="h-4 w-4 text-muted-foreground/50" />
                  <span className="text-sm font-medium text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 tracking-wide uppercase">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
