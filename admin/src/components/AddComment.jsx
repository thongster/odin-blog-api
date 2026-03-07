import styles from './AddComment.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AddComment = ({ postId }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(null);
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const baseUrl = 'http://localhost:3000';

  // go to login if no token
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      // logout if token expired
      if (response.status === 401) {
        logout();
      }

      if (!response.ok) {
        throw new Error(
          data.status?.[0]?.msg || data?.message || 'Failed to create comment',
        );
      }

      console.log('Comment successfully created');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = async () => {
    try {
      const response = await fetch(`${baseUrl}/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      // logout if token expired
      if (response.status === 401) {
        logout();
      }

      if (!response.ok) {
        throw new Error(
          data.status?.[0]?.msg || data?.message || 'Failed to edit comment',
        );
      }

      console.log('Comment successfully edited');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async () => {};

  return (
    <div className={styles.addCommentPage}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Create New Comment</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="text">New Comment</label>
            <input
              id="text"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter comment"
              required
            />
          </div>

          <button type="submit" className={styles.button}>
            Create Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export { AddComment };
