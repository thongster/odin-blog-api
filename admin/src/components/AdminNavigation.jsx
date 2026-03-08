import styles from './AdminNavigation.module.css';
import { useNavigate } from 'react-router-dom';

const AdminNavigation = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Manage</h2>

      <div className={styles.grid}>
        <div className={styles.card} onClick={() => navigate('/profile')}>
          <h3>Posts</h3>
          <p>Create, edit, and delete blog posts.</p>
        </div>

        <div className={styles.card} onClick={() => navigate('/profile')}>
          <h3>Comments</h3>
          <p>Moderate and review blog comments.</p>
        </div>

        <div className={styles.card} onClick={() => navigate('/profile')}>
          <h3>Profile</h3>
          <p>Manage your account and settings.</p>
        </div>
      </div>
    </section>
  );
};

export { AdminNavigation };
