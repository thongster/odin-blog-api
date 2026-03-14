import styles from './Header.module.css';
import Nav from '../components/Nav';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src={logo} alt="Vietnam Food Adventures logo" />
          <h1 className={styles.title}>Vietnam Food Adventures</h1>
        </div>

        <Nav />
      </div>
    </header>
  );
};

export { Header };
