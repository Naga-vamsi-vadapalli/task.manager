import React from 'react';
import { useNavigate } from 'react-router-dom';
import './taskbar.css';

const UsertaskBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="task-bar">
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default UsertaskBar;
