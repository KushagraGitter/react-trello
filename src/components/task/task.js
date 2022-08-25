import React from 'react';

const Task = ({ taskName, assignedTo, status }) => {
  function handleDragStart(event) {
    event.target.classList.add('dragging');
  }

  function handleDragEnd(event) {
    event.target.classList.remove('dragging');
  }
  return (
    <li
      className="task-item"
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
      onDragEnd={(e) => handleDragEnd(e)}
    >
      <h3>{taskName}</h3>
      <div className={`task-status-${status}`}></div>
      <div>{assignedTo}</div>
    </li>
  );
};

export default Task;
