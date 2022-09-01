import React, { useState, createContext } from 'react';
import Project from './components/project/project.js';
import './style.css';
export const ThemeContext = createContext('light');
export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <button onClick={(e) => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme}
        </button>
        <Project id={1} />
      </ThemeContext.Provider>
    </div>
  );
}

//Functional Requirement
// The app contains multiple boards to signify different projects
// Each board contains different lists to signify sub-project
// Drag and drop feature

//Backend functionality
// local storage
