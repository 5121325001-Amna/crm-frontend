import React from 'react';

export const ButtonSpecimen = () => {
  return (
    <div className="glass-card p-6 rounded-3xl space-y-4">
      <h3 className="text-base font-bold">Button Anatomy & Interactive States</h3>
      <div className="flex flex-wrap gap-3 items-center">
        <button className="btn-strawberry px-4 py-2 rounded-2xl text-xs font-bold text-white">
          Normal
        </button>
        <button className="btn-strawberry px-4 py-2 rounded-2xl text-xs font-bold text-white brightness-110 -translate-y-0.5 shadow-lg">
          Hover (+2px)
        </button>
        <button className="btn-strawberry px-4 py-2 rounded-2xl text-xs font-bold text-white scale-95">
          Pressed (0.96)
        </button>
        <button className="px-4 py-2 rounded-2xl text-xs font-bold bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed">
          Disabled
        </button>
      </div>
      <p className="text-[11px] text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-2xl font-mono">
        Note: On hover, lift 2px, bigger glow, shine sweeps across once. Magnetic pull toward cursor (max 12px).
      </p>
    </div>
  );
};
