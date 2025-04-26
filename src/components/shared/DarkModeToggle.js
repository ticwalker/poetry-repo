// src/components/shared/DarkModeToggle.js
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // On mount, check if user prefers dark mode or has set it before
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  (!('darkMode' in localStorage) && 
                   window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    updateTheme(isDark);
  }, []);

  const updateTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDark);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    updateTheme(newDarkMode);
  };

  return (
    <button 
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-light-300 dark:bg-dark-100 hover:bg-light-400 dark:hover:bg-dark-300 transition-all duration-200"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <Sun size={20} className="text-accent-amber animate-pulse-slow" />
      ) : (
        <Moon size={20} className="text-accent-indigo" />
      )}
    </button>
  );
};

export default DarkModeToggle;