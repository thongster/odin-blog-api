import styles from './Auth.module.css';

export default function Login() {
  return (
    <div className={styles.authWrapper}>
      <form className={styles.form}>
        <h2>Login</h2>

        <div className={styles.field}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
        </div>

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}
