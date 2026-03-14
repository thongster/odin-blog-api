import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Adventures.module.css';

const Adventures = () => {
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

  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>All Food Adventures</h1>
        <p className={styles.subtitle}>
          Stories, meals, and discoveries from across Vietnam.
        </p>
      </header>

      <section className={styles.posts}>
        {posts.map((post) => (
          <NavLink
            to={`/posts/${post.id}`}
            key={post.id}
            className={styles.postCard}
          >
            <div className={styles.meta}>
              <span className={styles.region}>{post.region}</span>
              <span className={styles.dot}></span>
              <span className={styles.date}>{post.date}</span>
            </div>

            <h2 className={styles.postTitle}>{post.title}</h2>

            <span className={styles.readMore}>Read Adventure →</span>
          </NavLink>
        ))}
      </section>
    </main>
  );
};

export { Adventures };
