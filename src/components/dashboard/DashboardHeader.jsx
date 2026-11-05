import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const DashboardHeader = () => {
  const { user } = useApp();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div className="flex items-center space-x-2 mb-1">
          <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
            {user.semester || 'Fall Semester 2024'}
          </span>
          <span className="text-xs text-slate-400">• {user.week || 'Week 11 of 16'}</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight">
          Good morning, {user.name ? user.name.split(' ')[0] : 'Scholar'} ❄️
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          You are on a <span className="text-strawberry-500 font-bold">7-day study streak</span>. You have 3 priority assignments and 2 focus sessions planned today.
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/tasks')}
          className="btn-glass px-4 py-2.5 rounded-2xl text-xs font-bold shadow-sm"
        >
          📋 View Syllabus Tasks
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/timer')}
          className="btn-strawberry px-4 py-2.5 rounded-2xl text-xs font-bold text-white flex items-center space-x-1.5 shadow-md shadow-strawberry-500/25"
        >
          <span>Start 25m Pomodoro ⏱</span>
        </motion.button>
      </div>
    </div>
  );
};
