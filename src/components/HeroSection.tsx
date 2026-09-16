import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight, Cog, Code, MapPin, Network } from 'lucide-react';

const PILLARS = [
  { letter: 'A', key: 'automate', icon: Cog },
  { letter: 'I', key: 'integrate', icon: Network },
  { letter: 'D', key: 'develop', icon: Code },
] as const;

const AIDVisual: React.FC<{ pointer: { x: number; y: number } }> = ({ pointer }) => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setActiveIndex((previous) => (previous + 1) % PILLARS.length), 3200);
    return () => clearInterval(interval);
  }, []);

  const activePillar = PILLARS[activeIndex];
  const ActiveIcon = activePillar.icon;

  return (
    <div
      className="aid-stage"
      style={{ transform: `translate3d(${pointer.x * 9}px, ${pointer.y * 9}px, 0)` }}
    >
      <div className="aid-stage-index" aria-hidden="true">0{activeIndex + 1}</div>
      <div className="aid-stage-letters" role="tablist" aria-label={t('hero.system.aidLabel')}>
        {PILLARS.map((pillar, index) => (
          <Button
            key={pillar.letter}
            type="button"
            role="tab"
            variant="ghost"
            aria-selected={activeIndex === index}
            aria-label={t(`aid.framework.${pillar.key}.title`)}
            onClick={() => setActiveIndex(index)}
            className={`aid-stage-letter aid-stage-letter-${pillar.letter.toLowerCase()} ${activeIndex === index ? 'is-active' : ''}`}
          >
            {pillar.letter}
          </Button>
        ))}
      </div>

      <div className="aid-stage-readout" aria-live="polite">
        <div className="flex items-center gap-3 text-primary">
          <ActiveIcon className="h-5 w-5" />
          <span className="hero-kicker">{t(`aid.framework.${activePillar.key}.title`)}</span>
        </div>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
          {t(`aid.framework.${activePillar.key}.outcomes`)}
        </p>
        <div className="aid-progress mt-7" aria-hidden="true">
          <span key={activeIndex} />
        </div>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const visualRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setParallax({ x, y });
  };

  const titleParts = t('hero.title').split('.').map((part) => part.trim()).filter(Boolean);

  return (
    <section
      ref={visualRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setParallax({ x: 0, y: 0 })}
      className="cyber-hero"
    >
      <div className="cyber-hero-grid" aria-hidden="true" />
      <div className="cyber-hero-scan" aria-hidden="true" />

      <div className="container relative z-10 flex min-h-[calc(100svh-1rem)] flex-col justify-center pb-20 pt-32 lg:pb-24 lg:pt-40">
        <div className="hero-kicker hero-reveal flex items-center gap-4 text-primary" style={{ animationDelay: '80ms' }}>
          <span className="h-px w-12 bg-primary" />
          {t('hero.badge')}
        </div>

        <h1 className="cyber-hero-title hero-title mt-7">
          {titleParts.map((part, index) => (
            <span key={part} className={`cyber-title-line cyber-title-line-${index + 1}`}>
              <span className="cyber-title-inner" style={{ animationDelay: `${180 + index * 130}ms` }}>
                {part}{index < titleParts.length - 1 ? '.' : '.'}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="hero-reveal lg:col-span-7" style={{ animationDelay: '620ms' }}>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="cyber-primary-cta group">
                <Link to="/contact">
                  {t('hero.cta')}
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="cyber-secondary-cta group"
                onClick={() => document.getElementById('aid-framework')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.ctaSecondary')}
                <ArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
              </Button>
            </div>
          </div>

          <aside className="hero-status-rail hero-reveal lg:col-span-5" style={{ animationDelay: '760ms' }}>
            <div>
              <span className="hero-status-label">{t('hero.system.status')}</span>
              <strong>{t('hero.system.active')}</strong>
            </div>
            <div>
              <span className="hero-status-label">{t('hero.system.focus')}</span>
              <strong>A · I · D</strong>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{t('hero.system.region')}</span>
            </div>
            <div className="hero-status-line"><span /></div>
          </aside>
        </div>

        <div className="hero-reveal mt-14 lg:absolute lg:bottom-14 lg:right-8 lg:mt-0 lg:w-[42%]" style={{ animationDelay: '480ms' }}>
          <AIDVisual pointer={parallax} />
        </div>

        <div className="hero-trust-rail hero-reveal" style={{ animationDelay: '900ms' }}>
          {['swiss', 'gdpr', 'leadTime'].map((key, index) => (
            <span key={key}><b>0{index + 1}</b>{t(`hero.trustStrip.${key}`)}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
