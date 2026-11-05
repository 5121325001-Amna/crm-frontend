import React from 'react';
import { WORKLOAD_BREAKDOWN } from '../../data/mockData';

export const WorkloadBreakdownWidget = () => {
  return (
    <div className="glass-card p-5 rounded-3xl space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-brand text-xl">stacked_bar_chart</span>
          <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100">Weekly Workload</h3>
        </div>
        <span className="text-[10px] font-semibold text-slate-400">Week 11</span>
      </div>

      <div className="space-y-3 pt-1">
        {WORKLOAD_BREAKDOWN.map((item) => (
          <div key={item.course} className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-300">{item.course}</span>
              <span className="text-slate-400 font-medium">{item.pct}% workload</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
              <div
                className={`h-full rounded-full ${item.color}`}
                style={{ width: `${item.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
