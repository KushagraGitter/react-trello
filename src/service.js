const getSubProjects = (projectId) => {
  const data = [
    {
      subProjectId: 1,
      subProjectName: 'To Do',
      tasks: [
        {
          taskId: 1,
          taskName: 'Creating HTML',
          assignedTo: 'Mark',
          status: 'Pending',
        },
        {
          taskId: 2,
          taskName: 'Creating CSS',
          assignedTo: 'Justin',
          status: 'Pending',
        },
        {
          taskId: 2,
          taskName: 'Creating JavaScript',
          assignedTo: 'Justin',
          status: 'Pending',
        },
      ],
    },
    {
      subProjectId: 2,
      subProjectName: 'Doing',
      tasks: [
        {
          taskId: 1,
          taskName: 'adding styles',
          assignedTo: 'Sam',
          status: 'InProgress',
        },
      ],
    },
    {
      subProjectId: 3,
      subProjectName: 'Done',
      tasks: [
        {
          taskId: 1,
          taskName: 'make API',
          assignedTo: 'Sam',
          status: 'Done',
        },
        {
          taskId: 2,
          taskName: 'make UI',
          assignedTo: 'Sam',
          status: 'Done',
        },
        {
          taskId: 3,
          taskName: 'Intigration',
          assignedTo: 'Jack',
          status: 'Done',
        },
      ],
    },
  ];
  const projectPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });

  return projectPromise;
};

const getSubProjectTask = (subProjectId) => {
  const data = [
    {
      subProjectId: 1,
      subProjectName: 'To Do',
      tasks: [
        {
          taskId: 1,
          taskName: 'task1',
          assignedTo: 'Mark',
          status: 'Pending',
        },
        {
          taskId: 2,
          taskName: 'task2',
          assignedTo: 'Justin',
          status: 'Pending',
        },
      ],
    },
    {
      subProjectId: 2,
      subProjectName: 'In Progress',
      tasks: [
        {
          taskId: 1,
          taskName: 'task1',
          assignedTo: 'Mark',
          status: 'InProgress',
        },
        {
          taskId: 2,
          taskName: 'task2',
          assignedTo: 'Justin',
          status: 'InProgress',
        },
      ],
    },
    {
      subProjectId: 3,
      subProjectName: 'In Progress',
      tasks: [
        {
          taskId: 1,
          taskName: 'task1',
          assignedTo: 'Mark',
          status: 'Done',
        },
      ],
    },
  ];
  const taskPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const tasks = data.filter((d) => d.subProjectId === subProjectId)[0][
        'tasks'
      ];
      resolve(tasks);
    }, 200);
  });
  return taskPromise;
};

export { getSubProjects, getSubProjectTask };
