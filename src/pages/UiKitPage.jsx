import React from 'react';
import { motion } from 'framer-motion';
import { ButtonSpecimen } from '../components/uikit/ButtonSpecimen';
import { PhysicsSpecimen } from '../components/uikit/PhysicsSpecimen';
import { ColorSpecimen } from '../components/uikit/ColorSpecimen';
import { TypographySpecimen } from '../components/uikit/TypographySpecimen';

export const UiKitPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-extrabold tracking-tight">UI Kit & Motion Architecture</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-strawberry-100 dark:bg-rose-950 text-strawberry-600 dark:text-strawberry-400">
              SPEC v2.4
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Visual state matrix, developer interaction notes, and physics specifications.
          </p>
        </div>
      </div>

      {/* Global Motion Architecture Banner */}
      <div className="glass-card p-5 rounded-3xl border-l-4 border-l-strawberry-500 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-sm">Global Motion Architecture: 300ms Soft Spring Ease-Out</h4>
          <p className="text-xs text-slate-400 mt-0.5 font-mono">
            cubic-bezier(0.16, 1, 0.3, 1) • Full accessibility fallback with prefers-reduced-motion
          </p>
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800">
          GPU Accelerated
        </span>
      </div>

      {/* Grid of Interactive Specimens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ButtonSpecimen />
        <PhysicsSpecimen />
      </div>

      <ColorSpecimen />
      <TypographySpecimen />
    </motion.div>
  );
};
