import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export const ToastContainer = () => {
  const { toasts } = useApp();

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none flex flex-col space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="pointer-events-auto px-4 py-2.5 rounded-2xl glass-card text-xs font-bold text-slate-800 dark:text-slate-100 border border-strawberry-400/40 shadow-xl flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 max-w-sm"
          >
            <span className="text-strawberry-500 text-sm">🍓</span>
            <span>{toast.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
