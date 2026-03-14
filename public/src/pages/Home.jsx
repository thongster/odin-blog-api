import styles from './Home.module.css';
import { useState } from 'react';
import { FeaturedPost } from '../components/FeaturedPost';
import { LatestFood } from '../components/LatestFood';
import { Favorites } from '../components/Favorites';
import { Story } from '../components/Story';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.VITE_BACKEND_BASE_URL;

  const getPosts = async () => {
    try {
      const response = await fetch(`${baseUrl}/posts`, {
        method: 'GET',
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.status?.[0]?.msg || data?.message || 'Posts not found');
        return;
      }

      console.log(`All Posts: ${data}`);
      setPosts(data);
    } catch (err) {
      setError(err.message);
    }
  };

  getPosts();

  // {error && <p className={styles.error}>{error}</p>}

  return (
    <div className={styles.container}>
      <FeaturedPost />
      <LatestFood />
      <Favorites />
      <Story />
    </div>
  );
};

export { Home };
