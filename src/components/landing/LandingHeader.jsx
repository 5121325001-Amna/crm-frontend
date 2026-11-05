import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const LandingHeader = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useApp();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border-b border-white/20 dark:border-white/10 shadow-sm">
      <div className="h-20 max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-strawberry-500 to-sky-400 p-[2px] shadow-md flex items-center justify-center">
            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
              <span className="text-lg">❄️</span>
            </div>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-slate-800 dark:text-slate-100">
            FrostBerry
          </span>
        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <a href="#features" className="hover:text-strawberry-500 transition">Features</a>
          <a href="#how-it-works" className="hover:text-strawberry-500 transition">How it works</a>
          <a href="#testimonials" className="hover:text-strawberry-500 transition">Testimonials</a>
          <button onClick={() => navigate('/uikit')} className="hover:text-strawberry-500 transition">
            UI Kit
          </button>
        </nav>

        {/* Right CTAs & Theme Toggle */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-sm transition"
            title="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => navigate('/login')}
            className="text-xs font-bold text-slate-600 dark:text-slate-300 px-3 py-2 hover:text-strawberry-500 transition"
          >
            Log in
          </button>

          <button
            onClick={() => navigate('/dashboard')}
            className="btn-strawberry px-4 py-2 rounded-full text-xs font-bold text-white shadow-md shadow-strawberry-500/25"
          >
            Open App →
          </button>
        </div>
      </div>
    </header>
  );
};
