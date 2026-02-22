import styles from './Header.module.css';
// import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={} alt="logo" />
        <h1 className={styles.title}>The Blog About Nothing</h1>
      </div>
    </header>
  );
}
