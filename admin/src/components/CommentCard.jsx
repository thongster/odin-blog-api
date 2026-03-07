import styles from './CommentCard.module.css';

const CommentCard = ({ comments }) => {
  const handleEdit = async () => {
    try {
      const response = await fetch(`${baseUrl}/posts/${postId}/comments`, {
        method: 'PUT',
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
  );
};

export { CommentCard };
