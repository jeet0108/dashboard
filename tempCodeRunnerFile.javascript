import React, { useState, useEffect } from "react";
import axios from "axios";

function CrudApp() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editId, setEditId] = useState(null);

  // Fetch posts
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data.slice(0, 5))); // Limit to 5 posts
  }, []);

  // Add post
  const addPost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { title, body, userId: 1 })
      .then((response) => {
        setPosts([...posts, response.data]);
        setTitle("");
        setBody("");
      });
  };

  // Update post
  const updatePost = (id) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title, body })
      .then((response) => {
        setPosts(posts.map((post) => (post.id === id ? response.data : post)));
        setTitle("");
        setBody("");
        setEditId(null);
      });
  };

  // Delete post
  const deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
        {editId ? (
          <button onClick={() => updatePost(editId)}>Update</button>
        ) : (
          <button onClick={addPost}>Add</button>
        )}
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => { setTitle(post.title); setBody(post.body); setEditId(post.id); }}>
              Edit
            </button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;