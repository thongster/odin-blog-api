import { NavLink } from 'react-router-dom';
import styles from './Favorites.module.css';

const Favorites = ({ favorites }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>My Favorite Dishes</h2>

      <div className={styles.row}>
        {favorites.map((post) => (
          <NavLink key={post.id} to={`/posts/${post.id}`}>
            <article className={styles.card}>
              <h3 className={styles.name}>{post.title}</h3>
            </article>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export { Favorites };
