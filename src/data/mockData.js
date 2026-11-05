/**
 * FrostBerry Study Suite — Central Mock Data File
 * Saved and hydrated automatically with localStorage.
 */

export const INITIAL_TASKS = [
  {
    id: "task-1",
    title: "Linked List & Tree Inversion Assignment",
    course: "CS 201: Data Structures",
    priority: "high",
    due: "Today, 11:59 PM",
    dueDate: "2026-10-31",
    completed: false,
    subtasksTotal: 4,
    subtasksCompleted: 2,
    notes: "Implement doubly circular linked lists with bidirectional iterators and leak detection."
  },
  {
    id: "task-2",
    title: "Read Chapter 5: Architecture Pipeline Hazard Models",
    course: "SE 310: Software Eng",
    priority: "medium",
    due: "Tomorrow, 11:59 PM",
    dueDate: "2026-11-01",
    completed: false,
    subtasksTotal: 2,
    subtasksCompleted: 0,
    notes: "Analyze microservices patterns, event-driven decoupled systems, and lecture quiz prep."
  },
  {
    id: "task-3",
    title: "Lab Report 04: Oscilloscope Waveforms",
    course: "CS 101: Prog Fundamentals",
    priority: "high",
    due: "Thursday, 14 Nov",
    dueDate: "2026-11-14",
    completed: false,
    subtasksTotal: 3,
    subtasksCompleted: 1,
    notes: "Plot measured square vs sinusoidal frequency responses and upload checklist."
  },
  {
    id: "task-4",
    title: "Prepare Presentation Slides: AI Ethics",
    course: "EN 205: Prof Writing",
    priority: "medium",
    due: "Saturday, 16 Nov",
    dueDate: "2026-11-16",
    completed: false,
    subtasksTotal: 5,
    subtasksCompleted: 3,
    notes: "Finalize team slide deck on Ethical Considerations in Generative AI for workshop."
  },
  {
    id: "task-5",
    title: "Revise Number Systems & Logic Gates",
    course: "CS 204: Computer Arch",
    priority: "low",
    due: "Monday, 18 Nov",
    dueDate: "2026-11-18",
    completed: false,
    subtasksTotal: 3,
    subtasksCompleted: 0,
    notes: "Solve past midterm problems on Karnaugh maps and Boolean simplification."
  },
  {
    id: "task-6",
    title: "Weekly Quiz Practice Set",
    course: "MATH 150: Mathematics",
    priority: "low",
    due: "Wednesday, 20 Nov",
    dueDate: "2026-11-20",
    completed: false,
    subtasksTotal: 4,
    subtasksCompleted: 2,
    notes: "Complete WebAssign problem modules 7.1 to 7.4 focusing on integration by parts."
  },
  {
    id: "task-7",
    title: "Review Logic Gates & Karnaugh Maps",
    course: "CS 204: Computer Arch",
    priority: "medium",
    due: "Completed Today",
    dueDate: "2026-10-31",
    completed: true,
    subtasksTotal: 2,
    subtasksCompleted: 2,
    notes: "Review session completed successfully at 10:15 AM."
  }
];

export const INITIAL_STATS = {
  focusHours: 18.5,
  goalHours: 20.0,
  tasksCompleted: 24,
  streakDays: 7,
  productivityScore: 86,
  peakDay: "Wed",
  weeklyDailyHours: [
    { day: "Mon", hours: 2.2, height: 80, isPeak: false },
    { day: "Tue", hours: 3.1, height: 120, isPeak: false },
    { day: "Wed", hours: 3.8, height: 155, isPeak: true },
    { day: "Thu", hours: 2.6, height: 98, isPeak: false },
    { day: "Fri", hours: 3.4, height: 135, isPeak: false },
    { day: "Sat", hours: 1.9, height: 70, isPeak: false },
    { day: "Sun", hours: 1.5, height: 55, isPeak: false }
  ],
  subjectHours: [
    { name: "CS 201: Data Structures", hours: 7.4, pct: 40, color: "#FF6B8B" },
    { name: "SE 310: Software Eng", hours: 4.6, pct: 25, color: "#0EA5E9" },
    { name: "CS 204: Architecture", hours: 3.7, pct: 20, color: "#A8D8F0" },
    { name: "Math & Writing", hours: 2.8, pct: 15, color: "#94A3B8" }
  ],
  todayPomodoroCycles: 3,
  targetPomodoroCycles: 4,
  achievements: [
    { id: "pioneer", icon: "❄️", title: "Glacier Pioneer", desc: "Completed initial study calibration", unlocked: true },
    { id: "streak7", icon: "🔥", title: "7-Day Ignition", desc: "Maintained study streak for 7 days", unlocked: true },
    { id: "sprinter", icon: "⭐", title: "Focus Sprinter", desc: "Finished 3 deep flow Pomodoro blocks in 1 day", unlocked: true },
    { id: "grandmaster", icon: "👑", title: "20 Hours Club", desc: "Reach 20 focus hours this week (1.5h remaining)", unlocked: false }
  ]
};

export const INITIAL_USER = {
  name: "Ayesha M.",
  email: "ayesha@campus.edu",
  university: "UC Berkeley",
  program: "Computer Science & Cognitive Science",
  semester: "Fall Semester 2024",
  week: "Week 11 of 16",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  status: "Productive mode"
};

export const COURSES = [
  "All Courses",
  "CS 201: Data Structures",
  "SE 310: Software Eng",
  "CS 101: Prog Fundamentals",
  "EN 205: Prof Writing",
  "CS 204: Computer Arch",
  "MATH 150: Mathematics"
];

export const WORKLOAD_BREAKDOWN = [
  { course: "Data Structures", pct: 35, color: "bg-secondary-container" },
  { course: "Software Engineering", pct: 25, color: "bg-strawberry-500" },
  { course: "Prog Fundamentals", pct: 20, color: "bg-sky-400" },
  { course: "Computer Architecture", pct: 20, color: "bg-indigo-400" }
];

export const TESTIMONIALS = [
  {
    name: "Sarah K.",
    role: "3rd Year Biology • UC Berkeley",
    quote: "FrostBerry saved my finals week. The calm aesthetic stopped my study anxiety instantly. It makes hours of textbook reading fly by.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Liam T.",
    role: "Computer Science • Univ of Toronto",
    quote: "The strawberry focus timer makes 3-hour study blocks feel effortless. Best study tool ever for engineering sprints.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Maya R.",
    role: "Architecture • UCL",
    quote: "Finally an app that feels like a calm sanctuary instead of an overwhelming corporate planner. Beautiful, tactile, and peaceful.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
  }
];

export const FEATURES = [
  {
    icon: "calendar_month",
    title: "Smart Task Planner",
    desc: "Auto-prioritize course workloads, sync due dates, and break large projects into micro-milestones effortlessly.",
    action: "Auto-sync syllabi"
  },
  {
    icon: "timer",
    title: "Pomodoro Focus Timer",
    desc: "Customizable 25/5 interval intervals with ambient lo-fi soundscapes and pink glacier visualizers for zero mental clutter.",
    action: "Explore soundscapes"
  },
  {
    icon: "local_fire_department",
    title: "Streak Rewards & Flow",
    desc: "Gamify everyday study consistency with frost crystal levels, collective campus guilds, and achievement badges.",
    action: "View crystal tiers"
  },
  {
    icon: "insights",
    title: "Progress Insights",
    desc: "Visualize study hours by subject, productivity curves, and semester exam readiness with calm visual telemetry.",
    action: "Personal metrics"
  }
];
