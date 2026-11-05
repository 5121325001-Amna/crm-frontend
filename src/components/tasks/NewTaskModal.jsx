import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { COURSES } from '../../data/mockData';

export const NewTaskModal = () => {
  const { isNewTaskOpen, setIsNewTaskOpen, addTask } = useApp();

  const [title, setTitle] = useState('');
  const [course, setCourse] = useState(COURSES[1]);
  const [priority, setPriority] = useState('high');
  const [due, setDue] = useState('Tomorrow, 5:00 PM');
  const [subtasksTotal, setSubtasksTotal] = useState(3);
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({
      title,
      course,
      priority,
      due,
      subtasksTotal,
      notes
    });

    setTitle('');
    setNotes('');
    setIsNewTaskOpen(false);
  };

  return (
    <AnimatePresence>
      {isNewTaskOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsNewTaskOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg glass-card rounded-3xl p-6 shadow-2xl border border-white/40 dark:border-white/10 bg-white/90 dark:bg-slate-900/95 z-10 space-y-5"
          >
            <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <span className="text-xl">📝</span>
                <h3 className="font-extrabold text-lg text-slate-800 dark:text-slate-100">
                  Log New Coursework Task
                </h3>
              </div>
              <button
                onClick={() => setIsNewTaskOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                  Task Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Implement Dijkstra's Algorithm Lab"
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-white/70 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-strawberry-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Course Subject
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-white/70 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-strawberry-400 cursor-pointer"
                  >
                    {COURSES.filter((c) => c !== 'All Courses').map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Priority
                  </label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-white/70 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-strawberry-400 cursor-pointer"
                  >
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Low Priority</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Due Date / Time
                  </label>
                  <input
                    type="text"
                    value={due}
                    onChange={(e) => setDue(e.target.value)}
                    placeholder="e.g. Friday, 11:59 PM"
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-white/70 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-strawberry-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Estimated Subtasks
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={subtasksTotal}
                    onChange={(e) => setSubtasksTotal(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-white/70 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-strawberry-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                  Syllabus Notes & Details
                </label>
                <textarea
                  rows="2"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Key concepts, textbook page ranges, or submission guidelines..."
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-white/70 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-strawberry-400 resize-none"
                />
              </div>

              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsNewTaskOpen(false)}
                  className="px-4 py-2 rounded-2xl text-xs font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-strawberry px-5 py-2 rounded-2xl text-xs font-bold text-white shadow-md shadow-strawberry-500/25"
                >
                  Save Task to Syllabus
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
