import React from 'react';
import { getTasks, deleteTask } from '../data/tasks';
import './tasklist.css';

const AdminTaskListCard = () => {
  const tasks = getTasks(); 

  const handleDelete = (taskId) => {
    deleteTask(taskId); 
  };

  return (
    <div className="task-list-card">
      {tasks.map(task => (
        <div key={task.id} className="task-card">
          <h3>{task.title}</h3>
          <p>Description: {task.description}</p>
          <p>Status: {task.status}</p>
          <p>Assignee: {task.assignee}</p>
          <p>Created At: {task.createdAt}</p>
          <p>Updated At: {task.updatedAt}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button> 
        </div>
      ))}
    </div>
  );
};

export default AdminTaskListCard;
