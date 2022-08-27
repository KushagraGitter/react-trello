import React, { useState } from 'react';

const TaskList = ({
  taskList,
  grpId,
  handleDnDEnter,
  children,
  isDragging,
}) => {
  return (
    <ul
      className="taskList"
      onDragEnter={
        isDragging && !children.length
          ? (e) => handleDnDEnter(e, { grpId: grpId, taskId: 0 })
          : null
      }
    >
      {children}
    </ul>
  );
};

export default TaskList;

/// APi getTaskList(subProjectID) {

//}
