import React from 'react';
import Project from './components/project/project.js';
import './style.css';

export default function App() {
  return (
    <div>
      <Project id={1} />
    </div>
  );
}

//Functional Requirement
// The app contains multiple boards to signify different projects
// Each board contains different lists to signify sub-project
// Drag and drop feature

//Backend functionality
// local storage
