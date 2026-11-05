import React from 'react';

export const TimerHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Glacial Focus Dial</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Immersive Pomodoro environment with ambient soundscapes and distraction blocking.
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          Notifications Silenced
        </span>
      </div>
    </div>
  );
};
