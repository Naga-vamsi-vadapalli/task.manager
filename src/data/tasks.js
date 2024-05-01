
let tasks = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1', status: 'pending', assignee: 'user1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', status: 'pending', assignee: 'user1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', status: 'pending', assignee: 'user3', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 4, title: 'Task 4', description: 'Description for Task 4', status: 'pending', assignee: 'user4', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 5, title: 'Task 5', description: 'Description for Task 5', status: 'pending', assignee: 'admin', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
];

export const getTasks = () => tasks;

export const addTask = (newTask, assignee) => {
  const id = tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
  const createdAt = new Date().toISOString();
  const updatedAt = new Date().toISOString();
  const task = { ...newTask, id, status: 'pending', assignee, createdAt, updatedAt }; 
  tasks.push(task);
};

export const updateTask = (taskId, newData) => {
  tasks = tasks.map(task => {
    if (task.id === taskId) {
      return { ...task, ...newData, updatedAt: new Date().toISOString() };
    }
    return task;
  });
};

export const deleteTask = (taskId) => {
  tasks = tasks.filter(task => task.id !== taskId);
};

export default getTasks;
