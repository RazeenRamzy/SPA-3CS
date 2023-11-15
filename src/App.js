import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersView from './UsersView';
import UserInfoView from './UserInfoView';
import Header from './Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UsersView />} />
        <Route path="/user/:id" element={<UserInfoView />} />
      </Routes>
    </Router>
  );
}

export default App;
