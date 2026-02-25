import styles from './ProfileSummary.module.css';

export default function ProfileSummary({ user }) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        {user.firstName}
        {user.lastName}
      </div>

      <h2 className={styles.name}>
        {user.firstName} {user.lastName}
      </h2>

      <p className={styles.username}>@{user.username}</p>

      <div className={styles.info}>
        <span>Email</span>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
