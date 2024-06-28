import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfileListPage from './pages/ProfileListPage';
import ProfileDetailPage from './pages/ProfileDetailPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/profiles" exact element={<ProfileListPage />} />
        <Route path="/profiles/:id" element={<ProfileDetailPage />} />
      </Routes>
    </>
  );
};

export default App;
