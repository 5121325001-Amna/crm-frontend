import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LandingFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full mt-16 bg-white/45 dark:bg-slate-900/45 backdrop-blur-xl border-t border-white/20 dark:border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">❄️</span>
              <span className="font-extrabold text-lg">FrostBerry</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Atmospheric glacier-strawberry focus sanctuaries designed for university excellence and calm mastery.
            </p>
          </div>

          <div>
            <p className="font-bold text-xs uppercase tracking-wider mb-3">Product</p>
            <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <li>
                <button onClick={() => navigate('/timer')} className="hover:text-strawberry-500 transition">
                  Focus Timers
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/tasks')} className="hover:text-strawberry-500 transition">
                  Assignment Kanban
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/dashboard')} className="hover:text-strawberry-500 transition">
                  Student Dashboard
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-xs uppercase tracking-wider mb-3">Resources</p>
            <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <li>
                <button onClick={() => navigate('/uikit')} className="hover:text-strawberry-500 transition">
                  UI Kit & Physics
                </button>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-strawberry-500 transition">
                  Syllabus Sync
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-strawberry-500 transition">
                  Lo-Fi Soundscapes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-xs uppercase tracking-wider mb-3">Sanctuary</p>
            <p className="text-xs text-slate-400 mb-2">Built for students who prioritize peace & deep work.</p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200/50 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 FrostBerry Technologies. Designed for student excellence.</p>
          <div className="flex items-center space-x-6">
            <span>Privacy Notice</span>
            <span>Terms of Sanctuary</span>
            <span>Campus Partnerships</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
