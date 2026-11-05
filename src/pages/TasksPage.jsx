import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TasksHeader } from '../components/tasks/TasksHeader';
import { TasksFilterBar } from '../components/tasks/TasksFilterBar';
import { TasksGrid } from '../components/tasks/TasksGrid';
import { CalendarWidget } from '../components/tasks/CalendarWidget';
import { UrgentDeadlinesWidget } from '../components/tasks/UrgentDeadlinesWidget';
import { WorkloadBreakdownWidget } from '../components/tasks/WorkloadBreakdownWidget';
import { NewTaskModal } from '../components/tasks/NewTaskModal';
import { useApp } from '../context/AppContext';

export const TasksPage = () => {
  const { tasks } = useApp();

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState('All Courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  // Compute category counts
  const counts = useMemo(() => {
    return {
      all: tasks.length,
      today: tasks.filter((t) => !t.completed && t.due.toLowerCase().includes('today')).length,
      upcoming: tasks.filter((t) => !t.completed && !t.due.toLowerCase().includes('today')).length,
      completed: tasks.filter((t) => t.completed).length,
    };
  }, [tasks]);

  // Filter tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      // Course filter
      if (selectedCourse !== 'All Courses' && !t.course.toLowerCase().includes(selectedCourse.toLowerCase())) {
        return false;
      }
      // Search query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matches =
          t.title.toLowerCase().includes(q) ||
          t.course.toLowerCase().includes(q) ||
          (t.notes && t.notes.toLowerCase().includes(q));
        if (!matches) return false;
      }
      // Tab filter
      if (activeFilter === 'completed') return t.completed;
      if (activeFilter === 'today') return !t.completed && t.due.toLowerCase().includes('today');
      if (activeFilter === 'upcoming') return !t.completed && !t.due.toLowerCase().includes('today');

      // 'all' tab: hide completed if showCompleted toggle is false
      if (!showCompleted && t.completed) return false;

      return true;
    });
  }, [tasks, activeFilter, selectedCourse, searchQuery, showCompleted]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      {/* Header */}
      <TasksHeader />

      {/* Filter and Control Bar */}
      <TasksFilterBar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
        counts={counts}
      />

      {/* Main Two-Column Asymmetric Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Tasks Grid (8 cols) */}
        <div className="lg:col-span-8">
          <TasksGrid tasks={filteredTasks} />
        </div>

        {/* Right Rail Context Panels (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <CalendarWidget />
          <UrgentDeadlinesWidget />
          <WorkloadBreakdownWidget />
        </div>
      </div>

      {/* New Task Modal */}
      <NewTaskModal />
    </motion.div>
  );
};
