import React, { useState } from 'react';
import TaskList from '../task/taskList.js';
import AddTask from '../addTask/addTask';

function SubProject({ subProjectId, subProjectName, tasks }) {
  const [isAddTask, setAddTask] = useState(false);

  function handleAddTask() {
    setAddTask(true);
  }
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
