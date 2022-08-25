import React, { useState } from 'react';
import Task from './task.js';

const TaskList = ({ taskList }) => {
  // const [taskList, setTaskList ] = useState([]);
  // useEffect(() => {
  //   //respone of API
  //   setTaskList()
  // })
  function handleDragOver(e) {
    e.preventDefault();
    const draggedElement = document.querySelector('.dragging');
    e.currentTarget.appendChild(draggedElement);
    console.log(draggedElement);
  }
  return (
    <ul className="taskList" onDragOver={(e) => handleDragOver(e)}>
      {taskList.map((task) => {
        return <Task key={task.taskId} {...task} />;
      })}
    </ul>
  );
};

export default TaskList;

/// APi getTaskList(subProjectID) {

//}
