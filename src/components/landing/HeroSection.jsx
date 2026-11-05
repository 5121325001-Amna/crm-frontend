import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-16 lg:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto px-6 sm:px-8 relative">
      {/* Left Hero Column */}
      <div className="lg:col-span-7 flex flex-col items-start gap-6">
        {/* Badge Capsule */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-md shadow-sm">
          <span className="text-strawberry-500 font-bold text-xs flex items-center gap-1">
            <span>❄️</span>
            <span>NEW: SYLLABUS SYNC & REWARDS</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-strawberry-500" />
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Winter term ready</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
          Study smarter in a <br />
          <span className="bg-gradient-to-r from-strawberry-500 via-rose-500 to-sky-400 bg-clip-text text-transparent">
            calmer way
          </span>
          .
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
          The all-in-one study companion built for university students. Organize your course deadlines, enter deep focus sessions, and build lifelong academic momentum.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/dashboard')}
            className="btn-strawberry px-8 py-4 rounded-full text-sm font-bold text-white shadow-xl shadow-strawberry-500/30 flex items-center justify-center gap-2"
          >
            <span>Start Focusing — It's Free</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/timer')}
            className="btn-glass px-6 py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
          >
            <span className="text-strawberry-500 text-lg">▶</span>
            <span>Watch 2-Min Demo</span>
          </motion.button>
        </div>

        {/* Trust Note */}
        <div className="flex items-center gap-2 text-slate-400 text-xs pt-1">
          <span>🌸</span>
          <span>Free forever for university students • Zero ads • No credit card needed</span>
        </div>
      </div>

      {/* Right Hero Column: 3D Floating Tilted Cards Stack */}
      <div className="lg:col-span-5 relative w-full h-[460px] sm:h-[500px] flex items-center justify-center select-none">
        {/* Glow behind cards */}
        <div className="absolute w-72 h-72 rounded-full bg-strawberry-300/30 dark:bg-rose-950/40 blur-3xl -z-10" />
        <div className="absolute w-64 h-64 -bottom-10 -right-10 rounded-full bg-sky-300/30 dark:bg-sky-950/40 blur-3xl -z-10" />

        {/* Card 3: Mini Productivity Chart (Bottom-most layer) */}
        <motion.div
          animate={{ y: [100, 108, 100], rotate: [5, 6, 5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-72 sm:w-80 rounded-3xl glass-card p-4 shadow-xl translate-x-8 translate-y-24 rotate-[5deg]"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <span>📈</span> Weekly Flow Rate
            </span>
            <span className="px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-300 font-bold text-[10px]">
              +18% Study Gain
            </span>
          </div>

          <div className="h-16 flex items-end justify-between gap-1.5 pt-2">
            {[40, 60, 75, 45, 90, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full rounded-t-md ${
                    i === 5 ? 'bg-strawberry-500' : 'bg-sky-400/70'
                  }`}
                  style={{ height: `${h * 0.55}px` }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 2: Focus Timer Dial (Middle layer) */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [2, 1, 2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute w-64 sm:w-72 rounded-3xl glass-card p-5 shadow-2xl rotate-[2deg] z-10 text-center"
        >
          <div className="flex items-center justify-between mb-2 text-xs font-bold">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-strawberry-500 animate-pulse" />
              Focus Session
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-100 dark:bg-pink-950 text-strawberry-600 dark:text-strawberry-300">
              Deep Flow
            </span>
          </div>

          <div className="py-2">
            <div className="font-mono text-4xl font-extrabold text-slate-800 dark:text-slate-100">
              25:00
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Glacier Lo-fi Rain 🎧</p>
          </div>

          <div className="flex justify-center gap-2 mt-2">
            <span className="px-3 py-1 rounded-full bg-strawberry-500 text-white text-[11px] font-bold shadow-sm">
              ▶ Active Flow
            </span>
          </div>
        </motion.div>

        {/* Card 1: Priority Checklist (Top layer) */}
        <motion.div
          animate={{ y: [-100, -92, -100], rotate: [-4, -3, -4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-72 sm:w-80 rounded-3xl glass-card p-4 shadow-2xl -translate-x-6 -translate-y-24 -rotate-[4deg] z-20 space-y-2.5"
        >
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
            <span className="text-xs font-bold flex items-center gap-1.5">
              <span>📋</span> Priority Due Today
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
              2/3 Done
            </span>
          </div>

          <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 line-through opacity-70">
              Linked List Assignment
            </span>
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">Done</span>
          </div>

          <div className="p-2 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
              Lab Report 04: Optics
            </span>
            <span className="text-[10px] font-bold text-strawberry-500">CS 201</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
