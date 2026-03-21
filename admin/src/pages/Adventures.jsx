import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Adventures.module.css";
import adventureHero from "../assets/adventureshero.png";

const Adventures = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getPosts = async () => {
    try {
      const response = await fetch(`${baseUrl}/posts/published`);
      const data = await response.json();

      if (!response.ok) {
        setError(data.status?.[0]?.msg || data?.message || "Posts not found");
        return;
      }

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
      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <img src={adventureHero} alt="Vietnam landscape" />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.title}>All Food Adventures</h1>
          <p className={styles.subtitle}>
            Stories, meals, and discoveries from across Vietnam.
          </p>
        </div>
      </header>

      {error && <p className={styles.error}>{error}</p>}

      {/* POSTS */}
      <section className={styles.posts}>
        {posts.map((post) => (
          <article key={post.id} className={styles.postCard}>
            {/* VISUAL BLOCK */}
            <div className={styles.visual}></div>

            {/* CONTENT */}
            <div className={styles.cardContent}>
              <div className={styles.metaTop}>
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

              <NavLink to={`/posts/${post.id}`} className={styles.titleLink}>
                <h2 className={styles.postTitle}>{post.title}</h2>
              </NavLink>

              <p className={styles.excerpt}>{post.content.slice(0, 120)}...</p>

              <div className={styles.metaBottom}>
                <span>by @{post.user?.username}</span>

                <span className={styles.dot}></span>

                <span>
                  {post.comments?.length || 0}{" "}
                  {(post.comments?.length || 0) === 1 ? "comment" : "comments"}
                </span>
              </div>

              <NavLink to={`/posts/${post.id}`} className={styles.readMore}>
                Read Adventure →
              </NavLink>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export { Adventures };
