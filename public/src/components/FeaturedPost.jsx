import styles from './FeaturedPost.module.css';
import { NavLink } from 'react-router-dom';
import pho from '../assets/pho.png';

const FeaturedPost = ({ featured }) => {
  if (!featured) {
    return (
      <div className={styles.imageWrapper}>
        <img
          src={pho}
          alt={featured ? featured.title : ''}
          className={styles.image}
        />

        <div className={styles.overlay}>
          <div className={styles.loading}>Loading featured post...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.imageWrapper}>
      <img src={pho} alt={featured.title} className={styles.image} />

      <div className={styles.overlay}>
        <p className={styles.label}>Featured Story</p>

        <h2 className={styles.title}>{featured.title}</h2>

        <p className={styles.description}>
          {featured.content.slice(0, 100) + '...'}
        </p>

        <NavLink to={`/posts/${featured.id}`}>
          <button className={styles.button}>Read Story →</button>
        </NavLink>
      </div>
    </div>
  );
};

export { FeaturedPost };
