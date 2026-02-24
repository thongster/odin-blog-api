import styles from './Auth.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { token, login } = useAuth();
  const navigate = useNavigate();
  const baseUrl = 'http://localhost:3000';

  // redirect if jwt already exists
  // useEffect hook to run redirect as a side effect when token changes
  useEffect(() => {
    if (token) {
      navigate('/', { replace: true });
    }
  }, [token, navigate]);

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  return (
    <div className={styles.authWrapper}>
      <form className={styles.form}>
        <h2>Login</h2>

        <div className={styles.field}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
        </div>

        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}
