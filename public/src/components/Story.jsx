import styles from './Story.module.css';

const Story = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>The Story</h2>

        <p className={styles.text}>
          Vietnam Food Adventures is a collection of food experiences shared by
          friends, travelers, and locals exploring the incredible food culture
          across Vietnam. From tiny street stalls and bustling markets to hidden
          neighborhood restaurants and late-night dessert spots, every dish has
          a story behind it.
        </p>

        <p className={styles.text}>
          This blog is about discovering those moments. The bowl of noodles that
          surprises you, the market vendor who shows you something new, the
          street corner where locals gather for their favorite snack. Through
          these stories we share the flavors, people, and memories that make
          Vietnam one of the most exciting food cultures in the world.
        </p>

        <p className={styles.text}>
          Whether you're visiting Vietnam, living here, or just curious about
          the food, we hope these adventures inspire you to explore and taste
          something new.
        </p>
      </div>
    </section>
  );
};

export { Story };
