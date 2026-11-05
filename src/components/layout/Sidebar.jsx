import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

export const Sidebar = () => {
  const { user, tasks, audioPlaying, toggleAudio, currentSoundscape } = useApp();
  const navigate = useNavigate();

  const activeTasksCount = tasks.filter((t) => !t.completed).length;

  const navItems = [
    {
      to: '/dashboard',
      label: 'Dashboard',
      icon: 'grid_view',
      badge: null,
    },
    {
      to: '/tasks',
      label: 'Tasks & Planner',
      icon: 'task_alt',
      badge: (
        <span className="text-xs px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-300 font-bold">
          {activeTasksCount}
        </span>
      ),
    },
    {
      to: '/timer',
      label: 'Focus Timer',
      icon: 'hourglass_bottom',
      badge: (
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-strawberry-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-strawberry-500" />
        </span>
      ),
    },
    {
      to: '/',
      label: 'Landing Page',
      icon: 'home',
      badge: <span className="text-[10px] uppercase font-bold text-slate-400">View</span>,
    },
    {
      to: '/uikit',
      label: 'UI Kit & Physics',
      icon: 'category',
      badge: (
        <span className="text-xs px-1.5 py-0.5 rounded bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-300 font-mono">
          v2.4
        </span>
      ),
    },
  ];

  return (
    <aside className="w-64 glass-card border-r border-white/20 dark:border-white/10 flex flex-col justify-between p-5 fixed h-screen z-40 bg-white/78 dark:bg-[#0b132b]/85">
      <div>
        {/* Brand Header */}
        <div
          onClick={() => navigate('/')}
          className="flex items-center space-x-3 pb-6 border-b border-slate-200/50 dark:border-slate-800/60 mb-6 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-strawberry-500 to-sky-400 p-[2px] shadow-lg shadow-strawberry-500/25 flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
              <span className="text-xl">❄️</span>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-strawberry-500 via-rose-500 to-sky-400 bg-clip-text text-transparent">
                FrostBerry
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-strawberry-100 dark:bg-strawberry-950 text-strawberry-600 dark:text-strawberry-300 font-bold">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium tracking-wide">Study Sanctuary</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 group ${
                  isActive
                    ? 'bg-strawberry-500 text-white shadow-md shadow-strawberry-500/30'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`
              }
            >
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:scale-110">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
              {item.badge}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Section: Ambient Audio Player + User Profile */}
      <div className="space-y-4">
        {/* Interactive Soundscape Mini-Card */}
        <div className="p-3 rounded-2xl bg-gradient-to-br from-white/60 to-sky-50/70 dark:from-slate-800/60 dark:to-slate-900/60 border border-white/60 dark:border-white/10 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              Glacier Audio
            </span>
            <span className="text-[10px] font-semibold text-emerald-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {currentSoundscape.charAt(0).toUpperCase() + currentSoundscape.slice(1)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={toggleAudio}
              className="px-2.5 py-1 text-xs font-semibold rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200/50 dark:border-slate-700 hover:border-strawberry-400 flex items-center space-x-1.5 transition cursor-pointer"
            >
              <span>{audioPlaying ? '🎧' : '🔇'}</span>
              <span>{audioPlaying ? 'Playing' : 'Muted'}</span>
            </button>

            {/* Live Audio Equalizer Bars */}
            <div className={`flex space-x-0.5 items-end h-4 transition-opacity ${audioPlaying ? 'opacity-100' : 'opacity-25'}`}>
              <motion.span
                animate={audioPlaying ? { height: ['8px', '16px', '6px', '14px', '8px'] } : { height: '4px' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 bg-strawberry-400 rounded-full"
              />
              <motion.span
                animate={audioPlaying ? { height: ['14px', '6px', '18px', '10px', '14px'] } : { height: '4px' }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
                className="w-1 bg-sky-400 rounded-full"
              />
              <motion.span
                animate={audioPlaying ? { height: ['6px', '14px', '8px', '16px', '6px'] } : { height: '4px' }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="w-1 bg-strawberry-400 rounded-full"
              />
              <motion.span
                animate={audioPlaying ? { height: ['12px', '4px', '14px', '8px', '12px'] } : { height: '4px' }}
                transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut', delay: 0.45 }}
                className="w-1 bg-sky-400 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* User Profile Card */}
        <div
          onClick={() => navigate('/login')}
          className="flex items-center space-x-3 p-2.5 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/70 transition cursor-pointer"
        >
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-strawberry-400/40"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
          </div>
          <div className="overflow-hidden">
            <h4 className="text-sm font-bold truncate text-slate-800 dark:text-slate-100">{user.name}</h4>
            <p className="text-[11px] text-strawberry-500 font-semibold truncate flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-strawberry-500" />
              {user.status}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
