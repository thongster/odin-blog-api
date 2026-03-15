import styles from './Post.module.css';
import { useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getPostById = async () => {
    try {
      const response = await fetch(`${baseUrl}/posts/${postId}`);
      const data = await response.json();

      if (!response.ok) {
        setError(data.status?.[0]?.msg || data?.message || 'Post not found');
        return;
      }

      setPost(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getPostById();
  }, []);

  if (error) {
    return (
      <div className={styles.container}>
        <p className={styles.error}>{error}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className={styles.container}>
        <p className={styles.loading}>Loading adventure...</p>
      </div>
    );
  }

  return (
    <main className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.meta}>
            <span>by {post.user?.username}</span>

            <span className={styles.dot}></span>

            <span>{formatDate(post.createdAt)}</span>

            {post.updatedAt && (
              <>
                <span className={styles.dot}></span>
                <span className={styles.updated}>
                  Updated {formatDate(post.updatedAt)}
                </span>
              </>
            )}
          </div>
        </header>

        <div className={styles.divider}></div>

        <div className={styles.content}>
          <p>{post.content}</p>
        </div>
      </article>

      <section className={styles.commentsSection}>
        <h2 className={styles.commentsTitle}>
          {post.comments?.length || 0}{' '}
          {(post.comments?.length || 0) === 1 ? 'Comment' : 'Comments'}
        </h2>

        <div className={styles.commentList}>
          {post.comments?.map((comment) => (
            <div key={comment.id} className={styles.comment}>
              <div className={styles.commentMeta}>
                <span className={styles.commentUser}>
                  {comment.user?.username}
                </span>

                <span className={styles.dot}></span>

                <span className={styles.commentDate}>
                  {formatDate(comment.createdAt)}
                </span>
              </div>

              <p className={styles.commentText}>{comment.text}</p>
            </div>
          ))}
        </div>

        {/* Comment CTA */}
        <div className={styles.commentCTA}>
          <p>Want to join the conversation or leave your own food tip?</p>

          <NavLink to="/admin" className={styles.commentButton}>
            Go to Admin Panel
          </NavLink>
        </div>
      </section>
    </main>
  );
};

export { Post };
