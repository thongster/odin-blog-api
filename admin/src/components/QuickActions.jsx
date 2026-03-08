import styles from './QuickActions.module.css';
import { useNavigate } from 'react-router-dom';
import { NewPostBtn } from './NewPostBtn';

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Quick Actions</h2>

      <div className={styles.actions}>
        <NewPostBtn />

        <button
          className={styles.secondaryBtn}
          onClick={() => navigate('/profile')}
        >
          Go to Dashboard
        </button>
      </div>
    </section>
  );
};

export { QuickActions };
