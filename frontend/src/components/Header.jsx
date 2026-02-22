import styles from './Header.module.css';
import Nav from '../components/Nav';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src={logo} alt="Vietnam Food Adventure logo" />
          <h1 className={styles.title}>Vietnam Food Adventure</h1>
        </div>

        <Nav />
      </div>

      <div className={styles.divider} />
    </header>
  );
}
