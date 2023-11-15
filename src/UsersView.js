import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UsersView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the API
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>Users View</h1>
      {users.map((user) => (
        <Link key={user.id} to={`/user/${user.id}`}>
          <div>
            <img src={user.avatar} alt={`Avatar for ${user.first_name}`} />
            <p>{`${user.first_name} ${user.last_name}`}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UsersView;
