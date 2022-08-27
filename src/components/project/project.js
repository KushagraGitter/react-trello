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
  }, [projectId, setSubProjects]);

  const handleDnDEnter = (e, params) => {
    if (e.target !== dndNode.current) {
      console.log(('drag enter', params));
      //let newSubProjectList = [...subProjects];

      let newSubProjectList = JSON.parse(JSON.stringify(subProjects));
      console.log('drop container', newSubProjectList[params.grpId]);
      console.log(
        'from container',
        newSubProjectList[dndNodeParams.current.grpId]
      );
      newSubProjectList[params.grpId].tasks.splice(
        params.taskId,
        0,
        newSubProjectList[dndNodeParams.current.grpId].tasks.splice(
          dndNodeParams.current.taskId,
          1
        )[0]
      );

      dndNodeParams.current = params;
      setSubProjects(newSubProjectList);
    }
  };
  const handleDragStart = (e, params) => {
    dndNode.current = e.target;
    dndNode.current.addEventListener('dragend', handleDragEnd);
    dndNodeParams.current = params;
    setTimeout(() => {
      setDragging(true);
    }, 0);
    console.log('params: drag start', params);
  };

  const handleDragEnd = () => {
    setDragging(false);
    dndNode.current.removeEventListener('dragend', handleDragEnd);
    console.log('params: dragEnd', dndNodeParams);
    dndNodeParams.current = null;
    dndNode.current = null;
  };

  const getStyle = (params) => {
    if (
      params.grpId === dndNodeParams.current.grpId &&
      params.taskId === dndNodeParams.current.taskId
    ) {
      return `task-item ${isDragging ? 'dragging' : ''}`;
    } else {
      return 'task-item';
    }
  };

  return (
    <div className="main-project">
      <h1 className="project">Project 1</h1>
      <div className="sub-project-container">
        {subProjects.map((subProject, projIdx) => {
          return (
            <SubProject key={subProject.subProjectId} {...subProject}>
              <TaskList handleDnDEnter={handleDnDEnter} grpId={projIdx}>
                {subProject.tasks.map((task, idx) => {
                  return (
                    <Task
                      key={task.taskName}
                      className={
                        isDragging
                          ? getStyle({
                              grpId: projIdx,
                              taskId: idx,
                            })
                          : 'task-item'
                      }
                      grpId={projIdx}
                      idx={idx}
                      handleDragStart={handleDragStart}
                      handleDnDEnter={handleDnDEnter}
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
