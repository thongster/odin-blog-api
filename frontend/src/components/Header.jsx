import styles from './Header.module.css';
import Nav from '../components/Nav';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1 className={styles.title}>Vietnam Food Adventure</h1>
      </div>
      <Nav />
    </header>
  );
}
