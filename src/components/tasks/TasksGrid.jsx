import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { TaskCard } from './TaskCard';
import { useApp } from '../../context/AppContext';

export const TasksGrid = ({ tasks }) => {
  const { setIsNewTaskOpen } = useApp();

  if (tasks.length === 0) {
    return (
      <div className="glass-card p-12 text-center rounded-3xl border border-white/40 dark:border-white/10">
        <span className="text-4xl">🎉</span>
        <h3 className="text-xl font-bold mt-3 text-slate-800 dark:text-slate-100">
          No tasks match this filter!
        </h3>
        <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
          You're all caught up, or your search query returned no results.
        </p>
        <button
          onClick={() => setIsNewTaskOpen(true)}
          className="btn-strawberry mt-4 px-5 py-2 text-xs font-bold text-white rounded-full shadow-md"
        >
          + Log New Task
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <AnimatePresence>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </AnimatePresence>
    </div>
  );
};
