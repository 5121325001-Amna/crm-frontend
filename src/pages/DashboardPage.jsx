import React from 'react';
import { motion } from 'framer-motion';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { KpiGrid } from '../components/dashboard/KpiGrid';
import { WeeklyChart } from '../components/dashboard/WeeklyChart';
import { SubjectDonut } from '../components/dashboard/SubjectDonut';
import { StudyPlanList } from '../components/dashboard/StudyPlanList';
import { AchievementsGrid } from '../components/dashboard/AchievementsGrid';

export const DashboardPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="space-y-8"
    >
      {/* Hero Greeting & Academic Context */}
      <DashboardHeader />

      {/* 4-Card KPI Metrics Grid */}
      <KpiGrid />

      {/* Mid Section: Weekly Bar Chart & Subject Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2">
          <WeeklyChart />
        </div>
        <div>
          <SubjectDonut />
        </div>
      </div>

      {/* Bottom Section: Today's Study Plan & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2">
          <StudyPlanList />
        </div>
        <div>
          <AchievementsGrid />
        </div>
      </div>
    </motion.div>
  );
};
