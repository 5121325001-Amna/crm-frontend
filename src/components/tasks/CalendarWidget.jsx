import React, { useState } from 'react';

export const CalendarWidget = () => {
  const [selectedDay, setSelectedDay] = useState(12);

  // November 2024 day grid layout (Friday start)
  const days = [
    { day: 28, isCurrentMonth: false },
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 31, isCurrentMonth: false },
    { day: 1, isCurrentMonth: true, hasDeadline: false },
    { day: 2, isCurrentMonth: true, hasDeadline: false },
    { day: 3, isCurrentMonth: true, hasDeadline: false },
    { day: 4, isCurrentMonth: true, hasDeadline: false },
    { day: 5, isCurrentMonth: true, hasDeadline: false },
    { day: 6, isCurrentMonth: true, hasDeadline: false },
    { day: 7, isCurrentMonth: true, hasDeadline: false },
    { day: 8, isCurrentMonth: true, hasDeadline: false },
    { day: 9, isCurrentMonth: true, hasDeadline: false },
    { day: 10, isCurrentMonth: true, hasDeadline: false },
    { day: 11, isCurrentMonth: true, hasDeadline: false },
    { day: 12, isCurrentMonth: true, isToday: true, hasDeadline: true },
    { day: 13, isCurrentMonth: true, hasDeadline: true },
    { day: 14, isCurrentMonth: true, hasDeadline: true },
    { day: 15, isCurrentMonth: true, hasDeadline: false },
    { day: 16, isCurrentMonth: true, hasDeadline: true },
    { day: 17, isCurrentMonth: true, hasDeadline: false },
    { day: 18, isCurrentMonth: true, hasDeadline: true },
    { day: 19, isCurrentMonth: true, hasDeadline: false },
    { day: 20, isCurrentMonth: true, hasDeadline: true },
    { day: 21, isCurrentMonth: true, hasDeadline: false },
    { day: 22, isCurrentMonth: true, hasDeadline: false },
    { day: 23, isCurrentMonth: true, hasDeadline: false },
    { day: 24, isCurrentMonth: true, hasDeadline: false },
    { day: 25, isCurrentMonth: true, hasDeadline: false },
    { day: 26, isCurrentMonth: true, hasDeadline: false },
    { day: 27, isCurrentMonth: true, hasDeadline: false },
    { day: 28, isCurrentMonth: true, hasDeadline: false },
    { day: 29, isCurrentMonth: true, hasDeadline: false },
    { day: 30, isCurrentMonth: true, hasDeadline: false },
  ];

  return (
    <div className="glass-card p-5 rounded-3xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary-brand text-xl">calendar_month</span>
          <span className="font-bold text-sm text-slate-800 dark:text-slate-100">November 2024</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition">
            ‹
          </button>
          <button className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition">
            ›
          </button>
        </div>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 text-center font-bold text-[11px] text-slate-400 mb-2">
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
      </div>

      {/* 7x5 Day Grid */}
      <div className="grid grid-cols-7 gap-y-1.5 text-center text-xs items-center">
        {days.map((item, idx) => {
          const isSelected = item.isCurrentMonth && selectedDay === item.day;
          return (
            <div
              key={idx}
              onClick={() => item.isCurrentMonth && setSelectedDay(item.day)}
              className="relative flex flex-col items-center justify-center cursor-pointer py-1"
            >
              <span
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                  item.isToday
                    ? 'bg-strawberry-500 text-white font-bold shadow-md shadow-strawberry-500/30'
                    : isSelected
                    ? 'ring-2 ring-strawberry-400 font-bold text-strawberry-500'
                    : item.isCurrentMonth
                    ? 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                    : 'text-slate-300 dark:text-slate-600'
                }`}
              >
                {item.day}
              </span>

              {/* Deadline Dot */}
              {item.hasDeadline && !item.isToday && (
                <span className="w-1.5 h-1.5 rounded-full bg-strawberry-400 -mt-0.5" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
