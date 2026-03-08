import styles from './PostCard.module.css';
import { useNavigate } from 'react-router-dom';
import { AddComment } from './AddComment';
import { CommentCard } from './CommentCard';

const PostCard = ({ post }) => {
  const navigate = useNavigate();

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

  // comments have its own state so it rerenders when a new comment is added
  const [postComments, setPostComments] = useState(comments);

  const handleEditPost = () => {
    navigate(`/edit/${id}`);
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
        <p>Updated: {new Date(updatedAt).toLocaleDateString()}</p>
      </div>

      <button
        className={styles.editBtn}
        onClick={handleEditPost}
      >{`Edit ${id}`}</button>

      <AddComment postId={id} />

      {comments.length > 0 && <CommentCard comments={comments} />}
    </div>
  );
};

export { PostCard };
