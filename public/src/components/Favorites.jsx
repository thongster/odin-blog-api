import styles from './Favorites.module.css';

const Favorites = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>My Favorite Dishes</h2>

      <div className={styles.row}>
        <article className={styles.card}>
          <img src="/images/pho.jpg" alt="Pho" className={styles.image} />
          <h3 className={styles.name}>Pho Bo</h3>
        </article>

        <article className={styles.card}>
          <img
            src="/images/banhmi.jpg"
            alt="Banh Mi"
            className={styles.image}
          />
          <h3 className={styles.name}>Banh Mi</h3>
        </article>

        <article className={styles.card}>
          <img
            src="/images/bunbo.jpg"
            alt="Bun Bo Hue"
            className={styles.image}
          />
          <h3 className={styles.name}>Bun Bo Hue</h3>
        </article>

        <article className={styles.card}>
          <img
            src="/images/comtam.jpg"
            alt="Com Tam"
            className={styles.image}
          />
          <h3 className={styles.name}>Com Tam</h3>
        </article>
      </div>
    </section>
  );
};

export { Favorites };
