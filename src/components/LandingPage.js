import React from "react";
import "../styles/LandingPage.css"
function LandingPage({ posts }) {
  return (
    <div className="landing-container">
      <h1>Landing Page</h1>
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet. Create a new post!</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.author}:</strong> {post.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LandingPage;