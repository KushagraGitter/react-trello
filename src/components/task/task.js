import React, { useState, useRef } from 'react';

const Task = ({
  className,
  taskId,
  idx,
  taskName,
  assignedTo,
  status,
  grpId,
  isDragging,
  handleDragStart,
  handleDnDEnter,
}) => {
  return (
    <li
      className={className}
      draggable={true}
      onDragStart={(e) => handleDragStart(e, { grpId: grpId, taskId: idx })}
      onDragEnter={
        isDragging
          ? (e) => handleDnDEnter(e, { grpId: grpId, taskId: idx })
          : null
      }
    >
      <p>{taskName}</p>
    </li>
  );
};

export default Task;
