import styles from './NewPostBtn.module.css';
import { useNavigate } from 'react-router-dom';

const NewPostBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create');
  };
  return (
    <button className={styles.btn} onClick={handleClick}>
      New Post
    </button>
  );
};

export { NewPostBtn };
