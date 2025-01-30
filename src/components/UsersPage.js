import React, { useState } from "react";
import "../styles/UsersPage.css";

function UsersPage({ users, posts }) {
  const [selectedUser, setSelectedUser] = useState(null);

  // Filter posts based on the selected user
  const filteredPosts = selectedUser
    ? posts.filter((post) => post.author === selectedUser)
    : [];

  return (
    <div className="users-container">
      <h1>Users Page</h1>
      
      {/* User Selection */}
      <h2>Select a User:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="buttonlist">
            <button onClick={() => setSelectedUser(user.name)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Display selected user's posts */}
      {selectedUser && (
        <div>
          <h2>Posts by {selectedUser}</h2>
          {filteredPosts.length === 0 ? (
            <p>No posts by {selectedUser} yet.</p>
          ) : (
            <ul>
              {filteredPosts.map((post) => (
                <li key={post.id}>
                  <strong>{post.author}</strong>: {post.content}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default UsersPage;
