import React, { useState } from 'react';

const Task = ({ taskName, assignedTo, status }) => {
  const [isDragging, setDragging] = useState(false);
  function handleDragStart(event) {
    setDragging(true);
  }

  function handleDragEnd(event) {
    setDragging(false);
  }
  return (
    <li
      className={`task-item ${isDragging ? 'dragging' : ''}`}
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
