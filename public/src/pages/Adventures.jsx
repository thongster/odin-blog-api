import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Adventures.module.css';
import adventureHero from '../assets/adventureshero.jpg';

const Adventures = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getPosts = async () => {
    try {
      const response = await fetch(`${baseUrl}/posts`);
      const data = await response.json();

      if (!response.ok) {
        setError(data.status?.[0]?.msg || data?.message || 'Posts not found');
        return;
      }

      console.log('All Posts:', data);
      setPosts(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <img src={adventureHero} alt="Vietnam landscape" />
        </div>
        <h1 className={styles.title}>All Food Adventures</h1>
        <p className={styles.subtitle}>
          Stories, meals, and discoveries from across Vietnam.
        </p>
      </header>

      {error && <p className={styles.error}>{error}</p>}

      <section className={styles.posts}>
        {posts.map((post) => (
          <NavLink
            to={`/posts/${post.id}`}
            key={post.id}
            className={styles.postCard}
          >
            <div className={styles.metaTop}>
              <span className={styles.region}>{post.region}</span>

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

            <h2 className={styles.postTitle}>{post.title}</h2>

            <div className={styles.metaBottom}>
              <span>by @{post.user.username}</span>

              <span className={styles.dot}></span>

              <span>
                {post.comments?.length || 0}{' '}
                {(post.comments?.length || 0) === 1 ? 'comment' : 'comments'}
              </span>
            </div>

            <span className={styles.readMore}>Read Adventure →</span>
          </NavLink>
        ))}
      </section>
    </main>
  );
};

export { Adventures };
