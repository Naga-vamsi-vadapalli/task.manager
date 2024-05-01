import React from 'react';
import AdminTaskBar from '../components/AdminTaskBar';
import AdminSidebar from '../components/AdminSidebar';
import AdminTaskListCard from '../components/AdminTaskListCard'; // Assuming you have a component for the admin task list

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminTaskBar />
      <div className="dashboard-content">
        <AdminSidebar />
        <AdminTaskListCard />
      </div>
    </div>
  );
};

export default AdminDashboard;
