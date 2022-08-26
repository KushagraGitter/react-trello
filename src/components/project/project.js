import React, { useState, useEffect } from 'react';
import SubProject from '../subProject/subProject.js';
import { getSubProjects } from '../../service.js';

function Projects(id) {
  const [projectId, setProjectId] = useState(id);
  const [subProjects, setSubProjects] = useState([]);

  useEffect(() => {
    getSubProjects(id).then((data) => {
      setSubProjects(data);
    });
  }, [projectId]);

  return (
    <div className="main-project">
      <h1 className="project">Project 1</h1>
      <div className="sub-project-container">
        {subProjects.map((subProject) => {
          return <SubProject key={subProject.id} {...subProject} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
