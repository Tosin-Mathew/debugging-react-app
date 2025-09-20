import React, { useState } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', active: true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', active: false },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', active: true }
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  // Issue: Missing dependency in useEffect equivalent
  const handleUserSelect = (user) => {
    setSelectedUser(user);
    console.log('User selected:', user.name);
  };

  // Issue: Incorrect state update
  const toggleUserStatus = (userId) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, active: !user.active };
      }
      return user;
    });
    // Missing spread operator for state update
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Management App</h1>
        <div className="app-content">
          <UserList 
            users={users} 
            onUserSelect={handleUserSelect}
            onToggleStatus={toggleUserStatus}
            // Issue: Missing key prop
          />
          <UserProfile 
            user={selectedUser}
            // Issue: Incorrect prop name
            onUpdateUser={toggleUserStatus}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
