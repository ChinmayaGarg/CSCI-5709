import React from 'react';
import './../App.css';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.picture} alt={`${user.name}`} />
      <h3>{user.name}</h3>
      <div>
        Phone: <a href={`tel:${user.phone}`}>{user.phone}</a>
      </div>
      <div>
        Email: <a href={`mailto:${user.email}`}>{user.email}</a>
      </div>
      <div>
        Address: <h5>{user.address}</h5>
      </div>
    </div>
  );
};

export default UserCard;
