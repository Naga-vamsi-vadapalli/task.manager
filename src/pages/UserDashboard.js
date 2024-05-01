import React from 'react';
import UsertaskBar from '../components/UsertaskBar';
import UserSidebar from '../components/UserSidebar';
import UserTaskListCard from '../components/UserTaskListCard'; 

const UserDashboard = ({ user }) => {
  return (
    <div className="user-dashboard">
      <UsertaskBar />
      <div className="dashboard-content">
        <UserSidebar userId={user.id} />

        <UserTaskListCard userId={user.id}  className="tasklist "/> 
      </div>
    </div>
  );
};

export default UserDashboard;
