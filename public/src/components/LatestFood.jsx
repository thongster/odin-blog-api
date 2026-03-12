import styles from './LatestFood.module.css';

const LatestFood = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Latest Food Adventures</h2>

      <div className={styles.grid}>
        <article className={styles.card}>
          <img src="/images/pho.jpg" alt="Pho" className={styles.image} />

          <div className={styles.content}>
            <h3 className={styles.cardTitle}>Pho in Hanoi</h3>

            <p className={styles.excerpt}>
              A morning bowl of pho from a tiny sidewalk stall in the old
              quarter.
            </p>

            <span className={styles.readMore}>Read story →</span>
          </div>
        </article>

        <article className={styles.card}>
          <img
            src="/images/banhmi.jpg"
            alt="Banh Mi"
            className={styles.image}
          />

          <div className={styles.content}>
            <h3 className={styles.cardTitle}>The Perfect Banh Mi</h3>

            <p className={styles.excerpt}>
              Crispy baguette, herbs, pork, and the magic of Vietnamese street
              food.
            </p>

            <span className={styles.readMore}>Read story →</span>
          </div>
        </article>

        <article className={styles.card}>
          <img
            src="/images/bunbo.jpg"
            alt="Bun Bo Hue"
            className={styles.image}
          />

          <div className={styles.content}>
            <h3 className={styles.cardTitle}>Bun Bo Hue</h3>

            <p className={styles.excerpt}>
              A spicy and rich noodle soup from central Vietnam.
            </p>

            <span className={styles.readMore}>Read story →</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export { LatestFood };
