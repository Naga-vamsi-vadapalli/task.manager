import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './components/Login';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import { users } from './data/users'; 

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Login users={users} setUser={setUser} />} /> 
        <Route path="/admin-dashboard" element={user && user.role === 'admin' ? <AdminDashboard /> : <Login users={users} setUser={setUser} />} /> {/* Use element prop */}
        <Route path="/user-dashboard" element={user && user.role === 'user' ? <UserDashboard user={user} /> : <Login users={users} setUser={setUser} />} /> {/* Use element prop */}
      </Routes> 
    </Router>
  );
};

export default App;
