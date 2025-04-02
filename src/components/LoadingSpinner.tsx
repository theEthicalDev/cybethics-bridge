
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 24, 
  className = "" 
}) => {
  return (
    <div className={`flex items-center justify-center w-full ${className}`}>
      <Loader2 
        className="animate-spin text-primary" 
        size={size} 
      />
    </div>
  );
};

export default LoadingSpinner;
