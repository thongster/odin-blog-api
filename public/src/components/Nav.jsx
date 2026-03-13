import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const adminLink = import.meta.env.VITE_ADMIN_LINK;

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
        href={adminLink}
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Admin
      </a>
    </nav>
  );
};

export default Nav;
