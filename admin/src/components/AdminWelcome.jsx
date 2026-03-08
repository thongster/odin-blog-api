import styles from './AdminWelcome.module.css';

const AdminWelcome = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Admin Dashboard</h1>
      <p className={styles.subtitle}>
        Log in to access the admin dashboard and manage your blog.
      </p>
    </section>
  );
};

export { AdminWelcome };
