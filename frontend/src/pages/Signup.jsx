import styles from './Auth.module.css';
import { useState, useEffect } from 'react';

const signup = () => {
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

      localStorage.setItem('token', data.token);
      console.log('Signup successful');
    } catch (err) {
      setError(err.message);
    }
  };
};

export default function Signup() {
  return (
    <div className={styles.authWrapper}>
      <form className={styles.form} onSubmit={signup}>
        <h2>Create Account</h2>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" required />
          </div>

          <div className={styles.field}>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" required />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="confirmPassword">Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
