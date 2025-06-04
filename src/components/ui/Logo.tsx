import React from 'react';
import { Layers } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-6 w-6' }) => {
  return (
    <div className={`relative ${className}`}>
      <Layers className="text-primary-500 animate-pulse-slow" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-secondary-400 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Logo;