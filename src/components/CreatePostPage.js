import React, { useState } from "react";
import "../styles/CreatePostPage.css";

const CreatePostPage = ({ users, addPost }) => {
  const [author, setAuthor] = useState(""); // Selected author
  const [content, setContent] = useState(""); // Post content

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !content.trim()) {
      alert("Please select an author and enter post content.");
      return;
    }

    // Create new post object
    const newPost = {
      id: Date.now(),
      author,
      content,
      reactions: { like: 0, love: 0, laugh: 0 }, // Default reactions
    };

    addPost(newPost); // Update parent state
    setAuthor(""); // Reset fields
    setContent("");
  };

  return (
    <div className="create-post-container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        {/* Select Author Dropdown */}
        <label htmlFor="postAuthor">Select Author:</label>
        <select
          id="postAuthor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="">-- Select an Author --</option>
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>

        {/* Post Content */}
        <label htmlFor="postContent">Post Content:</label>
        <textarea
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post here..."
        ></textarea>

        {/* Submit Button */}
        <button type="submit" className="button">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
