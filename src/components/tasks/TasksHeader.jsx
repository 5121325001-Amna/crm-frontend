import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export const TasksHeader = () => {
  const { tasks, setIsNewTaskOpen } = useApp();
  const activeCount = tasks.filter((t) => !t.completed).length;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-extrabold tracking-tight">My Tasks</h1>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-strawberry-100 dark:bg-strawberry-950 text-strawberry-600 dark:text-strawberry-400">
            {activeCount} Active
          </span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Organize coursework, syllabi deliverables, and exam milestones.
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsNewTaskOpen(true)}
        className="btn-strawberry px-4 py-2.5 rounded-2xl text-xs font-bold text-white flex items-center space-x-2 shadow-lg shadow-strawberry-500/25"
      >
        <span>+ New Task</span>
        <kbd className="px-1.5 py-0.5 text-[10px] bg-white/20 rounded font-mono">⌘N</kbd>
      </motion.button>
    </div>
  );
};
