import React from 'react';
import { useApp } from '../../context/AppContext';

export const SubjectDonut = () => {
  const { stats } = useApp();

  const subjects = stats.subjectHours || [
    { name: "CS 201: Data Structures", hours: 7.4, pct: 40, color: "#FF6B8B" },
    { name: "SE 310: Software Eng", hours: 4.6, pct: 25, color: "#0EA5E9" },
    { name: "CS 204: Architecture", hours: 3.7, pct: 20, color: "#A8D8F0" },
    { name: "Math & Writing", hours: 2.8, pct: 15, color: "#94A3B8" }
  ];

  return (
    <div className="glass-card p-6 rounded-3xl flex flex-col justify-between h-full">
      <div>
        <h3 className="text-lg font-bold">Time by Subject</h3>
        <p className="text-xs text-slate-400">Course focus breakdown</p>
      </div>

      {/* Centered Donut Visual */}
      <div className="relative flex items-center justify-center my-4">
        <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background Track */}
          <circle
            className="text-slate-200/50 dark:text-slate-800"
            cx="50"
            cy="50"
            fill="transparent"
            r="38"
            stroke="currentColor"
            strokeWidth="12"
          />
          {/* Data Structures (40%) */}
          <circle
            cx="50"
            cy="50"
            fill="transparent"
            r="38"
            stroke="#FF6B8B"
            strokeWidth="12"
            strokeDasharray="238"
            strokeDashoffset="142"
            strokeLinecap="round"
          />
          {/* Software Eng (25%) */}
          <circle
            className="transform origin-center rotate-90"
            cx="50"
            cy="50"
            fill="transparent"
            r="38"
            stroke="#0EA5E9"
            strokeWidth="12"
            strokeDasharray="238"
            strokeDashoffset="180"
            strokeLinecap="round"
          />
          {/* Architecture (20%) */}
          <circle
            className="transform origin-center rotate-180"
            cx="50"
            cy="50"
            fill="transparent"
            r="38"
            stroke="#A8D8F0"
            strokeWidth="12"
            strokeDasharray="238"
            strokeDashoffset="190"
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute text-center">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider">TOTAL</span>
          <p className="text-xl font-extrabold">{stats.focusHours || '18.5'}h</p>
        </div>
      </div>

      {/* Legend List */}
      <div className="space-y-2 text-xs font-semibold">
        {subjects.map((sub) => (
          <div key={sub.name} className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: sub.color }} />
              {sub.name}
            </span>
            <span className="font-bold">{sub.hours}h ({sub.pct}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
};
