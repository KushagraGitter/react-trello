import React, { useState } from 'react';
import Task from './task.js';

const TaskList = ({ taskList }) => {
  // const [taskList, setTaskList ] = useState([]);
  // useEffect(() => {
  //   //respone of API
  //   setTaskList()
  // })
  return (
    <ul className="taskList">
      {taskList.map((task) => {
        return <Task key={task.taskId} {...task} />;
      })}
    </ul>
  );
};

export default TaskList;

/// APi getTaskList(subProjectID) {

//}
