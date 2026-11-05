import React from 'react';

export const UrgentDeadlinesWidget = () => {
  const deadlines = [
    {
      title: 'Linked List Assignment',
      course: 'CS 201',
      due: 'Due in 8 hours',
      badgeClass: 'bg-strawberry-500 text-white shadow-sm'
    },
    {
      title: 'Read Chapter 5',
      course: 'SE 310',
      due: 'Due in 1 day',
      badgeClass: 'bg-secondary-fixed text-on-secondary-fixed bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300'
    },
    {
      title: 'Lab Report 04',
      course: 'CS 101',
      due: 'Due in 2 days',
      badgeClass: 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300'
    }
  ];

  return (
    <div className="glass-card p-5 rounded-3xl space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary-brand text-xl">bolt</span>
          <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100">Urgent Deadlines</h3>
        </div>
        <span className="text-[10px] font-bold text-strawberry-500 bg-strawberry-100 dark:bg-strawberry-950 px-2 py-0.5 rounded-full">
          Next 48h
        </span>
      </div>

      <div className="space-y-2.5">
        {deadlines.map((item) => (
          <div
            key={item.title}
            className="p-3 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2"
          >
            <div className="min-w-0">
              <h4 className="text-xs font-bold truncate text-slate-800 dark:text-slate-100">{item.title}</h4>
              <p className="text-[11px] text-slate-400 truncate">{item.course}</p>
            </div>
            <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] whitespace-nowrap shrink-0 ${item.badgeClass}`}>
              {item.due}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
