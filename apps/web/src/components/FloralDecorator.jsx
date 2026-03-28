import React from 'react';

const FloralDecorator = ({ position = 'top-right', className = '' }) => {
  const positions = {
    'top-right': 'absolute -top-12 -right-12 rotate-12',
    'top-left': 'absolute -top-12 -left-12 -rotate-12',
    'bottom-right': 'absolute -bottom-12 -right-12 -rotate-45',
    'bottom-left': 'absolute -bottom-12 -left-12 rotate-45'
  };

  return (
    <div className={`${positions[position]} ${className} opacity-20 pointer-events-none`}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 40C60 35 55 30 50 30C45 30 40 35 40 40C40 45 45 50 50 50C45 50 40 55 40 60C40 65 45 70 50 70C55 70 60 65 60 60C60 55 55 50 50 50C55 50 60 45 60 40Z" fill="hsl(var(--primary))" />
        <path d="M80 40C80 35 75 30 70 30C65 30 60 35 60 40C60 45 65 50 70 50C65 50 60 55 60 60C60 65 65 70 70 70C75 70 80 65 80 60C80 55 75 50 70 50C75 50 80 45 80 40Z" fill="hsl(var(--accent))" />
        <circle cx="60" cy="60" r="8" fill="hsl(var(--secondary))" />
        <path d="M50 50L60 60L70 50" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default FloralDecorator;