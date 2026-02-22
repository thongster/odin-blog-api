import styles from './Header.module.css';
// import logo from "../assets/logo.png";
// import Nav from "./Nav";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="" alt="logo" />
        <h1 className={styles.title}>The Blog About Nothing</h1>
      </div>
      {/* <Nav /> */}
    </header>
  );
}
