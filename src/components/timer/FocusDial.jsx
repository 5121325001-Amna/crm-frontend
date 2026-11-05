import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export const FocusDial = () => {
  const {
    timerMode,
    timerRemaining,
    isTimerRunning,
    timerCycle,
    setMode,
    toggleTimer,
    resetTimer,
    skipTimer,
    audioPlaying,
    toggleAudio,
    currentSoundscape
  } = useApp();

  const totalSeconds = timerMode * 60;
  const minutes = Math.floor(timerRemaining / 60);
  const seconds = timerRemaining % 60;
  const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const circumference = 1018; // 2 * PI * r (r = 162)
  const fraction = totalSeconds > 0 ? timerRemaining / totalSeconds : 0;
  const strokeDashoffset = circumference * (1 - fraction);

  return (
    <div className="glass-card p-8 sm:p-10 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
      {/* Background Ambient Glows */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-strawberry-300/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-sky-300/20 blur-3xl pointer-events-none" />

      {/* Interval Mode Selector */}
      <div className="flex items-center space-x-1.5 sm:space-x-2 p-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 mb-8 border border-slate-200/50 dark:border-slate-700/60 z-10">
        <button
          onClick={() => setMode(25)}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all ${
            timerMode === 25
              ? 'bg-strawberry-500 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:text-strawberry-500'
          }`}
        >
          Deep Focus (25m)
        </button>
        <button
          onClick={() => setMode(5)}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all ${
            timerMode === 5
              ? 'bg-strawberry-500 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:text-strawberry-500'
          }`}
        >
          Short Break (5m)
        </button>
        <button
          onClick={() => setMode(15)}
          className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all ${
            timerMode === 15
              ? 'bg-strawberry-500 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:text-strawberry-500'
          }`}
        >
          Long Break (15m)
        </button>
      </div>

      {/* Massive Circular Focus Dial */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center z-10 select-none">
        {/* Glow halo */}
        <div className="absolute inset-0 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl shadow-[0_16px_48px_rgba(43,58,85,0.08),0_8px_32px_rgba(255,107,139,0.2)]" />

        {/* SVG Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 360 360">
          <defs>
            <linearGradient id="strawberryGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B8B" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
            <filter id="dialGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#FF6B8B" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* Background Track */}
          <circle
            cx="180"
            cy="180"
            r="162"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="10"
            className="text-slate-200/50 dark:text-slate-800"
          />

          {/* Dynamic Active Stroke */}
          <circle
            cx="180"
            cy="180"
            r="162"
            fill="transparent"
            stroke="url(#strawberryGlow)"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#dialGlow)"
            strokeDasharray="1018"
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>

        {/* Center Readout & Controls */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center">
          <div className="w-10 h-10 mb-2 rounded-full bg-strawberry-100 dark:bg-strawberry-950 flex items-center justify-center text-strawberry-500 shadow-sm">
            <span className="material-symbols-outlined text-[20px]">ac_unit</span>
          </div>

          <span className="text-[11px] uppercase font-extrabold tracking-widest text-strawberry-500">
            {isTimerRunning ? '❄️ FLOW STATE ACTIVE' : 'PAUSED'}
          </span>

          <span className="font-mono text-5xl sm:text-6xl font-extrabold tracking-tight my-1 text-slate-800 dark:text-slate-100">
            {timeString}
          </span>

          <div className="flex items-center gap-1.5 mt-2">
            <span className="w-2 h-2 rounded-full bg-strawberry-500 animate-ping" />
            <span className="text-xs text-slate-400 font-semibold">
              Cycle {timerCycle} of 4 • Target: 100m
            </span>
          </div>
        </div>
      </div>

      {/* Timer Action Buttons */}
      <div className="flex items-center space-x-3 sm:space-x-4 mt-8 z-10">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={resetTimer}
          className="px-5 py-3 rounded-2xl glass-card font-bold text-xs hover:border-strawberry-400 transition"
        >
          ↻ Reset
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={toggleTimer}
          className="btn-strawberry px-8 py-3.5 rounded-2xl font-bold text-sm text-white flex items-center space-x-2 shadow-lg shadow-strawberry-500/30"
        >
          <span>{isTimerRunning ? '⏸' : '▶'}</span>
          <span>{isTimerRunning ? 'Pause Flow' : 'Start Flow'}</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={skipTimer}
          className="px-5 py-3 rounded-2xl glass-card font-bold text-xs hover:border-strawberry-400 transition"
        >
          ⏭ Skip Phase
        </motion.button>
      </div>

      {/* Ambient Lo-Fi Tonal Pill */}
      <div className="mt-8 flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 dark:bg-slate-800/70 border border-slate-200/50 dark:border-slate-700/60 shadow-sm z-10">
        <span className="material-symbols-outlined text-strawberry-500 text-[20px]">graphic_eq</span>
        <span className="font-semibold text-xs text-slate-700 dark:text-slate-300">
          Ambient: Glacial {currentSoundscape.charAt(0).toUpperCase() + currentSoundscape.slice(1)}
        </span>
        <div className={`flex items-end gap-1 h-3.5 mx-1 ${audioPlaying ? 'opacity-100' : 'opacity-30'}`}>
          <span className="w-1 bg-strawberry-400 rounded-full h-3 animate-pulse" />
          <span className="w-1 bg-sky-400 rounded-full h-4 animate-pulse" />
          <span className="w-1 bg-strawberry-400 rounded-full h-2 animate-pulse" />
        </div>
        <button
          onClick={toggleAudio}
          className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-xs font-semibold hover:bg-strawberry-100 dark:hover:bg-strawberry-950 transition"
        >
          {audioPlaying ? 'Mute' : 'Play'}
        </button>
      </div>
    </div>
  );
};
