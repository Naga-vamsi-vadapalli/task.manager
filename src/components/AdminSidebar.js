import React, { useState } from 'react';
import { addTask } from '../data/tasks';
import './sidebar.css';
const AdminSidebar = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleCreateTask = () => {
    addTask({ title, description, assignee, status: 'pending' });
    setTitle('');
    setDescription('');
    setAssignee('');
  };

  return (
    <div className="sidebar">
      <h3>Create Task</h3>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <select value={assignee} onChange={(e) => setAssignee(e.target.value)}>
        <option value="">Assignee</option>
        <option value="user1">User 1</option>
        <option value="user2">User 2</option>
        <option value="user3">User 3</option>
        <option value="user4">User 4</option>
      </select>
      <button onClick={handleCreateTask}>Create</button>
    </div>
  );
};

export default AdminSidebar;
