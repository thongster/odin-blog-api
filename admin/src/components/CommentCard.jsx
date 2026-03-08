import styles from './CommentCard.module.css';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const CommentCard = ({ postId, userId, comments }) => {
  const { token, user, logout } = useAuth();
  const baseUrl = 'http://localhost:3000';
  const [error, setError] = useState(null);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditSubmit = async (commentId) => {
    try {
      const response = await fetch(
        `${baseUrl}/posts/${postId}/comments/${commentId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ text: editText }),
        },
      );

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

  const handleEditCommentBtn = (comment) => {
    setEditingCommentId(comment.id);
    setEditText(comment.text);
  };

  const handleDelete = async (commentId) => {
    try {
      const response = await fetch(
        `${baseUrl}/posts/${postId}/comments/${commentId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // logout if token expired
      if (response.status === 401) {
        logout();
      }

      console.log('Comment successfully deleted');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.comments}>
      <h4>Comments ({comments.length})</h4>
      {error && <p className={styles.error}>{error}</p>}
      {comments.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          {editingCommentId === comment.id ? (
            <form onSubmit={handleEditSubmit(comment.id)}>
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditingCommentId(null)}>
                Cancel
              </button>
            </form>
          ) : (
            <p>{comment.text}</p>
          )}
          <div className={styles.secondRow}>
            <div className={styles.dates}>
              <span className={styles.commentDate}>
                Created: {new Date(comment.createdAt).toLocaleDateString()}
              </span>
              {comment.updatedAt !== comment.createdAt && (
                <span className={styles.updatedCommentDate}>
                  Updated: {new Date(comment.updatedAt).toLocaleDateString()}
                </span>
              )}
            </div>
            {userId == user.id && (
              <div className={styles.commentActions}>
                <button
                  className={styles.editCommentBtn}
                  onClick={() => handleEditCommentBtn(comment)}
                >
                  Edit
                </button>
                <button
                  className={styles.deleteCommentBtn}
                  onClick={() => handleDelete(comment.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export { CommentCard };
