import styles from './Profile.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ProfileSummary } from '../components/ProfileSummary';
import { PostCard } from '../components/PostCard';

export default function Profile() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const baseUrl = 'http://localhost:3000';
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
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

      // logout if token expired
      if (response.status === 401) {
        console.log('Error 401');
        logout();
      }

      const data = await response.json();

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

  const getPosts = async () => {
    try {
      const response = await fetch(`${baseUrl}/profile/posts`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // logout if token expired
      if (response.status === 401) {
        logout();
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.status?.[0]?.msg || data?.message || 'Posts not found',
        );
      }

      console.log(data);
      setPosts(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // render profile when token changes
  useEffect(() => {
    if (token) {
      getProfile();
      getPosts;
    }
  }, [token]);

  return (
    <div className={styles.profilePage}>
      <div className={styles.sidebar}>
        {user ? <ProfileSummary user={user} /> : <p>Loading profile...</p>}
      </div>

      <div className={styles.mainContent}>
        <h2 className={styles.sectionTitle}>Your Posts</h2>

        <div className={styles.postsGrid}>
          {posts ? (
            posts.map((post) => (
              <PostCard key={post.id} post={post} comments={post.comments} />
            ))
          ) : (
            <p>No posts</p>
          )}
        </div>
      </div>
    </div>
  );
}
