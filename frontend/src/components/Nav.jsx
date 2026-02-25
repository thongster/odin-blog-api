import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Nav = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  if (token) {
    return (
      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>

        <button
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          onClick={handleSignOut}
        >
          Signout
        </button>
      </nav>
    );
  }

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
