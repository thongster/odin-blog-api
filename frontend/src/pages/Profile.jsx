import styles from './Profile.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProfileSummary from '../components/ProfileSummary';
// import PostCard from './PostCard';

export default function Profile() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const baseUrl = 'http://localhost:3000';
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // if no token in localstorage, redirect to home
  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [token, navigate]);

  // api call to pull user data
  const getProfile = async () => {
    try {
      const response = await fetch(`${baseUrl}/profile`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Response status:', response.status);

      const data = await response.json();

      // logout if token expired
      if (response.status === 401) {
        logout();
      }

      if (!response.ok) {
        throw new Error(
          data.status?.[0]?.msg || data?.message || 'Profile not found',
        );
      }

      console.log(data);
      setUser(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);

  //   const posts = [
  //     {
  //       id: 1,
  //       title: 'My First Post',
  //       content: 'Lorem ipsum dolor sit amet...',
  //       comments: [
  //         { id: 1, text: 'Nice post!' },
  //         { id: 2, text: 'Great read.' },
  //       ],
  //     },
  //   ];

  return (
    <div className={styles.profilePage}>
      <div className={styles.sidebar}>
        {user ? <ProfileSummary user={user} /> : <p>Loading profile...</p>}
      </div>

      <div className={styles.mainContent}>
        <h2 className={styles.sectionTitle}>Your Posts</h2>

        <div className={styles.postsGrid}>
          {/* {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
