import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDayMode, setIsDayMode] = useState(() => {
    const savedMode = typeof window !== 'undefined' ? localStorage.getItem('themeMode') : null;
    return savedMode ? savedMode === 'light' : true;
  });

  useEffect(() => {
    localStorage.setItem('themeMode', isDayMode ? 'light' : 'dark');
  }, [isDayMode]);

  const toggleTheme = () => {
    setIsDayMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDayMode, toggleTheme }}>
      <div className={isDayMode ? 'light' : 'dark'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);