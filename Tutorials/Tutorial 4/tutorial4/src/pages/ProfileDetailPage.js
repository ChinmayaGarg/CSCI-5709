import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './../App.css';

const ProfileDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
      setUser(response.data);
    };
    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-detail-page">
      <h2>{user.name}</h2>
      <img src={user.picture} alt={user.name} />
      <p>
        <strong>Is Active:</strong> {user.isActive ? 'Yes' : 'No'}
      </p>
      <p>
        <strong>Balance:</strong> {user.balance}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
      <p>
        <strong>Eye Color:</strong> {user.eyeColor}
      </p>
      <p>
        <strong>Gender:</strong> {user.gender}
      </p>
      <p>
        <strong>Company:</strong> {user.company}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Address:</strong> {user.address}
      </p>
      <p>
        <strong>About:</strong> {user.about}
      </p>
      <p>
        <strong>Registered:</strong> {new Date(user.registered).toLocaleDateString()}
      </p>
      <p>
        <strong>Location:</strong> Latitude: {user.latitude}, Longitude: {user.longitude}
      </p>
    </div>
  );
};

export default ProfileDetailPage;
