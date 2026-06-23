import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Wallet, Sparkles } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

const AUTOMATION_RATE = 0.7;
const WORKING_WEEKS = 48;

const AnimatedNumber: React.FC<{ value: number; format?: (n: number) => string }> = ({ value, format }) => {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);
  const rafRef = useRef<number>();

  useEffect(() => {
    const from = fromRef.current;
    const to = value;
    const start = performance.now();
    const duration = 600;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = from + (to - from) * eased;
      setDisplay(v);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
      else fromRef.current = to;
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [value]);

  return <span>{format ? format(display) : Math.round(display).toLocaleString('de-CH')}</span>;
};

const ROICalculator: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const [employees, setEmployees] = useState(10);
  const [hours, setHours] = useState(8);
  const [rate, setRate] = useState(85);

  const { savedHours, savedMoney } = useMemo(() => {
    const totalHours = employees * hours * WORKING_WEEKS;
    const sH = Math.round(totalHours * AUTOMATION_RATE);
    const sM = Math.round(sH * rate);
    return { savedHours: sH, savedMoney: sM };
  }, [employees, hours, rate]);

  return (
    <section aria-labelledby="roi-heading" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center mb-12 scroll-reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center px-5 py-2.5 bg-primary/10 rounded-full mb-6 border border-primary/20 badge-shimmer">
            <Sparkles className="h-4 w-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">{t('hero.roi.badge')}</span>
          </div>
          <h2 id="roi-heading" className="mb-4">{t('hero.roi.title')}</h2>
          <p className="text-lg text-muted-foreground">{t('hero.roi.subtitle')}</p>
        </div>

        <div className={`max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 scroll-reveal scroll-reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          <div className="lg:col-span-3 glass-card rounded-3xl p-8 md:p-10 shadow-large">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm font-medium text-foreground">{t('hero.roi.employees')}</label>
                  <span className="text-2xl font-heading font-semibold text-primary">{employees}</span>
                </div>
                <Slider value={[employees]} onValueChange={(v) => setEmployees(v[0])} min={1} max={200} step={1} />
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm font-medium text-foreground">{t('hero.roi.hours')}</label>
                  <span className="text-2xl font-heading font-semibold text-primary">{hours}h</span>
                </div>
                <Slider value={[hours]} onValueChange={(v) => setHours(v[0])} min={1} max={30} step={1} />
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm font-medium text-foreground">{t('hero.roi.rate')}</label>
                  <span className="text-2xl font-heading font-semibold text-primary">CHF {rate}</span>
                </div>
                <Slider value={[rate]} onValueChange={(v) => setRate(v[0])} min={40} max={200} step={5} />
              </div>

              <p className="text-xs text-muted-foreground pt-2 border-t border-border/50">{t('hero.roi.footnote')}</p>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex-1 rounded-3xl p-8 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-large relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <Clock className="h-6 w-6 mb-4 opacity-80" />
              <div className="text-sm uppercase tracking-widest opacity-80 mb-2">{t('hero.roi.savedHoursLabel')}</div>
              <div className="text-5xl md:text-6xl font-heading font-bold leading-none">
                <AnimatedNumber value={savedHours} />
                <span className="text-2xl ml-1 opacity-80">h</span>
              </div>
            </div>

            <div className="flex-1 rounded-3xl p-8 bg-card border border-border shadow-medium relative overflow-hidden">
              <Wallet className="h-6 w-6 mb-4 text-primary" />
              <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">{t('hero.roi.savedMoneyLabel')}</div>
              <div className="text-4xl md:text-5xl font-heading font-bold leading-none text-foreground">
                <AnimatedNumber value={savedMoney} format={(n) => `CHF ${Math.round(n).toLocaleString('de-CH')}`} />
              </div>
            </div>

            <Button asChild variant="gradient" size="lg" className="rounded-full group w-full">
              <Link to="/contact">
                {t('hero.roi.cta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
