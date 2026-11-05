import React from 'react';
import { motion } from 'framer-motion';
import { TimerHeader } from '../components/timer/TimerHeader';
import { FocusDial } from '../components/timer/FocusDial';
import { TodaySessionsCard } from '../components/timer/TodaySessionsCard';
import { StreakCard } from '../components/timer/StreakCard';
import { SoundscapeSelector } from '../components/timer/SoundscapeSelector';
import { QueuedObjectives } from '../components/timer/QueuedObjectives';

export const TimerPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      {/* Header */}
      <TimerHeader />

      {/* Main Dynamic Canvas (2 Columns on Large Screens) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* Central Focus Timer Stage (8 Cols) */}
        <div className="xl:col-span-8">
          <FocusDial />
        </div>

        {/* Right Metrics & Soundscapes (4 Cols) */}
        <div className="xl:col-span-4 space-y-6">
          <TodaySessionsCard />
          <StreakCard />
          <SoundscapeSelector />
        </div>
      </div>

      {/* Queued Focus Objectives Drawer */}
      <QueuedObjectives />
    </motion.div>
  );
};
