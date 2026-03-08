import styles from './PostCard.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddComment } from './AddComment';
import { CommentCard } from './CommentCard';
import { useAuth } from '../context/AuthContext';

const PostCard = ({ post, setPosts }) => {
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  const [error, setError] = useState(null);
  const baseUrl = 'http://localhost:3000';

  // destructure post object
  const {
    id,
    title,
    content,
    createdAt,
    updatedAt,
    published,
    comments = [],
    userId,
  } = post;

  // comments have its own state so it rerenders when a new comment is added
  const [postComments, setPostComments] = useState(comments);

  const handleEditPost = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/posts/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // logout if token expired
      if (response.status === 401) {
        logout();
      }

      // remove post from state
      setPosts((prev) => prev.filter((post) => post.id !== id));

      console.log('Post successfully deleted');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <p className={styles.content}>{content}</p>

      <div className={styles.meta}>
        <p
          className={`${styles.status} ${
            published ? styles.published : styles.draft
          }`}
        >
          {published ? 'Published' : 'Draft'}
        </p>
        <p>Created: {new Date(createdAt).toLocaleDateString()}</p>
        {updatedAt !== createdAt && (
          <p>Updated: {new Date(updatedAt).toLocaleDateString()}</p>
        )}
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button
        className={styles.editBtn}
        onClick={handleEditPost}
      >{`Edit ${id}`}</button>

      <button className={styles.deleteBtn} onClick={() => handleDelete(id)}>
        Delete
      </button>

      <AddComment postId={id} setPostComments={setPostComments} />

      {postComments.length > 0 && (
        <CommentCard postId={id} userId={userId} comments={postComments} />
      )}
    </div>
  );
};

export { PostCard };
