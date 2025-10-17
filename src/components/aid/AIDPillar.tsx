import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AIDPillarProps {
  pillar: 'automate' | 'integrate' | 'develop';
  icon: React.ReactNode;
  index?: number;
  className?: string;
}

const AIDPillar: React.FC<AIDPillarProps> = ({ pillar, icon, index = 0, className = '' }) => {
  const { t } = useLanguage();

  return (
    <div
      className={`group relative animate-fade-up ${className}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Card with soft UI styling */}
      <div className="relative h-full p-8 rounded-3xl bg-white border border-gray-100 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        {/* Gradient background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon container */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 mb-6 group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold mb-3 gradient-text-subtle">
            {t(`aid.${pillar}.title`)}
          </h3>

          {/* Tagline */}
          <p className="text-lg font-medium text-text mb-4">
            {t(`aid.${pillar}.tagline`)}
          </p>

          {/* Description */}
          <p className="text-base text-text/70 mb-6 leading-relaxed">
            {t(`aid.${pillar}.description`)}
          </p>

          {/* Benefits */}
          <ul className="space-y-3 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-text/80">{t(`aid.${pillar}.benefit${i}`)}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Button
            asChild
            variant="outline"
            className="w-full group/btn rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/5"
          >
            <Link to="/services" className="flex items-center justify-center">
              {t(`aid.${pillar}.cta`)}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Decorative element */}
        <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700" />
      </div>
    </div>
  );
};

export default AIDPillar;
