import styles from './Auth.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const { token, login, logout } = useAuth();
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      //   // logout if token expired
      //   if (response.status === 401) {
      //     logout();
      //   }

      if (!response.ok) {
        setError(data.status?.[0]?.msg || data?.message || 'Signup failed');
        return;
      }

      // save jwt token
      login(data.token);

      // navigate to home page
      navigate('/');
      console.log('Signup successful');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.authWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            onChange={handleChange}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="confirmPassword">Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export { Signup };
