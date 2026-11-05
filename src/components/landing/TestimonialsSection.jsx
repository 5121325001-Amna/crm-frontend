import React from 'react';
import { TESTIMONIALS } from '../../data/mockData';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
      <div className="flex flex-col items-center text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-500">
          Student Stories
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Loved across university campuses
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="rounded-3xl glass-card p-6 sm:p-7 shadow-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex text-strawberry-500 text-sm gap-0.5">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "{t.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/50 dark:border-slate-800">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-strawberry-400/30"
              />
              <div>
                <h4 className="text-xs font-bold">{t.name}</h4>
                <p className="text-[11px] text-slate-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
