import React, { useState } from "react";
import "./UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Yolanda Mbanguzi", role: "Manager" },
    { id: 2, name: "Refiloe Mokoana", role: "HR Specialist" },
  ]);
  const [newUser, setNewUser] = useState({ name: "", role: "" });
  const [error, setError] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.role) {
      setError("All fields are required");
      return;
    }
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ name: "", role: "" });
    setError("");
  };

  return (
    <div className="user-management-container">
      <h2>User Management</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.valueof })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
         <input
          type="text"
          placeholder="ID"
          value={newUser.id}
          onChange={(e) => setNewUser({ ...newUser, id: e.target.value })}
        />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
};

export default  UserManagement;