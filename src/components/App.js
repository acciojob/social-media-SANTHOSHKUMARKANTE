import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import UsersPage from "./UsersPage";
import NotificationsPage from "./NotificationsPage";
import CreatePostPage from "./CreatePostPage";
import './../styles/App.css';
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);

  const [posts, setPosts] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
    setNotifications([...notifications, `${newPost.author} created a new post.`]); // Add notification
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/notifications">Notifications ({notifications.length})</Link></li>
            <li><Link to="/create-post">Create Post</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage posts={posts} />} />
          <Route path="/users" element={<UsersPage users={users} posts={posts} />} />
          <Route 
            path="/notifications" 
            element={<NotificationsPage notifications={notifications} clearNotifications={clearNotifications} />} 
          />
          <Route 
            path="/create-post" 
            element={<CreatePostPage users={users} addPost={addPost} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;