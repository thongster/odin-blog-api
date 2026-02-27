import styles from './CreatePost.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const [error, setError] = useState(null);
  const { token, login, logout } = useAuth();
  const navigate = useNavigate();
  const baseUrl = 'http://localhost:3000';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content, published }),
      });

      const data = await response.json();

      // logout if token expired
      if (response.status === 401) {
        logout();
      }

      if (!response.ok) {
        throw new Error(
          data.status?.[0]?.msg || data?.message || 'Failed to create post',
        );
      }

      // navigate to home page
      navigate('/');
      console.log('Post successfully created');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.createPostPage}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Create New Post</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post..."
              rows={6}
              required
            />
          </div>

          <div className={styles.checkboxRow}>
            <input
              id="published"
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
            <label htmlFor="published">Publish immediately</label>
          </div>

          <button type="submit" className={styles.button}>
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export { CreatePost };
