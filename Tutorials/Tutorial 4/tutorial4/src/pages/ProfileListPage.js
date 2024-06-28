import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';
import { Link } from 'react-router-dom';
import './../App.css';

const ProfileListPage = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://express-t4.onrender.com/api/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user => user.name?.toLowerCase().includes(search?.toLowerCase()));

  return (
    <div className="profile-list-page">
      <h2>Profile List</h2>
      <input type="text" placeholder="Search by name" value={search} onChange={e => setSearch(e.target.value)} />
      <div className="user-list">
        {filteredUsers.map(user => (
          <Link style={{ textDecoration: 'none' }} key={user._id} to={`/profiles/${user._id}`}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProfileListPage;
