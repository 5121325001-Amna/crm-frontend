import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const AuthFormCard = () => {
  const [mode, setMode] = useState('login');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setUser, addToast } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setUser((prev) => ({
        ...prev,
        name: fullName || prev.name,
        email: email || prev.email,
      }));
      addToast(mode === 'login' ? 'Welcome back, scholar!' : 'Account created successfully!');
      navigate('/dashboard');
    }, 700);
  };

  return (
    <div className="lg:col-span-7 flex flex-col items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-[480px] glass-card rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-white/60 dark:border-white/10">
        {/* Top Specular Accent Line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-container via-strawberry-500 to-sky-400" />

        {/* Mode Toggle Pills */}
        <div className="w-full bg-slate-100 dark:bg-slate-800/80 p-1 rounded-full flex items-center justify-between mb-6 border border-slate-200/50 dark:border-slate-700/60">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 py-2 px-4 rounded-full text-xs font-bold transition-all ${
              mode === 'login'
                ? 'bg-strawberry-500 text-white shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 px-4 rounded-full text-xs font-bold transition-all ${
              mode === 'signup'
                ? 'bg-strawberry-500 text-white shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Greeting Header */}
        <div className="mb-6 space-y-1">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
            {mode === 'login' ? 'Welcome back, scholar' : 'Join the Sanctuary'}
          </h2>
          <p className="text-xs text-slate-400">
            {mode === 'login'
              ? 'Enter your student credentials to resume your study streak.'
              : 'Create your student workspace to boost focus and track streaks.'}
          </p>
        </div>

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-1"
            >
              <label className="text-xs font-bold text-slate-600 dark:text-slate-300">
                Full Name
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-base pointer-events-none">
                  person
                </span>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ayesha Miller"
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-strawberry-400"
                />
              </div>
            </motion.div>
          )}

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-600 dark:text-slate-300">
              University or Personal Email
            </label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-base pointer-events-none">
                mail
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ayesha@campus.edu"
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-strawberry-400"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-300">Password</label>
              <button
                type="button"
                className="text-[11px] font-semibold text-strawberry-500 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-base pointer-events-none">
                lock
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-strawberry-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <span className="material-symbols-outlined text-base">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-500 dark:text-slate-400">
              <input type="checkbox" defaultChecked className="accent-pink-500 rounded" />
              <span>Remember me for 30 days</span>
            </label>
            <span className="text-[10px] font-bold text-sky-600 dark:text-sky-300 px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950">
              Secure Session
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="btn-strawberry w-full py-3 rounded-full text-xs font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-strawberry-500/25 mt-2"
          >
            <span>{isLoading ? 'Authenticating...' : mode === 'login' ? 'Continue to Study Space' : 'Create Student Account'}</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6 gap-3">
          <div className="flex-1 h-px bg-slate-200/80 dark:border-slate-800" />
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
            or continue with
          </span>
          <div className="flex-1 h-px bg-slate-200/80 dark:border-slate-800" />
        </div>

        {/* Social SSO */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleSubmit}
            className="flex-1 py-2.5 px-4 rounded-full bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.15z" fill="#4285F4" />
              <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z" fill="#34A853" />
              <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 10.02 0 12s.45 3.84 1.25 5.42l4.03-3.15z" fill="#FBBC05" />
              <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" fill="#EA4335" />
            </svg>
            <span>Google</span>
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="flex-1 py-2.5 px-4 rounded-full bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition"
          >
            <span className="material-symbols-outlined text-sky-500 text-base">account_balance</span>
            <span>University SSO</span>
          </button>
        </div>

        {/* Bottom Toggle Prompt */}
        <div className="mt-6 text-center text-xs text-slate-400">
          {mode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signup')}
                className="text-strawberry-500 font-bold hover:underline"
              >
                Create free student account
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('login')}
                className="text-strawberry-500 font-bold hover:underline"
              >
                Log in to workspace
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
