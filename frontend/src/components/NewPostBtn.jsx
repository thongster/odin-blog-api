import styles from './NewPostBtn.module.css';
import { useNavigate } from 'react-router-dom';

const NewPostBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create');
  };
  return <button onClick={handleClick}>New Post</button>;
};

export { NewPostBtn };
