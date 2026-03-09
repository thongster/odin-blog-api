import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

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
        to="/login"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Login
      </NavLink>

      <NavLink
        to="/signup"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Signup
      </NavLink>
    </nav>
  );
};

export default Nav;
