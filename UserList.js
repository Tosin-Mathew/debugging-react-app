import React from 'react';

const UserList = ({ users, onUserSelect, onToggleStatus }) => {
  // Issue: Missing key in map function
  return (
    <div className="user-list">
      <h2>Users</h2>
      {users.map((user, index) => (
        <div key={index} className="user-item">
          <div onClick={() => onUserSelect(user)}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <span className={`status ${user.active ? 'active' : 'inactive'}`}>
              {user.active ? 'Active' : 'Inactive'}
            </span>
          </div>
          <button onClick={() => onToggleStatus(user.id)}>
            Toggle Status
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
