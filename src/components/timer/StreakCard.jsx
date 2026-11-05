import React from 'react';
import { useApp } from '../../context/AppContext';

export const StreakCard = () => {
  const { stats } = useApp();

  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className="glass-card p-6 rounded-3xl space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-strawberry-100 dark:bg-rose-950 flex items-center justify-center text-strawberry-500 shadow-sm">
          <span className="material-symbols-outlined text-2xl">local_fire_department</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-base">{stats.streakDays || 7} Day Streak</h3>
            <span className="px-2 py-0.5 rounded-full bg-strawberry-500 text-white font-bold text-[10px]">
              Record!
            </span>
          </div>
          <p className="text-xs text-slate-400">Personal best. Earn Glacier Master in 3 days.</p>
        </div>
      </div>

      {/* Week Days Matrix */}
      <div className="flex justify-between items-center gap-1 pt-2">
        {days.map((d, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-bold text-slate-400">{d}</span>
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-sm ${
                idx === 6
                  ? 'bg-strawberry-500 text-white ring-2 ring-strawberry-400 animate-pulse'
                  : 'bg-white/70 dark:bg-slate-800/80 border border-strawberry-300 dark:border-strawberry-800 text-strawberry-500'
              }`}
            >
              {idx === 6 ? '★' : '✓'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
