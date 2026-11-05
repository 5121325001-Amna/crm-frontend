import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const CtaSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 sm:px-8">
      <div className="relative rounded-3xl glass-card p-10 sm:p-16 shadow-2xl overflow-hidden text-center flex flex-col items-center">
        {/* Glow Gradients */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-strawberry-300/30 dark:bg-rose-950/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-sky-300/30 dark:bg-sky-950/40 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-md mx-auto flex items-center justify-center text-strawberry-500 mb-2">
            <span className="material-symbols-outlined text-2xl">ac_unit</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to find your calm academic flow?
          </h2>

          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Join 12,000+ university students staying cool and hitting their dean's list goals this semester.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/dashboard')}
              className="btn-strawberry px-8 py-3.5 rounded-full text-xs font-bold text-white shadow-xl shadow-strawberry-500/30 flex items-center gap-2"
            >
              <span>Start Free Today</span>
              <span className="material-symbols-outlined text-base">bolt</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate('/uikit')}
              className="btn-glass px-6 py-3.5 rounded-full text-xs font-bold shadow-sm"
            >
              <span>Explore UI Specs</span>
            </motion.button>
          </div>

          <p className="text-[11px] text-slate-400 pt-2">
            Available on Web, macOS, Windows • Instant sync across devices
          </p>
        </div>
      </div>
    </section>
  );
};
