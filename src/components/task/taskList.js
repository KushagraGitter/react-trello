import React, { useState } from 'react';

const TaskList = ({ taskList, grpId, handleDnDEnter, children }) => {
  console.log('children:', children);
  return (
    <ul
      className="taskList"
      onDragEnter={(e) => handleDnDEnter(e, { grpId: grpId })}
    >
      {children}
    </ul>
  );
};

export default TaskList;

/// APi getTaskList(subProjectID) {

//}
