import React from 'react';

export const TypographySpecimen = () => {
  return (
    <div className="glass-card p-6 rounded-3xl space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold">Typography Hierarchy: Plus Jakarta Sans & Inter</h3>
        <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-300 font-bold">
          Scale 1.250 (Major Third)
        </span>
      </div>

      <div className="space-y-4 divide-y divide-slate-100 dark:divide-slate-800">
        <div className="pt-2">
          <span className="text-[10px] font-mono text-slate-400">Display Hero (56px / ExtraBold)</span>
          <p className="text-4xl sm:text-5xl font-extrabold tracking-tight">Study Sanctuary</p>
        </div>

        <div className="pt-3">
          <span className="text-[10px] font-mono text-slate-400">Headline Large (36px / Bold)</span>
          <p className="text-3xl font-bold tracking-tight">Glacial Focus Engine</p>
        </div>

        <div className="pt-3">
          <span className="text-[10px] font-mono text-slate-400">Headline Medium (24px / Bold)</span>
          <p className="text-2xl font-bold tracking-tight">Conquer your semester workload</p>
        </div>

        <div className="pt-3">
          <span className="text-[10px] font-mono text-slate-400">Body Large (Inter 18px)</span>
          <p className="text-lg font-normal text-slate-600 dark:text-slate-300">
            Engineered for students who prioritize deep focus, crystal clarity, and joyful momentum.
          </p>
        </div>

        <div className="pt-3">
          <span className="text-[10px] font-mono text-slate-400">Metrics Display (Tabular Nums / 44px)</span>
          <p className="font-mono text-3xl font-extrabold text-strawberry-500">25:00 • 18.5h</p>
        </div>
      </div>
    </div>
  );
};
