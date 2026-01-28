import React, { useState, useEffect } from 'react';
import { ViewState } from './types';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { ListView } from './components/views/ListView';
import { ProductView } from './components/views/ProductView';

function App() {
  const [currentView, setView] = useState<ViewState>(ViewState.HOME);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen bg-neo-bg font-sans text-neo-black overflow-x-hidden selection:bg-neo-pink selection:text-neo-black">
      
      <Navbar currentView={currentView} setView={setView} />
      
      <main className="w-full">
        {currentView === ViewState.HOME && <HomeView setView={setView} />}
        {currentView === ViewState.ABOUT && <AboutView />}
        {currentView === ViewState.ARTICLES && <ListView type={ViewState.ARTICLES} />}
        {currentView === ViewState.VIDEOS && <ListView type={ViewState.VIDEOS} />}
        {currentView === ViewState.PRODUCTS && <ProductView />}
      </main>

      <footer className="py-12 text-center border-t-2 border-neo-black/10 mt-12 bg-white">
        <div className="flex justify-center gap-4 mb-4">
           <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-neo-black hover:bg-neo-pink transition-colors">
              B
           </a>
           <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-neo-black hover:bg-neo-blue transition-colors">
              X
           </a>
           <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-neo-black hover:bg-neo-yellow transition-colors">
              G
           </a>
        </div>
        <p className="text-sm font-bold text-gray-500">© 2024 Map Data PM. All rights reserved.</p>
        <p className="text-xs text-gray-400 mt-2 font-mono">Designed with love & chaos</p>
      </footer>
    </div>
  );
}

export default App;