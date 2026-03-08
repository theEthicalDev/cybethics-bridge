import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import useScrollReveal from '@/hooks/useScrollReveal';

interface Question {
  questionKey: string;
  options: { labelKey: string; score: number }[];
}

const ProblemFinder: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions: Question[] = [
    {
      questionKey: 'homepage.quiz.q1.question',
      options: [
        { labelKey: 'homepage.quiz.q1.a1', score: 0 },
        { labelKey: 'homepage.quiz.q1.a2', score: 1 },
        { labelKey: 'homepage.quiz.q1.a3', score: 2 },
        { labelKey: 'homepage.quiz.q1.a4', score: 3 },
      ],
    },
    {
      questionKey: 'homepage.quiz.q2.question',
      options: [
        { labelKey: 'homepage.quiz.q2.a1', score: 0 },
        { labelKey: 'homepage.quiz.q2.a2', score: 1 },
        { labelKey: 'homepage.quiz.q2.a3', score: 2 },
        { labelKey: 'homepage.quiz.q2.a4', score: 3 },
      ],
    },
    {
      questionKey: 'homepage.quiz.q3.question',
      options: [
        { labelKey: 'homepage.quiz.q3.a1', score: 0 },
        { labelKey: 'homepage.quiz.q3.a2', score: 1 },
        { labelKey: 'homepage.quiz.q3.a3', score: 2 },
        { labelKey: 'homepage.quiz.q3.a4', score: 3 },
      ],
    },
  ];

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const totalScore = answers.reduce((sum, a) => sum + a, 0);
  const maxScore = questions.length * 3;

  const getResultKey = () => {
    const ratio = totalScore / maxScore;
    if (ratio <= 0.33) return 'low';
    if (ratio <= 0.66) return 'medium';
    return 'high';
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      <div className="container relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-10 scroll-reveal ${isVisible ? 'visible' : ''}`}>
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-6 border border-primary/20 badge-shimmer">
              <span className="text-sm font-medium text-primary">{t('homepage.quiz.badge')}</span>
            </div>
            <h2 className="mb-4">{t('homepage.quiz.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('homepage.quiz.subtitle')}</p>
          </div>

          <div className={`glass-card rounded-2xl p-8 md:p-12 shadow-medium scroll-reveal scroll-reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            {!showResult ? (
              <div className="space-y-8 animate-fade-in">
                <div className="flex items-center gap-2 mb-6">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                        i < currentStep ? 'bg-primary' : i === currentStep ? 'bg-primary/60' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-sm text-muted-foreground mb-2">
                  {t('homepage.quiz.step')} {currentStep + 1} / {questions.length}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-6">
                  {t(questions[currentStep].questionKey)}
                </h3>

                <div className="grid gap-3">
                  {questions[currentStep].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(option.score)}
                      className="w-full text-left p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {t(option.labelKey)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{t(`homepage.quiz.result.${getResultKey()}.title`)}</h3>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  {t(`homepage.quiz.result.${getResultKey()}.description`)}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild variant="gradient" size="lg" className="rounded-full">
                    <Link to="/contact">
                      {t(`homepage.quiz.result.${getResultKey()}.cta`)}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full" onClick={reset}>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    {t('homepage.quiz.restart')}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemFinder;
