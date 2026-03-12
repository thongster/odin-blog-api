import styles from './FeaturedPost.module.css';
import pho from '../assets/pho.png';

const FeaturedPost = () => {
  return (
    <section className={styles.featured}>
      <div className={styles.imageWrapper}>
        <img
          src={pho}
          alt="Featured Vietnamese dish"
          className={styles.image}
        />

        <div className={styles.overlay}>
          <p className={styles.label}>Featured Story</p>

          <h2 className={styles.title}>The Perfect Bowl of Pho in Hanoi</h2>

          <p className={styles.description}>
            Discover the rich broth, fresh herbs, and hidden street stalls that
            make Hanoi's pho unforgettable.
          </p>

          <button className={styles.button}>Read Story →</button>
        </div>
      </div>
    </section>
  );
};

export { FeaturedPost };
