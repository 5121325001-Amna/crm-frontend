import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export const KpiGrid = () => {
  const { stats, tasks } = useApp();

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const completionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 86;

  const kpis = [
    {
      title: 'Focus Hours This Week',
      value: `${stats.focusHours}h`,
      subtext: `Goal: ${stats.goalHours}h / week (${Math.min(100, Math.round((stats.focusHours / stats.goalHours) * 100))}%)`,
      badge: '+12% vs last wk',
      badgeClass: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400',
      icon: '⏱',
      iconBg: 'bg-pink-100 dark:bg-pink-950 text-strawberry-500',
      progress: Math.min(100, (stats.focusHours / stats.goalHours) * 100),
      gradient: 'from-strawberry-500 to-sky-400'
    },
    {
      title: 'Tasks Completed',
      value: stats.tasksCompleted || 24,
      subtext: `${completionRate}% completion rate across courses`,
      badge: '+5 tasks',
      badgeClass: 'bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400',
      icon: '✓',
      iconBg: 'bg-sky-100 dark:bg-sky-950 text-sky-500',
      progress: completionRate,
      gradient: 'from-sky-400 to-indigo-500'
    },
    {
      title: 'Current Streak',
      value: `${stats.streakDays} Days`,
      subtext: 'Next milestone: 10 Days (Glacier Flame)',
      badge: 'Top 5% campus',
      badgeClass: 'bg-strawberry-100 dark:bg-strawberry-950 text-strawberry-600 dark:text-strawberry-400',
      icon: '🔥',
      iconBg: 'bg-rose-100 dark:bg-rose-950 text-rose-500',
      progress: 70,
      gradient: 'from-amber-400 to-rose-500'
    },
    {
      title: 'Productivity Score',
      value: `${stats.productivityScore}%`,
      subtext: 'Optimal flow zone achieved',
      badge: '+4 pts',
      badgeClass: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400',
      icon: '✨',
      iconBg: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-500',
      progress: stats.productivityScore,
      gradient: 'from-purple-500 to-strawberry-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {kpis.map((kpi, idx) => (
        <motion.div
          key={kpi.title}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.08 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="glass-card p-5 rounded-3xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-3">
            <span className={`w-9 h-9 rounded-2xl ${kpi.iconBg} flex items-center justify-center font-bold text-sm shadow-sm`}>
              {kpi.icon}
            </span>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${kpi.badgeClass}`}>
              {kpi.badge}
            </span>
          </div>

          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{kpi.title}</p>
          <h3 className="text-3xl font-extrabold tracking-tight mt-1">{kpi.value}</h3>

          <div className="w-full bg-slate-200/70 dark:bg-slate-700/60 h-1.5 rounded-full mt-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${kpi.progress}%` }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className={`bg-gradient-to-r ${kpi.gradient} h-full rounded-full`}
            />
          </div>

          <p className="text-[11px] text-slate-400 mt-2 font-medium">{kpi.subtext}</p>
        </motion.div>
      ))}
    </div>
  );
};
