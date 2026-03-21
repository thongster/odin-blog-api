import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Adventures.module.css";
import adventureHero from "../assets/adventureshero.png";

const Adventures = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [commentInputs, setCommentInputs] = useState({});

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
      const response = await fetch(`${baseUrl}/published`);
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

  const handleCommentChange = (postId, value) => {
    setCommentInputs((prev) => ({
      ...prev,
      [postId]: value,
    }));
  };

  const handleAddComment = async (postId) => {
    const text = commentInputs[postId];
    if (!text) return;

    try {
      const response = await fetch(`${baseUrl}/posts/${postId}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }

      setCommentInputs((prev) => ({
        ...prev,
        [postId]: "",
      }));

      getPosts();
    } catch (err) {
      setError(err.message);
    }
  };

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
          <div key={post.id} className={styles.postCard}>
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

            <div className={styles.metaBottom}>
              <span>by @{post.user?.username}</span>

              <span className={styles.dot}></span>

              <span>
                {post.comments?.length || 0}{" "}
                {(post.comments?.length || 0) === 1 ? "comment" : "comments"}
              </span>
            </div>

            <div className={styles.commentBox}>
              <textarea
                placeholder="Write a quick comment..."
                value={commentInputs[post.id] || ""}
                onChange={(e) => handleCommentChange(post.id, e.target.value)}
              />

              <button onClick={() => handleAddComment(post.id)}>Comment</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export { Adventures };
