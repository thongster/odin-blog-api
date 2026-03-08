import styles from './AddComment.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AddComment = ({ postId, setPostComments }) => {
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

  // update react's Comment state so that
  const handleNewComment = (newComment) => {
    setPostComments((prevComments) => [...prevComments, newComment]);
  };

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

      // update comment state to trigger rerender
      handleNewComment(data);

      // clear form
      setText('');
      setError(null);

      console.log('Comment successfully created');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.addComment}>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter comment"
          required
        />

        <button type="submit" className={styles.button}>
          Create Comment
        </button>
      </form>
    </div>
  );
};

export { AddComment };
