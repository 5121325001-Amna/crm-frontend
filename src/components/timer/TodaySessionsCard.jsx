import React from 'react';
import { useApp } from '../../context/AppContext';

export const TodaySessionsCard = () => {
  const { stats, timerCycle } = useApp();

  const blocks = [
    { name: 'Block 1', duration: '25m', status: 'done' },
    { name: 'Block 2', duration: '25m', status: 'done' },
    { name: 'Block 3', duration: '25m', status: timerCycle >= 3 ? 'live' : 'pending' },
    { name: 'Block 4', duration: '25m', status: timerCycle >= 4 ? 'done' : 'pending' },
  ];

  return (
    <div className="glass-card p-6 rounded-3xl space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-brand text-xl">timer</span>
          <h3 className="font-bold text-base">Today's Sessions</h3>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-300 font-bold text-xs">
          {stats.todayPomodoroCycles || 3} / 4 Done
        </span>
      </div>

      <p className="text-xs text-slate-400">
        75 mins focused today • {stats.todayPomodoroCycles || 3} cycles completed with zero tab interruptions.
      </p>

      {/* Visual Cycle Grid */}
      <div className="grid grid-cols-4 gap-2">
        {blocks.map((b, idx) => (
          <div
            key={b.name}
            className={`flex flex-col items-center gap-1 p-2 rounded-2xl text-center border transition-all ${
              b.status === 'done'
                ? 'bg-white/60 dark:bg-slate-800/60 border-slate-200/50 dark:border-slate-700/60 text-slate-700 dark:text-slate-200'
                : b.status === 'live'
                ? 'bg-strawberry-50 dark:bg-rose-950/40 border-strawberry-400 text-strawberry-500 shadow-sm'
                : 'bg-white/20 dark:bg-slate-900/20 border-transparent text-slate-400 opacity-60'
            }`}
          >
            <span className="material-symbols-outlined text-base">
              {b.status === 'done'
                ? 'check_circle'
                : b.status === 'live'
                ? 'progress_activity'
                : 'radio_button_unchecked'}
            </span>
            <span className="font-bold text-[11px]">{b.name}</span>
            <span className="text-[10px] text-slate-400 font-semibold">{b.duration}</span>
          </div>
        ))}
      </div>

      {/* Mini Inline Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden mt-2">
        <div
          className="bg-strawberry-500 h-full rounded-full transition-all duration-500"
          style={{ width: `${((stats.todayPomodoroCycles || 3) / 4) * 100}%` }}
        />
      </div>
    </div>
  );
};
