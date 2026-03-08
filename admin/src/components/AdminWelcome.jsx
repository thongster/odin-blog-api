import styles from './AdminWelcome.module.css';

const AdminWelcome = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Admin Dashboard</h1>
      <p className={styles.subtitle}>
        Manage posts, moderate comments, and control your blog.
      </p>
    </section>
  );
};

export { AdminWelcome };
