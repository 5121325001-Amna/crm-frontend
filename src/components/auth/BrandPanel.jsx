import React from 'react';

export const BrandPanel = () => {
  return (
    <div className="lg:col-span-5 flex flex-col justify-between relative overflow-hidden rounded-3xl glass-card p-6 sm:p-8 min-h-[580px] shadow-lg border border-white/60 dark:border-white/10">
      {/* Top Branding & Emblem */}
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-strawberry-500 to-sky-400 p-[2px] shadow-md flex items-center justify-center">
            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
              <span className="text-2xl">❄️</span>
            </div>
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight block">FrostBerry</span>
            <span className="text-[11px] font-bold text-sky-500 tracking-wider uppercase">
              Study Sanctuary
            </span>
          </div>
        </div>

        {/* Ambient Visual Card */}
        <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-white/40 dark:bg-slate-800/40 backdrop-blur-md shadow-sm mt-2 flex items-center justify-center border border-white/40 dark:border-white/10">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
            alt="Crystalline Sanctuary"
            className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
            <span className="px-3 py-1 rounded-full bg-white/80 dark:bg-slate-900/80 text-[11px] font-bold backdrop-blur-md">
              Focus Engine v2.4
            </span>
          </div>
        </div>
      </div>

      {/* Center Motivational Quote */}
      <div className="relative z-10 my-6 flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5 text-strawberry-500 font-bold text-xs uppercase tracking-wider">
          <span className="material-symbols-outlined text-sm">ac_unit</span>
          <span>Daily Mindset</span>
        </div>
        <p className="text-2xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
          “Small sessions, big results.”
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
          A serene sanctuary engineered for students who prioritize deep focus, crystal clarity, and mindful progression.
        </p>
      </div>

      {/* Bottom Mini Widget: Live University Pulse */}
      <div className="relative z-10 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md p-4 shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-sky-500 uppercase tracking-wider">
            Campus Momentum
          </span>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
              alt="Student"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-white dark:ring-slate-900"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
              alt="Student"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-white dark:ring-slate-900"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
              alt="Student"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-white dark:ring-slate-900"
            />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
            <strong className="text-slate-800 dark:text-slate-100 font-semibold">1,420 students</strong> studying actively across North America & Europe
          </p>
        </div>
      </div>
    </div>
  );
};
