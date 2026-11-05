import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { INITIAL_TASKS, INITIAL_STATS, INITIAL_USER } from '../data/mockData';
import { glacierAudio } from '../utils/audioSynth';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('frostberry-theme') || 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('frostberry-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    addToast(theme === 'light' ? 'Switched to Midnight Glacier 🌙' : 'Switched to Glacier Strawberry ☀️');
  };

  // User state
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('frostberry-user');
    return saved ? JSON.parse(saved) : INITIAL_USER;
  });

  useEffect(() => {
    localStorage.setItem('frostberry-user', JSON.stringify(user));
  }, [user]);

  // Tasks state
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('frostberry-tasks');
    return saved ? JSON.parse(saved) : INITIAL_TASKS;
  });

  useEffect(() => {
    localStorage.setItem('frostberry-tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Stats state
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('frostberry-stats');
    return saved ? JSON.parse(saved) : INITIAL_STATS;
  });

  useEffect(() => {
    localStorage.setItem('frostberry-stats', JSON.stringify(stats));
  }, [stats]);

  // Modals & Navigation Helpers
  const [isOmniOpen, setIsOmniOpen] = useState(false);
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 2800);
  };

  // Task Operations
  const addTask = (newTaskData) => {
    const newTask = {
      id: `task-${Date.now()}`,
      title: newTaskData.title.trim(),
      course: newTaskData.course || 'CS 201: Data Structures',
      priority: newTaskData.priority || 'medium',
      due: newTaskData.due || 'Upcoming',
      dueDate: newTaskData.dueDate || new Date().toISOString().slice(0, 10),
      completed: false,
      subtasksTotal: parseInt(newTaskData.subtasksTotal, 10) || 3,
      subtasksCompleted: 0,
      notes: newTaskData.notes || ''
    };

    setTasks(prev => [newTask, ...prev]);
    addToast('🎉 New assignment logged to syllabus schedule!');
  };

  const toggleTask = (id, event) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        const nextCompleted = !t.completed;
        if (nextCompleted) {
          glacierAudio.playCrystalChime();
          fireConfetti(event);
          addToast('✨ Task completed! Chime & sparkles fired!');
        }
        return { ...t, completed: nextCompleted };
      }
      return t;
    }));

    // Update completed count in stats
    setStats(prev => {
      const task = tasks.find(t => t.id === id);
      const isNowCompleted = task ? !task.completed : true;
      return {
        ...prev,
        tasksCompleted: Math.max(0, prev.tasksCompleted + (isNowCompleted ? 1 : -1))
      };
    });
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
    addToast('Task removed from syllabus schedule');
  };

  const fireConfetti = (event) => {
    try {
      const originX = event?.clientX ? event.clientX / window.innerWidth : 0.5;
      const originY = event?.clientY ? event.clientY / window.innerHeight : 0.5;
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { x: originX, y: originY },
        colors: ['#FF6B8B', '#A8D8F0', '#38BDF8', '#FFD6E0', '#10B981', '#FFFFFF']
      });
    } catch (e) {
      console.warn('Confetti error:', e);
    }
  };

  // Soundscape audio state
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [currentSoundscape, setCurrentSoundscape] = useState('rain');

  const toggleAudio = () => {
    if (audioPlaying) {
      glacierAudio.stop();
      setAudioPlaying(false);
      addToast('Audio muted 🔇');
    } else {
      glacierAudio.play(currentSoundscape);
      setAudioPlaying(true);
      addToast(`Glacier ${currentSoundscape} soundscape playing 🌧️`);
    }
  };

  const setSoundscapeMode = (mode) => {
    setCurrentSoundscape(mode);
    if (audioPlaying) {
      glacierAudio.play(mode);
    }
    addToast(`Soundscape set to: ${mode}`);
  };

  // Pomodoro Focus Timer State
  const [timerMode, setTimerMode] = useState(25);
  const [timerRemaining, setTimerRemaining] = useState(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerCycle, setTimerCycle] = useState(3);
  const timerIntervalRef = useRef(null);

  const setMode = (minutes) => {
    clearInterval(timerIntervalRef.current);
    setIsTimerRunning(false);
    setTimerMode(minutes);
    setTimerRemaining(minutes * 60);
    addToast(`Timer set to ${minutes}m`);
  };

  const toggleTimer = () => {
    if (isTimerRunning) {
      clearInterval(timerIntervalRef.current);
      setIsTimerRunning(false);
      addToast('Timer paused');
    } else {
      setIsTimerRunning(true);
      addToast('Pomodoro deep focus countdown active! ⚡');
      if (!audioPlaying) {
        toggleAudio();
      }

      timerIntervalRef.current = setInterval(() => {
        setTimerRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerIntervalRef.current);
            setIsTimerRunning(false);
            onTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const resetTimer = () => {
    clearInterval(timerIntervalRef.current);
    setIsTimerRunning(false);
    setTimerRemaining(timerMode * 60);
    addToast(`Timer reset to ${timerMode}m`);
  };

  const skipTimer = () => {
    resetTimer();
    addToast('Skipped to next session interval');
  };

  const onTimerComplete = () => {
    glacierAudio.playCrystalChime();
    fireConfetti();
    addToast(`🎉 Deep Focus block finished! +${timerMode}m logged.`);

    const hoursLogged = +(timerMode / 60).toFixed(1);
    setStats(prev => {
      const newHours = +(prev.focusHours + hoursLogged).toFixed(1);
      const updatedAchievements = prev.achievements.map(a => {
        if (a.id === 'grandmaster' && newHours >= prev.goalHours) {
          return { ...a, unlocked: true };
        }
        return a;
      });
      return {
        ...prev,
        focusHours: newHours,
        todayPomodoroCycles: prev.todayPomodoroCycles + 1,
        achievements: updatedAchievements
      };
    });

    setTimerCycle(prev => Math.min(prev + 1, 4));
  };

  useEffect(() => {
    return () => clearInterval(timerIntervalRef.current);
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        user,
        setUser,
        tasks,
        stats,
        addTask,
        toggleTask,
        deleteTask,
        isOmniOpen,
        setIsOmniOpen,
        isNewTaskOpen,
        setIsNewTaskOpen,
        toasts,
        addToast,
        // Audio
        audioPlaying,
        currentSoundscape,
        toggleAudio,
        setSoundscapeMode,
        // Timer
        timerMode,
        timerRemaining,
        isTimerRunning,
        timerCycle,
        setMode,
        toggleTimer,
        resetTimer,
        skipTimer
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
