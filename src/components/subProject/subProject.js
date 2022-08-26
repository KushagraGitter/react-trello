import React, { useState, useEffect } from 'react';
import TaskList from '../task/taskList.js';
import AddTask from '../addTask/addTask';
import { getSubProjectTask } from '../../service';
function SubProject({ subProjectId, subProjectName }) {
  const [isAddTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    setAddTask(true);
  }

  useEffect(() => {
    getSubProjectTask(subProjectId).then((res) => {
      setTasks(res);
    });
  }, subProjectId);
  return (
    <div class="sub-project">
      <h2>{subProjectName}</h2>
      {/*  to-do create a new component to render task  */}
      <TaskList taskList={tasks} />
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
