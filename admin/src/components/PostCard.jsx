import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  // destructure post object
  const {
    id,
    title,
    content,
    createdAt,
    updatedAt,
    published,
    comments = [],
  } = post;

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
        <p>Updated: {new Date(updatedAt).toLocaleDateString()}</p>
      </div>

      <button className="editBtn">{`Edit ${id}`}</button>

      {comments.length > 0 && (
        <div className={styles.comments}>
          <h4>Comments ({comments.length})</h4>
          {comments.map((comment) => (
            <div key={comment.id} className={styles.comment}>
              <p>{comment.text}</p>
              <span className={styles.commentDate}>
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { PostCard };
