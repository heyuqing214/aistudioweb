import React from 'react';

interface NeoCardProps {
  children: React.ReactNode;
  className?: string;
  color?: 'white' | 'pink' | 'blue' | 'yellow' | 'green';
  hoverEffect?: boolean;
  onClick?: () => void;
}

const colorMap = {
  white: 'bg-white',
  pink: 'bg-neo-pink',
  blue: 'bg-neo-blue',
  yellow: 'bg-neo-yellow',
  green: 'bg-neo-green',
};

export const NeoCard: React.FC<NeoCardProps> = ({ 
  children, 
  className = '', 
  color = 'white', 
  hoverEffect = false,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className={`
        border-2 border-neo-black rounded-2xl p-4 transition-all duration-200
        ${colorMap[color]}
        ${hoverEffect ? 'hover:shadow-neo-hover hover:-translate-y-1 hover:cursor-pointer' : ''}
        shadow-neo
        ${className}
      `}
    >
      {children}
    </div>
  );
};
