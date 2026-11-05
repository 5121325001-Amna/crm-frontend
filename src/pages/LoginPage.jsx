import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BrandPanel } from '../components/auth/BrandPanel';
import { AuthFormCard } from '../components/auth/AuthFormCard';

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35 }}
      className="w-full min-h-screen flex items-center justify-center p-4 sm:p-6 relative"
    >
      {/* Top Floating Back Link */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 dark:bg-slate-800/70 glass-card text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-strawberry-500 transition shadow-sm"
      >
        <span>←</span>
        <span>Back to Landing</span>
      </button>

      <div className="w-full max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          <BrandPanel />
          <AuthFormCard />
        </div>
      </div>
    </motion.div>
  );
};
