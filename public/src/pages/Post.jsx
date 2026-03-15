import styles from './Post.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

  const getPostById = async () => {
    try {
      const response = await fetch(`${baseUrl}/posts/${postId}`, {
        method: 'GET',
      });

      const data = await response.json();

      if (!response.ok) {
        console.log('in here');
        setError(data.status?.[0]?.msg || data?.message || 'Posts not found');
        return;
      }

      console.log(`All Posts: ${data}`);
      setPosts(data);
    } catch (err) {
      console.log('in the catch');
      setError(err.message);
    }
  };

  useEffect(() => {
    getPostById();
  }, []);

  return <div className={styles.container}></div>;
};

export { Post };
