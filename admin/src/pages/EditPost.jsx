import styles from './EditPost.module.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);
  const [error, setError] = useState(null);
  const { token, logout } = useAuth();
  const { postId } = useParams();
  const navigate = useNavigate();
  const baseUrl = 'http://localhost:3000';

  // go to login if no token
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token]);

  // get post info by postId
  useEffect(() => {
    const fetchPostById = async () => {
      try {
        const response = await fetch(`${baseUrl}/posts/${postId}`);

        const data = await response.json();

        // logout if token expired
        if (response.status === 401) {
          logout();
        }

        if (!response.ok) {
          throw new Error(
            data.status?.[0]?.msg || data?.message || 'Failed to find  post',
          );
        }

        setTitle(data.title);
        setContent(data.content);
        setPublished(data.published);

        console.log('Post successfully found');
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPostById();
  }, [postId, token, logout]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/posts/${postId}`, {
        method: 'PUT',
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
          data.status?.[0]?.msg || data?.message || 'Failed to edit post',
        );
      }

      // navigate to home page
      navigate('/');
      console.log('Post successfully edited');
    } catch (err) {
      setError(err.message);
    }
  };

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
