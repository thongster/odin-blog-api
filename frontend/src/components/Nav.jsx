import styles from './Nav.module.css';
import { NavLink } from 'react-router';

const Nav = () => {
  return (
    <div className={styles.nav}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${styles.activeLink} ${styles.navLink}` : styles.navLink
        }
      >
        Home
      </NavLink>
      <NavLink
        to="login"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink} ${styles.navLink}` : styles.navLink
        }
      >
        Login
      </NavLink>
      <NavLink
        to="signup"
        className={({ isActive }) =>
          isActive ? `${styles.activeLink} ${styles.navLink}` : styles.navLink
        }
      >
        Signup
      </NavLink>
    </div>
  );
};

export default Nav;
