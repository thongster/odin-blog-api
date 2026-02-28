import styles from './EditPost.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const [error, setError] = useState(null);
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const baseUrl = 'http://localhost:3000';

  // go to login if no token
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token]);

  const handleSubmit = async () => {};

  return (
    <div className={styles.editPostPage}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Edit Post</h2>
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
            {published ? 'Create Post' : 'Save Draft'}
          </button>
        </form>
      </div>
    </div>
  );
};

export { EditPost };
