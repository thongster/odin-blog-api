import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const ADMIN_LINK = 'http://localhost:5173/';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Home
      </NavLink>

      <NavLink
        to="/adventures"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Adventures
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Contact
      </NavLink>

      <a
        href={ADMIN_LINK}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Admin
      </a>
    </nav>
  );
};

export default Nav;
