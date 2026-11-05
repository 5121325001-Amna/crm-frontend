import React from 'react';

export const StatsStrip = () => {
  return (
    <section className="my-12 max-w-7xl mx-auto px-6 sm:px-8">
      <div className="w-full rounded-3xl glass-card p-6 sm:p-8 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200/50 dark:divide-slate-800">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center p-4">
            <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
              12,000+
            </span>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-1">Active Students</span>
            <span className="text-xs text-slate-400 mt-0.5">Representing 140+ global universities</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center p-4">
            <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-strawberry-500">
              250,000+
            </span>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-1">Focused Study Hours</span>
            <span className="text-xs text-slate-400 mt-0.5">Logged via glacier Pomodoro dial</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center p-4">
            <div className="flex items-center gap-1.5">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
                4.9
              </span>
              <span className="text-2xl font-bold text-slate-400">/ 5.0</span>
            </div>
            <div className="flex items-center gap-1 text-strawberry-500 mt-1">
              {'★★★★★'.split('').map((star, idx) => (
                <span key={idx} className="text-sm">{star}</span>
              ))}
            </div>
            <span className="text-xs text-slate-400 mt-1">Dean's list student satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};
