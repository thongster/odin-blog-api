import { NavLink } from 'react-router-dom';
import styles from './LatestFood.module.css';

const LatestFood = ({ latest }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Latest Food Adventures</h2>

      <div className={styles.grid}>
        {latest.slice(0, 3).map((post) => (
          <article className={styles.card}>
            <img
              src="/images/pho.jpg"
              alt={post.title}
              className={styles.image}
            />

            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{post.title}</h3>

              <p className={styles.excerpt}>{post.content.slice(0, 100)}</p>
              <NavLink to={`/posts/${post.id}`}>
                <span className={styles.readMore}>Read story →</span>
              </NavLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export { LatestFood };
