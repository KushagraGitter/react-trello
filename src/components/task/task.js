import React, { useState, useRef } from 'react';

const Task = ({
  taskId,
  taskName,
  assignedTo,
  status,
  grpId,
  isDragging,
  handleDragStart,
}) => {
  return (
    <li
      className={`task-item ${isDragging ? 'dragging' : ''}`}
      draggable={true}
      onDragStart={(e) => handleDragStart(e, { grpId: grpId, taskId: taskId })}
    >
      <p>{taskName}</p>
    </li>
  );
};

export default Task;
