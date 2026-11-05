import React from 'react';

export const ColorSpecimen = () => {
  const swatches = [
    { name: 'Sky Blue', hex: '#A8D8F0', desc: 'Core brand tone representing focus and clarity' },
    { name: 'Light Blue Tint', hex: '#CDEBFA', desc: 'Ambient fill and gentle highlight wash' },
    { name: 'Strawberry Accent', hex: '#FF6B8B', desc: 'Primary action trigger and active study states' },
    { name: 'Deep Strawberry', hex: '#E8436E', desc: 'Hover states and critical focus triggers' },
    { name: 'Light Pink', hex: '#FFD6E0', desc: 'Soft contrast containers and secondary tags' },
    { name: 'Deep Navy', hex: '#2B3A55', desc: 'High-contrast base for primary typography' },
    { name: 'Mint Green', hex: '#7ED9B5', desc: 'Completed tasks and positive streaks' },
    { name: 'Peach Alert', hex: '#FFB59E', desc: 'Due soon alerts and upcoming exam milestones' }
  ];

  return (
    <div className="glass-card p-6 rounded-3xl space-y-4">
      <h3 className="text-base font-bold">Glacier Strawberry Color System</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {swatches.map((s) => (
          <div key={s.name} className="p-3 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/60 flex flex-col justify-between">
            <div className="w-full h-10 rounded-xl mb-2 shadow-inner" style={{ backgroundColor: s.hex }} />
            <div>
              <p className="font-bold text-xs">{s.name}</p>
              <p className="font-mono text-[10px] text-slate-400">{s.hex}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
