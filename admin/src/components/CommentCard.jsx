import styles from './CommentCard.module.css';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const CommentCard = ({ postId, userId, comments }) => {
  const { token, user, logout } = useAuth();
  const baseUrl = 'http://localhost:3000';
  const [error, setError] = useState(null);

  //   const handleEdit = async () => {
  //     try {
  //       const response = await fetch(`${baseUrl}/posts/${postId}/comments`, {
  //         method: 'PUT',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify({ text }),
  //       });

  //       const data = await response.json();

  //       // logout if token expired
  //       if (response.status === 401) {
  //         logout();
  //       }

  //       if (!response.ok) {
  //         throw new Error(
  //           data.status?.[0]?.msg || data?.message || 'Failed to edit comment',
  //         );
  //       }

  //       console.log('Comment successfully edited');
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //   };

  //   const handleDelete = async () => {};

  return (
    <div className={styles.comments}>
      <h4>Comments ({comments.length})</h4>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          <p>{comment.text}</p>
          <div className={styles.secondRow}>
            <span className={styles.commentDate}>
              {new Date(comment.createdAt).toLocaleDateString()}
            </span>
            {userId == user.id && (
              <div className={styles.commentActions}>
                <button className={styles.editCommentBtn}>Edit</button>
                <button className={styles.deleteCommentBtn}>delete</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export { CommentCard };
