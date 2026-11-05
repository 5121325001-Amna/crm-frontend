import React from 'react';
import { useApp } from '../../context/AppContext';

export const SoundscapeSelector = () => {
  const { currentSoundscape, setSoundscapeMode, audioPlaying, toggleAudio } = useApp();

  const soundscapes = [
    { id: 'rain', label: 'Glacier Stream', icon: 'water_drop' },
    { id: 'sunrise', label: 'Pink Sunrise', icon: 'wb_sunny' },
    { id: 'whitenoise', label: 'White Noise Ice', icon: 'air' },
    { id: 'stream', label: 'Library Murmur', icon: 'local_library' },
  ];

  return (
    <div className="glass-card p-6 rounded-3xl space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-brand text-xl">headphones</span>
          <h3 className="font-bold text-base">Glacier Soundscapes</h3>
        </div>
        <button
          onClick={toggleAudio}
          className="text-xs font-semibold text-strawberry-500 hover:underline"
        >
          {audioPlaying ? 'Mute Audio' : 'Play Sound'}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {soundscapes.map((s) => {
          const isActive = currentSoundscape === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setSoundscapeMode(s.id)}
              className={`flex items-center gap-2 p-2.5 rounded-2xl text-left transition-all ${
                isActive
                  ? 'bg-strawberry-500 text-white font-bold shadow-md shadow-strawberry-500/25'
                  : 'bg-white/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800'
              }`}
            >
              <span className="material-symbols-outlined text-lg">{s.icon}</span>
              <span className="truncate text-xs">{s.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
