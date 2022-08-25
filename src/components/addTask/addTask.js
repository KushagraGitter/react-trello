import React from 'react';

function AddTask({ addTask, visible }) {
  return (
    <button class="add-task" onClick={(e) => addTask(e)} visible={visible}>
      Add Task
    </button>
  );
}

export default AddTask;
