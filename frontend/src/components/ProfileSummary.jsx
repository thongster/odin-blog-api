import styles from './ProfileSummary.module.css';

const ProfileSummary = ({ user }) => {
  return (
    <div className={styles.card}>
      <div className={styles.who}>
        <h2 className={styles.name}>
          {user.firstName} {user.lastName}
        </h2>
      </div>

      <div className={styles.info}>
        <span>Username</span>
        <p className={styles.username}>@{user.username}</p>
      </div>

      <div className={styles.info}>
        <span>Email</span>
        <p>{user.email}</p>
      </div>

      <div className={styles.info}>
        <span>Activity</span>
        <p>Posts:</p>
        <p>Comments:</p>
      </div>
    </div>
  );
};

export { ProfileSummary };
