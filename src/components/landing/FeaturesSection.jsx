import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../../data/mockData';

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
      {/* Title */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-300 font-bold text-xs">
          <span>✨</span>
          <span>CRYSTALLINE WORKSPACE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Everything you need to conquer your semester
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Crafted with serene glacier acoustics and focused precision to eliminate academic overwhelm.
        </p>
      </div>

      {/* 4 Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((feat, idx) => (
          <motion.div
            key={feat.title}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group rounded-3xl glass-card p-6 flex flex-col justify-between shadow-lg relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400/20 to-strawberry-400/20 border border-white/60 dark:border-white/10 flex items-center justify-center text-strawberry-500 text-2xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">{feat.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{feat.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>

            <div className="pt-6 mt-4 flex items-center gap-1.5 text-xs font-bold text-strawberry-500">
              <span>{feat.action}</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
