import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles, MapPin, Cog, Network, Code, ArrowDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const AIDVisual: React.FC = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const pillars = [
    { letter: 'A', key: 'automate', icon: Cog, color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30', textColor: 'text-blue-500' },
    { letter: 'I', key: 'integrate', icon: Network, color: 'from-emerald-500 to-emerald-600', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30', textColor: 'text-emerald-500' },
    { letter: 'D', key: 'develop', icon: Code, color: 'from-violet-500 to-violet-600', bgColor: 'bg-violet-500/10', borderColor: 'border-violet-500/30', textColor: 'text-violet-500' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full animate-hero-float">
      <div className="glass-card rounded-3xl shadow-large p-6 md:p-8 overflow-hidden hover:shadow-glow transition-all duration-500 group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

        <div className="relative z-10 space-y-5">
          {/* AID Letters row */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-2">
            {pillars.map((pillar, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={pillar.letter}
                  type="button"
                  className={`relative flex flex-col items-center transition-all duration-700 ${isActive ? 'scale-110' : 'scale-95 opacity-60 hover:opacity-90'}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-700 ${isActive ? `bg-gradient-to-br ${pillar.color} shadow-lg` : `${pillar.bgColor} border ${pillar.borderColor}`}`}>
                    <span className={`text-2xl md:text-3xl font-bold transition-colors duration-500 ${isActive ? 'text-primary-foreground' : pillar.textColor}`}>{pillar.letter}</span>
                  </div>
                  {isActive && (
                    <div className="absolute -bottom-1 w-2 h-2 rounded-full bg-primary animate-pulse-subtle"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Connecting lines */}
          <div className="flex items-center justify-center gap-0 -mt-3 mb-2">
            <div className={`h-0.5 flex-1 max-w-16 transition-all duration-700 ${activeIndex >= 0 ? 'bg-gradient-to-r from-blue-500/50 to-emerald-500/50' : 'bg-border/30'}`}></div>
            <div className="w-2 h-2 rounded-full bg-primary/40"></div>
            <div className={`h-0.5 flex-1 max-w-16 transition-all duration-700 ${activeIndex >= 1 ? 'bg-gradient-to-r from-emerald-500/50 to-violet-500/50' : 'bg-border/30'}`}></div>
          </div>

          {/* Active pillar content */}
          <div className="relative min-h-[110px] md:min-h-[120px] flex flex-col items-center justify-center text-center">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = activeIndex === index;
              return (
                <div
                  key={pillar.key}
                  className={`transition-all duration-700 absolute ${isActive ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-5 blur-sm pointer-events-none'}`}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon className={`h-5 w-5 ${pillar.textColor}`} />
                    <h3 className={`text-lg md:text-xl font-bold ${pillar.textColor}`}>
                      {t(`aid.framework.${pillar.key}.title`)}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                    {t(`aid.framework.${pillar.key}.outcomes`)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {pillars.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`${index + 1}`}
                className={`rounded-full transition-all duration-500 ${activeIndex === index ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-primary/30 hover:bg-primary/60'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ROTATING_KEYS = ['hero.rotate1', 'hero.rotate2', 'hero.rotate3'];

const MagneticButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setOffset({
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.35,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className={`inline-block ${className}`}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`, transition: 'transform 0.25s ease-out' }}
    >
      {children}
    </div>
  );
};

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [rotateIdx, setRotateIdx] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => setRotateIdx((i) => (i + 1) % ROTATING_KEYS.length), 2800);
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setParallax({ x, y });
  };

  const titleWords = t('hero.title').split(' ');

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-32 pb-20 md:pb-28 bg-background">
      {/* Bold animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 hero-grid opacity-70"></div>
        <div className="absolute inset-0 hero-aurora opacity-80"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="hero-rise" style={{ animationDelay: '80ms' }}>
              <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-primary/25 bg-primary/10 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
                <Sparkles className="mr-2 h-4 w-4 text-primary animate-pulse-subtle" />
                <span className="text-sm font-medium text-primary font-mono tracking-wider">{t('hero.badge')}</span>
              </div>
            </div>

            {/* Headline, word by word */}
            <h1 className="hero-title title-sweep relative mb-0 leading-[0.98] text-balance text-5xl sm:text-7xl lg:text-[5.2rem] font-bold tracking-tighter">
              {titleWords.map((word, i) => (
                <span
                  key={`${word}-${i}`}
                  className={`hero-word mr-[0.25em] ${i === titleWords.length - 1 ? 'hero-accent' : ''}`}
                  style={{ animationDelay: `${250 + i * 110}ms` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Rotating line */}
            <div className="hero-rise text-2xl md:text-4xl font-heading font-semibold min-h-[3rem] flex items-center" style={{ animationDelay: '620ms' }}>
              <span className="relative inline-flex h-[1.3em] overflow-hidden">
                {ROTATING_KEYS.map((k, i) => (
                  <span
                    key={k}
                    className={`inline-block gradient-text ${i === rotateIdx ? 'rotate-word-in relative' : 'opacity-0 absolute inset-0 pointer-events-none'}`}
                  >
                    {t(k)}
                  </span>
                ))}
              </span>
            </div>

            <p className="hero-rise text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl" style={{ animationDelay: '720ms' }}>
              {t('hero.subtitle')}
            </p>

            {/* Unified chip family */}
            <div className="hero-rise flex flex-wrap items-center gap-2.5" style={{ animationDelay: '820ms' }}>
              {['swiss', 'gdpr', 'leadTime'].map((key, i) => (
                <span
                  key={key}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dot-pulse" style={{ animationDelay: `${i * 400}ms` }} />
                  {t(`hero.trustStrip.${key}`)}
                </span>
              ))}
              <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 backdrop-blur-sm px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:border-primary/40 hover:text-foreground">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Emmen · Luzern · Zentralschweiz
              </span>
            </div>

            {/* CTAs */}
            <div className="hero-rise flex flex-col sm:flex-row gap-4 pt-2" style={{ animationDelay: '900ms' }}>
              <MagneticButton>
                <Button asChild variant="gradient" size="lg" className="btn-sweep rounded-full shadow-glow group">
                  <Link to="/contact">
                    {t('hero.cta')}
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-sweep rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 group"
                  onClick={() => document.getElementById('aid-framework')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="text-foreground/80 flex items-center">
                    {t('hero.ctaSecondary')}
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </MagneticButton>
            </div>
          </div>

          {/* Desktop visual */}
          {!isMobile && (
            <div
              ref={visualRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setParallax({ x: 0, y: 0 })}
              className="hero-rise flex flex-col gap-8"
              style={{ animationDelay: '500ms' }}
            >
              <div className="relative h-64 items-center justify-center hidden lg:flex">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
                <img
                  src="/media/cybethics.png"
                  alt="Cybethics - Softwareentwicklung und Automatisierung in der Zentralschweiz"
                  fetchPriority="high"
                  className="relative w-3/4 h-auto filter drop-shadow-2xl"
                  style={{ transform: `translate3d(${parallax.x * -10}px, ${parallax.y * -10}px, 0)`, transition: 'transform 0.3s ease-out' }}
                />
              </div>

              <div style={{ transform: `translate3d(${parallax.x * 8}px, ${parallax.y * 8}px, 0)`, transition: 'transform 0.3s ease-out' }}>
                <AIDVisual />
              </div>
            </div>
          )}

          {/* Mobile visual */}
          {isMobile && (
            <div className="mt-8 hero-rise" style={{ animationDelay: '500ms' }}>
              <AIDVisual />
            </div>
          )}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <ArrowDown className="h-5 w-5 text-muted-foreground animate-scroll-hint" />
      </div>
    </section>
  );
};

export default HeroSection;
