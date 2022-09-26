import React, { useState } from 'react';
import ThemeContext from './components/providers/ThemeContext.js';
import Project from './components/project/project.js';
import Login from './login';
import './style.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <button onClick={(e) => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme}
        </button>
        {isLoggedIn ? <Project id={1} /> : <Login />}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

//Functional Requirement
// The app contains multiple boards to signify different projects
// Each board contains different lists to signify sub-project
// Drag and drop feature

//Backend functionality
// local storage
