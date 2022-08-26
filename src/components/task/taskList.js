import React, { useState } from 'react';
import Task from './task.js';

const TaskList = ({
  taskList,
  grpId,
  isDragging,
  handleDnDEnter,
  handleDragStart,
}) => {
  return (
    <ul
      className="taskList"
      onDragEnter={(e) => handleDnDEnter(e, { grpId: grpId })}
    >
      {taskList.map((task) => {
        return (
          <Task
            key={task.taskId}
            {...task}
            grpId={grpId}
            isDragging={isDragging}
            isDragging={isDragging}
            handleDragStart={handleDragStart}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;

/// APi getTaskList(subProjectID) {

//}
