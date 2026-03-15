import styles from "./ProfileSummary.module.css";

const ProfileSummary = ({ user, posts }) => {
  const totalComments = posts.reduce(
    (acc, post) => acc + post.comments.length,
    0,
  );
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
        <p>Posts: {posts.length}</p>
        <p>Comments: {totalComments}</p>
      </div>
    </div>
  );
};

export { ProfileSummary };
