import styles from './Auth.module.css';

export default function Signup() {
  return (
    <div className={styles.authWrapper}>
      <form className={styles.form}>
        <h2>Create Account</h2>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" required />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="confirmPassword">Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
