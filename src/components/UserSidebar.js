import React, { useState } from 'react';
import { updateTask } from '../data/tasks';
import './sidebar.css'

const UserSidebar = ({ userId }) => {
  const [status, setStatus] = useState('');
  const [comment, setComment] = useState('');


  const handleUpdateTask = () => {
    updateTask(userId, { status, comment, updatedAt: new Date().toISOString() });
    setStatus('');
    setComment('');
  };

  return (
    <div className="sidebar">
      <h3>Update Task</h3>
      <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
      <textarea placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={handleUpdateTask}>Update</button>
    </div>
  );
};

export default UserSidebar;
