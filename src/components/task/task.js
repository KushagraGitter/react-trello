import React from 'react';

const Task = ({ taskName, assignedTo, status }) => {
  return (
    <li className="task-item">
      <h3>{taskName}</h3>
      <div className={`task-status-${status}`}></div>
      <div>{assignedTo}</div>
    </li>
  );
};

export default Task;
