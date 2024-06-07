import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './../App.css';

function ProfilePage() {
  const { state } = useLocation();
  const { firstName, lastName, email } = state || {};
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  if (!state) {
    return <p>No profile data available. Please register first.</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-icon">
          <i className="fas fa-user"></i>
        </div>
        <h2>
          Hello {firstName} {lastName} !!
        </h2>
        <p>Email: {email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default ProfilePage;
