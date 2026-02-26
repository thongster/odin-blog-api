import styles from './ProfileSummary.module.css';

const ProfileSummary = ({ user }) => {
  return (
    <div className={styles.card}>
      <div className={styles.who}>
        <h2 className={styles.name}>
          {user.firstName} {user.lastName}
        </h2>
        <p className={styles.username}>@{user.username}</p>
      </div>

      <div className={styles.info}>
        <span>Email</span>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export { ProfileSummary };
