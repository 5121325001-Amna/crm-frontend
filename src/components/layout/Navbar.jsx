import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const Navbar = () => {
  const { theme, toggleTheme, user, setIsOmniOpen, addToast } = useApp();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 px-6 lg:px-8 py-3.5 border-b border-white/20 dark:border-white/10 flex items-center justify-between glass-card backdrop-blur-2xl bg-white/75 dark:bg-[#0b132b]/80">
      {/* Omni Search Trigger */}
      <div
        onClick={() => setIsOmniOpen(true)}
        className="relative w-72 md:w-96 cursor-pointer group"
      >
        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
          <span className="material-symbols-outlined text-[18px]">search</span>
        </span>
        <div className="w-full pl-10 pr-12 py-2 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800 text-xs font-medium text-slate-400 group-hover:border-strawberry-400/60 transition shadow-inner flex items-center justify-between">
          <span>Search tasks, courses, notes...</span>
        </div>
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md">
            ⌘K
          </kbd>
        </span>
      </div>

      {/* Center Context Pills */}
      <div className="hidden md:flex items-center space-x-3">
        <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/60 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/60 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm">
          <span className="text-sky-500">📅</span>
          <span>Today, 12 Nov</span>
        </div>
        <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-strawberry-50 dark:bg-strawberry-950/40 border border-strawberry-200 dark:border-strawberry-800/50 text-xs font-semibold text-strawberry-600 dark:text-strawberry-400">
          <span>🔥</span>
          <span>7-Day Streak</span>
        </div>
      </div>

      {/* Actions: Theme Toggle + Notification Bell + Quick Session CTA */}
      <div className="flex items-center space-x-3 lg:space-x-4">
        {/* Interactive Theme Switcher */}
        <div className="relative group">
          <button
            onClick={toggleTheme}
            className="relative flex items-center justify-between w-16 h-8 p-1 rounded-full bg-slate-200/80 dark:bg-slate-800 border border-slate-300/60 dark:border-slate-700 cursor-pointer shadow-inner transition-colors duration-300"
            title="Toggle theme"
          >
            <span className="text-[11px] pl-1 select-none">☀️</span>
            <span className="text-[11px] pr-1 select-none">🌙</span>
            <motion.span
              animate={{ x: theme === 'dark' ? 32 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute left-1 top-1 w-6 h-6 rounded-full bg-white dark:bg-slate-900 shadow-md flex items-center justify-center border border-slate-100 dark:border-slate-700 text-[10px] font-bold text-strawberry-500"
            >
              ✨
            </motion.span>
          </button>
        </div>

        {/* Notification Bell */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addToast('🔔 Urgent Deadline: Linked List Assignment due tonight at 11:59 PM!')}
          className="relative p-2 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300 hover:border-strawberry-400 transition shadow-sm"
        >
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-strawberry-500 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
        </motion.button>

        {/* Quick Session CTA */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/timer')}
          className="btn-strawberry px-3.5 sm:px-4 py-2 rounded-2xl text-xs font-bold text-white flex items-center space-x-1.5"
        >
          <span>⚡ Quick Session</span>
        </motion.button>
      </div>
    </header>
  );
};
