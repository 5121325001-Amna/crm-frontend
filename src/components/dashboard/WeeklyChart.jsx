import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export const WeeklyChart = () => {
  const { stats } = useApp();
  const [activeDay, setActiveDay] = useState('Wed');

  const days = stats.weeklyDailyHours || [
    { day: "Mon", hours: 2.2, height: 80, isPeak: false },
    { day: "Tue", hours: 3.1, height: 120, isPeak: false },
    { day: "Wed", hours: 3.8, height: 155, isPeak: true },
    { day: "Thu", hours: 2.6, height: 98, isPeak: false },
    { day: "Fri", hours: 3.4, height: 135, isPeak: false },
    { day: "Sat", hours: 1.9, height: 70, isPeak: false },
    { day: "Sun", hours: 1.5, height: 55, isPeak: false }
  ];

  return (
    <div className="glass-card p-6 rounded-3xl h-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold">Weekly Focus Hours</h3>
          <p className="text-xs text-slate-400">Daily deep work distribution</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-strawberry-100 dark:bg-strawberry-950 text-strawberry-600 dark:text-strawberry-400">
            {stats.focusHours} hrs total
          </span>
          <select className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <option>This Week (Mon–Sun)</option>
            <option>Last Week</option>
          </select>
        </div>
      </div>

      {/* Interactive Animated Bar Chart */}
      <div className="h-56 flex items-end justify-between px-2 sm:px-4 pt-8 pb-2 border-b border-slate-200/50 dark:border-slate-800/80">
        {days.map((item) => {
          const isSelected = activeDay === item.day;
          return (
            <div
              key={item.day}
              onClick={() => setActiveDay(item.day)}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              {/* Tooltip / Peak Tag */}
              <div
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded transition-all ${
                  item.isPeak
                    ? 'bg-strawberry-500 text-white shadow-md animate-bounce'
                    : isSelected
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 opacity-100'
                    : 'opacity-0 group-hover:opacity-100 bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                }`}
              >
                {item.hours}h {item.isPeak ? '(Peak)' : ''}
              </div>

              {/* Bar */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${item.height}px` }}
                transition={{ duration: 0.8, type: 'spring', damping: 18 }}
                className={`w-8 sm:w-10 rounded-2xl transition-all duration-300 ${
                  item.isPeak
                    ? 'bg-gradient-to-t from-strawberry-500 to-rose-400 shadow-lg shadow-strawberry-500/30'
                    : 'bg-gradient-to-t from-sky-400 to-strawberry-400 group-hover:brightness-110'
                } ${isSelected ? 'ring-2 ring-strawberry-400' : ''}`}
              />

              {/* Day Label */}
              <span
                className={`text-xs font-semibold transition-colors ${
                  item.isPeak
                    ? 'text-strawberry-500 font-bold'
                    : isSelected
                    ? 'text-sky-500 font-bold'
                    : 'text-slate-400'
                }`}
              >
                {item.day}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer Insight */}
      <div className="flex justify-between items-center text-xs text-slate-400 mt-3 px-2">
        <span>Target: 3.0h daily average</span>
        <span className="text-emerald-500 font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Wednesday was your highest flow session
        </span>
      </div>
    </div>
  );
};
