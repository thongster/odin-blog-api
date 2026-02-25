import styles from './Profile.module.css';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ProfileSummary from '../components/ProfileSummary';
// import PostCard from './PostCard';

export default function Profile() {
  const { token } = useAuth();

  const baseUrl = 'http://localhost:3000';
  const [error, setError] = useState(null);

  // api call to pull user data

  const getProfile = async () => {
    try {
      const response = await fetch(`${baseUrl}/profile`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.status?.[0]?.msg || data?.message || 'Profile not found',
        );
      }
    } catch (err) {
      setError(err.message);
    }
  };

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
      <aside className={styles.sidebar}>
        <ProfileSummary user={getProfile()} />
      </aside>

      <main className={styles.mainContent}>
        <h2 className={styles.sectionTitle}>Your Posts</h2>

        <div className={styles.postsGrid}>
          {/* {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))} */}
        </div>
      </main>
    </div>
  );
}
