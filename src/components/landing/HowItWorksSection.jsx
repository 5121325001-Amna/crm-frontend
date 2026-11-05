import React from 'react';

export const HowItWorksSection = () => {
  const steps = [
    {
      num: '01',
      title: 'Sync Your Syllabi',
      desc: 'Input course modules, assignment deadlines, and exam schedules in seconds via camera snap or PDF drop.',
      badgeIcon: 'upload_file',
      badgeText: 'Syllabus_CS201_Fall.pdf',
    },
    {
      num: '02',
      title: 'Enter Glacier Flow',
      desc: 'Activate strawberry focus rings with zero distractions, soothing ambient noise, and auto-blocked tab traps.',
      badgeIcon: 'headphones',
      badgeText: 'Arctic Icefall + Lo-Fi Piano',
    },
    {
      num: '03',
      title: 'Watch Your Grades Rise',
      desc: 'Track momentum with weekly visual recaps, crystal streak unlocks, and effortless exam readiness scores.',
      badgeIcon: 'workspace_premium',
      badgeText: "Dean's List Pace: 98%",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-strawberry-500">
          3-Step Flow
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Effortless momentum from day one
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Start in under 90 seconds without complex setup guides or friction.
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((st) => (
          <div
            key={st.num}
            className="rounded-3xl glass-card p-6 sm:p-7 shadow-xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 text-strawberry-500 font-extrabold text-lg flex items-center justify-center shadow-md">
                {st.num}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{st.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-800 flex items-center gap-2">
              <span className="material-symbols-outlined text-strawberry-500 text-base">
                {st.badgeIcon}
              </span>
              <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 truncate">
                {st.badgeText}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
