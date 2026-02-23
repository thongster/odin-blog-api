import styles from './Auth.module.css';
import { useState } from 'react';

export default function Signup() {
  const baseUrl = 'http://localhost:3000/';

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

      if (!response.ok) {
        data.status?.[0]?.msg || data?.message || 'Signup failed';
      }

      // save jwt token
      localStorage.setItem('token', data.token);

      console.log('Signup successful');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.authWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Create Account</h2>

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
}
