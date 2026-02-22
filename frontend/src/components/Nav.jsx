import styles from './Nav.module.css';
import { NavLink } from 'react-router';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </nav>
  );
};

export default Nav;
