import React, { useState, useEffect, useRef } from 'react';
import SubProject from '../subProject/subProject.js';
import TaskList from '../task/taskList.js';
import Task from '../task/task.js';
import { getSubProjects } from '../../service.js';

function Projects(projectId) {
  const [subProjects, setSubProjects] = useState([]);
  const [isDragging, setDragging] = useState(false);

  const dndNode = useRef();
  const dndNodeParams = useRef();

  useEffect(() => {
    getSubProjects(projectId).then((data) => {
      setSubProjects(data);
    });
  }, [projectId]);

  const handleDnDEnter = (e, params) => {
    console.log(('drag enter', params));
    let newSubProjectList = [...subProjects];
    newSubProjectList[params.grpId - 1].tasks.splice(
      params.taskId - 1,
      0,
      newSubProjectList[dndNodeParams.current.grpId].tasks.splice(
        dndNodeParams.current.taskId,
        1
      )[0]
    );
    setSubProjects(newSubProjectList);
  };
  const handleDragStart = (e, params) => {
    dndNodeParams.current = params;
    dndNode.current = e.target;
    setDragging(true);
    dndNode.current.addEventListener('dragend', handleDragEnd());
    console.log('params:', params);
  };

  const handleDragEnd = () => {
    setDragging(false);
    dndNode.current.removeEventListener('dragend', handleDragEnd);
    console.log('params:', dndNodeParams);
    dndNodeParams.current = null;
    dndNode.current = null;
  };

  return (
    <div className="main-project">
      <h1 className="project">Project 1</h1>
      <div className="sub-project-container">
        {subProjects.map((subProject) => {
          return (
            <SubProject key={subProject.subProjectId} {...subProject}>
              <TaskList
                handleDnDEnter={handleDnDEnter}
                grpId={subProject.subProjectId}
              >
                {subProject.tasks.map((task) => {
                  return (
                    <Task
                      grpId={subProject.subProjectId}
                      handleDragStart={handleDragStart}
                      isDragging={isDragging}
                      {...task}
                    />
                  );
                })}
              </TaskList>
            </SubProject>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
