import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export const TaskCard = ({ task }) => {
  const { toggleTask, deleteTask } = useApp();
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    cardRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  const priorityColors = {
    high: 'bg-strawberry-100 dark:bg-rose-950 text-strawberry-600 dark:text-strawberry-400',
    medium: 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400',
    low: 'bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400',
  };

  const subtasksPct =
    task.subtasksTotal > 0
      ? Math.round((task.subtasksCompleted / task.subtasksTotal) * 100)
      : 0;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`tilt-card glass-card p-5 rounded-3xl space-y-4 hover:border-strawberry-300 transition-all cursor-pointer border ${
        task.completed
          ? 'bg-emerald-500/10 border-emerald-500/30'
          : 'border-white/60 dark:border-white/10'
      }`}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-300">
          {task.course}
        </span>
        <div className="flex items-center gap-1.5">
          <span
            className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase ${
              priorityColors[task.priority] || priorityColors.medium
            }`}
          >
            {task.priority}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteTask(task.id);
            }}
            className="text-slate-400 hover:text-rose-500 transition p-1 text-xs"
            title="Delete Task"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Main Content & Checkbox */}
      <div
        className="flex items-start gap-3"
        onClick={(e) => toggleTask(task.id, e)}
      >
        <input
          type="checkbox"
          checked={task.completed}
          readOnly
          className="custom-checkbox mt-0.5 pointer-events-none shrink-0"
        />
        <div className="min-w-0 flex-1">
          <h3
            className={`font-bold text-base text-slate-800 dark:text-slate-100 ${
              task.completed ? 'line-through opacity-60' : ''
            }`}
          >
            {task.title}
          </h3>
          {task.notes && (
            <p className="text-xs text-slate-400 mt-1 line-clamp-2">{task.notes}</p>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
        <motion.div
          animate={{ width: `${task.completed ? 100 : subtasksPct}%` }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-strawberry-500 to-sky-400 h-full rounded-full"
        />
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
        <span className="font-semibold text-rose-500 flex items-center gap-1">
          ⏱ {task.due}
        </span>
        <span>
          {task.completed
            ? 'Completed'
            : `${task.subtasksCompleted}/${task.subtasksTotal} subtasks`}
        </span>
      </div>
    </motion.div>
  );
};
