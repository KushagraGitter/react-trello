import React, { useState, useEffect, useRef } from 'react';
import TaskList from '../task/taskList.js';
import AddTask from '../addTask/addTask';
import { getSubProjectTask } from '../../service';

function SubProject({ subProjectId, subProjectName }) {
  const [isAddTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isDragging, setDragging] = useState(false);

  const dndNode = useRef();
  const dndNodeParams = useRef();

  useEffect(() => {
    const getSubProjTaskAsync = async () => {
      const taskList = await getSubProjectTask(subProjectId);
      console.log(taskList);
      setTasks(taskList);
    };
    getSubProjTaskAsync();
  }, [subProjectId]);

  const handleDnDEnter = (e, params) => {
    const newTaskList = [...tasks];
  };
  const handleDragStart = (e, params) => {
    dndNodeParams.current = params;
    dndNode.current = e.target;
    setDragging(true);
    dndNode.current.addEventListener('dragend', handleDragEnd());
  };
  const handleDragEnd = () => {
    setDragging(false);
    dndNode.current.removeEventListener('dragend', handleDragEnd);
    dndNodeParams.current = null;
    dndNode.current = null;
  };
  function handleAddTask() {
    setAddTask(true);
  }

  return (
    <div class="sub-project">
      <h2>{subProjectName}</h2>
      {/*  to-do create a new component to render task  */}
      <TaskList
        taskList={tasks}
        grpId={subProjectId}
        isDragging={isDragging}
        handleDnDEnter={handleDnDEnter}
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
      />
      <AddTask addTask={handleAddTask} isAddTask={isAddTask} />
      <textarea
        className={`add-task-text-${isAddTask ? 'visible' : 'not-visible'}`}
        name="add-task-text"
        cols="30"
        rows="2"
        visible={isAddTask}
      ></textarea>
    </div>
  );
}

export default SubProject;
