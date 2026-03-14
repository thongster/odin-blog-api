import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <img
          src="/images/vietnam-food-hero.jpg"
          alt="Vietnam street food scene"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Vietnam Food Adventures</h1>
        </div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>About the Blog</h2>

        <p className={styles.text}>
          Vietnam Food Adventures is a collection of stories about the
          incredible food culture found throughout Vietnam. From busy street
          corners and night markets to hidden neighborhood restaurants and small
          family kitchens, every meal tells a story about the people and places
          behind it.
        </p>

        <p className={styles.text}>
          This blog brings together experiences from travelers, locals, and
          friends exploring Vietnam’s food scene. Whether it’s a bowl of pho in
          Hanoi, a late-night bánh mì in Saigon, or a new dessert discovered in
          a market, each post shares a moment from the journey.
        </p>

        <div className={styles.inlineImageContainer}>
          <img
            src="/images/vietnam-food-market.jpg"
            alt="Vietnam street food market"
            className={styles.inlineImage}
          />
          <p className={styles.caption}>
            Street food vendors and local markets are at the heart of Vietnam's
            food culture.
          </p>
        </div>

        <p className={styles.text}>
          The goal of Vietnam Food Adventures is simple — to document and
          celebrate the food experiences that make traveling and living in
          Vietnam so memorable. Food here is more than just a meal; it’s
          culture, community, and everyday life.
        </p>

        <p className={styles.text}>
          If you’ve discovered a memorable dish, a hidden restaurant, or a
          street stall worth sharing, you’re invited to contribute your own
          adventure through the blog’s admin dashboard.
        </p>
      </div>
    </section>
  );
};

export { About };
