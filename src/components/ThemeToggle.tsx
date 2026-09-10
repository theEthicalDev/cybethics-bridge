import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { useLanguage } from '@/contexts/LanguageContext';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t('theme.toLight') : t('theme.toDark')}
      title={isDark ? t('theme.toLight') : t('theme.toDark')}
      className={`relative h-9 w-9 inline-flex items-center justify-center rounded-full border border-border/60 bg-background/60 backdrop-blur-sm text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:scale-110 ${className}`}
    >
      <Sun
        className={`h-4 w-4 absolute transition-all duration-500 ${isDark ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
      />
      <Moon
        className={`h-4 w-4 absolute transition-all duration-500 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}
      />
    </button>
  );
};

export default ThemeToggle;
