import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const OmniSearchModal = () => {
  const { isOmniOpen, setIsOmniOpen, tasks } = useApp();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOmniOpen(true);
      } else if (e.key === 'Escape') {
        setIsOmniOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsOmniOpen]);

  const filteredTasks = query
    ? tasks.filter(
        (t) =>
          t.title.toLowerCase().includes(query.toLowerCase()) ||
          t.course.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (path) => {
    navigate(path);
    setIsOmniOpen(false);
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOmniOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOmniOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-xl glass-card rounded-3xl p-4 shadow-2xl border border-white/40 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 z-10"
          >
            {/* Input Header */}
            <div className="flex items-center space-x-3 px-3 py-2 border-b border-slate-200/60 dark:border-slate-800">
              <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tasks, syllabi, courses, or jump to view..."
                autoFocus
                className="w-full bg-transparent text-sm font-medium focus:outline-none text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
              />
              <kbd className="px-2 py-0.5 text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-400 rounded">
                ESC
              </kbd>
            </div>

            {/* Quick Navigation Shortcuts */}
            {!query && (
              <div className="p-3 space-y-2">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
                  Navigation Jump
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleSelect('/dashboard')}
                    className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition"
                  >
                    <span className="material-symbols-outlined text-sm text-sky-500">grid_view</span>
                    <span className="text-xs font-semibold">Student Dashboard</span>
                  </button>
                  <button
                    onClick={() => handleSelect('/tasks')}
                    className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition"
                  >
                    <span className="material-symbols-outlined text-sm text-strawberry-500">task_alt</span>
                    <span className="text-xs font-semibold">Tasks & Planner</span>
                  </button>
                  <button
                    onClick={() => handleSelect('/timer')}
                    className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition"
                  >
                    <span className="material-symbols-outlined text-sm text-amber-500">hourglass_bottom</span>
                    <span className="text-xs font-semibold">Focus Timer</span>
                  </button>
                  <button
                    onClick={() => handleSelect('/uikit')}
                    className="flex items-center space-x-2.5 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-left transition"
                  >
                    <span className="material-symbols-outlined text-sm text-indigo-500">category</span>
                    <span className="text-xs font-semibold">UI Kit & Specs</span>
                  </button>
                </div>
              </div>
            )}

            {/* Search Results */}
            {query && (
              <div className="p-3 max-h-72 overflow-y-auto space-y-1">
                {filteredTasks.length > 0 ? (
                  filteredTasks.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => handleSelect('/tasks')}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition"
                    >
                      <div>
                        <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">{t.title}</h4>
                        <p className="text-[11px] text-slate-400">{t.course} • {t.due}</p>
                      </div>
                      <span className="text-xs font-semibold text-strawberry-500">Jump →</span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-slate-400 text-center py-6">
                    No coursework tasks match "{query}".
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
