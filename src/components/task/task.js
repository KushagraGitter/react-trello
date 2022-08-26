import React, { useState, useRef } from 'react';

const Task = ({ taskName, assignedTo, status }) => {
  const [isDragging, setDragging] = useState(false);
  const dndNode = useRef();

  function handleDragStart(event) {
    setDragging(true);
    dndNode.current = event.target;
    dndNode.current.addEventListener('dragend', handleDragEnd);
  }

  function handleDragEnd(event) {
    setDragging(false);
    dndNode.current.removeEventListener('dragend', handleDragEnd);
    dndNode.current = null;
  }
  return (
    <li
      className={`task-item ${isDragging ? 'dragging' : ''}`}
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
    >
      <h3>{taskName}</h3>
      <div className={`task-status-${status}`}></div>
      <div>{assignedTo}</div>
    </li>
  );
};

export default Task;
