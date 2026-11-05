import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const QueuedObjectives = () => {
  const { tasks } = useApp();
  const navigate = useNavigate();

  const queued = tasks.filter((t) => !t.completed).slice(0, 3);

  return (
    <div className="mt-8 p-6 rounded-3xl glass-card space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary-brand text-2xl">
            playlist_add_check
          </span>
          <h2 className="font-bold text-base text-slate-800 dark:text-slate-100">
            Queued Focus Objectives
          </h2>
        </div>
        <button
          onClick={() => navigate('/tasks')}
          className="text-xs font-bold text-strawberry-500 hover:text-strawberry-600 flex items-center gap-1"
        >
          <span>Manage Task Queue</span>
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {queued.map((task, idx) => (
          <div
            key={task.id}
            onClick={() => navigate('/tasks')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              idx === 0
                ? 'bg-white/80 dark:bg-slate-800/80 border-strawberry-300 dark:border-strawberry-800 shadow-md'
                : 'bg-white/50 dark:bg-slate-800/50 border-slate-200/50 dark:border-slate-800/60 hover:bg-white dark:hover:bg-slate-800'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2.5 min-w-0">
                <span className={`material-symbols-outlined text-base mt-0.5 ${idx === 0 ? 'text-strawberry-500' : 'text-slate-400'}`}>
                  {idx === 0 ? 'play_circle' : 'radio_button_unchecked'}
                </span>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold truncate text-slate-800 dark:text-slate-100">
                    {task.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">
                    {task.course} • {task.due}
                  </p>
                </div>
              </div>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                  idx === 0
                    ? 'bg-strawberry-100 dark:bg-rose-950 text-strawberry-600 dark:text-strawberry-400'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}
              >
                {idx === 0 ? 'Active' : idx === 1 ? 'Next' : 'Later'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
