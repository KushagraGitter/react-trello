import React from 'react';

function AddTask({ addTask, isAddTask }) {
  return (
    <button
      className={`add-task-button-${isAddTask ? 'not-visible' : 'visible'}`}
      onClick={(e) => addTask(e)}
    >
      Add Task
    </button>
  );
}

export default AddTask;
