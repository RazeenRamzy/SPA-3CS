import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

const UsersView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <div className="container">
        {users.map((user) => (
          <Link key={user.id} to={`/user/${user.id}`} className="card">
            <div>
              <img
                src={user.avatar}
                alt={`Avatar for ${user.first_name}`}
              />
              <p>{`${user.first_name} `}</p>
              <p>{`${user.email} `}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UsersView;
