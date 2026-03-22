import React from 'react';
import { ViewState } from '../types';
import { Mail } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const navItems = [
    { label: '首页', value: ViewState.HOME },
    { label: '关于我', value: ViewState.ABOUT },
    { label: '文章', value: ViewState.ARTICLES },
    { label: '视频', value: ViewState.VIDEOS },
    { label: '产品', value: ViewState.PRODUCTS },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white border-2 border-neo-black rounded-full px-2 py-2 shadow-neo flex items-center gap-1 md:gap-2 overflow-x-auto max-w-full">
        {navItems.map((item) => (
          <button
            key={item.value}
            onClick={() => setView(item.value)}
            className={`
              px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border-2
              ${currentView === item.value 
                ? 'bg-neo-black text-white border-neo-black' 
                : 'bg-transparent text-neo-black border-transparent hover:bg-gray-100'}
            `}
          >
            {item.label}
          </button>
        ))}
        <div className="w-[1px] h-6 bg-gray-300 mx-1"></div>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors border-2 border-transparent hover:border-neo-black">
          <Mail size={20} />
        </button>
      </nav>
    </div>
  );
};
