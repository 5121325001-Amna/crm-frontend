import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export const StudyPlanList = () => {
  const { tasks, toggleTask } = useApp();

  const activeTodayTasks = tasks.slice(0, 4);
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="glass-card p-6 rounded-3xl h-full flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold">Today's Study Plan</h3>
            <p className="text-xs text-slate-400">
              {completedCount} of {totalCount} tasks completed ({pct}%)
            </p>
          </div>
          <div className="w-36 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.6 }}
              className="bg-strawberry-500 h-full rounded-full"
            />
          </div>
        </div>

        {/* Task Items */}
        <div className="space-y-3">
          {activeTodayTasks.map((task) => (
            <motion.div
              key={task.id}
              whileHover={{ x: 4 }}
              onClick={(e) => toggleTask(task.id, e)}
              className={`flex items-center justify-between p-3.5 rounded-2xl glass-card transition-all cursor-pointer border ${
                task.completed
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'hover:border-strawberry-400/60'
              }`}
            >
              <div className="flex items-center space-x-3 min-w-0">
                <input
                  type="checkbox"
                  checked={task.completed}
                  readOnly
                  className="custom-checkbox pointer-events-none shrink-0"
                />
                <div className="min-w-0">
                  <h4
                    className={`task-title text-sm font-bold truncate text-slate-800 dark:text-slate-100 ${
                      task.completed ? 'line-through opacity-65' : ''
                    }`}
                  >
                    {task.title}
                  </h4>
                  <p className="text-xs text-slate-400 truncate">
                    {task.course} • {task.due}
                  </p>
                </div>
              </div>

              {task.completed ? (
                <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0">
                  Completed
                </span>
              ) : (
                <span
                  className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full shrink-0 ${
                    task.priority === 'high'
                      ? 'bg-strawberry-100 dark:bg-rose-950 text-strawberry-600 dark:text-strawberry-400'
                      : 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400'
                  }`}
                >
                  {task.priority === 'high' ? 'High Priority' : 'Medium Priority'}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
