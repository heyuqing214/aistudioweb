import React from 'react';

interface NeoButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'black';
  className?: string;
}

export const NeoButton: React.FC<NeoButtonProps> = ({ 
  label, 
  icon, 
  onClick, 
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = "flex items-center justify-center gap-2 px-6 py-2 rounded-full font-bold border-2 border-neo-black shadow-neo active:translate-y-1 active:shadow-none transition-all duration-150";
  
  const variants = {
    primary: "bg-neo-yellow hover:bg-yellow-400 text-neo-black",
    secondary: "bg-white hover:bg-gray-50 text-neo-black",
    black: "bg-neo-black text-white hover:bg-gray-800",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};
