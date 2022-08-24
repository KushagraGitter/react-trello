import React from 'react';
import TaskList from '../task/taskList.js';

function SubProject({ subProjectId, subProjectName, tasks }) {
  return (
    <div class="sub-project">
      <h2>{subProjectName}</h2>
      {/*  to-do create a new component to render task  */}
      <TaskList taskList={tasks} />
    </div>
  );
}

export default SubProject;
