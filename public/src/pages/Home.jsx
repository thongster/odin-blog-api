import styles from './Home.module.css';
import { useState, useEffect, useMemo } from 'react';
import { FeaturedPost } from '../components/FeaturedPost';
import { LatestFood } from '../components/LatestFood';
import { Favorites } from '../components/Favorites';
import { Story } from '../components/Story';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

  const getPosts = async () => {
    try {
      const response = await fetch(`${baseUrl}/posts`, {
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
    getPosts();
  }, []);

  const featured = useMemo(() => {
    if (posts.length === 0) return null;
    return posts[Math.floor(Math.random() * posts.length)];
  }, [posts]);

  return (
    <div className={styles.container}>
      {error && <p className={styles.error}>{error}</p>}
      <FeaturedPost featured={featured} />
      <LatestFood posts={posts} />
      <Favorites posts={posts} />
      <Story posts={posts} />
    </div>
  );
};

export { Home };
