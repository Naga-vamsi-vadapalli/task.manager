import React from 'react';
import { getTasks } from '../data/tasks';
import './tasklist.css';

const UserTaskListCard = ({ userId }) => {
  const tasks = getTasks().filter(task => task.assignee === userId); 

  return (
    <div className="task-list-card">
      {tasks.map(task => (
        <div key={task.id} className="task-card">
          <h3>{task.title}</h3>
          <p>Description: {task.description}</p>
          <p>Status: {task.status}</p>
          <p>Created At: {task.createdAt}</p>
          <p>Updated At: {task.updatedAt}</p>
          <button>Update</button> 
        </div>
      ))}
    </div>
  );
};

export default UserTaskListCard;
