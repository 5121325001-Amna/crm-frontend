import React from 'react';
import { COURSES } from '../../data/mockData';

export const TasksFilterBar = ({
  activeFilter,
  setActiveFilter,
  selectedCourse,
  setSelectedCourse,
  searchQuery,
  setSearchQuery,
  showCompleted,
  setShowCompleted,
  counts
}) => {
  return (
    <div className="glass-card p-4 rounded-3xl flex flex-wrap items-center justify-between gap-4">
      {/* Filter Tabs */}
      <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto pb-1 sm:pb-0">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
            activeFilter === 'all'
              ? 'bg-strawberry-500 text-white shadow-sm'
              : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400'
          }`}
        >
          All Tasks ({counts.all})
        </button>
        <button
          onClick={() => setActiveFilter('today')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            activeFilter === 'today'
              ? 'bg-strawberry-500 text-white shadow-sm'
              : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400'
          }`}
        >
          Today ({counts.today})
        </button>
        <button
          onClick={() => setActiveFilter('upcoming')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            activeFilter === 'upcoming'
              ? 'bg-strawberry-500 text-white shadow-sm'
              : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400'
          }`}
        >
          Upcoming ({counts.upcoming})
        </button>
        <button
          onClick={() => setActiveFilter('completed')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            activeFilter === 'completed'
              ? 'bg-strawberry-500 text-white shadow-sm'
              : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400'
          }`}
        >
          Completed ({counts.completed})
        </button>
      </div>

      {/* Search & Course Dropdown */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
        <div className="relative flex-1 sm:w-48">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter tasks..."
            className="w-full px-3 py-1.5 text-xs rounded-xl bg-white/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-1 focus:ring-strawberry-400"
          />
        </div>

        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="px-3 py-1.5 text-xs font-medium rounded-xl bg-white/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 cursor-pointer"
        >
          {COURSES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        {/* Show Completed Toggle */}
        <label className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
            className="accent-pink-500 w-3.5 h-3.5"
          />
          <span>Completed</span>
        </label>
      </div>
    </div>
  );
};
