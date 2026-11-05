import React from 'react';
import { motion } from 'framer-motion';

export const AmbientBlobs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Top Left Sky Blue Orb */}
      <motion.div
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -25, 15, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="ambient-blob w-[420px] h-[420px] bg-primary-container/40 dark:bg-sky-900/30 -top-24 -left-24 rounded-full"
      />

      {/* Top Right / Mid Strawberry Accent Bloom */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 35, -20, 0],
          scale: [1, 1.12, 1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="ambient-blob w-[480px] h-[480px] bg-strawberry-300/35 dark:bg-rose-950/40 top-1/4 -right-28 rounded-full"
      />

      {/* Bottom Center Lavender Ice Orb */}
      <motion.div
        animate={{
          x: [0, 25, -25, 0],
          y: [0, -30, 20, 0],
          scale: [1, 0.95, 1.08, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="ambient-blob w-[500px] h-[500px] bg-glacier-200/35 dark:bg-indigo-950/30 bottom-10 left-1/3 rounded-full"
      />
    </div>
  );
};
