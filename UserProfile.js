import React, { useState, useEffect } from 'react';

const UserProfile = ({ user, onUpdateUser }) => {
  const [localUser, setLocalUser] = useState(user);
  
  // Issue: Missing dependency array
  useEffect(() => {
    setLocalUser(user);
  });

  // Issue: Incorrect event handling
  const handleStatusToggle = () => {
    if (user) {
      onUpdateUser(user.id);
    }
  };

  if (!user) {
    return (
      <div className="user-profile">
        <h2>Select a user to view profile</h2>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-details">
        <h3>{localUser?.name}</h3>
        <p>Email: {localUser?.email}</p>
        <p>Status: 
          <span className={`status ${localUser?.active ? 'active' : 'inactive'}`}>
            {localUser?.active ? 'Active' : 'Inactive'}
          </span>
        </p>
        <button onClick={handleStatusToggle}>
          Toggle User Status
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
