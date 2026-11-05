import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export const AchievementsGrid = () => {
  const { stats } = useApp();

  const achievements = stats.achievements || [
    { id: "pioneer", icon: "❄️", title: "Glacier Pioneer", desc: "Completed initial study calibration", unlocked: true },
    { id: "streak7", icon: "🔥", title: "7-Day Ignition", desc: "Maintained study streak for 7 days", unlocked: true },
    { id: "sprinter", icon: "⭐", title: "Focus Sprinter", desc: "Finished 3 deep flow Pomodoro blocks in 1 day", unlocked: true }
  ];

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const hoursLeft = Math.max(0, +(stats.goalHours - stats.focusHours).toFixed(1));

  return (
    <div className="glass-card p-6 rounded-3xl flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Achievements</h3>
          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-strawberry-100 dark:bg-strawberry-950 text-strawberry-600 dark:text-strawberry-400">
            {unlockedCount} Unlocked
          </span>
        </div>

        {/* 3 Badges */}
        <div className="grid grid-cols-3 gap-3 text-center my-3">
          {achievements.slice(0, 3).map((ach) => (
            <motion.div
              key={ach.id}
              whileHover={{ y: -3 }}
              className={`p-3 rounded-2xl border shadow-sm flex flex-col items-center justify-center transition-all ${
                ach.id === 'streak7'
                  ? 'border-strawberry-300 dark:border-strawberry-800/80 bg-strawberry-50/50 dark:bg-strawberry-950/30'
                  : 'border-slate-200/50 dark:border-slate-700/60 bg-white/60 dark:bg-slate-800/60'
              }`}
            >
              <span className="text-2xl mb-1">{ach.icon}</span>
              <span className={`text-xs font-bold ${ach.id === 'streak7' ? 'text-strawberry-500' : ''}`}>
                {ach.title.split(' ')[0]}
              </span>
              <span className="text-[10px] text-slate-400">
                {ach.title.split(' ').slice(1).join(' ')}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tier Progress Bar */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-strawberry-500/10 to-sky-400/10 border border-strawberry-400/20 mt-4">
        <div className="flex justify-between items-center text-xs font-bold mb-1.5">
          <span>🔒 Next: 20 Hours Club</span>
          <span>{stats.focusHours} / {stats.goalHours}h</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, (stats.focusHours / stats.goalHours) * 100)}%` }}
            transition={{ duration: 0.8 }}
            className="bg-strawberry-500 h-full rounded-full"
          />
        </div>
        <p className="text-[10px] text-slate-400 mt-2">
          {hoursLeft > 0
            ? `Only ${hoursLeft} hours left to unlock the 20 Hours Club milestone!`
            : '🎉 Milestone achieved! You have joined the 20 Hours Club!'}
        </p>
      </div>
    </div>
  );
};
